import PrivateRoute from "components/PrivateRoute";
import Home from "pages/home";
import Login from "pages/login";
import AuthLayout from "pages/auth";

const routes = [
	{
		path: '/',
		element: <Home />,
		auth: true
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}
		]
	}
]

const authCheck = routes => routes.map(route => {
	if (route?.auth) {
		route.element = <PrivateRoute>{route.element}</PrivateRoute>
	}
	if (route?.children) {
		route.children = authCheck(route.children)
	}
	return route
})

export default authCheck(routes)
