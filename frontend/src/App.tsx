import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Dashboard from './routes/Dashboard';
import store from './redux/store';
import AddEmployee from './routes/AddEmployee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/add-employee',
    element: <AddEmployee />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
