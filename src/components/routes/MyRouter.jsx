import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import AddUser from '../pages/addUser/AddUser'
import Login from '../pages/login/Login'
import Profile from '../pages/profile/Profile'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Profile /> },
			{ path: 'addUser', element: <AddUser /> },
		],
	},
	{
		path: 'login',
		element: <Login />,
	},
])

export default router
