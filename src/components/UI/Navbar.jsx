import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/context';

const Navbar = () => {
  const { isAuthenticated, logOut, user } = useAuth();

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl'>
          Travel journal
          <span role='img' aria-labelledby='airplane'>
            🛫
          </span>
          <span role='img' aria-labelledby='heart'>
            ❤️
          </span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {user && (
            <li>
              <span>
                Welcome back {user.firstName} {user.lastName}
              </span>
            </li>
          )}
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <NavLink to='/create'>Create post</NavLink>
              </li>
              <li onClick={logOut}>
                <span>Log out</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/register'>Register</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
