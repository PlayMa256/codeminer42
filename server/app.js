import express from 'express';
import orm from 'orm';
const app = express();

app.use(orm.express("mysql://homestead:secret@localhost/zombies", {
	define: (db, models, next) => {
		models.person = db.define("person", {});
		next();
	}
}));

export default app;