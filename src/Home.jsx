import react from 'react';
import Price from './Price';
import Services from './Services';
import Slider from './Slider';
import Subscribe from './Subscribe';
import Special from './Special';
import Partners from './Partners';
const Home =() =>
{
    return(
            <>
                <Slider />
                <Services />
                <Special />
                <Price/>
                <Partners />
                <Subscribe />
            
            </>

    );
}
export default Home;
