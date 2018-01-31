var app = getApp()
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    scrollLeft: 0,
    arra: [
      { 'img': '../images/i.jpg', 'con': '讽德诵功那是把收款方', 'money': '25.5', 'coupons': '10元', "orignal": "现价40", 'number':'' },
      { 'img': '../images/i.jpg', 'con': '颂德歌功的士速递方式发送到发送到发送到', 'money': '35.5', 'coupons': '5元', "orignal": "现价50",
      'number':'2205'}
    ],
    arr: [],




  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
    wx.request({
      url: 'https://test.weapp.xiejing.net/api.php/api/index/index.html',
      data: {
        endPrice: 400,
        freeShipment: 1,
        page: 1,
        q: '精选',
        queryType: 2,
        startPrice: 0
       

      },
      success: function (res) {
        if (res) {
          var data = res.data.data.list;
          console.log(data)
          that.setData({
            arr: res.data.data.list
          })
          // console.log(that.arra)

        }
      }
    })
  },
  footerTap: app.footerTap
})  