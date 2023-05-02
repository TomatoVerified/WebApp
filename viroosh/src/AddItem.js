import { useState } from "react";
import './style.css'

function AddItem(props) { //props/array passed here from App
    //[variable, func that modifies it]
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    //const [brand, setBrand] = useState("");

    //gets called when Add Item button pressed
    const addItemButtonPressed = () => {
        //calling a callback func passed in props from App.js 
        props.addItem({ name: name, price: price, type: type}); //adds to array
        //^ we pass dif aspects of an item back to App
        //basically we are adding this info into props, which is basically a function that came from App.js
        setName(""); setPrice(""); setType(""); //clears input boxes
    };

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center">
                    - Add a New Item to the Tracker - 
                </h2>    
            </div>
            <div className="row">
                <label htmlFor="name-field"><b>ITEM DESCRIPTION</b> (Describe Item OR Leave Blank)</label>
                <input id="name-field" className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="price-field"><b>ALERT PRICE</b> (Get Notified When Price of Item Drops To/Below This Value)</label>
                <input id="price-field" className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label htmlFor="type-field"><b>URL</b> (Link To The Site With Item)</label>
                <input id="type-field" className="form-control" type="text" value={type} onChange={(e) => setType(e.target.value)}/>
            </div>
            <div className="row mt-3">
                <button type="button" className="btn btn-primary font-weight-bold text-black my-button" style={{backgroundColor: '#FFD700', fontWeight: 'bold', borderColor: 'black'}} onClick={addItemButtonPressed}>Add Item</button> {/*type to button prevent page reload*/}
            </div>
        </div>
    )
}

export default AddItem;
