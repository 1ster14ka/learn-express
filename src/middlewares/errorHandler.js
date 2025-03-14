import { HttpError } from "http-errors";

export const errorHandler = async (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }
  res.status(500).json({
    message: "Something went wrong",
    error: err.message,
  });
  next();
};

export const notFoundHandler = async (req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
  next();
};
