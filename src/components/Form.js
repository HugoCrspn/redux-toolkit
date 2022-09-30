import React from 'react';
import { useState } from 'react';
import * as funkoPopCategories from "../services/funkopopCategories";
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';


const Form = () => {
	
    const getDateTime = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;
    }

    const getFormatDate = (date) => {
        const newDate = date
        const [year, month, day] = newDate.split('-');
        return `${day}/${month}/${year}`;
    }

    const focusOnFigurinesList = () => {
        const target = document.querySelector('.figurines-container').offsetTop;

        window.scrollTo({
            left: 0,
            top: target - 100
        })
    }

    const [inputs, setInputs] = useState({});

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const name = event.target.name;
        let value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.purchaseDate) {
            inputs.purchaseDate = getFormatDate(inputs.purchaseDate);
        }
        inputs.id = uuid().slice(0,8);
        inputs.publishDate = getDateTime();
        dispatch({
            type: "figurine/addFigurine",
            payload: inputs
        })
        event.target[5].checked = false;
        event.target[6].checked = false;
        event.target[7].checked = false;
        setInputs({});
        focusOnFigurinesList();
    }

    const funkoPopCategoriesList = funkoPopCategories.getFunkoPopCategories();

    return (
        <section className='container form-container'>
            <img src="./img/illustrations-form.png" alt="Illustrations en 3D" />
            <form onSubmit={handleSubmit} action="" id="add-figurine-form">
                <div className="input input-number">
                    <label htmlFor="number">Number</label>
                    <input
                        required
                        type="number"
                        name="number"
                        id="number"
                        value={inputs.number || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="input input-name">
                    <label htmlFor="name">Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={inputs.name || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="input input-select">
                    <label htmlFor="category">Category</label>
                    <select
                        required
                        id="category"
                        name="category"
                        value={inputs.category || ''}
                        onChange={handleChange}
                    > 
                        <option value="">- Select Category -</option>
                        {funkoPopCategoriesList.map((f) => (
                            <option key={f.id} value={f.name}>{f.name}</option>
                        ))}
                    </select>
                </div>
                <div className="input input-description">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={inputs.description || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="input input-date">
                    <label htmlFor="purchaseDate">Purchase date</label>
                    <input
                        type="date"
                        name="purchaseDate"
                        id="purchaseDate"
                        value={inputs.purchaseDate || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-reversed input-checkbox-box">
                    <label htmlFor="box">Box</label>
                    <input
                        type="checkbox"
                        name="box"
                        id="box"
                        value={inputs.box || false}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-reversed input-checkbox-chase">
                    <label htmlFor="chase">Chase</label>
                    <input
                        type="checkbox"
                        name="chase"
                        id="chase"
                        value={inputs.chase || false}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-reversed input-checkbox-exclusive">
                    <label htmlFor="exclusive">Exclusive</label>
                    <input
                        type="checkbox"
                        name="exclusive"
                        id="exclusive"
                        value={inputs.exclusive || false}
                        onChange={handleChange}
                    />
                </div>
                <div className="input input-submit">
                    <input
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </section>
    );
}

export default Form;