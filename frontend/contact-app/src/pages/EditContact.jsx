import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditContact() {
  const [searchParams] = useSearchParams();
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const getContactById = async () => {
      const request = await fetch(
        "https://api-contact-app-mongodb.vercel.app/"
      );
      const response = await request.json();

      const filteredContact = response.filter(
        (contact) => contact._id == searchParams.get("id")
      );

      setContact(filteredContact[0]);
    };
    getContactById();
  }, [searchParams]);

  const editContactListener = async (event) => {
    event.preventDefault();

    if (name == "") name = contact.nama;
    if (number == "") number = contact.number;

    const request = await fetch(
      `https://api-contact-app-mongodb.vercel.app/contact/edit?id=${searchParams.get(
        "id"
      )}`,
      {
        method: "POST",
        body: JSON.stringify({
          nama: name,
          number: number,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    navigate("/");

    return request.json();
  };

  return (
    <div>
      <h1>Edit Contact</h1>

      <form action="" onSubmit={editContactListener}>
        <label>Name</label> <br />
        <input
          type="text"
          name="nama"
          defaultValue={contact.nama}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Phone Number</label> <br />
        <input
          type="text"
          name="number"
          defaultValue={contact.number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditContact;
