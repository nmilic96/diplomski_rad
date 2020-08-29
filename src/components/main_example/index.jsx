import React, { useState, useEffect } from 'react';
import Post from './post';
import Loader from './loader';
import Notif from './notif';
import Sort from './sort';
import Search from './search';
import { debounce } from '../../functions/functions';
import { useCallback } from 'react';

const Index = (props) => {
	const [ data, setData ] = useState(null);
	const [ activePost, setActivePost ] = useState(null);
	const [ notif, setNotif ] = useState({ text: '', type: '', color: '' });
	const [ action, setAction ] = useState(null);
	const [ showNotif, setShowNotif ] = useState(false);

	useEffect(() => {
		let posts = props.localData;
		setData(posts);

	}, [props]);

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

	const handleNotif = useCallback(() => {
		debounce((text, color) => {
			setNotif({
				text: text,
				color: color
			});
			setShowNotif(true);
		}, 200);
	}, []);

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
		setData(newData);
		setAction('add');
	};

	const removePost = (index) => {
		let posts = [ ...data ];
		let filteredPosts = posts.filter((item) => item.id !== index);
		setData(filteredPosts);
		setAction('remove');
	};

	const mapData = (items) => {
		return (
			items &&
			[ ...items ].map((item, index) => {
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
