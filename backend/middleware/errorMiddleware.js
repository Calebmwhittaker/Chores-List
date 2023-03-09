//Init errorHandler Middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; //Defines the error status code
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, //If not production environment, return err.stack
  });
  next();
};

//Export errorHandler Middleware
module.exports = errorHandler;
