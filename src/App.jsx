import { useState } from 'react'
import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import FiveoThree from './components/fivezeorthree'


function App() {

  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/><Home/></>
    },
    {
      path: '/About',
      element: <><FiveoThree/></>
    },
    {
      path: '/Projects',
      element: <><FiveoThree/></>
    },
    {
      path: '/Contact',
      element: <><FiveoThree/></>
    }
  ])

  return (
    <>
      <main className='mn'>
        <RouterProvider router={Routes}></RouterProvider>
      </main>
    </>
  )
}

export default App
