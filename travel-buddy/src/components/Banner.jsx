import familyImage from '../images/family.jpg';

const Banner = () => {
    return ( 
        <div className='banner'>
            <img src={familyImage}/>
            <div>
                <h2>This could be your family</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ipsa itaque, ipsam, quibusdam dolor tenetur molestiae asperiores nam rem, libero eveniet. Illum sint porro repudiandae impedit officiis. Saepe, a maxime.</p>
            </div>
        </div>
    );
}
 
export default Banner;