import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Super from './components/Super/'
import Rules from './components/Rules'

const router = createBrowserRouter(
  [
    {
      // Home page
      path:'/',
      element:
        <Home />
    },
    {
      // playing page (without rules)
      path:'/play',
      element:
        <Super rootHeight='100vh' bodyHeight='70vh' />
    },
    {
      // playing page (with rules)
      path:'/play/rules',
      element:
      <>
        <Super rootHeight='70vh' bodyHeight='50vh' />
        <Rules />
      </>
    }
  ]
);

const App = () => {

  return ( 
    <div>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;
