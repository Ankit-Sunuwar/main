const router = require("express").Router();

const verify = (req, res, next) => {
  const role = req.headers.role;
  if (role === "admin") {
    next();
  } else {
    throw new Error("You are not authorized");
  }
};

const verify2 = (req, res, next) => {
  const role = req.headers.roles;
  if (role === "user") {
    next();
  } else {
    throw new Error("You are not authorized");
  }
};

//Read all data
router.get("/", verify, verify2, (req, res, next) => {
  //query
  // try,catch,throw ehni haru sabai error handling haru ho
  try {
    res.json({ data: `I have number of users` });
  } catch (e) {
    next(e);
  }
});

//Read one data
router.get("/:id", (req, res, next) => {
  //params
  try {
    res.json({ data: `get data from user id ${req?.params?.id}` });
  } catch (e) {
    next(e);
  }
});

//Create
router.post("/", (req, res, next) => {
  // body
  try {
    console.log(req?.body);
    res.json({ data: "Hello data from user" });
  } catch (e) {
    next(e);
  }
});

//Update
router.put("/:id", (req, res) => {
  //params + body
  try {
    console.log(req?.body);
    res.json({ data: `put data from user id ${req?.params?.id}` });
  } catch (e) {
    next(e);
  }
});

//Update
router.patch("/:id", (req, res) => {
  //params + body
  try {
    console.log(req?.body);
    res.json({
      data: `patch data from user id ${req?.params?.id} `,
    });
  } catch (e) {
    next(e);
  }
});

//Delete
router.delete("/:id", (req, res) => {
  //params
  try {
    res.json({ data: `delete data from user id ${req?.params?.id}` });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
