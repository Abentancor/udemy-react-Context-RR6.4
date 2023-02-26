import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './Context/ContextUser'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material'

import {router} from "./Router"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </CssBaseline>
  </React.StrictMode>,
)
