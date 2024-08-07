import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from '@/context';
import { Navbar } from '@/components';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <div className='container mx-auto'>
      <ToastContainer position='bottom-left' autoClose={1500} theme='colored' />
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
};

export default RootLayout;
