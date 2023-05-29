import { useState } from "react";
import dropDownIcon from "../images/down.svg";

const Dropdown = ({ title, listOfitems }) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [clicked, setClicked] = useState(false);

    let searchedList = undefined;

    if (searchTerm === '') {
        searchedList = listOfitems;
    } else {
        searchedList = listOfitems.filter(x => x.toLowerCase() === searchTerm.toLowerCase());
    }

    const dropper = () => {
        if (clicked) {
            return (listOfitems.map(x => (
                <div className="dropdown-item">{x}</div>
                )));
        } else if (searchTerm.length > 1) {
            return (searchedList.map(x => (
                <div className="dropdown-item">{x}</div>
                )));
        }
    }

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

            {/* {clicked && (

                listOfitems.map(x => (
                <div className="dropdown-item">{x}</div>
                ))
            )} */}

            {dropper()}
        </div>
     );
}
 
export default Dropdown;