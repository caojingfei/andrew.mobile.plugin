﻿/*
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\  =  /0
                    ___/`---'\___
                  .' \\|     |// '.
                 / \\|||  :  |||// \
                / _||||| -:- |||||- \
               |   | \\\  -  /// |   |
               | \_|  ''\---/''  |_/ |
               \  .-\__  '-'  ___/-. /
             ___'. .'  /--.--\  `. .'___
          ."" '<  `.___\_<|>_/___.' >' "".
         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
         \  \ `_.   \_ __\ /__ _/   .-` /  /
     =====`-.____`.___ \_____/___.-`___.-'=====
                       `=---='
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//http://www.jq22.com/demo/jqueryTouchSlide201702281655/

/*-----------------------------------------------Andrew_Config (全局设置）使用方法-------------------------------------------*/
$(function () {
    Andrew_Config({ //环境配置管理
        MaskStyle: ["style3","opacity07"], //1.所有弹窗背景图案选择（样式style1~6）、2.遮挡层背景的透明度（opacity01~09）
        touchstart: true, //是否开启移动端active效果, 建议开启 （元素的class里加touchstart即可用）(使用 true,不使用 false）
        ButtonLink: true, //通过元素中加data-href属性的方式跳转界面, 建议开启路由功能后使用。(使用button超链接 true,不使用button超链接 false）
        WechatHeader: false, //是否通过微信浏览器访问时自动隐藏应用的头部区域, 可以通用建议开启 (使用隐藏 true, 不使用隐藏 false）
        Topdblclick: true, //是否开启点击应用的头部让页面回头顶部 (开启 true, 停用 false）
        fixedBar: true, //输入信息时应用的头部绝对固定在屏幕最上方，底部有输入框时不被虚拟键盘遮挡 （不通过微信访问才生效，开启WechatHeader的参数时请关闭该参数）
        Orientation: true, //是否开启应用只允许竖屏浏览 (使用 true, 不使用 false）
        Prompt: "为了更好的视觉体验，请在竖屏下进行操作。" //应用横屏是提示文字 (必须开启Orientation的选项才能生效)
    });
});

/*-----------------------------------------------Andrew_Form (全局设置）使用方法-------------------------------------------*/
$(function(){
    $("form").Andrew_Form({ //输入框右侧加删除文字按钮
        btn_delete: ".plug_Delete", //输入文字的删除按钮class名
        btn_delete_ico: "ion ion-android-close", //输入文字的删除按钮的图标
        btn_password: ".plug_Password", //输入的密码可显示和隐藏功能的按钮class名
        btn_password_ico_hide: "ion ion-eye-disabled", //输入的密码可显示和隐藏功能的按钮(隐藏按钮图标)
        btn_password_ico_show: "ion ion-eye", //输入的密码可显示和隐藏功能的按钮(显示按钮图标)
        placeholder: true, //是否开启点击输入框后提示文字消失功能，建议开启 (开启 true, 停用 false）
        keyboard: true, //是否输入框内设置的maxlength自定的限制字数后手机键盘自动消失或者input元素加readonly属性不显示键盘，建议开启 (开启 true, 停用 false）
        passchek: ".plug_PassCheck", //两次输入密码确认时需要加的class名
        passCallback: function() { //通过回调进入两次输入的密码不一致状态 （passchek的参数空值时不走当前的回调）
            console.log("两次输入的密码不一致");
            $ak.alert("两次输入的密码必须一致！", {
                icon: "error", //图标类型（warning，error，info，question，success）
                button_ok: "确定", //弹窗的确定按钮文字
                title: "提示" //弹窗的标题文字
            });
        },
        butCallback: function(form) { //点击提交按钮后的回调，获取当前表单的元素
            console.log(form);
        }
    });
});

/*-----------------------------------------------Andrew_Textarea (全局设置）使用方法-------------------------------------------*/
$(function () {
    $(".plug_textarea").Andrew_Textarea({ //多行输入框设置
        maxlength:200, //文字最多输入限制
        rows:"6", //输入框的行高
        topButton: "c_title", //提交按钮在头部显示后的样式 （设置为空，代表不使用该功能）
        onTextVal:function(val){ //通过回调获取实时输入的值
            console.log(val);
        },
        TopbtnOK:function(val){ //通过回调获取点击头部的提交按钮后的最终值
            console.log(val);
            webToast("提交成功！","middle",2000);
        }
    });
});

/*-----------------------------------------------Andrew_Lazyload (全局设置）使用方法-------------------------------------------*/
$(function() {
    $("img").Andrew_Lazyload({
        effect: "fadeIn" //图片延迟加载效果
    });
});

/*-----------------------------------------------Andrew_Slider 使用方法-------------------------------------------*/
$(function() {
    $(".plug_slider").Andrew_Slider({
        start: 1, //默认显示的图片排号
        speed: 500, //图片切换的速度
        interval: 5000, //图片切换间隔毫秒
        autoPlay: true, //幻灯片是否自动播放（true，false）
        dotShow: true, //是否显示幻灯片位置按钮（true，false）
        arrShow: false, //是否显示左右切换按钮（true，false）
        dotClass: "fl wh_08em bg_gray_333 border bor_white mr_05em bor_rad_50 pointer", //底部图片位置的样式设置
        arrClass:"wh_24em c_white bg_black05 bor_rad_50 pointer", //左右切换按钮的样式设置
        ActiveClass: "bg_title", //底部图片位置的当前样式
        afterSlider: function(num) { //回调获取当前的数
            //console.log(num);
        }
    });
});
/*-----------------------------------------------Andrew_ScrollFixed 使用方法-------------------------------------------*/
$(function () {
    $(".plug_tabs nav").Andrew_ScrollFixed({
        ScrollFixed: true, //是否开启指定的元素区域固定在屏幕的上方位置 (开启 true, 关闭 false）
        zPosition: "4", //浮动元素的z-index数值
        animated: "slideInDown ani_05s", //滚动后的显示的动画效果 (css动画库：andrew.animate.css)
        top: 0 //屏幕上方和滑动后的元素固定的上下间距
    });
});

