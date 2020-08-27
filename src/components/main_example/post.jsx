import React from 'react';
import { Component } from 'react';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
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
			{ root: null, rootMargin: '50px', threshold: 1.0 }
		);

		if (this.ref.current) {
			observer.observe(this.ref.current);
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

	handleOnClick = () => {
		this.props.setActivePost(this.props.index);
	};

	render() {
		return (
			<div ref={this.ref} className={`loading-wrapper ${this.state.visible ? 'visible' : 'hidden'}`}>
				{this.state.visible && (
					<div className={`post ${this.props.active && 'post--active'}`} onClick={this.handleOnClick}>
						<button
							className="post__remove"
							onClick={() => {
								this.props.removePost(this.props.index);
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
											this.setState({ title: e.target.value });
										}}
										placeholder={'Dodaj naslov'}
									/>
								</h3>
								<p>
									<textarea
										onChange={(e) => {
											this.setState({ body: e.target.value });
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
