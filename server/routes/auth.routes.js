const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const tokenService = require("../services/token.service");
const { generateUserData } = require("../utils/helper");
const User = require("../modals/User");
const router = express.Router({ mergeParams: true });

// /api/signUp
// 1. get data from req (email, password ...)
// 2. check if user already существует
// 3. hash password
// 4. create user
// 5. Сгенерировать jwt token and refresh token
// /api/signUp
router.post("/signUp", [
  check("password", "Минимальная длина паароля 8 символов").isLength({
    min: 8,
  }),
  check("email", "Некорректная почта").isEmail(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
          },
        });
      }

      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          error: {
            message: "EMAIL_EXISTS",
            code: 400,
          },
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        ...generateUserData(),
        ...req.body,
        password: hashedPassword,
      });
      const tokens = tokenService.generate({ _id: newUser._id });
      await tokenService.save(newUser._id, tokens.refreshToken);

      res.status(200).send({ ...tokens, userId: newUser._id });
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка",
      });
    }
  },
]);

// /api/signInWithPassword
// 1. Провалидировать входящие данные
// 2. Найти пользователя
// 3. Сравнить hashed password
// 4. Если все хорошо, то тогда должны сгенерировать  tokens  (refresh and access)
// 5. Вернуть все необходимые данные
router.post("/signInWithPassword", [
  check("email", "Почта некорректная").normalizeEmail().isEmail(),
  check("password", "пароль не может быть пустым").exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_PASSWORD",
          },
        });
      }
      const { password, email } = req.body;
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({
          error: {
            message: "EMAIL_NOT_FOUND",
          },
        });
      }

      const isPasswordEqual = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordEqual) {
        res.status(400).json({
          error: {
            message: "INVALID_PASSWORD",
          },
        });
      }
      const tokens = tokenService.generate({ _id: existingUser._id });
      await tokenService.save(existingUser._id, tokens.refreshToken);

      res.status(200).send({ ...tokens, userId: existingUser._id });
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка",
      });
    }
  },
]);

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}
// /api/token
router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tokens = await tokenService.generate({
      _id: data._id,
    });
    await tokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка",
    });
  }
});

module.exports = router;