/*-----------------------------------------------Andrew_Tabs 使用方法-------------------------------------------*/
$(function () {
    $(".plug_tabs").Andrew_Tabs({
        curDisplay: 1, //当前显示哪张
        autoPlay: false, //自动播放 (true/false)
        playDelay: 2000, //自动播放延迟时间 （必选 autoPlay: true）
        boxheight: false, //切换内容区域的高度设置px；建议vertical方式时使用 （不使用高度：false）
        navlength: 4, //切换导航的数量设置（文字屏幕对齐）
        fullclass: "bor_bottom2 bor_title c_title minus_mt_1px", //被选中状态的class
        emptyclass: "bor_bottom bor_gray_ddd", //未选中状态的class
        mouse: "click", //鼠标事件 (click/hover)
        touchmode : true, //是否开启触屏滑动切换功能 (true/false)
        changeMethod: "horizontal", //切换方式 (default/vertical/horizontal/opacity)
        callback: function(ele) { //通过回调获取当前显示的元素
            console.log(ele);
        }
    });
});

$(function () {
    $(".plug_tabs_sub").Andrew_Tabs({
        curDisplay: 1, //当前显示哪张
        autoPlay: false, //自动播放 (true/false)
        playDelay: 2000, //自动播放延迟时间 （必选 autoPlay: true）
        boxheight: false, //切换内容区域的高度设置px；建议vertical方式时使用 （不使用高度：false）
        navlength: 0, //切换导航的数量设置（文字屏幕对齐）
        fullclass: "bor_bottom2 bor_title c_title minus_mt_1px", //被选中状态的class
        emptyclass: "bor_bottom bor_gray_ddd", //未选中状态的class
        mouse: "click", //鼠标事件 (click/hover)
        touchmode : false, //是否开启触屏滑动切换功能 (true/false)
        changeMethod: "horizontal", //切换方式 (default/vertical/horizontal/opacity)
        callback: function(ele) { //通过回调获取当前显示的元素
            console.log(ele);
        }
    });
});

/*-----------------------------------------------Andrew_Ajax 使用方法-------------------------------------------*/
$(function () {
    $("#plug_tab1").each(function(){ //默认显示Ajax请求后的页面
        Andrew_Ajax({
            to: "#plug_ajax1", //加载内容的区域(定义ID)，如果只加载数据不加载HTML页面，把这个to参数设为空。
            type: "POST", //GET或POST
            url: "./ajax/tab_test1.html", //需要加载的URL
            data:{}, //传入参数
            async: false, //异步方式：true，同步方式：false
            success:function (flag) { //ajax请求加载成功后的回调 （状态：flag=true）
                console.log(flag);
                webToast("请求加载数据成功！","middle",2000);
            },
            error:function (flag) { //ajax请求加载失败后的回调 （状态：flag=false）
                console.log(flag);
                webToast("请求加载数据失败！","middle",2000);
            }
        });
    });
});

$(function () {
    $("#plug_tab1").click(function(){ //通过点击事件后请求加载Ajax页面
        Andrew_Ajax({
            to: "#plug_ajax1", //加载内容的区域(定义ID)，如果只加载数据不加载HTML页面，把这个to参数设为空。
            type: "POST", //GET或POST
            url: "./ajax/tab_test1.html", //需要加载的URL
            data:{}, //传入参数
            async: false, //异步方式：true，同步方式：false
            success:function (flag) { //ajax请求加载成功后的回调 （状态：flag=true）
                console.log(flag);
                webToast("请求加载数据成功！","middle",2000);
            },
            error:function (flag) { //ajax请求加载失败后的回调 （状态：flag=false）
                console.log(flag);
                webToast("请求加载数据失败！","middle",2000);
            }
        });
    });
});

$(function () {
    $("#plug_tab2").click(function(){ //通过点击事件后请求加载Ajax页面
        Andrew_Ajax({
            to: "#plug_ajax2", //加载内容的区域(定义ID)，如果只加载数据不加载HTML页面，把这个to参数设为空。
            type: "POST", //GET或POST
            url: "./ajax/tab_test2.html", //需要加载的URL
            data:{}, //传入参数
            async: false, //异步方式：true，同步方式：false
            success:function (flag) { //ajax请求加载成功后的回调 （状态：flag=true）
                console.log(flag);
                webToast("请求加载数据成功！","middle",2000);
            },
            error:function (flag) { //ajax请求加载失败后的回调 （状态：flag=false）
                console.log(flag);
                webToast("请求加载数据失败！","middle",2000);
            }
        });
    });
});

$(function () {
    $("#plug_tab3").click(function(){ //通过点击事件后请求加载Ajax页面
        Andrew_Ajax({
            to: "#plug_ajax3", //加载内容的区域(定义ID)，如果只加载数据不加载HTML页面，把这个to参数设为空。
            type: "POST", //GET或POST
            url: "./ajax/tab_test3.html", //需要加载的URL
            data:{}, //传入参数
            async: false, //异步方式：true，同步方式：false
            success:function (flag) { //ajax请求加载成功后的回调 （状态：flag=true）
                console.log(flag);
                webToast("请求加载数据成功！","middle",2000);
            },
            error:function (flag) { //ajax请求加载失败后的回调 （状态：flag=false）
                console.log(flag);
                webToast("请求加载数据失败！","middle",2000);
            }
        });
    });
});

$(function () {
    $("#plug_tab4").click(function(){ //通过点击事件后请求加载Ajax页面
        Andrew_Ajax({
            to: "#plug_ajax4", //加载内容的区域(定义ID)，如果只加载数据不加载HTML页面，把这个to参数设为空。
            type: "POST", //GET或POST
            url: "./ajax/tab_test4.html", //需要加载的URL
            data:{}, //传入参数
            async: false, //异步方式：true，同步方式：false
            success:function (flag) { //ajax请求加载成功后的回调 （状态：flag=true）
                console.log(flag);
                webToast("请求加载数据成功！","middle",2000);
            },
            error:function (flag) { //ajax请求加载失败后的回调 （状态：flag=false）
                console.log(flag);
                webToast("请求加载数据失败！","middle",2000);
            }
        });
    });
});

/*-----------------------------------------------Andrew_Dialog 使用方法-------------------------------------------*/
$(function(){
    $("#plug_webToast").click(function(){
        webToast("恭喜您，修改成功!","middle","mask",9999); //(提示文字，显示位置 [top ，middle ，bottom ]，遮挡背景[加mask即可用]，耗时)
    });
});

$(function(){
    $("#plug_alert").click(function(){
        $ak.alert("请输入密码！", { //(标准的H5使用方法 $ak.alert)
            title: "提示", //弹窗的标题文字
            button_ok: "确定", //弹窗的确定按钮文字
            icon: "warning", //图标类型（warning，error，info，question，success）
            animateIn: "bounceInDown", //弹窗显示动画效果 (css动画库：andrew.animate.css)
            animateOut: "bounceOutUp", //弹窗消失动画效果 (css动画库：andrew.animate.css)
            onSubmit:function(res){ //点击确定按钮后的回调
                console.log(res);
            }
        });
    });
});

