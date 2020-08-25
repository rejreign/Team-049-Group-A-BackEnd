const express = require("express");

const app = express();
const router = require("./router");

const PORT = 3000; // convert to a conditional based on environment

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public")); //may not be needed since we are using React

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
