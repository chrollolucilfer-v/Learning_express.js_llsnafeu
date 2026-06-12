import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("ALl Student");
});
router.post("/create", (req, res) => {
  res.send("Sign in new student");
});
router.put("/update", (req, res) => {
  res.send("update  Student");
});
router.delete("/delete", (req, res) => {
  res.send("delete Student");
});


export default router;