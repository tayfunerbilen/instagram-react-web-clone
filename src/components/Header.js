import {Link, NavLink} from "react-router-dom";
import Search from "components/Search";
import {logout} from "firebase.js";
import Icon from "components/Icon";
import {useSelector} from "react-redux";
import classNames from "classnames";

export default function Header() {

	const user = useSelector(state => state.auth.user)

	return (
		<header className="bg-white border-b border-gray-300">
			<div className="flex items-center justify-between h-[60px] container mx-auto">

				<Link to="/">
					<img className="h-[29px]"
							 src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"/>
				</Link>

				<Search/>

				<nav className="flex items-center gap-x-5">
					<NavLink to="/">
						{({ isActive }) => <Icon name={isActive ? 'home-filled' : 'home'} size={24} />}
					</NavLink>
					<NavLink to="/inbox">
						{({ isActive }) => <Icon name={isActive ? 'direct-filled' : 'direct'} size={24} />}
					</NavLink>
					<NavLink to="/">
						<Icon name="new" size={24} />
					</NavLink>
					<NavLink to="/">
						<Icon name="explore" size={24} />
					</NavLink>
					<NavLink to="/">
						<Icon name="heart" size={24} />
					</NavLink>
					<NavLink to={`/${user.username}`}>
						{({isActive}) => <img src="/no-avatar.jpeg" alt="" className={classNames({
							"w-6 h-6 rounded-full": true,
							"ring-1 ring-offset-1	ring-black": isActive
						})}/>}
					</NavLink>
				</nav>

			</div>
		</header>
	)
}
