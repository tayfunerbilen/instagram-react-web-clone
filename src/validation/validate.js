import * as Yup from "yup"

Yup.setLocale({
	mixed: {
		required: "Bu alan zorunludur!",
	},
	string: {
		email: "Geçerli bir e-posta adresi girin!"
	}
})

export default Yup
