/**
 *  事件处理中心
 *  订阅/发布模式
 */
class EventEmiiter {
  constructor () {
    this.subs = {};
  }

  // 订阅
  on (event, callback) {
    if (!this.subs[event]) {
      this.subs[event] = [];
      this.subs[event].push(callback);
    }
  }

  // 发布
  trigger (event, options) {
    if (this.subs[event]) {
      this.subs[event].forEach(cb => {
        cb(options);
      });
    }
  }

  // 订阅一次
  once(event, onceCb) {
    const cb = (...rest) => {
      let res = onceCb.apply(null, rest);
      this.off(event, onceCb);
      return res;
    }

    if (!this.subs[event]) {
      this.subs[event] = [];
      this.subs[event].push(cb);
    }
  }

  // 取消订阅
  off (event, offCb) {
    if (!this.subs[event]) {
      let index = this.subs[event].findIndex(cb => cb === offCb);
      this.subs[event].splice(index, 1); 
      if (!this.subs[event].length) delete this.subs[event];
    }
  }

}

module.exports = EventEmiiter;
