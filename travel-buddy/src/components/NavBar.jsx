import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <h1>Travel Buddy</h1>
            <nav>
                <p>Home</p>
                <p>Explore Flights</p>
                <p>Explore Hotels</p>
                <p>Explore Tour Packages</p>
            </nav>
        </div>
     );
}
 
export default NavBar;