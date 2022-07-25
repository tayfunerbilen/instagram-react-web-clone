import {useEffect, useRef, useState} from "react";
import Input from "components/Input";
import Button from "components/Button";
import Separator from "components/Separator";
import {AiFillFacebook} from "react-icons/ai";
import {Navigate, useLocation, Link} from "react-router-dom"
import {login} from "firebase.js";
import {Formik, Form} from "formik";
import {LoginSchema} from "validation";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

export default function Login() {

	const user = useSelector(state => state.auth.user)
	const location = useLocation()
	const ref = useRef()

	useEffect(() => {
		let images = ref.current.querySelectorAll('img'),
			total = images.length,
			current = 0
		const imageSlider = () => {
			images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
			images[current].classList.remove('opacity-0')
			current = current === total - 1 ? 0 : current + 1;
		}
		imageSlider()
		let interval = setInterval(imageSlider, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [ref])

	const images = [
		'https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png',
		'https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png',
		'https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png',
		'https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png'
	]

	if (user) {
		return <Navigate to={location.state?.return_url || '/'} replace={true} />
	}

	const handleSubmit = async (values, actions) => {
		await login(values.username, values.password)
	}

	return (
		<div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">

			<Helmet>
				<title>Login • Instagram</title>
			</Helmet>

			<div
				className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
				<div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
					{images.map((image, key) => (
						<img key={key}
								 className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
								 src={image}
								 alt=""/>
					))}
				</div>
			</div>

			<div className="w-[350px] grid gap-y-3">

				<div className="bg-white border px-[40px] pt-10 pb-6">
					<div className="flex justify-center mb-8">
						<img className="h-[51px]"
								 src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt=""/>
					</div>
					<Formik
						validationSchema={LoginSchema}
						initialValues={{
							username: '',
							password: ''
						}}
						onSubmit={handleSubmit}
					>
						{({isSubmitting, isValid, dirty, values}) => (
							<Form className="grid gap-y-1.5">
								<Input name="username" label="Phone number, username or email"/>
								<Input type="password" name="password" label="Password"/>
								<Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
									Log In
								</Button>
								<Separator />
								<a href="#"
									 className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
									<AiFillFacebook size={20}/>
									Log in with Facebook
								</a>
								<a href="#" className="text-xs flex items-center justify-center text-link">
									Forgot password?
								</a>
							</Form>
						)}
					</Formik>
				</div>

				<div className="bg-white border p-4 text-sm text-center">
					Don't have an account? <Link to="/auth/register" className="font-semibold text-brand">Sign up</Link>
				</div>

			</div>

		</div>
	);
}
