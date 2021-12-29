import React, { useEffect, useState } from 'react';
import CommonCard from '../CommonCard/CommonCard';
import './Home.css';
import { sampleData } from '../../data/sampleData';
import SearchBar from '../shared/SearchBar/SearchBar';

const Home = () => {
    const [data, setData] = useState([]);
    const [renderData, setRenderData] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText === '') return;
        setRenderData(() =>
            data.filter((item) =>
                item.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText, data]);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);

        if (!e.target.value.length > 0) {
            setRenderData(data);
        }
    };

    useEffect(() => {
        setData(sampleData);
        setRenderData(sampleData)
    }, [])

    return (
        <div className='container'>
            <SearchBar handleChange={handleChange} />
            <div className="home">
                {
                    renderData.map(each => <CommonCard key={each.id} data={each} />)
                }
            </div>
        </div>
    );
};

export default Home;