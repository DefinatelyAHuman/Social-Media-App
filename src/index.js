import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,  createBrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Posts from './components/Posts';
import EditedData from './components/EditedData';
import AddPost from './components/AddPost';




 let router=createBrowserRouter([
  {path:"/", element:<App/> , children:[
    {path:"/" , element:<Welcome/>},
    {path:"/home", element:<Posts/>},
    {path:"/addpost", element:<AddPost/>},
    
  ]
 }]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
