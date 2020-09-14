import React, { useState, useEffect } from 'react';
import Post from './post';
import Loader from './loader';
import Sort from './sort';
import Search from './search';
import postsData from '../../posts.json';

const Index = () => {
	const [ data, setData ] = useState([]);
	const [ activePost, setActivePost ] = useState(null);
	const [ action, setAction ] = useState(null);
	const localData = JSON.parse(localStorage.getItem('data'));

	useEffect(() => {
		if (!localStorage.getItem('data')) {
			localStorage.setItem('data', JSON.stringify(postsData));
			setData(postsData);
		} else {
			setData(JSON.parse(localStorage.getItem('data')));
		}
	}, []);

	useEffect(
		() => {
			if (action) {
				localStorage.setItem('data', JSON.stringify(data));
			}

			return () => {
				setAction(null);
			};
		},
		[ data ]
	);

	const addNewPost = () => {
		setAction('add');
		const handlePostId = (items) => {
			let ids = [ ...items ].map((item) => item.id);
			return (ids = Math.max(...ids) + 1);
		};

		let newPost = {
			id: handlePostId(localData),
			title: 'Nova objava',
			body: ''
		};

		let newData = [ newPost, ...localData ];
		setData(newData);
	};

	const removePost = (index) => {
		let filteredPosts = localData.filter((item) => item.id !== index);
		setData(filteredPosts);
		setAction('remove');
	};

	const mapData = (items) => {
		return (
			items &&
			items.map((item, index) => {
				return (
					<Post
						key={item.id}
						index={index}
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
			</React.Fragment>
		);
	} else {
		return <Loader />;
	}
};

export default React.memo(Index);
