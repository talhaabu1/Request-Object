const express = require("express");
const handler = require("./handler");
const app = express();
const port = 3000;

app.use(express.json());

const adminRoute = express.Router();

// adminRoute.get("/dashboard", (req, res) => {
//   // url get all methods not same
//   //   console.log(req.originalUrl);
//   //   console.log(req.baseUrl);
//   //   console.log(req.url);
//   //   console.log(req.path);
//   // ______E_______N___________D________?

//   // get the host name and ip and method and protocol
//   //   console.log(req.hostname);
//   //   console.log(req.ip);
//   //   console.log(req.method);
//   //   console.log(req.protocol);
//   // ______E_______N___________D________?

//   //

//   res.send("welcome to my server 👨‍🦲 🖤 //....");
// });

// call function athour file type handler.js write handle and ather work
adminRoute.get("/dashboard", handler);

app.use("/admin", adminRoute);

app.post("/user", (req, res) => {
  // check you http ture or false
  console.log(req.secure);

  res.send("welcome to my server 👨‍🦲 🖤 ");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
