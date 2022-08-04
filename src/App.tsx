import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import ReactQueryUserList from './components/ReactQueryUserList';
import UserList from './components/UserList';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/without-react-query' element={<UserList />} />
          <Route path='/with-react-query' element={<ReactQueryUserList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
