/**
 * Created by 天之化身123 on 2017/1/5.
 */
//搜索按钮的点击效果
$('#sbtn').on('click',function() {
    $('.nav .nav1 li').removeClass('scaleda').removeClass('scalexiao');
    var i = 1;
    $('.nav .nav1 li').not('.nav .nav1 li:first-child').each(function(){
        i += 100;
        $(this).css({'transition':'transform 1s '+i+'ms'});
    });
    $('.nav .nav1 li').not('.nav .nav1 li:first').addClass('scalexiao');

    //下面选项的块效果
    window.setTimeout(function(){
        $('.si').css({'opacity':'1','display':'inline-block'});
        //上面的
        window.setTimeout(function(){
            $('.close').css({'display':'inline-block'});
            $('.sousuo').css({'left':'0px'});
            $('.input').css({'paddingLeft':'44px'});

            //下面的
            $('.k2 span').css({'transition':'all 1s .1s','paddingLeft':'40px'});
            var ui=500;
            $('.k2 ul li').each(function(){
                ui+=150;
                $(this).css({'transition':'all '+ui+'ms','padding-left':'88px'});
            });
        },100);
    },1000);
});
//关闭按钮的点击效果
$('.close').on('click',function(){
    $('.si').css({'display':'none'});
    //复位操作
    $('.nav .nav1 li').not('.nav .nav1 li:first-child').removeClass('scalesiao').addClass('scaleda');
    $('.close').css('display','none');
    $('.k2 span').css({'paddingLeft':'80px'});
    $('.k2 ul li').css({'padding-left':'228px'});
    $('.input').css({'padding-left':'74px'});
    $('.sousuo').css({'left':'30px'});
});

//小屏手机点击动画
var flagdh=true;
var a1=50;
//初始化
$('.sjdh li').each(function(){
    a1+=150;
    $(this).css({'transition':'all '+a1+'ms'});
});

$('.lianganxian').on('click',function(){
    //关闭动画
    if(flagdh){
        $('.nav1').css({'backgroundColor':'#000'});
        $('.one').removeClass('lefthui').addClass('leftxiang');
        $('.two').removeClass('righthui').addClass('rightxiang');
        var sp=document.documentElement.clientHeight-44;
        $('.sjdh').css({'height':sp+'px'});
        //里面的字
        $('.sjdh li').css({'height':48+'px','margin-left':'0px','opacity':'1'});


        flagdh=false;
    }else{
        $('.nav1').css({'backgroundColor':''});
        $('.one').removeClass('leftxiang').addClass('lefthui');
        $('.two').removeClass('rightxiang').addClass('righthui');
        $('.sjdh').css({'height':'0px'});
        $('.sjdh li').css({'height':'','margin-left':'-48px','opacity':'0'});
        //里面的字
        flagdh=true;
    }
});
$('.sjdh li').hover(function(){
    $(this).find('a').css({'color':'#ccc'});
},function(){
    $(this).find('a').css({'color':''});
});

//手机导航随浏览自动变化

window.onresize=function(){
    sp=document.documentElement.clientHeight;
    $('.sjdh').css({'height':sp+'px'});
}


//barner轮播
//调层级
var a3=2;
$('.imgbox').each(function(){
   $(this) .css({'z-index':a3--});
});
//位置初始化
$($('.xiaodiandonghua')[0]).animate({'width':'100%'},3000);



$('.imgbox').css({'transition':'all 0s'});
$('.imgbox').not('.imgbox1').css({'left':'100%'});
$('.imgbox3').css({'left':'-200px'});
var next=0;
var now=0;
var opencloes=true;
//$('.imgbox>.lunboimg').css({'transform':'scale(0.7)'});

