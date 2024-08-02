import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(
    `PATH: ${req.path}, METHOD: ${req.method}, ERROR: ${error.message}`
  );

  return res.status(500).send("Internal Server Error");
};

export default errorHandler;
