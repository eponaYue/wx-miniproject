//获取应用实例
const app = getApp()
// 页面初始数据
let pageData = {

};
/**
 * Component构造器注册页面：指定页面初始数据、生命周期回调、事件处理函数
 */
Page({
  data: pageData,

  methods: {
    /**
     * @param {*} options 
     * 页面创建时执行
     */
    onLoad: function (options) {
      // 获取App实例
      //  console.log('AppInstance:', getApp());
      // 获取页面栈
      //  console.log('PageInstance:', getCurrentPages());
    },
    /**
     * 页面出现在前台时执行
     */
    onShow: function () { },
    /**
     * 页面首次渲染完毕时执行
     */
    onReady: function () {
  
    },
    /**
     * 页面从前台变为后台时执行
     */
    onHide: function () { },
    /**
     * 页面销毁时执行
     */
    onUnload: function () { },
    /**
     * 触发下拉刷新时执行
     */
    onPullDownRefresh: function () { },
    /**
     * 页面触底时执行
     */
    onReachBottom: function () { },
    /**
     * 页面被用户分享时执行
     */
    onShareAppMessage: function () { },
    /**
     * 页面滚动时执行
     */
    // onPageScroll: function () { },
    /**
     * 页面尺寸变化时执行
     */
    onResize: function () { },
    /**
     * 
     * @param {index pagePath text} item
     * tab点击时执行 
     */
    onTabItemTap(item) { },
    //事件处理函数
  },
})
