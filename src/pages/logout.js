import {logout} from "firebase.js";
import {useEffect} from "react";

export default function Logout() {

	useEffect(() => {
		logout()
	})

	return null

}
