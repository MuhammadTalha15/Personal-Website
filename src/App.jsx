import { useState } from 'react'
import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Navbar, Home , About, FiveoThree } from './components/imports'


function App() {

  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/><Home/></>
    },
    {
      path: '/About',
      element: <> <Navbar/><About/></>
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
