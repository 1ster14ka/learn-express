import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../services/students.js";
import createHttpError from "http-errors";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";

export const getStudentsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const students = await getAllStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
    data: students,
  });
};

export const getStudentByIdController = async (req, res) => {
  const { studentId } = req.params;

  const student = await getStudentById(studentId);

  if (!student) {
    throw createHttpError(404, "Student not Found");
  }

  res.status(200).json({
    data: student,
  });
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully created a student!",
    data: student,
  });
};

export const deleteStudentController = async (req, res, next) => {
  const { studentId } = req.params;

  const student = await deleteStudent(studentId);

  if (!student) {
    next(createHttpError(404, "Student not found"));
  }
  res.status(204).send();
};

export const upsertStudentController = async (req, res, next) => {
  const { studentId } = req.params;

  const result = await updateStudent(studentId, req.body, {
    upsert: true,
  });
  if (!result) {
    next(createHttpError(404, "Not found student"));
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status: status,
    message: "Update student",
    data: result.student,
  });
};

export const patchStudentsController = async (req, res, next) => {
  const { studentId } = req.params;
  const result = await updateStudent(studentId, req.body);

  if (!result) {
    next(createHttpError(404, "Student not found"));
  }

  res.status(201).json({
    status: 201,
    message: "Create student",
    data: result.student,
  });
};
