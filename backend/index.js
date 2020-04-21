import express from "express";
import bodyParser from "body-parser";
import errorhandler from "errorhandler";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import setCategoryServices from './services/seeddb';

let { findAllCategory} = setCategoryServices;
const app = express();
const environment = process.env.NODE_ENV;

require('dotenv').config();
if (environment !== 'developement') {
	app.use(errorhandler());
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.Promise = global.Promise

mongoose.connect(process.env.LOCAL_URI, { useCreateIndex: true })
	.then(() => {
		console.log('connected to mongoDB')
	})
	.catch(err => console.log('could not connect to mongoDB...', err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', (req, res) => res.status(301).redirect('/api'));
app.use('/api', router);

// app.use('*', (req, res) => res.status(404).json({
// 	status: res.statusCode,
// 	error: 'Sorry!!, the page you are looking for cannot be found',
// }));


let port = process.env.PORT || 5000;
app.listen(port, () => {
	return console.log("Listening on port ".concat(port, "..."));
});
export default app;