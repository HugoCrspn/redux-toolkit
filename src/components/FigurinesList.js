import React from 'react';
import { useSelector } from 'react-redux';
import FigurineItem from './FigurineItem';

// useSelector() allows to get informations from Redux (in this case, all figurines)

const FigurinesList = () => {

    const figurines = useSelector(state => state.figurine);

    const figurinesSortByDate = figurines
        .slice()
        .sort(function(a, b) {
            return new Date(b.publishDate) - new Date(a.publishDate);
        })
        
    // Create sort by date.

    return (
        <div
            className='container figurines-container'
        >
            {figurinesSortByDate
                .map((figurine) => (
                    <FigurineItem
                        key={figurine.id}
                        figurine={figurine}
                    />
                ))}
        </div>
    )
}

export default FigurinesList;