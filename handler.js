const handler = (req, res) => {
  //check header content type
  //   console.log(req.get("accept"));
  // E__________N_____D_______?_____

  // supporte my mani app
  //   console.log(req.app.get("view engine"));
  // E__________N_____D_______?_____
  // check Route type exmpale {
  //   path: '/dashboard',
  //   stack: [
  //     Layer {
  //       handle: [Function: handler],
  //       name: 'handler',
  //       params: undefined,
  //       path: undefined,
  //       keys: [],
  //       regexp: /^\/?$/i,
  //       method: 'get'
  //     }
  //   ],
  //   methods: { get: true }
  // }
  //   //check data type
  //   console.log(req.accepts("json"));
  res.send("welcome to my server");
};

module.exports = handler;
