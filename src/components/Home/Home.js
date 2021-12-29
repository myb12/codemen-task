import React, { useEffect, useState } from 'react';
import CommonCard from '../CommonCard/CommonCard';
import './Home.css';
import { sampleData } from '../../data/sampleData';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(sampleData);
    }, [])

    console.log(data);
    return (
        <div className='container'>
            <div className="home">
                {
                    data.map(each => <CommonCard key={each.id} data={each} />)
                }
            </div>
        </div>
    );
};

export default Home;