import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './Root'
import App from './pages/App'
import NewsDetail from './pages/NewsDetail'
import Themes from './pages/Themes'
import ThemesList from './pages/ThemeList'
import About from './pages/About'
Vue.use(VueRouter)
const routers=[{
	path:'/',
	component:App
},{
	path:'/app',
	component:App
},{
	path:'/news-detail/:id',
	name:'news-detail',
	component:NewsDetail
},{
	path:'/themes',
	component:Themes
},{
	path:'/theme-list/:id',
	name:'theme-list',
	component:ThemesList
},{
	path:'/about',
	component:About
}]
export const router=new VueRouter({
  routes:routers,
  hashbang:true
})
