import { Link } from 'react-router';

// Get user info from localStorage (adjust key as needed)
const user = JSON.parse(localStorage.getItem("user"));

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='container'>
                <h2 id='h2'>TASK BOX</h2>
                <ul id='item'>
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to=''>About</Link></li>
                    <li className='nav-item'><Link to=''>Contact</Link></li>
                    <li className='nav-item dropdown'>
                        <Link to='' className='dropdown-toggle' role='button' data-bs-toggle="dropdown" aria-expanded="false">Sign up</Link>
                        <ul className='dropdown-menu'>
                            <li><Link to="/user" className='dropdown-item'>User</Link></li>
                            <li><Link to="/resturent" className='dropdown-item'></Link></li>
                            <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </li>
                    <li className='nav-item dropdown'>
                        <Link to='' className='dropdown-toggle' role='button' data-bs-toggle="dropdown" aria-expanded="false">Login</Link>
                        <ul className='dropdown-menu'>
                            <li><Link to="/login" className='dropdown-item'>User</Link></li>
                            <li><Link to="/Resturnts_login" className='dropdown-item'></Link></li>
                            <li><Link to="/Admin_login" className='dropdown-item'>Admin</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </li>
                    {/* Show logged-in user profile */}
                    {user && (
                        <li className='nav-item ms-auto'>
                            <span className="badge bg-primary">
                                <i className="bi bi-person-circle me-1"></i>
                                {user.name || user.email}
                            </span>
                        </li>
                    )}
                    <form className='search d-flex' role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        </button>
                    </form>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;