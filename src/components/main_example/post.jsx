import React from 'react';
import Loader from './loader';
import { PureComponent } from 'react';

class Post extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			title: '',
			body: '',
			id: ''
		};
	}

	componentDidMount() {
		this.setState({
			loaded: true,
			title: this.props.data.title,
			body: this.props.data.body.replace(/\n/g, ' '),
			id: this.props.data.id
		});
	}

	handleOnClick = () => {
		this.props.setActivePost(this.props.index);
	};

	render() {
		if (this.state.loaded) {
			return (
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
			);
		} else {
			return <Loader />;
		}
	}
}

export default Post;
