import Dropdown from "./Dropdown";

const Planner = () => {

    const foodOptions = ["Halal", "Non-Halal"];

    const interestOptions = ["Museum", "Clubbing", "Historic Sites"];

    const budgetOptions = ["$200-$500", "$500 >"];


    return ( 
        <div className="planner">
            <Dropdown title="Food" listOfitems={foodOptions}/>
            <Dropdown title="Interests" listOfitems={interestOptions}/>
            <Dropdown title="Budget" listOfitems={budgetOptions}/>
        </div>
     );
}
 
export default Planner;