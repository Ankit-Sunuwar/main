const Model = require("./room.model");

//CRUD

const create = async (payload) => {
  return Model.create(payload);
};

// Read 1 => List(admin) //Read ko lagi dui ota banaunu par xa.
const list = async () => {
  return Model.find();
};

// Read 2 => Get By name
const getById = async (roomNo) => {
  return Model.findOne({ number: roomNo });
};

// Update(post,put,patch based on requirement.)

// body ani body lai payload kina bhani dherai data pathau na/aaunxa.

// 1. Update Room Detail.
const updateById = async (roomNo, payload) => {
  return Model.updateOne({ number: roomNo }, payload); // payload ma jahile "{}" pathaunu parxa
};

// 2. Update status of room (room.model.js ko "isFilled" ko lagi)
const updateStatus = async (roomNo) => {
  const room = await Model.findOne({ number: roomNo }); // room check garyeko ho.
  if (!room) throw new Error("Room not found !");
  const { isFilled } = room;
  return Model.updateOne({ _id: id }, { isFilled: !isFilled }); //model ma 'false' xa ani call garda true hunxa bhanni update gar ya hp.
};

// Delete
const remove = async (roomNo) => {
  return Model.deleteOne({ number: roomNo });
};

module.exports = { create, list, getById, updateById, updateStatus, remove };
