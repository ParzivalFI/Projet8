import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './composants/Navbar';
import Footer from './composants/Footer';
import Apropos from './page/Apropos';
import Error404 from './page/Error404';

import ApartmentPage from './page/ApartmentPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />
  },
  {
    path: "/Logement/:id",
    element: 
    <>
    <Navbar /> 
<ApartmentPage/>
    <Footer />
    </>
  },
  {
    path: "/propos",
    element: (
      <>
    <Navbar />
    <Apropos />
    <Footer />
    </>
    )
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
