import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className='flex gap-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default Navbar;