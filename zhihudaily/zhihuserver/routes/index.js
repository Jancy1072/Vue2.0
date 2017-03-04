var express = require('express');
var request = require('request');
var router = express.Router();
// var url = require('url');
// var http = require('http');
router.get('/zhihu/news/latest', function(req, res, next) {
  var options = {
       method: "GET",
       url: "http://news-at.zhihu.com/api/4/news/latest"
   };
   request(options, function(error, response, body) {
       if (error) throw new Error(error);
       res.json(JSON.parse(body))
   });
});
//详情
router.get('/zhihu/news/:Pid',function(req,res,next){
	var url2="http://news-at.zhihu.com/api/4/news/"+req.params.Pid;
	var options = {
	     method: "GET",
	     url:url2
	 };
	 request(options, function(error, response, body) {
	     if (error) throw new Error(error);
	     res.json(JSON.parse(body))
	 });

})
// 图片
router.get('/zhihu/resource',function(req,res,next){
	var url2=req.query.url;
	var options = {
	     method: "GET",
	     url:url2,
	     headers:{
	     	"Referer": "https://daily.zhihu.com/"
	     }
	 };
	 request(options).pipe(res);

    // 法2：var imgUrl = url.parse(req.query.url);
    // imgUrl.headers = {
    //         "Referer": "https://daily.zhihu.com/"
    //     };
    // var opt={
    //     hostname:imgUrl.hostname,
    //     port:'80',
    //     path:imgUrl.path,
    //     headers:imgUrl.headers
    // }
    // var request = http.request(opt);
    // request.on('response', function(response) {
    //     var c = "";
    //     response.setEncoding('binary');
    //     response.on('data', function(chunk) {
    //         c += chunk;
    //     });
    //     response.on('end', function() {
    //         res.writeHead(200, response.headers);
    //         res.write(c, "binary");
    //         res.end();
    //     })
    // });
    // request.end();
})
//更多
router.get('/zhihu/before/:time',function(req,res,next){
  var url2="http://news-at.zhihu.com/api/4/news/before/"+req.params.time;
  var options = {
       method: "GET",
       url:url2
   };
   request(options, function(error, response, body) {
       if (error) throw new Error(error);
       res.json(JSON.parse(body))
   });

})
// Themes
router.get('/zhihu/themes',function(req,res,next){
  var url2="http://news-at.zhihu.com/api/4/themes";
  var options={
    method:"GET",
    url:url2
  };
  request(options,function(error,response,body){
    if(error) throw new Error(error);
    res.json(JSON.parse(body));
  })
})
router.get('/zhihu/theme-list/:id',function(req,res,next){
  var url2="http://news-at.zhihu.com/api/4/theme/"+req.params.id;
  var options={
    method:"GET",
    url:url2
  };
  request(options,function(error,response,body){
    if(error) throw new Error(error);
    res.json(JSON.parse(body));
  })
})

module.exports = router;
