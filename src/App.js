import './App.css';
import Form from './Ict_pay/Components/Form'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />
  },
]);


function App() {
  return (
  <RouterProvider router={router} />
    
  );
}

export default App;
