import Joi from "joi";

export const createStudentsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(18).max(99).required(),
  gender: Joi.string().valid("male", "female", "other").required(),
  avgMark: Joi.string().required(),
  onDuty: Joi.boolean().required(),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  age: Joi.number().integer().min(18).max(99),
  gender: Joi.string().valid("male", "female", "other"),
  avgMark: Joi.string(),
  onDuty: Joi.boolean(),
});
