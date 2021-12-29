import React from 'react';
import './SearchBar.css'

const SearchBar = ({ handleChange }) => {
    return (
        <div className="search-bar">
            <form>
                <input
                    type="text"
                    placeholder="Seacrh by name"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default SearchBar;