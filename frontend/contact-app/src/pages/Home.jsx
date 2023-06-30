import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const request = await fetch(
        "https://api-contact-app-mongodb.vercel.app/"
      );
      const response = await request.json();

      setContacts(response);
    };
    getContact();
  }, []);

  // const deleteContactHandler = async (id) => {
  //   if (!confirm("Yakin mau dihapus?")) return false;

  //   const request = await fetch(
  //     `https://api-contact-app-mongodb.vercel.app/contact/delete?id=${id}`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: id,
  //       }),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );

  //   return request.json();
  // };

  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="contact/add">Add New Contact</Link>
      <br />
      <br />
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>

        {contacts.map((contact, i) => {
          i++;
          return (
            <tbody key={contact._id}>
              <tr>
                <td>{i++}</td>
                <td>{contact.nama}</td>
                <td>{contact.number}</td>
                <td>
                  <Link to={`contact/edit?id=${contact._id}`}>Edit</Link>
                  <span> | </span>
                  <Link
                    to={`https://api-contact-app-mongodb.vercel.app/contact/delete?id=${contact._id}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Home;
