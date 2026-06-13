import express from "express";


const allStudents = (req, res) => {
  res.send("All Students");
};

const newStudent = (req, res) => {
  res.send("creaete Student");
};

const updateStudent = (req, res) => {
  res.send("update Student");
};

const deleteStudent = (req, res) => {
  res.send("delete Student");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
