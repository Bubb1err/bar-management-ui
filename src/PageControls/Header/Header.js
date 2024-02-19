import './header-styles.css'


function Header() {
    return (
        <div className='header-content'>
            <div>
                <h1>Bar Management</h1>
            </div>
            <div className='navigation'>
                <a href='#' className='nav-link'>Coctails</a>
                <a href='#' className='nav-link'>Workers</a>
                <a href='#' className='nav-link'>Spendings</a>
                <a href='#' className='nav-link'>Drinks</a>
            </div>
        </div>
    );
}

export default Header;