$(function(){
    $("#plug_confirm").click(function(){
        $ak.confirm("确认要删除当前的信息吗？", { //(标准的H5使用方法 $ak.confirm)
            title: "确认", //弹窗的标题文字
            button_ok: "确定", //弹窗的确定按钮文字
            button_cancel: "取消", //弹窗的取消按钮文字
            icon: "question", //图标类型（warning，error，info，question，success）
            animateIn : "bounceInDown", //弹窗显示动画效果 (css动画库：andrew.animate.css)
            animateOut: "bounceOutUp", //弹窗消失动画效果 (css动画库：andrew.animate.css)
            onSubmit:function(res){ //点击确定按钮后的回调
                webToast("成功删除!","bottom",1000); //(提示文字，显示位置 top ，middle ，bottom ，耗时)
                console.log(res);
            },
            onCancel:function (res) { //点击取消按钮后的回调
                webToast("取消删除!","bottom",1000); //(提示文字，显示位置 top ，middle ，bottom ，耗时)
                console.log(res);
            }
        });
    });
});

$(function(){
    $("#plug_prompt_input").click(function(){
        var input = $(this); //获取当前的输入框
        if (input.val().length > 0 ) {
            var input_val = input.val();
        }
        $ak.prompt("姓名", input_val, { //(标准的H5使用方法 $ak.prompt)
            title: "输入", //弹窗的标题文字
            button_ok: "确定", //弹窗的确定按钮文字
            button_cancel: "取消", //弹窗的取消按钮文字
            icon: "info", //图标类型（warning，error，info，question，success）
            inputbox: "input", //输入框类型(input,textarea)
            inputType: "text",//输入框类型 (text,password,number,tel,search)
            inputClass: "c_gray_777 border bor_gray_ddd h_3em bor_rad_0", //输入框的Class样式设置 （inputbox的参数有值才生效）
            placeholder:"请输入姓名", //设置输入框的提示文字
            required: true, //弹窗后的输入框设置为是否必填（true，false）
            animateIn : "bounceInDown", //弹窗显示动画效果 (css动画库：andrew.animate.css)
            animateOut: "bounceOutUp", //弹窗消失动画效果 (css动画库：andrew.animate.css)
            onSubmit:function(res){ //点击确定按钮后的回调
                webToast("成功提交!","bottom",1000); //(提示文字，显示位置 top ，middle ，bottom ，耗时)
                input.val(res); //插入内容
                console.log(res);
            },
            onCancel:function (res) { //点击取消按钮后的回调
                webToast("您已取消!","bottom",1000); //(提示文字，显示位置 top ，middle ，bottom ，耗时)
                console.log(res);
            }
        });
    });
});

$(function(){
    $("#plug_prompt_textarea").click(function(){
        $ak.prompt("内容", "", { //(标准的H5使用方法 $ak.prompt)
            title: "提问", //弹窗的标题文字
            button_ok: "提交", //弹窗的确定按钮文字
            button_cancel: "取消", //弹窗的取消按钮文字
            icon: "info", //图标类型（warning，error，info，question，success）
            inputbox: "textarea", //输入框类型(input,textarea)
            inputClass: "c_gray_777 border bor_gray_ddd h_6em bor_rad_0", //输入框的Class样式设置 （inputbox的参数有值才生效）
            placeholder:"请输入提问内容", //设置输入框的提示文字
            required: true, //弹窗后的输入框设置为是否必填（true，false）
            animateIn : "bounceInDown", //弹窗显示动画效果 (css动画库：andrew.animate.css)
            animateOut: "bounceOutUp", //弹窗消失动画效果 (css动画库：andrew.animate.css)
            onSubmit:function(res){ //点击确定按钮后的回调
                webToast("成功提交!","bottom",1000); //(提示文字，显示位置，耗时)
                $("#plug_prompt_textarea_view ul").append("<li  class=\"c_gray_777 bor_bottom bor_gray_ddd\">"+res+"</li>"); //插入内容
                console.log(res);
            },
            onCancel:function (res) { //点击取消按钮后的回调
                webToast("您已取消!","bottom",1000); //(提示文字，显示位置 top ，middle ，bottom ，耗时)
                console.log(res);
            }
        });
    });
});

/*-----------------------------------------------Andrew_Popupwin 使用方法-------------------------------------------*/
$(function(){
    $("#plug_menu").on("click", function (e) {
        Andrew_Popupwin({
            dom: "#plug_MenuWin", //弹窗内容的布局
            position: "top", //位置类型(top，bottom，left，right，middle)
            effectIn: "slideInDown ani_05s", //弹窗显示效果 (css动画库：andrew.animate.css)
            effectOut: "slideOutUp ani_05s", //弹窗消失效果 (css动画库：andrew.animate.css)
            maskPosition:"4", //Mask的z-index数值
            closeBtn: ".plug_closeIn", //关闭弹窗按钮的Class名
            OneButton: e.currentTarget, //点击按钮和关闭按钮通用时需要加该属性
            toggleIcon: "text_14em ion-android-close", //是否点击后替换图标功能，加图标的Class名 （建议启用OneButton的参数后使用）
            callback :function (ele) { //通过回调获取弹窗显示后的以上参数
                console.log($(ele[0].dom)); //获取当前的弹窗元素
            }
        })
    })
});

$(function(){
    $("#plug_popup").click(function(){
        Andrew_Popupwin({
            dom: "#plug_PopupWin", //弹窗内容的布局
            position: "middle", //位置类型(top，bottom，left，right，middle)
            effectIn: "bounceInDown ani_1s", //弹窗显示效果
            effectOut: "bounceOutDown ani_1s", //弹窗消失效果
            maskPosition:"11", //Mask的z-index数值
            closeBtn: ".plug_closeIn", //关闭弹窗按钮的Class名
            callback :function (ele) { //通过回调获取弹窗显示后的以上参数
                console.log($(ele[0].dom)); //获取当前的弹窗元素
            }
        })
    })
});
/*-----------------------------------------------Andrew_ChooseList 使用方法-------------------------------------------*/
$(function(){
    $(".plug_choose").Andrew_ChooseList({
        active: "bg_title c_white bor_title", //选中后的样式
        multi: false, //单选和多选设置（单选：false，多选：true --- 或者元素里直接加 multiple="multiple" ）
        full: false, //Choose的宽度，默认为null将自动获取Choose的宽度；
        click: function(index, item) { //Choose元素点击时的回调，diabled时不发生。
            console.log("click", index, item.text());
        },
        change: function(index, item) { //choose值改变时的回调；
            console.log("change", index, item.text());
        }
    });
});

