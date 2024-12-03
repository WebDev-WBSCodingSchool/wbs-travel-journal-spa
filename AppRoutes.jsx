import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/layouts/index.js';
import {
    CreatePost,
    Error,
    Home,
    Login,
    NotFound,
    Post,
    Register,
} from './src/pages/index.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },

            {
                path: '/create',
                element: <CreatePost />,
            },
            {
                path: 'post/:id',
                element: <Post />,
            },
            {
                path: '/error',
                element: <Error />,
            },
            {
                path: '/not-found',
                element: <NotFound />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
