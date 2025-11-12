
// standardize response function
const handleResponse = (res, success, message, data = null, statusCode = 200) => {
  res.status(statusCode).json({
    success,
    message,
    data: data ? data : null
  });
};

export default handleResponse;
