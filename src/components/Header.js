import React from 'react';

const Header = () => {

    const handleClick = (event) => {
        event.preventDefault();
        const target = document.getElementById('add-figurine-form').offsetTop;

        window.scrollTo({
            left: 0,
            top: target - 280
        })

        setTimeout(function () {document.getElementById("number").focus()}, 600);
    } 

    return (
        <div className='container header-container'>
            <div className="block-text">
                <h1>Redux-toolkit</h1>
                <h2>discovering</h2>
                <p className="baseline">Using redux-toolkit in small web app who manage funko pop figurines collections</p>
                <button onClick={handleClick} className='btn'>Add figurine</button>
            </div>
            <img src="./img/illustrations-header.png" alt="Illustrations en 3D" />
            <img className='folder' src="./img/folder.png" alt="Illustration of 3D folder" />
        </div>
    );
}

export default Header;