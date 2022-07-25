import {Link} from "react-router-dom";

export default function ProfileNotFound() {
	return (
		<div className="text-center grid gap-y-6 pt-5">
			<h6 className="text-[22px] font-semibold">Sorry, this page isn't available.</h6>
			<p>
				The link you followed may be broken, or the page may have been removed. <Link className="text-link" to="/">Go back to Instagram.</Link>
			</p>
		</div>
	)
}
