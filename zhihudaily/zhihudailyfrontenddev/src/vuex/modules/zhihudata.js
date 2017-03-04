import * as types from '../zhihu-types.js'
import axios from 'axios'
var moment=require('moment')
const state={
	NewsListRoot:[],
	NewsLatest:{},
	time:moment(),
	LoadingOne:false,
	LoadingTwo:true,
	NewsDetail:{},
	Themes:{},
	ThemeList:{}
}
 // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
const getters={
	[types.DONE_LOADING_TWO]:state=>{//与[types.DONE_LOADING_TWO](state){}一样
		return state.LoadingTwo;
	},
	[types.DONE_LOADING_ONE]:state=>{//与[types.DONE_LOADING_TWO](state){}一样
		return state.LoadingOne;
	},
	[types.DONE_NEWS_LATEST]:state=>{
		return state.NewsLatest;
	},
	[types.DONE_NEWS_LIST_ROOT]:state=>{
		return state.NewsListRoot;
	},
	[types.DONE_NEWS_DETAIL]:state=>{
		return state.NewsDetail;
	},
	[types.DONE_THEMES]:state=>{
		return state.Themes;
	},
	[types.DONE_THEME_LIST]:state=>{
		return state.ThemeList;
	}
}

const mutations={
	[types.TOGGLE_NEWS_LATEST](state,all){
		state.NewsListRoot.push(all);
		state.NewsLatest=all;
		state.LoadingTwo=false;
	},
	[types.TOGGLE_NEWS_LATEST_MORE](state,all){
		state.NewsListRoot.push(all);
		state.time.subtract(1,"days");
		state.LoadingOne=false;
	},
	[types.TOGGLE_NEWS_DETAIL](state,all){
		String.prototype.replaceAll=function(s1,s2){
			return this.replace(new RegExp(s1, "gm"),s2);
		}
		all.body=all.body.replaceAll('src=\"','src=\"http://119.29.60.189:3000/zhihu/resource?url=');
		all.body=all.body.replaceAll('<div class=\"img-place-holder\"></div>','');//顶部的图片不显示
		state.NewsDetail=all;
		state.LoadingTwo=false;
	},
	[types.TOGGLE_THEMES](state,all){
		state.Themes=all;
		state.LoadingTwo=false;
	},
	[types.TOGGLE_THEME_LIST](state,all){
		state.ThemeList=all;
		state.LoadingTwo=false;
	}
}
const actions={
	[types.FETCH_NEWS_LATEST]({commit}){
		state.LoadingTwo=true;
		axios.get('http://119.29.60.189:3000/zhihu/news/latest').then(res=>{
			commit(types.TOGGLE_NEWS_LATEST,res.data);
		}).catch(err=>console.log(err));
	},
	[types.FETCH_NEWS_LATEST_MORE]({commit}){
		state.LoadingOne=true;
		var time=state.time.format("YYYYMMDD");
		axios.get('http://119.29.60.189:3000/zhihu/before/'+time).then(res=>{
			commit(types.TOGGLE_NEWS_LATEST_MORE,res.data);
		}).catch(err=>console.log(err));
	},
	[types.FETCH_NEWS_DETAIL]({commit},id){
		state.LoadingTwo=true;
		axios.get('http://119.29.60.189:3000/zhihu/news/'+id).then(res=>{
			commit(types.TOGGLE_NEWS_DETAIL,res.data);
		}).catch(err=>console.log(err));
	},
	[types.FETCH_THEMES]({commit}){
		state.LoadingTwo=true;
		axios.get('http://119.29.60.189:3000/zhihu/themes').then(res=>{
			commit(types.TOGGLE_THEMES,res.data);
		}).catch(err=>console.log(err));
	},
	[types.FETCH_THEME_LIST]({commit},id){
		state.LoadingTwo=true;
		axios.get('http://119.29.60.189:3000/zhihu/theme-list/'+id).then(res=>{
			commit(types.TOGGLE_THEME_LIST,res.data);
		}).catch(err=>console.log(err));
	}
}
export default {
	state,getters,mutations,actions
}        