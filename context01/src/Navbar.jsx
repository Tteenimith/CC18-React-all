import React from 'react'
import Avatar from './Avatar'

export default function Navbar() {
  return (
    <div className='w-1/2 bg-amber-800 h-full flex justify-between items-end'>
        <nav className='flex gap-3'>
            <a href="#">User 1</a>
            <a href="#">User 2</a>
            <a href="#">User 3</a>
        </nav>
        <Avatar/>
        </div>
  )
}
