/**
 * Created by Administrator on 2019/03/15.
 */
//定义M模块，本申明一个全局变量
define('M',[],function(){
    window.M={};
    return M;
})
//定义模块a 依赖模块 M,b,c
define('a',['M','b','c'],function(M){
    alert(M.ob);
    alert(M.oc);
})
//定义b模块
define('b',[],function(){
    M.ob = 2;
    return M;
})
//定义c模块
define('c',[],function(){
    M.oc = 3;
    return M;
})
//引入a模块
require(['a'],function(a){

})
