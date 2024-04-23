const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    id: "2333",
    title: "hello",
    imgURl: "lasdjfbdk",
  });
});

module.exports = router;

router.post("/all", (req, res) => {
  res.json({
    data: [
      {
        title: "hello",
      },
      {
        title: "hi",
      },
    ],
  });
});
