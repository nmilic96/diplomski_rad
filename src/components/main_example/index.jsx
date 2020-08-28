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
	const [ action, setAction ] = useState(null);
	const [ showNotif, setShowNotif ] = useState(false);

	useEffect(() => {
		let posts = JSON.parse(localStorage.getItem('data'));
		setData(posts);
	}, []);

	useEffect(
		() => {
			if (action === 'update') {
				localStorage.setItem('data', JSON.stringify(data))
			}

			return () => {
				setAction(null);
			};
		},
		[ data ]
	);

	const addNewPost = () => {
		const handlePostId = (items) => {
			let ids = [ ...items ].map((item) => item.id);
			return (ids = Math.max(...ids) + 1);
		};

		let newPost = {
			id: handlePostId(data),
			title: 'Nova objava',
			body: ''
		};

		let newData = [ newPost, ...data ];
		handleNotif(`Dodana nova objava: ID: ${newPost.id}`, 'add', '#4CAF50');
		setData(newData);
		setAction('update');
	};

	const removePost = (index) => {
		let posts = [ ...data ];
		let targetPost = posts.find((item) => item.id === index);
		posts.splice(posts.indexOf(targetPost), 1);
		handleNotif(`Obrisana objava: ID: ${targetPost.id}`, 'remove', '#F44336');
		setData(posts);
		setAction('update');
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
			[ ...items ].map((item) => {
				return (
					<Post
						key={item.id}
						index={item.id}
						postData={item}
						active={activePost === item.id}
						data={data}
						setData={setData}
						setAction={setAction}
						setActivePost={setActivePost}
						removePost={removePost}
					/>
				);
			})
		);
	};

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
					<p>Broj rezultata: {data.length}</p>
					<div className="posts">{mapData(data)}</div>
				</div>
				<Notif
					text={notif.text}
					type={notif.type}
					color={notif.color}
					show={showNotif}
					setShowNotif={setShowNotif}
				/>
			</React.Fragment>
		);
	} else {
		return <Loader />;
	}
};

export default React.memo(Index);
