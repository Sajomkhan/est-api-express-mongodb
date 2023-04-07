const app = require("./app");
const config = require("./config/config");

// const PORT = 5000;
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});