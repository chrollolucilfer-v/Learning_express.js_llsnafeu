import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("ALl Teacher");
});
router.post("/create", (req, res) => {
  res.send("Sign in new Teacher");
});
router.put("/update", (req, res) => {
  res.send("update  Teacher");
});
router.delete("/delete", (req, res) => {
  res.send("delete Teacher");
});


export default router;