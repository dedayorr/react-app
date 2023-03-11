import React from 'react'
import { Link } from 'react-router-dom'


export const Navigation = () => {
  return (
    <div>
        <ul>
            <li>
<Link to="/">HOME</Link>
            </li>
            <li>
<Link to="/blogpage">BLOG</Link>
            </li>
            <li>
<Link to="/storepage">STORE</Link>
            </li>
            <li>
<Link to="/contactpage">CONTACT</Link>
            </li>
        </ul>
    </div>
  )
}
