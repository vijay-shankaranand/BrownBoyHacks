import Dropdown from "./Dropdown";

const Planner = () => {
    const destinations = [];

    const foodOptions = [
        "Halal",
        "Vegetarian",
        "Vegan",
        "Kosher",  
      ];
      
    const interestOptions = [
        "Museum",
        "Clubbing",
        "Historic Sites",
        "Nature Walks",
        "Food Tasting",
        "Beach Activities",
        "Art Galleries",
        "Outdoor Adventures",
        "Shopping",
        "Music Festivals",
        "Sports Events",
        "Photography",
        "Wine Tasting",
        "Spa and Wellness",
        "Cooking Classes"
      ];

      const budgetOptions = [
        "$200-$500",
        "$500 >",
        "$0-$100",
        "$100-$200",
        "$500-$1000",
        "$1000-$2000",
        "$2000-$3000",
        "$3000-$5000",
        "Custom"
      ];
      

    return ( 
        <div className="planner" style={{backgroundColor: '#EEEDE7'}}>
            <Dropdown title= "Destinations" listOfitems={destinations}/>
            <Dropdown title="Food" listOfitems={foodOptions}/>
            <Dropdown title="Interests" listOfitems={interestOptions}/>
            <Dropdown title="Budget" listOfitems={budgetOptions}/>
        </div>
     );
}
 
export default Planner;