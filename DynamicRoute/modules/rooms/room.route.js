const router = require("express").Router();

const roomController = require("./room.controller");

// Read
//list
router.get("/", async (req, res, next) => {
  try {
    const result = await roomController.list();
    res.json({ data: result, msg: "list of all room found sucessfully" });
  } catch (e) {
    next(e);
  }
});

//getByname
router.get("/:id", async (req, res, next) => {
  //parmas
  try {
    const result = await roomController.getById(req?.params?.id);
    res.json({ data: result, msg: "Room found sucessfuly" });
  } catch (e) {
    next(e);
  }
});

//Create
router.post("/", async (req, res, next) => {
  //body
  try {
    const result = await roomController.create(req?.body);
    res.json({ data: result, msg: "Room created sucessfully" });
  } catch (e) {
    next(e);
  }
});

//Update
router.put("/:id", async (req, res, next) => {
  try {
    const result = await roomController.updateById(req?.params, req.body);
    res.json({ data: result, msg: " Room updated sucessfully" });
  } catch (e) {
    next(e);
  }
});

//Update Status
router.patch("/:id", async (req, res, next) => {
  try {
    const result = await roomController.updateStatus(req?.params?.id);
    res.json({ data: result, msg: "Room updated status sucessfully" });
  } catch (e) {
    next(e);
  }
});

//Delete
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await roomController.delete(req?.body);
    res.json({ data: result, msg: "Room delete sucessfully" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
