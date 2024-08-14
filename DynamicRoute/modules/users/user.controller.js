// Business Logic

const userModel = require("./user.model");
const { genHash, verifyHash } = require("../../utils/secure");

/* 
1. signup
2. login
3. forget password
4. update
5. create
6. delete
7. block
8. verify email
9. change password
10. reset password
*/

// dherai data ekkai choti aaunxa bhani teslai "payload" bhanxa.
const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = genHash(password);
  console.log({ rest });
  //   const result = await userModel.create(payload);
  //   return result;
};

module.exports = { create };
