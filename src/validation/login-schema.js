import Yup from "./validate"

export const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.required(),
	password: Yup.string()
		.required()
})