/*-----------------------------------------------Andrew_ChangeInput 使用方法-------------------------------------------*/
$(function(){
    $(".plug_change_btn").Andrew_ChangeInput({
        text_input: new Array( //两个左侧和右侧的输入框设置
            ".plug_change_text1", //切换按钮的“左侧”输入框Class
            ".plug_change_text2" //切换按钮的“右侧”输入框Class
        ),
        onChange:function(l_val,r_val){ //回调获取当前实时变化的左右两个值
            console.log("左侧："+l_val);
            console.log("右侧："+r_val);
        }
    });
});

/*-----------------------------------------------Andrew_ChangeIcon 使用方法-------------------------------------------*/
$(function(){
    $(".plug_sort_btn1").Andrew_ChangeIcon({
        multi_icon: false, //是否控制的图标是多个
        text_color: new Array( //文字颜色设置（最多两个）
            "c_gray_777", //默认颜色
            "c_title" //点击后的颜色
        ),
        clickBack:function(state,op){ //回调获取当前的值和option参数
            var text_color1 = $(this)[0].text_color[0]; //默认颜色
            var text_color2 = $(this)[0].text_color[1]; //点击后的颜色
            if (state == true) { //是否被开启
                $(".plug_sort_btn2").children().removeClass(text_color2).addClass(text_color1); //清理第2个的文字样式
                $(".plug_sort_btn2").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第2个的图标样式
                $(".plug_sort_btn3").children().removeClass(text_color2).addClass(text_color1); //清理第3个的文字样式
                $(".plug_sort_btn3").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第3个的图标样式
                $(".plug_sort_btn4").children().removeClass(text_color2).addClass(text_color1); //清理第4个的文字样式
                $(".plug_sort_btn4").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第4个的图标样式
            }
        }
    });
});
$(function(){
    $(".plug_sort_btn2").Andrew_ChangeIcon({
        multi_icon: true, //是否控制的图标是多个
        text_color: new Array( //文字颜色设置（最多两个）
            "c_gray_777", //默认颜色
            "c_title" //点击后的颜色
        ),
        clickBack:function(state,op){ //回调获取当前的值和option参数
            var text_color1 = $(this)[0].text_color[0]; //默认颜色
            var text_color2 = $(this)[0].text_color[1]; //点击后的颜色
            if (state) { //是否被开启
                $(".plug_sort_btn1").children().removeClass(text_color2).addClass(text_color1); //清理第1个的文字样式
                $(".plug_sort_btn3").children().removeClass(text_color2).addClass(text_color1); //清理第3个的文字样式
                $(".plug_sort_btn3").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第3个的图标样式
                $(".plug_sort_btn4").children().removeClass(text_color2).addClass(text_color1); //清理第4个的文字样式
                $(".plug_sort_btn4").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第4个的图标样式
            }
        }
    });
});
$(function(){
    $(".plug_sort_btn3").Andrew_ChangeIcon({
        multi_icon: true, //是否控制的图标是多个
        text_color: new Array( //文字颜色设置（最多两个）
            "c_gray_777", //默认颜色
            "c_title" //点击后的颜色
        ),
        clickBack:function(state,op){ //回调获取当前的值和option参数
            var text_color1 = $(this)[0].text_color[0]; //默认颜色
            var text_color2 = $(this)[0].text_color[1]; //点击后的颜色
            if (state) { //是否被开启
                $(".plug_sort_btn1").children().removeClass(text_color2).addClass(text_color1); //清理第1个的文字样式
                $(".plug_sort_btn2").children().removeClass(text_color2).addClass(text_color1); //清理第3个的文字样式
                $(".plug_sort_btn2").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第3个的图标样式
                $(".plug_sort_btn4").children().removeClass(text_color2).addClass(text_color1); //清理第4个的文字样式
                $(".plug_sort_btn4").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第4个的图标样式
            }
        }
    });
});
$(function(){
    $(".plug_sort_btn4").Andrew_ChangeIcon({
        multi_icon: false, //是否控制的图标是多个
        text_color: new Array( //文字颜色设置（最多两个）
            "c_gray_777", //默认颜色
            "c_title" //点击后的颜色
        ),
        Change_icon: new Array( //文字颜色设置（最多两个）
            "ion-chevron-down", //默认显示图标
            "ion-chevron-up" //切换后显示的图标
        ),
        clickBack:function(state,op){ //回调获取当前的值和option参数
            console.log(op);
            var text_color1 = $(this)[0].text_color[0]; //默认颜色
            var text_color2 = $(this)[0].text_color[1]; //点击后的颜色
            if (state == true) { //是否被开启
                $(".plug_sort_btn1").children().removeClass(text_color2).addClass(text_color1); //清理第1个的文字样式
                $(".plug_sort_btn2").children().removeClass(text_color2).addClass(text_color1); //清理第3个的文字样式
                $(".plug_sort_btn2").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第3个的图标样式
                $(".plug_sort_btn3").children().removeClass(text_color2).addClass(text_color1); //清理第3个的文字样式
                $(".plug_sort_btn3").children().find("i").removeClass(text_color2).addClass(text_color1); //清理第3个的图标样式
            }
            $(".plug_sort_btn4").each(function(){
                var _this = $(this);
                Andrew_Popupwin({ //调用弹窗插件
                    dom: "#plug_filterWin", //弹窗内容的布局
                    position: "offset", //位置类型(top，bottom，left，right，middle, default, offset)
                    effectIn: "slideDown ani_1s", //弹窗显示效果，动画秒数 (css动画库：andrew.animate.css)
                    effectOut: "slideUp ani_05s", //弹窗消失效果，动画秒数 (css动画库：andrew.animate.css)
                    maskPosition:"1", //Mask的z-index数值
                    closeBtn: ".plug_closeIn", //关闭弹窗按钮
                    OneButton: _this, //点击按钮和关闭按钮通用时需要加该属性
                    callback :function (ele) { //通过回调获取弹窗显示后的参数
                        var modal =$(ele[0].dom); //获取弹窗元素
                        $(modal).click(function(){ //点击弹窗内容区域后关闭当前被展开的弹窗
                            initialize_btn(); //调用按钮样式初始化功能
                        });
                    },
                    scrollback :function (ele) { //页面滑动时的回调获取参数
                        initialize_btn(); //调用按钮样式初始化功能
                    }
                });
                function initialize_btn(){ //按钮的样式初始化
                    var text_color1 = op.text_color[0]; //默认颜色
                    var text_color2 = op.text_color[1]; //点击后的颜色
                    var Change_icon1 = op.Change_icon[0]; //默认图标
                    var Change_icon2 = op.Change_icon[1]; //点击后的图标
                    _this.removeClass("active"); //清空弹窗元素中的Class，让弹窗设置为关闭的状态
                    _this.children().removeClass(text_color2).addClass(text_color1); //把文字颜色切换为默认颜色
                    _this.children().find("i").removeClass(text_color2).addClass(text_color1); //把图标颜色切换为默认颜色
                    _this.children().find("i").removeClass(Change_icon2).addClass(Change_icon1); //把图标切换为默认显示的图标
                }
            });
        }
    });
});

