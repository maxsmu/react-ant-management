/**
 * @author: Michael
 * @date: 2017-07-17 16:27:20
 * @last modified by: Michael
 * @last modified time: 2017-07-17 16:27:20
 * @gitHub: https://github.com/maxsmu
*/
const open = require('open');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname));

app.use(morgan('dev'));

const router = express.Router();

// 利用立即执行函数完成mock数据注入
app.use((function genRouters(router) {
	const routers = [];
	const baseURl = './mock';
	fs.readdirSync(baseURl).forEach(url => {
		routers.push(require(`${baseURl}/${url}`));
	});
	routers.forEach(config => {
		Object.keys(config).forEach(url => {
			Object.keys(config[url]).forEach(setting => {
				router[setting](url, config[url][setting]);
			});
		});
	});
	return router;
})(router));

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.send(err.message);
	});
}

app.set('port', process.env.PORT || 8888);

const server = app.listen(app.get('port'), () => {
	console.log('前端服务器已启动.');
	console.log(`访问地址: http://127.0.0.1:${server.address().port}\n`);

	// 自动打开浏览器
	open('http://localhost:' + server.address().port);
});

module.exports = app;
