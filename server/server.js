require("dotenv").config();
const app = require("./src/app");
const { PORT } = process.env || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
