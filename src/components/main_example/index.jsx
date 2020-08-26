import React, { useState, useEffect } from 'react';
import Post from './post';
import Loader from './loader';
import Notif from './notif';
import Sort from './sort';
import Search from './search';

const Index = (props) => {
	const [ data, setData ] = useState(null);
	const [ activePost, setActivePost ] = useState(null);
	const [ notif, setNotif ] = useState({ text: '', type: '', color: '' });
	const [ showNotif, setShowNotif ] = useState(false);
	const [ error, setError ] = useState(null);

	const getData = () => {
		let posts = JSON.parse(localStorage.getItem('data'))
		setData(posts);
	};

	useEffect(() => {
		getData();
	}, []);

	const addNewPost = () => {
		const handlePostId = (items) => {
			let ids = items.map((item) => item.id);
			return (ids = Math.max(...ids) + 1);
		};

		let posts = data;
		let newPost = {
			userId: 1,
			id: handlePostId(posts),
			title: 'Nova objava',
			body: ''
		};

		let newData = [ newPost, ...data ];
		handleNotif(`Dodana nova objava: ID: ${newPost.id}`, 'add', '#4CAF50');
		setData(newData);
		localStorage.setItem('data', JSON.stringify(newData));
	};

	const removePost = (index) => {
		let posts = [ ...data ];
		let targetPost = posts.find((item) => item.id === index);
		posts.splice(posts.indexOf(targetPost), 1);
		handleNotif(`Obrisana objava: ID: ${targetPost.id}`, 'remove', '#');
		setData(posts);
	};

	const handleNotif = (text, type, color) => {
		setNotif({
			text: text,
			type: type,
			color: color
		});
		setShowNotif(true);
	};

	const mapData = (items) => {
		return (
			items &&
			items.map((item, index) => {
				return (
					<Post
						key={item.id}
						index={item.id}
						data={item}
						active={activePost === item.id}
						setActivePost={setActivePost}
						removePost={removePost}
					/>
				);
			})
		);
	};

	if (!error) {
		if (data) {
			return (
				<React.Fragment>
					<div className="layout">
						<Search data={data} setData={setData} />
						<div className="row">
							<button
								className="btn"
								onClick={() => {
									addNewPost();
								}}
							>
								Dodaj
							</button>
							<Sort data={data} setData={setData} />
						</div>
						<div className="posts">{mapData(data)}</div>
					</div>
					<Notif text={notif.text} type={notif.type} show={showNotif} setShowNotif={setShowNotif} />
				</React.Fragment>
			);
		} else {
			return <Loader />;
		}
	} else {
		return <div>Dogodila se greška! {error}</div>;
	}
};

export default Index;
