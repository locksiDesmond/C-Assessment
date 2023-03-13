import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Dashboard from './routes/Dashboard';
import store from './redux/store';
import AddEmployee from './routes/AddEmployee';
import EditEmployee from './routes/EditEmployee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/add-employee',
    element: <AddEmployee />,
  },
  {
    path: '/edit-employee/:employeeId',
    element: <EditEmployee />,
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
