import createError from "http-errors";
import indexRouter from './routes/index.js';
import usersRouter  from './routes/users.js';

const configRoutes = (app) => {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);

    // catch 404 and forward to error handler
	app.use(function (req, res, next) {
		next(createError(404));
	});
	
	// error handler
	app.use(function (err, req, res, next) {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get("env") === "development" ? err : {};
	
		res.status(err.status || 500);
		res.send(err);
	});
};

export default configRoutes;