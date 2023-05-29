import familyImage from '../images/family.jpg';

const Banner = () => {
    return ( 
        <div className='banner'>
            <img src={familyImage}/>
            <div>
                <h2 style={{ textAlign: 'center', width: '300px' }}>This could be your family!</h2>
                <p style={{ textAlign: 'center', width: '300px' }}>Imagine lounging in a sun-drenched vineyard in Tuscany, glass of Chianti in hand, or savoring the exhilarating views of the pristine waters from a cliffside café on the Amalfi Coast. Dreaming of an Italian vacation? The flavors, the culture, the views – it's all within reach with TravelBuddy. It takes the 'planning' out of your vacation planning. With TravelBuddy, the endless possibilities of your next Italian escapade are just a few taps away. Andiamo!</p>
            </div>
        </div>
    );
}
 
export default Banner;