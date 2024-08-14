//Database connection (Schema + Model)

const { Schema, model } = require("mongoose"); // Destructure {}

const userSchema = new Schema(
  {
    name: { type: String, require: true }, //Validation
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    // "enum" le cheej haru lai fixed rakh xa, aaru kasai le na chalawos bhanye ra ho. system le didai na.
    roles: { type: [String], enum: ["admin", "user"], default: ["user"] }, //user le sign in garda ["admin","user","manager"], yesle testo kam garxa.
    isActive: { type: Boolean, require: true, default: true }, // jaba user le email lai verify gardai na taba samma uh active hudai na bhanye re bhanna khojyeko ho yo code le(isActive le kam gar xa), aaile default true matra rakhye ko ho.
  },
  { timestamps: true } //User kati din dekhi chalaako xa bhanye ra detail dinxa.
);

module.exports = new model("User", userSchema);
