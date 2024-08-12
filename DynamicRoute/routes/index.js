const router = require("express").Router();

const userRouter = require("../modules/users/user.route");
router.use("/users", userRouter);

const roomRouter = require("../modules/rooms/room.route");
router.use("/rooms", roomRouter);

module.exports = router;
