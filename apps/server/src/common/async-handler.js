export function asyncHandler(fn) {
<<<<<<< HEAD
  return (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
=======
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      let message;
      let details;

      try {
        details = JSON.parse(err.message);
        message = details?.message;
      } catch (error) {
        message = err.message;
      }

      console.error({ message });

      if (err.statusCode) {
        res.status(err.statusCode).json({
          error: true,
          statusCode: err.statusCode,
          message: message,
          details: details,
          timestamp: new Date().toISOString(),
          path: req.url,
        });
      } else {
        res.status(500).json({
          error: true,
          statusCode: 500,
          message: 'Internal Server Error',
          timestamp: new Date().toISOString(),
          path: req.url,
        });
      }
    }
  };
}
>>>>>>> 46aeefd42e7b589e0b753a19d01b720ef05af41a
