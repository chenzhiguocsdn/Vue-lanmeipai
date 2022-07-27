// 创建服务
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8888;
app.use(cors());

var jwt = require("jsonwebtoken");

const secret = require("./secret");

// 登录接口
app.get("/login", (req, res) => {
  let user = req.query.user;
  // let pwd = req.query.pwd;

  const token = jwt.sign({ user, id: 123 }, secret.secretKey, {
    expiresIn: "1h",
  });
  res.send({
    info: "success",
    status: 200,
    token,
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
