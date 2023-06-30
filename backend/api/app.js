import express from "express";
import cors from "cors";
import "../src/utils/connection.js";
import Contact from "../src/utils/models.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  return res.json(contacts);
});

app.post("/contact/add", async (req, res) => {
  const contact = new Contact({
    nama: req.body.nama,
    number: req.body.number,
  });

  const result = await contact.save();
  return res.json(result);
});

app.post("/contact/edit", async (req, res) => {
  const id = req.query.id;
  const nama = req.body.nama;
  const number = req.body.number;

  const result = await Contact.findByIdAndUpdate(id, {
    nama: nama,
    number: number,
  });

  return res.json(result);
});

app.get("/contact/delete", async (req, res) => {
  const id = req.query.id;

  const result = await Contact.findByIdAndDelete(id);

  return res.json(result);
});

export default app;
