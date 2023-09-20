import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseLine from '@mui/material/CssBaseline'
import ToDoList from './ToDoList';

function App() {


  return (
    <>
      <div className='todo-contain'>
        <CssBaseLine />

        <ToDoList />
      </div>

    </>
  )
}

export default App
