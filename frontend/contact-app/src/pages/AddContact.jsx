import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const addContactListener = async (event) => {
    event.preventDefault();

    const request = await fetch(
      "https://api-contact-app-mongodb.vercel.app/contact/add",
      {
        method: "POST",
        body: JSON.stringify({
          nama: name,
          number: number,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    navigate("/");

    return request.json();
  };

  return (
    <div>
      <h1>Add New Contact</h1>

      <form action="" onSubmit={addContactListener}>
        <label>Name</label> <br />
        <input
          type="text"
          name="nama"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        <br />
        <label>Phone Number</label> <br />
        <input
          type="text"
          name="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddContact;
