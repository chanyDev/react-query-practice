import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/without-react-query'>Without React Query</Link>
      <Link to='/with-react-query'>With React Query</Link>
    </nav>
  );
};

export default Navigation;
