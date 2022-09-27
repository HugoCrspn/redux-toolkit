import React from 'react';
import * as funkoPopCategories from "../services/funkopopCategories";

const Form = () => {

    const funkoPopCategoriesList = funkoPopCategories.getFunkoPopCategories();

    return (
        <section className='container form-container'>
            <img src="./img/illustrations-form.png" alt="Illustrations en 3D" />
            <form action="" id="add-figurine-form">
                <div className="input input-number">
                    <label htmlFor="number">Number</label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                    />
                </div>
                <div className="input input-name">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="input input-select">
                    <label htmlFor="category">Category</label>
                    <select> 
                        <option value="">- Select Category -</option>
                        {funkoPopCategoriesList.map((f) => (
                            <option value={f.name}>{f.name}</option>
                        ))}
                    </select>
                </div>
                <div className="input input-description">
                    <label htmlFor="category">Description</label>
                    <textarea />
                </div>
                <div className="input input-date">
                    <label htmlFor="date">Purchase date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                    />
                </div>
                <div className="input-reversed input-checkbox-box">
                    <label htmlFor="checkbox-box">Box</label>
                    <input
                        type="checkbox"
                        name="checkbox-box"
                        id="checkbox-box"
                    />
                </div>
                <div className="input-reversed input-checkbox-chase">
                    <label htmlFor="checkbox-chase">Chase</label>
                    <input
                        type="checkbox"
                        name="checkbox-chase"
                        id="checkbox-chase"
                    />
                </div>
                <div className="input-reversed input-checkbox-exclusive">
                    <label htmlFor="checkbox-exclusive">Exclusive</label>
                    <input
                        type="checkbox"
                        name="checkbox-exclusive"
                        id="checkbox-exclusive"
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