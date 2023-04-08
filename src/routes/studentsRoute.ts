import { Router } from "express";
import {studentsController} from "../controllers/students";

export const studentsRoute = Router();

studentsRoute.get("/students", studentsController.listStudents)
    .get("/students/:id", studentsController.detailStudent)
    .post("/students", studentsController.insertStudent)
    .put("/students/:id", studentsController.updateStudent)
    .delete("/students/:id", studentsController.deleteStudent);