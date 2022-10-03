import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import * as funkoPopCategories from "../services/funkopopCategories";

const FigurineItem = (props) => {

    // dispatch to use redux store and actions
    const dispatch = useDispatch();

    // props
    const { figurine } = props;

    // const [imgFull, setImgFull] = useState(false);
    // const imgToggle = () => {
    //     setImgFull(!imgFull);
    // }

    const [toggleActions, setToggleActions] = useState(false);
    const settingsToggle = () => {
        setToggleActions(!toggleActions);
    }

    const [toggleModify, setToggleModify] = useState(false);
    const [inputsUpdate, setInputsUpdate] = useState({
        nameUpdate: figurine.name,
        categoryUpdate: figurine.category,
        numberUpdate: figurine.number,
        descriptionUpdate: figurine.description,
        purchaseDateUpdate: figurine.purchaseDate,
        boxUpdate: figurine.box,
        chaseUpdate: figurine.chase,
        exclusiveUpdate: figurine.exclusive
    });

    const handleChangeUpdate = (event) => {
        const name = event.target.name;
        let value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        setInputsUpdate(values => ({...values, [name]: value}));
    }

    const handleUpdate = () => {
        dispatch({
            type: "figurine/modifyFigurine",
            payload: {
                id: figurine.id,
                name: inputsUpdate.nameUpdate,
                category: inputsUpdate.categoryUpdate,
                number: inputsUpdate.numberUpdate,
                description: inputsUpdate.descriptionUpdate,
                purchaseDate: inputsUpdate.purchaseDateUpdate,
                box: inputsUpdate.boxUpdate,
                chase: inputsUpdate.chaseUpdate,
                exclusive: inputsUpdate.exclusiveUpdate
            }
        })
        setToggleModify(!toggleModify);
    }

    const showFormToUpdateFigurine = () => {
        setToggleModify(!toggleModify);
    }

    const deleteFigurineItem = () => {
        dispatch({
            type: "figurine/deleteFigurine",
            payload: figurine.id
        })
    }

    const funkoPopCategoriesList = funkoPopCategories.getFunkoPopCategories();

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ delay: .6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="card"
        >
            {toggleModify === false && (
                <>
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
                        {/* <img id="card-img" className={imgFull ? "imgFullBackground" : ""} onClick={imgToggle} src={figurine.imgUrl} alt={`Représente la figurine : ${figurine.name}`} /> */}
                    </div>
                    <svg onClick={settingsToggle} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_69_86)">
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#30363D" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.1666 12.5C16.0557 12.7514 16.0226 13.0302 16.0716 13.3005C16.1206 13.5709 16.2495 13.8203 16.4416 14.0167L16.4916 14.0667C16.6465 14.2215 16.7695 14.4053 16.8534 14.6076C16.9372 14.81 16.9804 15.0268 16.9804 15.2459C16.9804 15.4649 16.9372 15.6818 16.8534 15.8841C16.7695 16.0864 16.6465 16.2703 16.4916 16.425C16.3368 16.58 16.153 16.7029 15.9507 16.7868C15.7483 16.8707 15.5314 16.9139 15.3124 16.9139C15.0934 16.9139 14.8765 16.8707 14.6742 16.7868C14.4719 16.7029 14.288 16.58 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6374 16.0541 13.3671 16.005C13.0967 15.956 12.8179 15.9891 12.5666 16.1C12.3201 16.2057 12.1099 16.3811 11.9618 16.6047C11.8138 16.8282 11.7343 17.0902 11.7333 17.3584V17.5C11.7333 17.9421 11.5577 18.366 11.2451 18.6786C10.9325 18.9911 10.5086 19.1667 10.0666 19.1667C9.62456 19.1667 9.20064 18.9911 8.88807 18.6786C8.57551 18.366 8.39992 17.9421 8.39992 17.5V17.425C8.39347 17.1492 8.30418 16.8817 8.14368 16.6573C7.98317 16.4329 7.75886 16.2619 7.49992 16.1667C7.24857 16.0558 6.96976 16.0227 6.69943 16.0717C6.4291 16.1207 6.17965 16.2496 5.98325 16.4417L5.93325 16.4917C5.77846 16.6467 5.59465 16.7696 5.39232 16.8535C5.18999 16.9373 4.97311 16.9805 4.75409 16.9805C4.53506 16.9805 4.31818 16.9373 4.11585 16.8535C3.91352 16.7696 3.72971 16.6467 3.57492 16.4917C3.41996 16.3369 3.29703 16.1531 3.21315 15.9508C3.12928 15.7484 3.08611 15.5316 3.08611 15.3125C3.08611 15.0935 3.12928 14.8766 3.21315 14.6743C3.29703 14.472 3.41996 14.2882 3.57492 14.1334L3.62492 14.0834C3.81703 13.887 3.94591 13.6375 3.99492 13.3672C4.04394 13.0969 4.01085 12.8181 3.89992 12.5667C3.79428 12.3202 3.61888 12.11 3.39531 11.962C3.17173 11.8139 2.90974 11.7344 2.64159 11.7334H2.49992C2.05789 11.7334 1.63397 11.5578 1.32141 11.2452C1.00885 10.9327 0.833252 10.5087 0.833252 10.0667C0.833252 9.62468 1.00885 9.20076 1.32141 8.8882C1.63397 8.57564 2.05789 8.40004 2.49992 8.40004H2.57492C2.85075 8.39359 3.11826 8.30431 3.34267 8.1438C3.56708 7.98329 3.73802 7.75899 3.83325 7.50004C3.94418 7.24869 3.97727 6.96988 3.92826 6.69955C3.87924 6.42922 3.75037 6.17977 3.55825 5.98337L3.50825 5.93337C3.35329 5.77859 3.23036 5.59477 3.14649 5.39244C3.06261 5.19011 3.01944 4.97323 3.01944 4.75421C3.01944 4.53518 3.06261 4.3183 3.14649 4.11597C3.23036 3.91364 3.35329 3.72983 3.50825 3.57504C3.66304 3.42008 3.84685 3.29715 4.04918 3.21327C4.25152 3.1294 4.46839 3.08623 4.68742 3.08623C4.90644 3.08623 5.12332 3.1294 5.32565 3.21327C5.52798 3.29715 5.7118 3.42008 5.86659 3.57504L5.91659 3.62504C6.11298 3.81715 6.36243 3.94603 6.63276 3.99504C6.90309 4.04406 7.18191 4.01097 7.43325 3.90004H7.49992C7.74639 3.7944 7.9566 3.619 8.10466 3.39543C8.25273 3.17185 8.33218 2.90986 8.33325 2.64171V2.50004C8.33325 2.05801 8.50885 1.63409 8.82141 1.32153C9.13397 1.00897 9.55789 0.833374 9.99992 0.833374C10.4419 0.833374 10.8659 1.00897 11.1784 1.32153C11.491 1.63409 11.6666 2.05801 11.6666 2.50004V2.57504C11.6677 2.8432 11.7471 3.10519 11.8952 3.32876C12.0432 3.55234 12.2534 3.72774 12.4999 3.83337C12.7513 3.9443 13.0301 3.97739 13.3004 3.92838C13.5707 3.87936 13.8202 3.75049 14.0166 3.55837L14.0666 3.50837C14.2214 3.35341 14.4052 3.23048 14.6075 3.14661C14.8098 3.06273 15.0267 3.01956 15.2458 3.01956C15.4648 3.01956 15.6817 3.06273 15.884 3.14661C16.0863 3.23048 16.2701 3.35341 16.4249 3.50837C16.5799 3.66316 16.7028 3.84698 16.7867 4.04931C16.8706 4.25164 16.9137 4.46852 16.9137 4.68754C16.9137 4.90657 16.8706 5.12344 16.7867 5.32577C16.7028 5.5281 16.5799 5.71192 16.4249 5.86671L16.3749 5.91671C16.1828 6.11311 16.0539 6.36255 16.0049 6.63288C15.9559 6.90321 15.989 7.18203 16.0999 7.43337V7.50004C16.2056 7.74652 16.381 7.95672 16.6045 8.10478C16.8281 8.25285 17.0901 8.3323 17.3583 8.33337H17.4999C17.9419 8.33337 18.3659 8.50897 18.6784 8.82153C18.991 9.13409 19.1666 9.55801 19.1666 10C19.1666 10.4421 18.991 10.866 18.6784 11.1786C18.3659 11.4911 17.9419 11.6667 17.4999 11.6667H17.4249C17.1568 11.6678 16.8948 11.7472 16.6712 11.8953C16.4476 12.0434 16.2722 12.2536 16.1666 12.5V12.5Z" stroke="#30363D" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </>
            )}
            {toggleModify && (
                <div className="formUpdate">
                    <div className="input input-name">
                        <label htmlFor="nameUpdate">Name</label>
                        <input 
                            name="nameUpdate"
                            type="text" 
                            value={inputsUpdate.nameUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                    <div className="input input-select">
                        <label htmlFor="categoryUpdate">Category</label>
                        <select
                            name="categoryUpdate"
                            value={inputsUpdate.categoryUpdate}
                            onChange={handleChangeUpdate}
                        >
                            <option value="">- Select Category -</option>
                            {funkoPopCategoriesList.map((f) => (
                                <option key={f.id} value={f.name}>{f.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input input-number">
                        <label htmlFor="numberUpdate">Number</label>
                        <input
                            type="number"
                            name="numberUpdate"
                            value={inputsUpdate.numberUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                    <div className="input input-description">
                        <label htmlFor="descriptionUpdate">Description</label>
                        <textarea
                            name="descriptionUpdate"
                            value={inputsUpdate.descriptionUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                        <div className="input input-date">
                        <label htmlFor="purchaseDateUpdate">Purchase date</label>
                        <input
                            type="text"
                            name="purchaseDateUpdate"
                            value={inputsUpdate.purchaseDateUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                    <div className="input-reversed input-checkbox-box">
                        <label htmlFor="boxUpdate">Box</label>
                        <input
                            type="checkbox"
                            name="boxUpdate"
                            checked={inputsUpdate.boxUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                    <div className="input-reversed input-checkbox-chase">
                        <label htmlFor="chaseUpdate">Chase</label>
                        <input
                            type="checkbox"
                            name="chaseUpdate"
                            checked={inputsUpdate.chaseUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                    <div className="input-reversed input-checkbox-exclusive">
                        <label htmlFor="exclusiveUpdate">Exclusive</label>
                        <input
                            type="checkbox"
                            name="exclusiveUpdate"
                            checked={inputsUpdate.exclusiveUpdate}
                            onChange={handleChangeUpdate}
                        />
                    </div>
                </div>
            )}
            <div onClick={settingsToggle} className={toggleActions ? "actions-container show" : "actions-container"}>
                <button onClick={showFormToUpdateFigurine} className='btn modify-btn'>Modify</button>
                <button onClick={deleteFigurineItem} className='btn delete-btn'>Delete</button>
            </div>
            {toggleModify && 
            <button onClick={handleUpdate} className='btn update-btn'>Update</button>}
        </motion.div>
    )
}

export default FigurineItem;