import classNames from "classnames";
import {useSelector} from "react-redux";

export default function Message({ message }) {

	const user = useSelector(state => state.auth.user)

	return (
		<div className={classNames({
			"flex gap-x-2 max-w-[45%]": true,
			"self-end": user.uid === message.from.id
		})}>
			{user.uid !== message.from.id && (
				<img src={message.from.avatar} className="w-6 h-6 rounded-full self-end mb-1" alt=""/>
			)}
			<p
				style={{hyphens: 'auto'}}
				className={classNames({
				"min-h-[44px] inline-flex items-center py-3 px-4 text-sm rounded-3xl": true,
				"border border-gray-200": user.uid !== message.from.id,
				"bg-[#efefef]": user.uid === message.from.id
			})}>
				{message.message}
			</p>
		</div>
	)
}