/*-----------------------------------------------Andrew_Radio&Andrew_Checkbox&Andrew_Switch 使用方法-------------------------------------------*/
$(function(){
    //单选按钮样式
    $(".plug_Radio").Andrew_Radio({
        checkedClass: "ion ion-android-done c_title", //选中后的样式
        onChange:function(chk){ //回调获取当前的选中状态
            console.log(chk);
        }
    });
});

$(function(){
    //多选按钮样式
    $(".plug_Checkbox").Andrew_Checkbox({
        checkedClass: "ion ion-android-done bg_title bor_title c_white", //选中后的样式
        disabledClass: "ion ion-android-done bg_gray_ccc bor_gray_ccc c_white", //不能选择的样式
        onChange:function(chk){ //回调获取当前的选中状态
            console.log(chk);
        }
    });
});

$(function(){
    //开关按钮样式
    $(".plug_Switch").Andrew_Switch({
        checkedClass: "bg_title", //选中后的样式
        disabledClass: "dis_opa_05", //不能选择的样式
        onChange:function(chk){ //回调获取当前的选中状态
            console.log(chk);
        }
    });
});

/*-----------------------------------------------Andrew_GetVerifyCode 使用方法-------------------------------------------*/
$(function (){
    Andrew_GetVerifyCode.verify("#plug_getVerifyCode", {
        time: 10, //倒计时时间
        event: "click", //事件触发方式
        phone: "#plug_phone", //绑定设置输入手机号的输入框
        ableClass: "c_title", //按钮可以使用时的class
        unableClass: "c_gray_999", //按钮不能使用时的class
        //执行条件，可以是function也可以是Boolean值，如果是函数则需返回true才会执行
        condition: function (phone) {
            /*var phoneReg = /^1[345789]\d{9}$/,*/
            var phoneReg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))\d{8})$/,
                flag = phoneReg.test($(phone).val());
            if(!flag){
                $ak.alert("您输入的手机号码有误！", {
                    icon: "error", //图标类型（warning，error，info，question，success）
                    button_ok: "确定", //弹窗中的确定按钮文字
                    button_cancel: "取消", //弹窗中的取消按钮文字
                    title: "提示" //弹窗中的标题名称文字
                });
                return false;
            } else {
                $ak.alert("验证码发送成功！", {
                    icon: "success", //图标类型（warning，error，info，question，success）
                    button_ok: "确定", //弹窗中的确定按钮文字
                    button_cancel: "取消", //弹窗中的取消按钮文字
                    title: "提示" //弹窗中的标题名称文字
                });
                return true;
            }
        },
        progress: function (time,phone) {//计时正在进行中时的回调
            $(this).html(time + "s后重新获取");//这里的this指向验证按钮
            console.log(this.timedown); //这个timedown就是计时器
            //console.log($(phone)); //这里获取输入手机号的输入框
        },
        timeUp: function (time,phone) {//计时结束时执行的回调
            $(this).html("重新获取"); //这里的this指向验证按钮
            console.log("时间到了！");
            //console.log($(phone)); //这里获取输入手机号的输入框
        },
        abort: function (phone) {//中断计时
            $(this).html("重新获取");//这里的this指向验证按钮
            console.log("我被中断了！");
            //$(phone).timedown.abort(); //通过click事件执行中断语句
            //console.log($(phone)); //这里获取输入手机号的输入框
        },
        eventFn: function (phone) {//事件执行后的回调
            console.log("执行了");
            console.log(this);//这里的this指向验证按钮
            console.log($(phone)); //这里获取输入手机号的输入框
            console.log($(phone).prev("label").find("input"))//获取国家区号的输入框
        }
    });
});

/*-----------------------------------------------Andrew_Validate 使用方法-------------------------------------------*/
$(function () {
    $(".plug_validate").Andrew_Validate({ //提交验证设置
        opacity: "0.7", //不能提交时的按钮透明度
        callback: function(flag) { //获取回调表单的所有状态
            console.log(flag);
        }
    });
});

/*-----------------------------------------------Andrew_Codeval 使用方法-------------------------------------------*/
$(function () {
    $("#plug_codeInput").each(function(){ //默认显示Ajax请求后的页面
        $.Andrew_Codeval.ak_setCode({
            inputEle: '#plug_codeInput', //输入验证码的输入框
            codeView: '#plug_codeView', //显示验证码的元素
            codeLength: '5' //显示验证码的字数
        });
    });
    $("#plug_codeView").parents("form").find(":submit").click(function (){ //点击提交按钮获取输入的验证码是否正确
        var flag = $.Andrew_Codeval.ak_validateCode();
        console.log(flag); //flag的值true可以通过，false是输入的验证码有误
    });
});

/*-----------------------------------------------Andrew_AllChecked 使用方法-------------------------------------------*/
$(function () {
    $(".plug_allchk").Andrew_AllChecked({
        toggleClass: 'bg_title bor_title c_white ion ion-android-done',//改变的样式名，针对例子中的复选框样式美化
        callback :function(array) { //通过回调函数获取数组状态
            $(array).each(function(){ //对选中的元素可进行控制和获取值
                console.log($(this).parent("label").parent("dt").parent("dl").children("dd").last().find("span").text()); //获取指定元素的数字
                console.log($(this)[0].checked);  //获取每个复选框的状态
                console.log($(this));
            });
        }
    });
});

