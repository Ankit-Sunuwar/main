const router = require("express").Router();

const roomRouter = require("../modules/rooms/room.route");
const userRouter = require("../modules/users/user.route");

router.use("/rooms", roomRouter);
router.use("/users", userRouter);

module.exports = router;
