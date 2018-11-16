//
//function Banner(){
//    console.log('init');
//    this.person='zhiliao'
//}
//
//Banner.prototype.greet=function(word){
//    console.log('hello',word);
//}
//
//var banner=new Banner();
//console.log(banner.person);
//banner.greet('zhiliao');


function Banner(){

}

Banner.prototype.run=function(){
    var bannerUl=$("#banner-ul");
    var index=0;
    setInterval(function(){ //定时器
        if(index>=3){
            index=0;
        }
        else{
            index++;
        }
        bannerUl.animate({"left":-798*index},500);
    },2000);
};

$(function(){  // 所有元素加载完后执行这里面的方法
   var banner=new Banner();
    banner.run();
});