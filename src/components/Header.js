import React from 'react';

const Header = () => {

    return (
        <div className='container header-container'>
            <div className="block-text">
                <h1>Redux-toolkit</h1>
                <h2>discovering</h2>
                <p className="baseline">Using redux-toolkit in small web app who manage funko pop figurines collections</p>
                <button className='btn'>Add figurine</button>
            </div>
            <img src="./img/illustrations-header.png" alt="Illustrations en 3D" />
        </div>
    );
}

export default Header;