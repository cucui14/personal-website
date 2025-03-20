import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className='bg-black h-12 flex items-center justify-center pl-4 navbar-slide'>
            <ul className='flex gap-6 text-white'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavLink to={link.path} className={({ isActive }) => `hover:font-bold ${isActive ? 'text-blue-400 font-bold' : ''}`}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;