function lazyLoad(id) {
//ȷ�ϲ�������
if (!id)
return;
this.container = document.getElementById(id);
this.box = this.container.parentNode;
//��ȡͼƬ�б�
this.imgs = this.getImgs();
//ִ�г�ʼ��
this.init();
}

lazyLoad.prototype = {
init : function() {
//���ص�ǰ��ͼͼƬ
this.update();
//���¼�
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
//��ͼƬ��������ɣ�����
if (!this.imgs.length) {
return;
}
var i = this.imgs.length;
var realSrc = "";
for (--i; i >= 0; i--) {
if (this.shouldShow(i)) {
//����ͼƬ
realSrc = this.imgs[i].getAttribute("data-src");
if(realSrc.indexOf("http://") > -1){
this.imgs[i].src = realSrc;
}else{
//û��ͼƬ
this.imgs[i].src = this.container.getAttribute("data-no-img");
}
//������
this.imgs.splice(i, 1);
}
}
},
shouldShow : function(i) {
//��ȡ��ǰͼƬ
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
//��ҳ���ӷ�Χ�ڶ����߶�
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
//���ӷ�Χ�ڵײ��߶�
scrollBottom = scrollTop + document.documentElement.clientHeight,
//ͼƬ����
imgTop = this.pageY(img),
//ͼƬ�ײ�
imgBottom = imgTop + img.offsetHeight;
//����������1��ͼƬ�ײ��߶ȴ��ڿ�����ͼ�����߶ȣ���ͼƬ�ײ��߶�С�ڿ�����ͼ�ײ��߶ȣ�2�� ͼƬ�����߶ȴ��ڿ�����ͼ�����߶ȣ���ͼƬ�����߶�С�ڿ�����ͼ�ײ��߶�
if (imgBottom > scrollTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < scrollBottom)) {
return true;
} else {
return false;
}
}
},
pageY : function(node) {
//���и�Ԫ��
if (node.offsetParent) {
//Ԫ�ظ�+��Ԫ�ظ�
return node.offsetTop + this.pageY(node.offsetParent);
} else {
//Ԫ�ظ�
return node.offsetTop;
}
},
on : function(node, type, handler) {
node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
},
bindEvent : function() {
var that = this;
//����������Window ��������Ļ��С�ı䣬Ҳ���滻������Ԫ��
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
