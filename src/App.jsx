import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router';
import { RootLayout } from '@/layouts';
import { CreatePost, Error, Home, Login, NotFound, Post, Register } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />}>
      <Route element={<Outlet />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='post/:id' element={<Post />} />
        <Route path='create' element={<CreatePost />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Route>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  }
);

const App = () => (
  <RouterProvider
    router={router}
    future={{
      v7_startTransition: true
    }}
  />
);

export default App;
