import {useParams, useNavigate, NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserInfo} from "firebase.js";
import Header from "./components/header";
import Icon from "components/Icon";
import classNames from "classnames";
import ProfileNotFound from "pages/profile/not-found";
import {Helmet} from "react-helmet";

export default function ProfileLayout() {

	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState(null)
	const {username} = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		getUserInfo(username)
			.then(user => {
				setUser(user)
			})
			.catch(err => {
				setUser(false)
			})
	}, [])

	if (user === false) {
		return <ProfileNotFound />
	}

	if (user === null) {
		return (
			<div>
				Loading...
			</div>
		)
	}

	return user && (
		<div>
			<Helmet>
				<title>{user.fullName} (@{user.username}) • Instagram photos and videos</title>
			</Helmet>
			<Header user={user} />
			<nav className="border-t flex gap-x-16 justify-center items-center">
				<NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
					"text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
					"text-[#8e8e8e] border-transparent": !isActive,
					"text-black border-black": isActive
				})}>
					<Icon name="post" size={12} />
					POSTS
				</NavLink>
				<NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames({
					"text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
					"text-[#8e8e8e] border-transparent": !isActive,
					"text-black border-black": isActive
				})}>
					<Icon name="tag" size={12} />
					TAGGED
				</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}
