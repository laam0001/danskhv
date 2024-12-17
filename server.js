// const express = require("express");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// const PASSWORD = process.env.PASSWORD;

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.post("/login", (req, res) => {
//   const { password } = req.body;
//   if (password === PASSWORD) {
//     res.redirect("/protected");
//   } else {
//     res.send('Incorrect password. <a href="/">Try again</a>.');
//   }
// });

// app.get("/protected", (req, res) => {
//   res.sendFile(path.join(__dirname, "src", "index.astro"));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