/*-----------------------------------------------Andrew_DropUpDown 使用方法-------------------------------------------*/
$(function () {
    $(".plug_dropbutton").Andrew_DropUpDown({
        curDisplay: 2, //当前显示哪个(不展开设置为0)
        active_toggle: "bor_bottom_dashed bor_gray_ddd", //展开后的线条切换（实线切换虚线）
        up_ico: "ion ion-arrow-up-b", //展开后的图标（上箭头）
        down_ico: "ion ion-arrow-down-b", //展开前的图标（下箭头）
        callback:function(ele){ //回调获取展开后的元素
            console.log(ele);
        }
    });
});

/*-----------------------------------------------Andrew_TouchDelete 使用方法-------------------------------------------*/
$(function() {
    $(".plug_touchdel").Andrew_TouchDelete({
        UpDownTouch: false, //是否开启上下滑动功能 (开启 true, 关闭 false）
        DelText: "删除", //删除按钮中显示的文字
        DelClass: "abs bg_close c_white w_4em h_in top_0", //删除按钮的Class样式
        ClickDelete: function(btn,ele,index) { //回调获取当点击删除按钮后的删除按钮和当前的区域元素 （btn：删除按钮，ele：当前区域元素，index：当前元素的排号）
            console.log("index: "+index);
            $ak.confirm("确认要删除当前的信息吗？", { //(标准的H5使用方法 $ak.confirm)
                title: "确认", //弹窗的标题文字
                button_ok: "确定", //弹窗的确定按钮文字
                button_cancel: "取消", //弹窗的取消按钮文字
                icon: "question", //图标类型（warning，error，info，question，success）
                animateIn : "bounceInDown", //弹窗显示动画效果 (css动画库：andrew.animate.css)
                animateOut: "bounceOutUp", //弹窗消失动画效果 (css动画库：andrew.animate.css)
                onSubmit:function(){
                    webToast("成功删除!","bottom",1000); //(提示文字，显示位置 top ，middle ，bottom ，耗时)
                    ele.remove();//删除当前元素
                }
            });
        },
        UpTouch: function(ele) { //开启UpDownTouch的参数后执行的回调(上滑)
            console.log("我往上滑了！");
            console.log(ele);
            /*ele.append("<li class=\"rel ovh bor_bottom bor_gray_ddd bg_white touchstart\">\n" +
                "        <article class=\"ml_3 ak_delete_art\">X.当前显示的是列表展示内容</article>\n" +
                "</li>");*/
        },
        DownTouch: function(ele) { //开启UpDownTouch的参数后执行的回调(下滑)
            console.log("我往下滑了！");
            console.log(ele);
        }
    });
});

/*-----------------------------------------------Andrew_intlTelInput 使用方法-------------------------------------------*/
$(function(){
    $(".plug_mobileNum").Andrew_IntlTelInput({
        Title_Text: "选择国家和地区", //头部的标题文字 （注：微信平台不显示头部所以在微信平台中使用，请把该参数设置为空。）
        Close_btn: "left_0 w_25 pl_3 text_al_l text_12em", //关闭按钮的样式设置
        Close_Text: "关闭", //头部的关闭按钮文字 （注：微信平台不显示头部所以在微信平台中使用，请把该参数设置为空。）
        Close_Icon:"text_14em ion ion-ios-arrow-left mr_03em", //头部的关闭按钮图标  （注：微信平台不显示头部所以在微信平台中使用，请把该参数设置为空。）
        list_Class: "bg_white bor_bottom bor_gray_ddd c_gray_777 touchstart", //数据列表的Class样式
        Nav_active: "c_title text_bold", //右侧固定字母菜单的选中样式
        show_color: "c_title text_bold text_4em", //右侧固定字母点击后中间淡入字母效果的样式
        data: json_countryData, //Json获取data数据(data.js)
        showBack:function(ele){ //回调获取被展开后显示的元素
            console.log("选择区域的元素被显示了。您可以对该元素进行操作。");
            console.log(ele);
        },
        clickBack:function(num){ //回调获取当前的值
            console.log($(num)[0].dataset);
        }
    });
});

/*-----------------------------------------------Andrew_NowTime 使用方法-------------------------------------------*/
$(function () {
    $(".plug_nowtime").Andrew_NowTime({
        dateStyle: "yyyy年MM月dd日 hh:mm:ss" //年月日时间分钟秒数格式 （默认方式：yyyy-MM-dd hh:mm:ss）
    });
});

/*-----------------------------------------------Andrew_Substring 使用方法-------------------------------------------*/
$(function () {
    $(".plug_RMBoutput").Andrew_Substring(); //数字RMB格式
});

/*-----------------------------------------------Andrew_Spinner 使用方法-------------------------------------------*/
$(function () {
    $(".plug_spinner").Andrew_Spinner({//数量加减功能
        input_width: "20%", //输入框宽度 （px,%,em）
        btn_wrap: "fr rel ovh border bor_gray_ddd w_100 bg_gray_f9f", //数量加减输入框的外框样式
        btn_left: "abs top_0 left_0 bor_right bor_gray_ddd bg_white wh_24em ion ion-minus-round", //数量减少按钮Class
        btn_right: "abs top_0 right_0 bor_left bor_gray_ddd bg_white wh_24em ion ion-plus-round", //数量增加按钮Class
        maxNumber: 5, //设置最大数量限制(不使用限制请设为空值)
        clickBack:function(num){ //回调获取当前的值
            console.log(num);
        }
    });
});

/*-----------------------------------------------Andrew_CountTo 使用方法-------------------------------------------*/
$(function () {
    $(".plug_count").Andrew_CountTo(); //数字加动画变化效果
    $(".plug_count").click(function(){ //点击后数字加动画变化效果
        $(this).Andrew_CountTo({
            onUpdate: function(count){ //回调获取实时变化的数据
                console.log(count);
            },
            onComplete: function(count){ //回调获取最终的数据
                console.log(count);
            }
        });
    });
});

/*-----------------------------------------------Andrew_CountDown 使用方法-------------------------------------------*/
$(function(){
    $(".plug_Countdown").click(function () {
        Andrew_CountDown($(this),{
            wait: 10, //默认秒数
            Start_text: "秒", //倒计时开始文字
            End_Text: "时间到！", //倒计时结束后的文字
            callback:function(waits){ //回调
                console.log("each --- "+waits);
                console.log("倒计时已结束，请控制下一步");
            }
        });
    });
});

/*-----------------------------------------------Andrew_Progress 使用方法-------------------------------------------*/
$(function () {
    $(".plug_progress").Andrew_Progress({
        goalAmount: 100, //总进度数值
        currentAmount: 60, //当前进度数值
        milestoneNumber: 90, //数字达到当前设置的参数后进度条的颜色变化
        ColorStyle: "bg_title c_white", //进度条样式设置
        textBefore: "当前进度：", //当前进度文字
        textAfter: "%", //当前进度百分比文字
        callback: function() { //通过回调获取元素
            //console.log(this);
        }
    });
});

