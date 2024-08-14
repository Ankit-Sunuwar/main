const router = require("express").Router();
const multer = require("multer"); // Photo ko lagi ho.
const userController = require("./user.controller");

// Photo ko lagi ho, photo internal memory ma rakh xa.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
  },
});

const upload = multer({ storage });

// RBAC(role based access control)
const checkRole = (sysRoles = []) => {
  // system lai chaine role
  return (req, res, next) => {
    try {
      const { roles: userRole = [] } = req.headers; //user role
      console.log({ userRole });
      const isValidRole = sysRoles.some((role) => userRole.includes(role));
      if (!isValidRole) throw new Error("User unauthorized");
      next();
    } catch (e) {
      next(e);
    }
  };
};

// const verify = (req, res, next) => {
//   const role = req.headers.role;
//   if (role === "admin") {
//     next();
//   } else {
//     throw new Error("You are not authorized");
//   }
// };

//Read all data
router.get("/:id", checkRole(["admin"]), (req, res, next) => {
  //query
  // try,catch,throw ehni haru sabai error handling haru ho
  try {
    res.json({ data: `I have number of users` });
  } catch (e) {
    next(e);
  }
});

//Read one data
router.get("/", checkRole(["admin", "user"]), (req, res, next) => {
  //params
  try {
    res.json({ data: `get data from user id ${req?.params?.id}` });
  } catch (e) {
    next(e);
  }
});

//Create
router.post("/", async (req, res, next) => {
  // body
  try {
    const result = await userController.create(req.body);
    res.json({ data: result, msg: "User created successfully" });
  } catch (e) {
    next(e);
  }
});

// Photo ko lagi ho, yo ja pani rakh na milxa.
router.post("/register", upload.single("profilePic"), (req, res, next) => {
  try {
    const URL = "http://localhost:5555/resources//uploads/"; // yo developer's haru le photo ko url banauna user gar xa.
    const myPicture = URL + req?.file?.filename;
    res.json({ data: `User Registered Sucessfully in url ${myPicture}` });
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
