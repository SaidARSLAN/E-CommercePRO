import { navLinks } from "../contains"
import NavItem from "./NavItem"

const Nav = () => {
  return (
    <nav>
        <div className="navbar-logo">
            <h2>Travigo</h2>
        </div>
        <ul className="navbar-links">
            {navLinks.map((item) => <NavItem item={item}/>)}
        </ul>
        <ul className="navbar-auth">
            <button>Sign In</button>
            <button>Rent Services</button>
        </ul>
    </nav>
  )
}

export default Nav