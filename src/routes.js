import PrivateRoute from "components/PrivateRoute";
import MainLayout from "pages/layout";
import Home from "pages/home";
import ProfileLayout from "pages/profile";
import ProfilePosts from "pages/profile/posts";
import ProfileTagged from "pages/profile/tagged";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import AuthLayout from "pages/auth";
import Logout from "pages/logout";
import InboxLayout from "pages/inbox";
import Inbox from "pages/inbox/inbox";
import Chat from "pages/inbox/chat";

const routes = [
	{
		path: '/',
		element: <MainLayout />,
		auth: true,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'logout',
				element: <Logout />
			},
			{
				path: ':username',
				element: <ProfileLayout />,
				children: [
					{
						index: true,
						element: <ProfilePosts />
					},
					{
						path: 'tagged',
						element: <ProfileTagged />
					}
				]
			},
			{
				path: 'inbox',
				element: <InboxLayout />,
				children: [
					{
						index: true,
						element: <Inbox />
					},
					{
						path: ':conversationId',
						element: <Chat />
					}
				]
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
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