/*-----------------------------------------------Andrew_StepOrder 使用方法-------------------------------------------*/
$(function () {
    $(".plug_step").Andrew_StepOrder({
        stepNum: 2, //步骤里要选前几个
        stepClass:  new Array( //被选中的样式
            "bg_title c_yellow", //被选中的数字框样式
            "c_title" //被选中的标题文字颜色
        ),
        dashed_line: "bor_gray_ccc bor_bottom_dashed2", //线条的颜色样式
        progress: "bor_title bor_bottom2", //到达的线条颜色样式
        callback: function(ele) { //加载完后的回调
            //console.log(ele);
        }
    });
});

/*-----------------------------------------------Andrew_Ratyli 使用方法-------------------------------------------*/
$(function() {
    $("#plug_ratyli1").Andrew_Ratyli({
        rate:1, //当前被选中的数量
        ratemax:5, //总数量
        disable:false, //是否能点击(不可点击：true，可点击：false)
        full:"<i class='c_title text_18em line_h_2em ion ion-ios-star mr_05em'></i>", //被选中状态
        empty:"<i class='c_title text_18em line_h_2em ion ion-ios-star-outline mr_05em'></i>", //未选中状态
        onRated:function(value,init){ //init是默认触发事件
            if(!init) console.log(value); // 获取点击后的值
            if(!init) console.log(this); //这里的this指向对象
        }
    });
});

$(function(){
    $("#plug_ratyli2").Andrew_Ratyli({
        rate:4, //当前被选中的数量
        ratemax:5, //总数量
        disable:true, //是否能点击(不可点击：true，可点击：false)
        full:"<i class='c_gray_ccc text_18em line_h_2em ion ion-ios-star mr_05em'></i>", //被选中状态
        empty:"<i class='c_gray_ccc text_18em line_h_2em ion ion-ios-star-outline mr_05em'></i>", //未选中状态
        onRated:function(value,init){ //init是默认触发事件
            if(!init) console.log(value); //获取点击后的值
            if(!init) console.log(this); //这里的this指向对象
        }
    });

});

/*-----------------------------------------------Andrew_Favorite 使用方法-------------------------------------------*/
$(function(){
    $(".plug_like").Andrew_Favorite({
        likeMode: true, //是否开启点赞模式 （设置false为收藏模式）
        str: "+1",  //字符串，要显示的内容;也可以传一段html
        icon_defaultClass: "text_al_m text_14em ion ion-ios-heart-outline", //默认图标样式
        icon_changeClass: "text_al_m text_14em ion ion-ios-heart c_title", //点击后的图标样式
        textClass: "c_gray_777 ml_03em", //文字样式
        text_default: "点赞", //默认显示的文字
        startSize: "12px",  //动画开始的文字大小
        endSize: "30px",    //动画结束的文字大小
        interval: 600,  //动画时间间隔
        color: "red",    //文字颜色
        callback:function(length,ele){ //通过回调获取数量和元素
            console.log(length);
            console.log(ele);
        }
    });
});

$(function(){
    $(".plug_collect").Andrew_Favorite({
        likeMode: false, //是否开启点赞模式 （设置false为收藏模式）
        icon_defaultClass: "text_al_m text_14em ion ion-ios-star-outline", //默认图标样式
        icon_changeClass: "text_al_m text_14em ion ion-ios-star c_title", //点击后的图标样式
        textClass: "c_gray_777 ml_03em", //文字样式
        text_default: "关注", //默认显示的文字
        text_change: "取消关注", //点击后显示的文字
        callback:function(length,ele){ //通过回调获取数量和元素
            console.log(length);
            console.log(ele);
        }
    });
});

/*-----------------------------------------------Andrew_SnInput 使用方法-------------------------------------------*/
$(function(){
    $(".plug_sn_input").Andrew_SnInput({
        default_active: false, //是否开启默认选择第一个输入框
        input_length: "1", //每个输入框限制的字数
        callback:function(sn){ //回调获取全部输入的值
            console.log(sn);
        }
    })
});

/*-----------------------------------------------Andrew_Typeahead 使用方法-------------------------------------------*/
$(function(){
    $(".plug_Typeahead").Andrew_Typeahead({
        items: 20, //最多显示的数据
        source: json_searchData, //Json获取data数据(data.js)
        showCallBack:function(ele){ //回调获取被展开后显示的元素
            $(".plug_Typeahead").parent().append('<i class="dis_none_im abs left_0 ml_03em text_14em c_gray_999 line_h_18em iconfont icon-sousuo1"></i>');
            if ($(".ak-typeahead").children("ol").length < 1) {
                $(".ak-typeahead").append(
                    "<ol class=\"scrolling list ovs_y h_100\">\n" +
                        "<li class=\"touchstart\" data-value=\"BJ\">北京</li>\n" +
                        "<li class=\"touchstart\" data-value=\"SH\">上海</li>\n" +
                        "<li class=\"touchstart\" data-value=\"GZ\">广州</li>\n" +
                        "<li class=\"touchstart\" data-value=\"SZ\">深圳</li>\n" +
                        "<li class=\"touchstart\" data-value=\"QD\">青岛</li>\n" +
                    "</ol>"
                );
                $(".ak-typeahead").children("ol").find("li").bind("touchstart", function() {
                    console.log($(this).text());
                    $(".plug_Typeahead").val($(this).text());
                    document.activeElement.blur();//隐藏键盘
                });
            }
            console.log("搜索区域的元素被显示了。您可以对该元素进行操作。");
            console.log(ele);
        },
        itemSelected: function (ele,id,name) { //通过回调获取点击选择后的值（ele：当前元素，id：数据编号，name：选择的值）
            console.log(ele);
            console.log("id: "+id+", name: "+name);
        }
    });
});

