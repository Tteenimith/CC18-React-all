import {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

export default function Header() {
  const {user,setUser} = useContext(AuthContext)
  return (
    <div className='bg-blue-700 flex justify-between items-end h-[60px]'>
        <div>
          <img src={user.image} alt={user.lastName} className='w-[60px]' />
        </div>
        <nav className='flex gap-3 text-xl text-white font-bold'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/product'>Product</Link>
            <button onClick={()=>setUser({})}>Logout</button>
        </nav>
    </div>
  )
}
