const router = require("express").Router();
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * This router is to create a POST API for user registration. This API can be tested on Postman
 * with route '/auth/register' at the end of the server_url.
 */
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, passwordVerify } =
      req.body;

    /**
     * The validation is required to check for wrong data inputs.
     */

    /**
     * 1) The below validation checks for missing email/password/passwordVerify fields.
     */
    if (!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    /**
     * 2) The below validation checks for the length. It throws an error if the length is
     * less than 6 characters.
     */
    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    /**
     * 3) The below validaton checks for the phone number length to be exactly 10 characters long.
     */
    if (phone.length != 10)
      return res.status(400).json({
        errorMessage: "Please enter 10 digit number",
      });

    /**
     * 4) The below validation checks if the password field is same as the confirm password field
     */
    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
      });
    /**
     * 5) The below validation check for the existing email. If the email already exits, new registration
     * should not happen with the same email.
     */
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    /**
     * Hashed the password using bcrypt so that no one can will be able to see the password
     * that's stored in the database.
     */
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    /**
     * Creating an object for the new User with the required fields
     */
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      passwordHash,
    });

    /**
     * Using the function save(), the data will be stored in the database.
     */
    const savedUser = await newUser.save();

    /**
     * After storing the data into the database, a new token will be generated. This token will is helpful
     * for the session management.
     */
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    /**
     * The below response will create a cookie using the token generated above.
     */
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    /**
     * If there is an error sending the response, the error is being logged into the console.
     */
    console.error(err);
    res.status(500).send();
  }
});

/**
 * This router is to create a POST API for user login. This API can be tested on Postman
 * with route '/auth/login' at the end of the server_url.
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    /**
     * The validation is required to check for wrong data inputs.
     */

    /**
     * 1) The below validation checks for missing email field.
     */
    if (!email)
      return res
        .status(400)
        .json({ errorMessage: "Please enter email required field." });
    /**
     * 2) The below validation checks for missing password field.
     */
    if (!password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter passowrd required field." });

    /**
     * Find if the provided email is present in the database
     */
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    /**
     * Compare the provided password with the hashed password inside the database.
     * If the passowrds doesn't match return error.
     */
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    /**
     * If the email and psswords are matched, create a token for the user using JWT
     */
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    /**
     * After creating the token, the cookie with the token will be generated to achieve
     * the session management flow.
     */
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 300,
      })
      .json({ user: existingUser });
  } catch (err) {
    /**
     * If there is an error sending the response, the error is being logged into the console.
     */
    console.error(err);
    res.status(500).send();
  }
});

/**
 * This router is to create a GET API for user logout. This API will make make the expires field of a cookie
 * to 0 seconds so that the token will be expired instantly.
 */
router.get("/logout", (req, res) => {
  res
    .cookie("token", "none", {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 1000),
      secure: true,
      sameSite: "none",
    })
    .send();
});

/**
 * This router is to create a GET API for user login status.
 * This API will return either true or false based on te login status of the user.
 * This function is required to make the routes private to the user in the client side.
 */
router.get("/loggedIn", (req, res) => {
  try {
    /**
     * A constant to request the token
     */
    const token = req.cookies.token;
    /**
     * If there's no token present, it will return fasle.
     */
    if (!token) return res.json(false);

    /**
     * Otherwise, it will verify the token present and return true.
     */
    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});
/**
 * The module is being exported as router so that this module can be imported into other modules.
 */
module.exports = router;
