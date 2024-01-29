import { Link } from 'react-router-dom'

export default function Navigations() {
   
    return (
        <header>
        <nav>  
        <div className="nav-container">         
            <Link to='/'>Home</Link>
            <Link to='/characters'>Characters</Link>
            <Link to='/books'>Books</Link>
            <Link to='/outfits'>Outfits</Link>
            </div>
        </nav>
        </header>
    )
}