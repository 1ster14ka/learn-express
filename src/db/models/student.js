import { model, Schema } from "mongoose";

const studentsSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    avgMark: {
      type: String,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestemps: true,
    versionKey: false,
  }
);

export const StudentsCollection = model("students", studentsSchema);
