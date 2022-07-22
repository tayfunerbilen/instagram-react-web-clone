import store from "store";
import {setUser} from "store/auth";

export const userHandle = data => {
	store.dispatch(setUser(data))
}
