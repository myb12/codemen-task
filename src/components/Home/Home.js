import React from 'react';
import CommonCard from '../CommonCard/CommonCard';
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className="home">
                <CommonCard variant={'automated'} />
                <CommonCard variant={'automated'} />
                <CommonCard variant={'manual'} />
                <CommonCard variant={'manual'} />
                <CommonCard variant={'automated'} />
                <CommonCard variant={'automated'} />
            </div>
        </div>
    );
};

export default Home;