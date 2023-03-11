import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Blog } from './components/Screens/Blog'
import { Home } from './components/Screens/Home'
import {Store} from "./components/Screens/Store"
import {Contact} from "./components/Screens/Contact"

export const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/blogpage" element={<Blog/>}/>
       <Route path="/storepage" element={<Store/>}/>
       <Route path="/contactpage" element={<Contact/>}/>
    </Routes>
  )
}
