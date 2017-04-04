var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var ses=require('express-session');
var coo=require('cookie-parser');
//定义服务器
var app=express();
//session-----cookie配置
app.use(coo());
app.use(ses({
    secret: ''+new Date().getTime(),
    cookie: {maxAge: 800000 },
    resave:false,
    saveUninitialized: true
}));
//拦截处理
app.use(function (req,res,next){
    if(req.session.name){
            app.locals["ids"] = req.session.ids;
            app.locals["name"] = req.session.name;
            app.locals["img"] = req.session.img;
    }else {
        app.locals["ids"] = '';
        app.locals["name"] = '';
        app.locals["imgurl"] = '';
    }
    next();
});

//自定义路由
//前端
var index= require('./routes/index/index');
var category= require('./routes/index/category');
var login= require('./routes/index/login');
var user= require('./routes/index/user');
var show= require('./routes/index/show');
var reg= require('./routes/index/reg');
var xiewenzhang= require('./routes/index/xiewenzhang');
var close= require('./routes/index/close');
var multer=require('multer');
//后台
var hindex=require('./routes/admin/index');
var hadv=require('./routes/admin/adv');
var hlogin=require('./routes/admin/login');
var hcateedit=require('./routes/admin/cateedit');
var hcolumn=require('./routes/admin/column');
var hinfo=require('./routes/admin/info');
var hlist=require('./routes/admin/list');
var hpage=require('./routes/admin/page');
var hpass=require('./routes/admin/pass');
var htips=require('./routes/admin/tips');
var hadd=require('./routes/admin/add');
var hclose=require('./routes/admin/close');
var hwelcome=require('./routes/admin/welcome');
// 页面渲染设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);
//不知道干什么的中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//定义静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
//浏览器输入的路由地址
//前端
app.use('/',index);
app.use('/index',index);
app.use('/category',category);
app.use('/show',show);
app.use('/login',login);
app.use('/user',user);
app.use('/reg',reg);
app.use('/xiewenzhang',xiewenzhang);
app.use('/close',close);
// 后台
app.use('/hindex',hindex);
app.use('/hadv',hadv);
app.use('/hcateedit',hcateedit);
app.use('/hlogin',hlogin);
app.use('/hpage',hpage);
app.use('/hcolumn',hcolumn);
app.use('/hlist',hlist);
app.use('/hinfo',hinfo);
app.use('/hpass',hpass);
app.use('/htips',htips);
app.use('/hadd',hadd);
app.use('/hclose',hclose);
app.use('/hwelcome',hwelcome);
//文件上传
// //配置
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.dir(file);
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '' + Date.now()+ "." + fileFormat[fileFormat.length - 1]);
    }
});
var load= multer({
    storage: storage
});
app.post('/upload',load.single('data'), function (req, res, next) {
    res.send(req.file.filename);
});

//转成模块发出去
module.exports = app;
