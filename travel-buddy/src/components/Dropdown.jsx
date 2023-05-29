import { useState } from "react";
import dropDownIcon from "../images/down.svg";

const Dropdown = ({ title, listOfitems, width }) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [clicked, setClicked] = useState(false);

    return ( 
        <div className="dropdown-container">
            <div className="dropdown">
                <input 
                    type="text" 
                    value={searchTerm}
                    placeholder={title}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={dropDownIcon}
                    onClick={() => clicked ? setClicked(false) : setClicked(true)}
                />
            </div>
            
            {console.log(searchTerm)}

            {clicked && (

                listOfitems.map(x => (
                <div className="dropdown-item">{x}</div>
                ))
                
                
            )}
        </div>
     );
}
 
export default Dropdown;