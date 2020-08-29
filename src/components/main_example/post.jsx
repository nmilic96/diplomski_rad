import React from 'react';
import { Component } from 'react';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			action: null,
			title: '',
			body: '',
			id: ''
		};

		this.ref = React.createRef('');
	}

	async componentDidMount() {
		const observer = new IntersectionObserver(
			([ item ]) => {
				if (item.intersectionRatio === 1) {
					this.setState({
						visible: true,
						title: this.props.postData.title,
						body: this.props.postData.body.replace(/\n/g, ' '),
						id: this.props.postData.id
					});
				}
			},
			{ root: null, rootMargin: '100px', threshold: 1.0 }
		);

		if (this.ref.current) {
			setTimeout(() => {
				observer.observe(this.ref.current);
			}, 10);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.postData !== this.props.postData ||
			nextProps.active !== this.props.active ||
			this.state !== nextState ||
			this.state.visible !== nextState.visible
		);
	}

	componentDidUpdate() {
		if (this.state.action) {
			this.updateData();
			return () => {
				this.setState({ action: null });
			};
		}
	}

	updateData = () => {
		let data = [ ...this.props.data ];
		let item = data.find((item) => item.id === this.state.id);
		item.title = this.state.title;
		item.body = this.state.body;
		this.props.setData(data);
		this.props.setAction('update');
	};

	handleOnClick = () => {
		this.props.setActivePost(this.props.postData.id);
	};

	render() {
		return (
			<div ref={this.ref} className={`loading-wrapper ${this.state.visible ? 'visible' : 'hidden'}`}>
				{this.state.visible && (
					<div className={`post ${this.props.active && 'post--active'}`} onClick={this.handleOnClick}>
						<button
							className="post__remove"
							onClick={() => {
								this.props.removePost(this.props.postData.id);
							}}
						>
							×
						</button>
						<small>ID: {this.state.id}</small>
						{!this.props.active ? (
							<React.Fragment>
								<h3>{this.state.title}</h3>
								<p>{this.state.body}</p>
							</React.Fragment>
						) : (
							<React.Fragment>
								<h3>
									<input
										type="text"
										defaultValue={this.state.title}
										onChange={(e) => {
											this.setState({ title: e.target.value, action: 'update' });
										}}
										placeholder={'Dodaj naslov'}
									/>
								</h3>
								<p>
									<textarea
										onChange={(e) => {
											this.setState({ body: e.target.value, action: 'update' });
										}}
										defaultValue={this.state.body}
										placeholder={'Dodaj opis'}
									/>
								</p>
							</React.Fragment>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default Post;
