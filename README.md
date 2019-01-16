# Vue2.0
Projects about vue.js
##知乎日报Web APP
- 该项目使用vue-cli构建、打包，采用vue+vue-router+vuex技术进行开发，使用axios进行网络请求，后台使用Node.js作中转，
实现跨域访问知乎日报API，部署上线。
- 子目录zhihudailyfrontenddev是前端的源码，下载后安装依赖的模块，npm run dev即可。
- 子目录zhihudailyfrontendbuild是用webpack打包后的前端的源码。下载后在浏览器打开index.html即可。
- 子目录zhihuserver是用node.js+express来作中转，实现跨域访问知乎日报API。下载后安装依赖的模块，node /bin/www即可启动。
