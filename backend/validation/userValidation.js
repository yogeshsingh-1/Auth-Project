const zod = require("zod");

class UserValidation {
  signupbodyvalidation(userData) {
    const userValidate = zod.object({
      name: zod.string().min(3, "Name is required"),
      email: zod.string().email("Invalid email format"),
      password: zod.string().min(5, "Password must be at least 5 characters"),
      role: zod.string().optional(),
    });

    const { success } = userValidate.safeParse(userData);
    return success;
  }
}

module.exports = new UserValidation();
