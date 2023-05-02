import { useState, useEffect } from "react";

function AddEmail() {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState("Loading...");

  useEffect(() => {
    fetch("/get-email")
      .then(response => response.json())
      .then(data => {
        if (data.email.length < 1) {
          setDisplay("No Email Set");
        } else {
          setDisplay(data.email);
        }
      })
      .catch(error => {
        console.error("Error fetching email:", error);
        setDisplay("Error fetching email.");
      });
  }, []);

  const addEmailButtonPressed = () => {
    fetch("/update-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(() => {
        setDisplay(email);
        setEmail("");
      })
      .catch(error => {
        console.error("Error updating email:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">
           - Add a Gmail Address to Receive Alerts -
        </h2>
      </div>
      <div className="row">
        <label htmlFor="name-field" className="text-center">
          (CURRENT EMAIL) = {display}
        </label>
        <input
          id="name-field"
          className="form-control"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="row mt-3">
        <button
          type="button"
          className="btn btn-primary font-weight-bold text-black my-button" style={{backgroundColor: '#00FFFF', fontWeight: 'bold', borderColor: 'black'}}
          onClick={addEmailButtonPressed}
        >
          Add/Update Email
        </button>
      </div>
    </div>
  );
}

export default AddEmail;
