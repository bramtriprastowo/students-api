import { Request, Response } from "express";
import {Student} from "../models/students";

export const studentsController = {
    listStudents: async (_req: Request, res: Response) => {
        try {
            const result = await Student.findAll();
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    detailStudent: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).json({message: "id must be filled"});
            }
            const result = await Student.findOne({
                where: {
                    id
                }
            });
            if (!result) {
                return res.status(404).json({message: "Student not found!"});
            }
            return res.status(200).json({result});
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    insertStudent: async (req: Request, res: Response) => {
        try {
            const {name, size, birthdate, address, phone} = req.body;
            if (!name || !size || !birthdate || !address || !phone) {
                return res.status(400).json({message: "All fields must be filled!"});
            }
            const result = await Student.create({
                name,
                size,
                birthdate,
                address,
                phone
            });
            return res.status(201).json({message: "Insert new student successful!", data: result}); 
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    updateStudent: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {name, size, birthdate, address, phone} = req.body;
            if (!id) {
                return res.status(400).json({message: "id must be filled"});
            }
            const student = await Student.findOne({
                where: {
                    id
                }
            });
            if (!student) {
                return res.status(404).json({message: "Student not found!"});
            }  
            const result = await Student.update({
                name,
                size,
                birthdate,
                address,
                phone
            }, {where: {
                id 
            }});
            return res.status(200).json(result);   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    deleteStudent: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const student = await Student.findOne({
                where: {
                    id
                }
            });
            if (!student) {
                return res.status(404).json({message: "Student not found!"});
            }  
            await Student.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json({message: "Delete successful!"})
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
}