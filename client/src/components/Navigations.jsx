import { Link } from 'react-router-dom'

export default function Navigations() {
   
    return (
        <header>
        <nav>           
            <Link to='/'>Home</Link>
            <Link to='/characters'>Characters</Link>
            <Link to='/books'>Books</Link>
            <Link to='/outfits'>Outfits</Link>
        </nav>
        </header>
    )
}