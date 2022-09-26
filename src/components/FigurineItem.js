import React from 'react';

const FigurineItem = (props) => {

    const { figurine } = props;
    
    return(
        <div className="card">
            <div className="top-card">
                <h2>{figurine.name}</h2>
                <p className='category'>{figurine.category}<span>#{figurine.number}</span></p>
                <p className="description">{figurine.description}</p>
            </div>
            <div className="bottom-card">
                <div className="left">
                    <p className="date">{figurine.purchaseDate}</p>
                    <p className="checkbox-style"><span></span>With Box</p>
                    <p className="checkbox-style"><span></span>Chase</p>
                    <p className="checkbox-style"><span></span>Exclusive</p>
                </div>
                <img src={figurine.imgUrl} alt={`Représente la figurine : ${figurine.name}`} />
            </div>
        </div>
    )
}

export default FigurineItem;