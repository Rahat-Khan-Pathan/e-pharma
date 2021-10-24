import React, { useEffect } from 'react';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Medicines from '../Medicines/Medicines';
import OrderDetails from '../OrderDetails/OrderDetails';

const Home = () => {
    // Change Title 
    useEffect(()=> {
        document.title = 'E Pharma | Home';
    },[]);
    return (
        <div>
            <Banner></Banner>
            <Achievements></Achievements>
            <Medicines></Medicines>
            <OrderDetails></OrderDetails>
        </div>
    );
};

export default Home;