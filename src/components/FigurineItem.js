import React from 'react';
import { useState } from 'react';

const FigurineItem = (props) => {

    const { figurine } = props;

    const [imgFull, setImgFull] = useState(false);
    const imgToggle = () => {
        setImgFull(!imgFull);
    }

    
    return(
        <div className="card">
            <div className="top-card">
                <h2>{figurine.name}</h2>
                <p className='category'>{figurine.category}<span> #{figurine.number}</span></p>
                <p className="description">{figurine.description}</p>
            </div>
            <div className="bottom-card">
                <div className="left">
                    <p className="date">{figurine.purchaseDate}</p>
                    <div className='informations'>
                        <p className='checkbox-style'><span className={figurine.box ? "active" : ""}></span>With Box</p>
                        <p className='checkbox-style'><span className={figurine.chase ? "active" : ""}></span>Chase</p>
                        <p className='checkbox-style'><span className={figurine.exclusive ? "active" : ""}></span>Exclusive</p>
                    </div>
                </div>
                <img id="card-img" className={imgFull ? "imgFullBackground" : ""} onClick={imgToggle} src={figurine.imgUrl} alt={`Représente la figurine : ${figurine.name}`} />
            </div>
            {/* <div className='settings-icons'></div> */}
            <img className='settings-icons' src="./img/icons/settings.svg" alt="" />
        </div>
    )
}

export default FigurineItem;