/*-----------------------------------------------Andrew_lightSlider 使用方法-------------------------------------------*/
$(function(){
    $("#plug_photo_slider").Andrew_lightSlider({
        item:3, //默认显示几张
        activeClass: '', //图片点击后的class样式(建议在左右能滑动的Tabs功能时使用)
        loop:true, //是否重复联播（true，false）
        autoWidth: false, //是否开启自定义宽度（true：不设置自动宽度可以手动设置宽度，false:自动比率加宽度）
        auto:false, //是否自动播放（true，false）
        slideMargin: 10, //每张图的右侧间距 （输入数字自动识别为px）
        speed:1000, //自动播放速度
        pager: false, //是否显示联播图位置按钮（true，false）
        dotClass: new Array( //底部图片位置的样式设置（开启pager的参数才有效）
            "bg_gray_777 wh_08em bor_rad_50 ml_02em mr_02em", //默认样式
            "bg_title" //点击后的样式
        ),
        onSliderClick: function($el,num) { //通过回调获取点击事件 （$el：当前元素，num：当前点击的序号）
            console.log(num)
        },
        onSliderLoad: function ($el) { //加载后的回调 （$el：当前元素）
            //console.log($el)
        }
    });
});

/*-----------------------------------------------Andrew_PreviewImage 使用方法-------------------------------------------*/
$(function () {
    $(".plug_previewImage").Andrew_PreviewImage({ //删除图片提示设置
        messege: "确认要删除当前的图片吗？", //弹窗中的提示文字
        btn_ok: "确定", //弹窗中的确定按钮文字
        btn_cancel: "取消", //弹窗中的取消按钮文字
        box_title: new Array(//弹窗中的标题名称文字
            "确认", //confirm
            "提示" //alert
        ),
        delbtnClass: ".plug_DelImage", //设置控制显示和隐藏删除按钮的控制按钮
        webToast: "成功删除!", //删除图片后提示的文字
        Class:"bg_white dis_block text_al_c ovh rel w_80 h_5em line_h_5em border bor_gray_ddd", //图片列表边框样式
        Del_icon:"ion ion-ios-close-empty", //图片删除图标样式
        length:4, //默认允许上传多少照片
        length_title:"最大支持上传图片数量为：", //超出上传限制数量后提示的文字
        errorTip:"图片上传格式不正确！", //图片上传格式有误时提示的文字
        addCallbak: function(imglist) { //上传图片后的回调（获取图片列表元素）
            console.log(imglist)
        },
        delCallbak: function(image) { //点击删除按钮后的回调，获取要删除的图片元素
            console.log(image);
            image.remove();
        }
    });
});

/*-----------------------------------------------Andrew_PortraitImage 使用方法-------------------------------------------*/
$(function () {
    $(".plug_PortraitImage").Andrew_PortraitImage({
        errorTip:"图片上传格式不正确！", //图片上传格式有误时提示的文字
        btn_ok: "确定", //弹窗中的确定按钮文字
        box_title: "提示", //弹窗中的标题名称文字
        addCallbak: function(img) { //上传图片后的回调（获取图片元素）
            console.log(img)
        }
    });
});

/*-----------------------------------------------Andrew_Viewer 使用方法-------------------------------------------*/
$(function() {
    $(".plug_viewer").Andrew_Viewer({
        url: "data-original" //图片放大后高清图片URL设置
    });
});

/*-----------------------------------------------Andrew_DateTime 使用方法-------------------------------------------*/
$(function () {
    $("#plug_datetime").Andrew_DateTime({
        showNowTime:true, //默认当前时间
        Year:true, //是否显示年（true，false）
        Month:true, //是否显示月（true，false）
        Day:true, //是否显示日（true，false）
        Hour:false, //是否显示小时（true，false）
        Minute:false, //是否显示分钟（true，false）
        Seconds:false, //是否显示秒数（true，false）
        startYear:2005, //开始年份
        endYear:2050, //结束年份
        yearText:"年", //顶部时间“年单位” 文字
        monthText:"月", //顶部时间“月单位” 文字
        dayText: "日", //顶部时间“日单位” 文字
        hourText: "时", //顶部时间“时单位” 文字
        minuteText: "分", //顶部时间“分单位” 文字
        secondsText: "秒", //顶部时间“秒单位” 文字
        okText:"确认", //按钮确认键文字
        cancelText:"取消", //按钮取消键文字
        okfun: function(sjObj) { //确认时间时候执行事件
            console.log(sjObj);
        },
        onfun: function(sjObj) { //取消改变时间时候执行事件
            console.log(sjObj);
        }
    })
});

/*-----------------------------------------------Andrew_MultiDate 使用方法-------------------------------------------*/
$(function(){
    $("#plug_multidate").Andrew_MultiDate({
        language:{
            month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            weeks : [ "日", "一", "二", "三", "四", "五", "六" ]
        },
        format:"YYYY-MM-DD", //日期格式
        minDate: $.nowDate(0), //0代表今天，-1代表昨天，-2代表前天，以此类推
        okfun: function(obj){//点击确定后的回调,obj包含{ elem当前输入框ID, val当前选择的值, date当前的日期值}
            console.log(obj.elem);     //得到当前输入框的ID
            console.log(obj.val);      //得到日期生成的值，如：2017-06-16

            //得到日期时间对象，range为false
            console.log(obj.date);    //这里是对象
            obj.date = {YYYY: 2017, MM: 08, DD: 18}

            //开启区域选择，range为字符串 时才会返回一个日期时间数组对象。
            console.log(obj.date);    //这里是数组
            obj.date = [
                {YYYY: 2017, MM: 08, DD: 18},
                {YYYY: 2019, MM: 11, DD: 25}
            ]
        },
        success:function(elem) {}//层弹出后的成功回调方法, elem当前输入框ID
    });
});

/*-----------------------------------------------Andrew_Select 使用方法-------------------------------------------*/
$(function () {
    new Andrew_Select({
        trigger: "#plug_trigger1", //需要绑定的元素
        title: "选择星期", //弹窗标题文字
        ensure: "确定", //弹窗的确定按钮文字
        cancel: "取消", //弹窗的取消按钮文字
        wheels: [
            {data: json_weekData} //Json获取data数据(data.js)
        ],
        position:[0], //初始化定位，打开时默认选中的哪个。如果不填默认为0
        callback: function (val,length) { //回调获取当前的值（val是值,length是数量以及数组）
            console.log($(val));
            console.log($(length));
        }
    });
});

$(function () {
    new Andrew_Select({
        trigger: "#plug_trigger2",  //需要绑定的元素
        title: "选择地区", //弹窗标题文字
        ensure: "确定", //弹窗的确定按钮文字
        cancel: "取消", //弹窗的取消按钮文字
        wheels: [
            {data : json_cityData} //Json获取data数据(data.js)
        ],
        callback: function (val,length) { //回调获取当前的值（val是值,length是数量以及数组）
            console.log($(val));
            console.log($(length));
        }
    });
});