var t1=window.setInterval(fn,3000);
function fn(){
    //开关
    if(!opencloes){
        return ;
    }
    next++;
    if(next>=$('.imgbox').length){
        next=0;
    }
    $('.imgbox').each(function(){
        if($(this).index()==now) {
            $(this).css({'transition':'left 300ms','zIndex':'1','left':'-200px'});
            $(this).find('.lunboimg').css({'transition':'transform 300ms','transform':'scale(0.7)'});
            //$($('.xiaodian1')[now]).css({'backgroundColor':'#dcdcdc'});
            //$($('.xiaodiandonghua')[now]).css({'width':'0px'});

            $($('.xiaodiandonghua')[now]).css({'width':'0%'});

            $($('.text123')[now]).css({'transition':'all 1s','transform':'scale(0.5)'});
            $($('.text1234')[now]).css({'transition':'all 1s','transform':'scale(0.5)'});
        }else if($(this).index()==next){
            $(this).css({'transition':'left 1s'});
            $(this).css({'opacity':'1','zIndex':'2','left':'0px'});
            $(this).find('.lunboimg').css({'transition':'all 1200ms'});
            $(this).find('.lunboimg').css({'transform':'scale(1)'});
            //$($('.xiaodian1')[next]).css({});

            $('.xiaodiandonghua').each(function(){
                $(this).css({'width':'0%'});
            });

            $($('.xiaodiandonghua')[next]).animate({'width':'100%'},3000,function(){
                $('.xiaodiandonghua').css({'width':'0%'});
            });

            $($('.text123')[next]).css({'transition':'all 1s','transform':'scale(1)'});
            $($('.text1234')[next]).css({'transition':'all 1s','transform':'scale(1)'});
        }else{
            $(this).css({'transition':'all 0s'});
            $(this).css({ 'opacity':'0','left':'100%','zIndex':'0'});



            $($('.text123')[$(this).index()]).css({'transition':'all 1s','transform':'scale(0.5)'});
            $($('.text1234')[$(this).index()]).css({'transition':'all 1s','transform':'scale(0.5)'});
        }
    });
    now=next;
}

function fn11(){
    //开关
    if(!opencloes){
        return ;
    }
    next--;
    if (next <0) {
        next = $('.imgbox').length - 1;
    }
    $('.imgbox').each(function () {
        if ($(this).index() == now) {
            $(this).css({'transition': 'left 1500ms', 'zIndex': '2', 'left': '100%'});
            $(this).find('.lunboimg').css({'transition': 'transform 300ms', 'transform': 'scale(1)'});

            $($('.xiaodian1')[now]).css({'backgroundColor': '#dcdcdc'});

        } else if ($(this).index() == next) {
            $(this).css({'transition': 'left 1s'});
            $(this).css({'opacity': '1', 'zIndex': '1', 'left': '0px'});
            $(this).find('.lunboimg').css({'transition': 'all 1200ms'});

            $(this).find('.lunboimg').css({'transform': 'scale(1)'});

            $($('.xiaodian1')[next]).css({'backgroundColor': '#808080'});
        } else {
            $(this).css({'transition': 'all 0s'});
            $(this).css({'opacity': '0', 'left': '-200px', 'zIndex': '0'});
            $(this).find('.lunboimg').css({'transform':'scale(0.7)'});
        }
    });
    now = next;
}


//左右箭头
$('.leftposition').add('.rightposition').hover(function(){
    window.clearInterval(t1);
},function(){
    t1=window.setInterval(fn,3000);
});
//左箭头
$('.leftimg').on('click',function(){
    if(opencloes) {
       fn11();
        opencloes = false;
        window.setTimeout(function(){
            opencloes=true;
        },1000);
    }
});
//右箭头
$('.rightimg').on('click',function(){
    if(opencloes){
        fn();
        opencloes=false;
        window.setTimeout(function(){
            opencloes=true;
        },1000)
    }
});
//初始化小点样式
$('.xiaodian1').css({'background':'#dcdcdc'});
$('.xiaodian1:nth-child(1)').css({'background':'#808080'});



//小点点击效果
$('.d1').on('click',function(){
    next=$(this).index();
    if(now>next){
        next++;
        fn11();
    }else if(now<next){
        next--;
        fn();
    }else{
        return ;
    }
});
$('.xiaodian').hover(function(){
    window.clearInterval(t1);
},function(){
    t1=window.setInterval(fn,3000);
});

//小屏的效果
var pp1=true;
$('.nb1>h3').on('click',function(){
    if(pp1){
        pp1=false;
        $(this).next('ul').css({'display':'block'}).end().css({'border-bottom':'none'});
        $(this).find('span').css({'transform':'rotate(45deg)'});
    }else{
        pp1=true;
        $(this).next('ul').css({'display':'none'}).end().css({'border-bottom':'1px solid #ccc'});
        $(this).find('span').css({'transform':'rotate(0deg)'});
    }


});





















