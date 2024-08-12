const router = require("express").Router();

//Read all data
router.get("/", (req, res) => {
  //query
  console.log(req?.query);
  res.json({ data: "Hello from users id" });
});

//Read one data
router.get("/:id", (req, res) => {
  //params
  res.json({ data: `get data from user id ${req?.params?.id}` });
});

//Create
router.post("/", (req, res) => {
  // body
  console.log(req?.body);
  res.json({ data: "Hello from post user" });
});

//Update
router.put("/:id", (req, res) => {
  //params + body
  console.log(req?.body);
  res.json({ data: `put data from user id ${req?.params?.id}` });
});

//Update
router.patch("/:id", (req, res) => {
  //params + body
  console.log(req?.body);
  res.json({
    data: `patch data from user id ${req?.params?.id} `,
  });
});

//Delete
router.delete("/:id", (req, res) => {
  //params
  res.json({ data: `delete data from user id ${req?.params?.id}` });
});

module.exports = router;
