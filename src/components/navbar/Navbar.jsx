import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className='bg-black h-12 flex items-center justify-center pl-4'>
            <ul className='flex gap-6 text-white'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link to={link.path} className='hover:font-bold'>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;