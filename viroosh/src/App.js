import { useState, useEffect } from "react"; //importing hooks, hooks r funcs provided by React that modify components' default behaviour
import AddItem from "./AddItem";
import ItemsDisplay from './ItemsDisplay';
import AddEmail from "./Email";

//cd viroosh, npm start, json-server db.json
//first gotta be in cd flask-server, then .\venv\Scripts\activate & py server.py
//control + c to enable typing in terminal
//Use Netlily + GitHub 

//overall sending from child AddItem to parent (App)
function App() {
  const [data, setData] = useState({ items: [] }); //items is a key, [] is a list
  //he said we should've just made this an array instead of key and list
  const [loading, setLoading] = useState(false);
  
  //gets items from json server and displays it on screen upon startup
  useEffect(() => {
    fetch("/items").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    );
  }, []);

  //overall, delete an item then pass func in props to ItemsDisplay so it can call it to delete an item when we click that button
  const deleteItem = (item) => {
  const items = data["items"];
  const requestOptions = {
    method: "DELETE"
  }
  fetch(`/items/${item.id}`, requestOptions).then(
    (response) => { 
      if (response.ok) {
        const newItems = items.filter(i => i.id !== item.id);
        setData({ items: newItems });
      }
    }
  )
}


  //just adding to array, pass this func to AddItem
  const addItemToData = (item) => { //item is coming from below, addItem={addItemToData}
    let items = data["items"]; //setting old array to items (temp duplicate)
    //item.id = items.length; //getting index, JSON server will automatically figure this out
    
    //this is a javascript object
    const requestOptions = {
      method: "POST",
      headers: { //defines the format in which the info will be added
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(item), //just makes the item being a sent a text file 
    };

    setLoading(true)
    fetch("/items", requestOptions) //if method not specified, get is default
      .then((response) => response.json())
      .then((data) => {
        items.push(data); //pushing new item into it
        setData({ items: items }); //first items is the key, pushing new into old
        setLoading(false)
      });
    //.then() waits for requestOptions to finish & grabs the response - which contains the ID the item we just added was given
  };
  
  return (
  <div className="container">
    <div className="row mt-3 d-flex justify-content-center align-items-center">
      <h2 className="text-white font-weight-bold text-center" style={{ fontSize: '5rem', color: 'white', textDecoration: 'underline'}}>PriceTracker</h2>
    </div>  
    <div className="row mt-3">
      <ItemsDisplay
        deleteItem={deleteItem}
        items={data["items"]}
        loading={loading}
      /> {/*passing data to display*/}
    </div>
    <div className="row mt-3">
      <AddItem addItem={addItemToData} /> {/*gets stuff from AddItem & pass to addItemtoData*/}
    </div>
      <div className="row mt-3 d-flex justify-content-center align-items-center">
        ______________________________
      </div>
    <div className="row mt-3">
      <AddEmail/>
      </div>
      <div className="row mt-3 d-flex justify-content-center align-items-center">
        ______________________________
      </div>
      <h2 className="row mt-3 d-flex justify-content-center align-items-center">
        Sites Supported (".ca" sites only): 
      </h2>
    <div className="row mt-3 d-flex justify-content-center align-items-center">
      <div className="col-4">
        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/2560px-Costco_Wholesale_logo_2010-10-26.svg.png" alt="Costco"/>
      </div>
      <div className="col-4">
        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/2560px-Best_Buy_Logo.svg.png" alt="BestBuy"/>
      </div>
      <div className="col-4">
        <img className="img-fluid" src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" alt="Amazon"/>
      </div>
    </div>
  </div>
);
}
  
export default App;