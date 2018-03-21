/*
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
/*-----------------------------------------------Andrew_Router (路由全局设置）使用方法-------------------------------------------*/
$(document).ready(function(){
    Andrew_Router({ //路由配置管理
        Router: true, //是否开启路由（开启路由URL中带#的路径访问页面不刷新页面形式跳转 (开启 true, 停用 false）
        tailClass: ".tail", //内页的底部区域通过设置Class名固定到底部（内页的底部固定区域建议不要使用footer元素）
        changePage: function (hash) { //路由初始化调用和页面变化时的回调
            Andrew_Menu({ //底部菜单的图标以及文字样式变化设置
                active_color: "c_title", //被选中的文字和图标的颜色
                menu_icon: new Array( //每个菜单的默认显示图标设置 （为了正常的显示布局最多设置5个）
                    "ion ion-ios-list-outline", //第1个按钮的图标
                    "ion ion-ios-chatbubble-outline", //第2个按钮的图标
                    "ion ion-ios-clock-outline", //第3个按钮的图标
                    "ion ion-ios-browsers-outline" //第4个按钮的图标
                ),
                menu_icon_active: new Array( //每个菜单的被选中后的图标设置 （为了正常的显示布局最多设置5个）
                    "ion ion-ios-list", //第1个按钮的图标
                    "ion ion-ios-chatbubble", //第2个按钮的图标
                    "ion ion-ios-clock", //第3个按钮的图标
                    "ion ion-ios-browsers" //第4个按钮的图标
                )
            });
            if (!hash) { //首次访问的页面您要跳转到哪个URL？（前面必须加#符号）
                location.replace("#");
            }
        },
        success:function (hash) { //请求加载页面成功后的回调
            if (hash) { //获取hash的参数值，当前的判断是hash有值的情况（公共插件引入的区域）
                /*-----Andrew_Loader 使用方法-----*/
                Andrew_Loader({
                    autoMode: true, //是否开启指定的时间后自动消失功能 (开启 true, 关闭 false）
                    timeToHide:1000, //毫秒时间设置 (automode必须开启才能有效)
                    iconColor:"#79c34a", //图标颜色设置
                    maskBG: true, //是否开启遮挡背景 (开启 true, 关闭 false）
                    Loader:"load_2" //loading效果选择（load_1~7）
                });
                $(".ak-mask").on("click", function () {
                    Andrew_Loader("destroy"); //关闭loading窗
                });
            }
        },
        error:function (hash) { //请求加载页面失败后的回调
            webToast("请求URL:"+hash+" 加载页面失败！","middle",3000);
            setTimeout(function () { //请求加载页面失败时3秒跳转到上一个页面
                window.history.go(-1);
            }, 3000);
        }
    });
});