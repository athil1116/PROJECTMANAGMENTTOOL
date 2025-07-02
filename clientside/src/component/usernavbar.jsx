import { Link } from 'react-router';

function Navbaruser() {
    return (
        <nav className='navbar'>
            <div className='container'>
                <h2 id='h2'>AKZA</h2>
                <ul id='item'>
                    <li className='nav-item'><Link to='/userhome'>Home</Link></li>
                    <li className='nav-item'><Link to=''>Offers</Link></li>
                    <li className='nav-item'><Link to=''>Help</Link></li>
                    
                    <form className='search' class="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg></button>
                    </form>
                </ul>
            </div>
        </nav>
    )
}

export default Navbaruser;