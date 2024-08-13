const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
  },
});

const upload = multer({ storage });

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

router.post("/register", upload.single("profilePic"), (req, res, next) => {
  try {
    console.log({ pic: req?.file });
    res.json({ data: "User Registered Sucessfully" });
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
