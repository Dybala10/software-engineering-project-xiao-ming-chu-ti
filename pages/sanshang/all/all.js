var app = getApp();

Page({

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    change_q: "初始化题目！",
    result: '',
    jindu:0,
    jinzhi: false,
    xiaoshi:1,
    isShow:false,
    again: 1,
    inputnum: '',
    datishu: 0,
    cuotishu: 0,
    timer: '',
    countDownNum: '900',
    huhu: '',
    cc:0,
    item: {
      num1: '',
      num2: '',
      num3: '',
      sym1: '',
      gang1: '',
      gang2: ''
    },
    item1: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      sym1: '',
      gang1: '',
      gang2: ''
    },
    item2: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      sym1: '',
      gang1: '',
      gang2: ''
    },
    item3: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      sym1: '',
      gang1: '',
      gang2: ''
    },
    item4: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      sym1: '',
      gang1: '',
      gang2: ''
    },
    item5: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      sym1: '',
      gang1: '',
      gang2: ''
    }
  },

  clickMe: function (e) {
    this.setData({
      change_q: "更换题目！"
    })
    var that = this;
    var i = true;
    var fn1, fn2, fn3, fn4;
    var fs1, fs2;
    var fk1, fk2, fk3, fk4;
    var result1, result2, result3, result4, result5;
    var fg1, fg2;
    var choose;
    var m_result1, m_result2, m_result3, m_result4, m_result5;
    while (i == true) {

      choose = Math.floor(Math.random() * 5 + 1);
      fn1 = Math.floor(Math.random() * 1000 + 1);
      fn2 = Math.floor(Math.random() * 1000 + 1);
      fs1 = Math.floor(Math.random() * 2 + 1) == 1 ? '+' : '-';

      if (fs1 == '+') {
        result1 = fn1 + fn2;
        if (result1 < 1000) {
          i = false;
        }
      }
      else if (fs1 == '-') {
        result1 = fn1 - fn2;
        if (result1 < 1000 && result1 >= 0) {
          i = false;
        }
      }

      that.setData({
        item1: {
          num1: fn1,
          num2: fn2,
          sym1: fs1
        }
      })
    };
    i = true;
    while (i == true) {

      fn1 = Math.floor(Math.random() * 100 + 1);
      fn2 = Math.floor(Math.random() * 9 + 1);

      result2 = fn1 * fn2;
      if (result2 < 1000) {
        i = false;
      }

      that.setData({
        item2: {
          num1: fn1,
          num2: fn2,
          sym1: '×'
        }
      })
    };
    i = true;
    while (i == true) {

      fn1 = Math.floor(Math.random() * 100 + 1);
      fn2 = Math.floor(Math.random() * 9 + 1);

      result3 = fn1 * fn2;
      if (result3 < 1000) {
        i = false;
      }

      that.setData({
        item3: {
          num1: fn1,
          num2: fn2,
          sym1: '×'
        }
      })
    };
    i = true;
    while (i == true) {

      fn3 = Math.floor(Math.random() * 9 + 1);
      fn1 = Math.floor(Math.random() * fn3);
      fn2 = Math.floor(Math.random() * fn3 + 1);
      fs1 = Math.floor(Math.random() * 2 + 1) == 1 ? '+' : '-';
      fn4 = fn3;

      if (fs1 == '+') {
        result4 = fn1 + fn2;
        if (result4 < fn3 && fn1 > 0) {
          i = false;
        }
      }
      else if (fs1 == '-') {
        result4 = fn1 - fn2;
        if (result4 < fn3 && result4 > 0) {
          i = false;
        }
      }

        fg1 = '/';
        fg2 = '/';

      that.setData({
        item4: {
          num1: fn1,
          num2: fn2,
          num3: fn3,
          num4: fn4,
          sym1: fs1,
          gang1: fg1,
          gang2: fg2
        }
      })
    };
    i = true;
    while (i == true) {

      fn3 = Math.floor(Math.random() * 9 + 1);
      fn1 = fn3;
      fn2 = Math.floor(Math.random() * fn3 + 1);
      fs1 = Math.floor(Math.random() * 2 + 1) == 1 ? '+' : '-';
      fn4 = fn3;

      if (fs1 == '+') {
        result5 = fn1 + fn2;
        if (result5 < fn3) {
          i = false;
        }
      }
      else if (fs1 == '-') {
        result5 = fn1 - fn2;
        if (result5 < fn3 && result5 > 0) {
          i = false;
        }
      }

      if (fn1 == fn3) {
        fg1 = '';
        fg2 = '/';
        fn1 = 1;
        fn3 = '';
      }
      else {
        fg1 = '/';
        fg2 = '/';
      }

      that.setData({
        item5: {
          num1: fn1,
          num2: fn2,
          num3: fn3,
          num4: fn4,
          sym1: fs1,
          gang1: fg1,
          gang2: fg2
        }
      })
    };
    if (choose == 1) {
      that.setData({
        result: result1,
        item: {
          num1: this.data.item1.num1,
          num2: this.data.item1.num2,
          num3: this.data.item1.num3,
          num4: this.data.item1.num4,
          sym1: this.data.item1.sym1,
          gang1: this.data.item1.gang1,
          gang2: this.data.item1.gang2
        }
      })
    }
    else if (choose == 2) {
      that.setData({
        result: result2,
        item: {
          num1: this.data.item2.num1,
          num2: this.data.item2.num2,
          num3: this.data.item2.num3,
          num4: this.data.item2.num4,
          sym1: this.data.item2.sym1,
          gang1: this.data.item2.gang1,
          gang2: this.data.item2.gang2
        }
      })
    }
    else if (choose == 3) {
      that.setData({
        result: result3,
        item: {
          num1: this.data.item3.num1,
          num2: this.data.item3.num2,
          num3: this.data.item3.num3,
          num4: this.data.item3.num4,
          sym1: this.data.item3.sym1,
          gang1: this.data.item3.gang1,
          gang2: this.data.item3.gang2
        }
      })
    }
    else if (choose == 4) {
      that.setData({
        result: result4 + '/' + this.data.item4.num4,
        item: {
          num1: this.data.item4.num1,
          num2: this.data.item4.num2,
          num3: this.data.item4.num3,
          num4: this.data.item4.num4,
          sym1: this.data.item4.sym1,
          gang1: this.data.item4.gang1,
          gang2: this.data.item4.gang2
        }
      })
    }
    else if (choose == 5) {
      that.setData({
        result: result5 + '/' + this.data.item5.num4,
        item: {
          num1: this.data.item5.num1,
          num2: this.data.item5.num2,
          num3: this.data.item5.num3,
          num4: this.data.item5.num4,
          sym1: this.data.item5.sym1,
          gang1: this.data.item5.gang1,
          gang2: this.data.item5.gang2
        }
      })
    }
    ;
    this.setData({
      cc:choose,
    })
    console.log(e);
  },
  isitright: function (e) {
    this.setData({
      inputnum: e.detail.value
    })
  },
  checkit: function (e) {
    var that = this;
    var i = that.data.datishu;
    var j = that.data.jindu;
    if (this.data.inputnum == this.data.result) {
      that.setData({
        huhu: '',
        value_num: '',
        jindu:j+3.333,
        datishu: i + 1,
        isShow:false,
        again: 1,
        item1: {
          num1: '',
          num2: '',
          num3: '',
          sym1: '',
          sym2: '',
          kuo1: '',
          kuo2: '',
          kuo3: '',
          kuo4: ''
        }
      })
      this.clickMe();
      var at = wx.getStorageSync('all_ti');
      at = at + 1;
      wx.setStorage({
        key: 'all_ti',
        data: at,
      });
    }
    else {
      if (this.data.again == 1) {
        var j = that.data.cuotishu;
        this.setData({
          again: 0,
          cuotishu: j + 1
        });

        app.globalData.max = app.globalData.max + 1;
        wx.setStorage({
          key: 'max',
          data: app.globalData.max,
        });
        if (this.data.cc == 1 || this.data.cc == 2 || this.data.cc == 3) {
          app.globalData.cuoti.push(this.data.item.num1 + this.data.item.sym1 + this.data.item.num2);
          wx.setStorage({
            key: 'cuoti',
            data: app.globalData.cuoti,
          });
          app.globalData.daan.push(this.data.result);
          wx.setStorage({
            key: 'daan',
            data: app.globalData.daan,
          });
        } else if (this.data.cc == 4) {
          app.globalData.cuoti.push(this.data.item.num1 + this.data.item.gang1 + this.data.item.num3 + this.data.item.sym1 + this.data.item.num2 + this.data.item.gang2 + this.data.item.num4);
          wx.setStorage({
            key: 'cuoti',
            data: app.globalData.cuoti,
          });
          app.globalData.daan.push(this.data.result);
          wx.setStorage({
            key: 'daan',
            data: app.globalData.daan,
          });
        } else {
          app.globalData.cuoti.push(this.data.item.num1 + this.data.item.sym1 + this.data.item.num2 + this.data.item.gang2 + this.data.item.num4);
          wx.setStorage({
            key: 'cuoti',
            data: app.globalData.cuoti,
          });
          app.globalData.daan.push(this.data.result);
          wx.setStorage({
            key: 'daan',
            data: app.globalData.daan,
          });
        }

      }
      this.setData({
        huhu: '答错了哦！再想想吧！',
        value_num: '',
        isShow:true
      });

    }
    if (that.data.datishu == 30) {
      this.setData({
        huhu: '已经完成今天的练习了哦！该休息了',
        value_num: '',
        jinzhi: true,
        xiaoshi:0,
        item1: {
          num1: '',
          num2: '',
          num3: '',
          sym1: '',
          sym2: '',
          kuo1: '',
          kuo2: '',
          kuo3: '',
          kuo4: ''
        }
      });
      if (this.data.cuotishu == 0) {
        app.globalData.grades = app.globalData.grades + 5;
      }
      else if (this.data.cuotishu > 0 && this.data.cuotishu <= 3) {
        app.globalData.grades = app.globalData.grades + 3;
      }
      else if (this.data.cuotishu > 3 && this.data.cuotishu <= 9) {
        app.globalData.grades = app.globalData.grades + 1;
      };
      wx.setStorage({
        key: 'grades',
        data: app.globalData.grades,
      });
    }
  },
  onLoad: function () {
    this.clickMe();
    this.countDown();
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;
    that.setData({
      timer: setInterval(function () {
        countDownNum--;
        that.setData({
          countDownNum: countDownNum
        })
        if (countDownNum == 0) {
          clearInterval(that.data.timer);
          that.setData({
            huhu: "时间已经到了哦！",
            jinzhi: true,
            xiaoshi: 0,
          })
        }
      }, 1000)
    })
  },
  sure: function () {
    if (this.data.datishu < 30) {
      wx.showModal({
        title: '你还有题目没有答完哦！',
        content: '点击确定返回则本次做题无效！',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../sanshang',
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../sanshang',
      })
    }
  },
  onUnload: function () {
    let e = this;
    clearInterval(e.data.timer);
  },


})