import './App.css';
/*import About from './Container/AboutMe/About';
import Contact from './Container/ContactMe/Contact';
import Experience from './Container/Experience/Experience';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import Nav from './Container/Navigation/Nav';
import Portfolio from './Container/Resume/Portfolio';
import Services from './Container/Services/Services';
import Testimonial from './Container/Testimonials/Testimonial';*/
import Form from './Ict_pay/Components/Form'
import Pay from './Ict_pay/Components/Pay'
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
  
    /*<>
      <Header />
      <Nav />

      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
  </>*/
  <RouterProvider router={router} />
    
  );
}

export default App;
