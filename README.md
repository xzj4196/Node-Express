# Node-Express
自己没事测试着玩


 #
  全局安装 node  express  #
  npm install -g express  #
  npm install -g express-generator  #
  使用 express -v查看版本号判断是否成功  #

#
   生成项目基本框架  #
   express projectName  #  
   默认是jade，如果想要使用ejs，使用 express -e projectName命令   #
   
   
   初始化下载需要的模块   # 
   cd projectName    -->  npm install    #
   
   运行项目  #
   npm start  #
   
  ##################################
  
		  加载页面为html
		  把默认的ejs替换
		  //app.set('views', path.join(__dirname, 'views'));
		//app.set('view engine', 'html');
		  
		  换为：
			  var ejs = require('ejs');
			app.engine('.html', ejs.__express);
			app.set('view engine', 'html');
   
      页面加载css  js静态文件
	  app。js加入：
	     app.use(express.static(path.join(__dirname, 'public')));   加载public文件夹
	  
	  页面上link  script  src 跟正常的页面引用一样
   
   
  ##################################
  
		  配置数据库 MySQL
		   在package.json中加入最后加入"mysql": "^2.16.0"
			 
			 例如：
						 {
					  "name": "mymodule",
					  "version": "0.0.0",
					  "private": true,
					  "scripts": {
						"start": "node ./bin/www"
					  },
					  "dependencies": {
						"cookie-parser": "~1.4.3",
						"debug": "~2.6.9",
						"ejs": "~2.5.7",
						"express": "~4.16.0",
						"http-errors": "~1.6.2",
						"morgan": "~1.9.0",
						"mysql": "^2.16.0"
					  }
					}
		  
  ##################################
