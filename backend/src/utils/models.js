import mongoose from "mongoose";

const Contact = mongoose.model("contact", {
  nama: {
    type: String,
    require: true,
  },
  number: {
    type: String,
    require: true,
  },
});

export default Contact;
