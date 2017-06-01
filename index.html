function lazyLoad(id) {
//确认操作容器
if (!id)
return;
this.container = document.getElementById(id);
this.box = this.container.parentNode;
//获取图片列表
this.imgs = this.getImgs();
//执行初始化
this.init();
}

lazyLoad.prototype = {
init : function() {
//加载当前视图图片
this.update();
//绑定事件
this.bindEvent();
},
getImgs : function() {
var arr = [], imgs = this.container.getElementsByTagName('img');
for (var i = 0, len = imgs.length; i < len; i++) {
arr.push(imgs[i]);
}
return arr;
},
update : function() {
//如图片都加载完成，返回
if (!this.imgs.length) {
return;
}
var i = this.imgs.length;
var realSrc = "";
for (--i; i >= 0; i--) {
if (this.shouldShow(i)) {
//加载图片
realSrc = this.imgs[i].getAttribute("data-src");
if(realSrc.indexOf("http://") > -1){
this.imgs[i].src = realSrc;
}else{
//没有图片
this.imgs[i].src = this.container.getAttribute("data-no-img");
}
//清理缓存
this.imgs.splice(i, 1);
}
}
},
shouldShow : function(i) {
//获取当前图片
var img = this.imgs[i];
if (this.container.parentNode.offsetHeight == document.documentElement.clientHeight) {
var scrollTop = this.container.parentNode.scrollTop,
scrollBottom = scrollTop + this.container.parentNode.clientHeight,
imgTop = this.pageY(img),
imgBottom = imgTop + img.offsetHeight;
if (imgBottom > scrollTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < scrollBottom)) {
return true;
} else {
return false;
}
} else {
//网页可视范围内顶部高度
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
//可视范围内底部高度
scrollBottom = scrollTop + document.documentElement.clientHeight,
//图片顶部
imgTop = this.pageY(img),
//图片底部
imgBottom = imgTop + img.offsetHeight;
//成立条件：1、图片底部高度大于可视试图顶部高度，并图片底部高度小于可视视图底部高度；2、 图片顶部高度大于可视视图顶部高度，并图片顶部高度小于可视视图底部高度
if (imgBottom > scrollTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < scrollBottom)) {
return true;
} else {
return false;
}
}
},
pageY : function(node) {
//如有父元素
if (node.offsetParent) {
//元素高+父元素高
return node.offsetTop + this.pageY(node.offsetParent);
} else {
//元素高
return node.offsetTop;
}
},
on : function(node, type, handler) {
node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
},
bindEvent : function() {
var that = this;
//节流处理，绑定Window 滑动和屏幕大小改变，也可替换成其它元素
this.on(window, 'resize', function() {
throttle(that.update, {
context : that
});
});
this.on(window, 'scroll', function() {
throttle(that.update, {
context : that
});
});
that.on(this.box, 'scroll', function() {
throttle(that.update, {
context : that
});
});
}
};
