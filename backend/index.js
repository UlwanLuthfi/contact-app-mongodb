import app from "./api/app.js";

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Listening at port : ${port}`);
});
