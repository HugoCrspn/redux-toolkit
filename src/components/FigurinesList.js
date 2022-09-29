import React from 'react';
import { useSelector } from 'react-redux';
import FigurineItem from './FigurineItem';

// useSelector() allows to get informations from Redux (in this case, all figurines)

const FigurinesList = () => {

    const figurines = useSelector(state => state.figurine);

    const figurinesSortByDate = figurines
        .slice()
        .sort((a, b) => {
            if (b.publishDate < a.publishDate) { return -1; }
            if (b.publishDate > a.publishDate) { return 1; }
            return 0;
    });

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