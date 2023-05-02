import React from 'react';
import './style.css';

function ItemsDisplay({ items, deleteItem, loading }) {
  if (loading) {
    return (
      <div className="text-center" style={{ fontSize: '2em', fontWeight: 'bold' }}>
        Loading...
      </div>
    );
  }

  const showItem = (item, index) => {
    return (
      <tr key={item.id}>
        <td className="align-middle text-white">{index + 1}</td>
        <td className="align-middle text-white">{item.name}</td>
        <td className="align-middle text-white">
          <img src={item.Pic} className="img-thumbnail" alt={item.name} style={{ width: '100px' }} />
        </td>
        <td className="align-middle text-white">{item.title}</td>
        <td className="align-middle text-white">{item.inStock}</td>
        <td className="align-middle text-white">${item.price}</td>
        <td className="align-middle">
          <u className="text-white">{item.type}</u>
        </td>
        <td className="url-column align-middle text-white">${item.priceURL}</td>
        <td className="text-center" style={{ verticalAlign: "middle", padding: "10px" }}>
          <button 
            className="align-middle btn btn-danger custom-btn"
            style={{ fontWeight: 'bold', borderColor: 'red' }}
            onClick={() => deleteItem(item)}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center text-white">- Items Being Tracked -</h2>
      </div>
      <div className="row">
        <table className="table table-striped" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th scope="col" className="text-center text-white">
                ITEM NUMBER
              </th>
              <th scope="col" className="text-center text-white">
                ITEM DESCRIPTION
              </th>
              <th scope="col" className="text-center text-white">
                PICTURE
              </th>
              <th scope="col" className="text-center text-white">
                ITEM TITLE
              </th>
              <th scope="col" className="text-center text-white">
                AVAILABILITY
              </th>
              <th scope="col" className="text-center text-white">
                ALERT PRICE
              </th>
              <th scope="col" className="text-center text-white">
                URL
              </th>
              <th scope="col" className="text-center text-white">
                CURRENT PRICE
              </th>
              <th scope="col" className="text-center text-white">
                REMOVE ITEM
              </th>
            </tr>
          </thead>
          <tbody>{items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
