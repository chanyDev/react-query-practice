import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import ReactQueryUserList from './components/ReactQueryUserList';
import UserList from './components/UserList';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/without-react-query' element={<UserList />} />
        <Route path='/with-react-query' element={<ReactQueryUserList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
