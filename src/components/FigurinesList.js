import React from 'react';
import { useSelector } from 'react-redux';
import FigurineItem from './FigurineItem';

// useSelector() allows to get informations from Redux (in this case, all figurines)

const FigurinesList = () => {

    const figurines = useSelector(state => state.figurine);

    return(
        <div className='container figurines-container'>
            {figurines.map((figurine) => (
                <FigurineItem 
                    key={figurine.id}
                    figurine={figurine}
                />
            ))}
        </div>
    )
}

export default FigurinesList;