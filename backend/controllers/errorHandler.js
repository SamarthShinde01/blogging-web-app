const errorHandler = (error, req, res, next) => {
	res.status(error.status || 500);

	res.json({
		message: error.message || "Something went wrong",
		status: error.statusCode || 500,
		stack: process.env.NODE_ENV !== "production" ? error.stack : null,
	});
};

export default errorHandler;
