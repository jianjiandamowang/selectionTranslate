
class TranslateAction {
  // loading = false;

  constructor (options = {}) {
    this.initOptions(options);
    if (this.text) {
      // 生成并展示翻译窗口
      this.showTranslateBox();
      // 触发取词成功生命周期回调
      this.successLifeCycle();
    }

    
  } 

  // 初始化翻译行为
  initOptions (options) {
    this.text = options.text;
    this.target = options.target;
    this.emitter = options.emitter;
    this.element = options.element;
    this.modal = options.modal;
  }

  /**
   * 显示翻译窗口
   */
  showTranslateBox () {
    // X定位
    let Xpage;
    if((this.emitter.TranslateModal.clientWidth + this.target.pageX)>document.body.offsetWidth) {
      Xpage = document.body.offsetWidth - this.emitter.TranslateModal.clientWidth
    } else {
      Xpage = this.target.pageX
    }
    // Y定位
    let Ypage;
    let offset = 10; // 默认偏移量（鼠标定位之后再增加多少漂移）
    // console.log('网页可见区域高度',document.body.offsetHeight)
    // console.log('网页可见区域高',document.body.clientHeight)
    // console.log('网页正文全文高',document.body.scrollHeight)
    // console.log('屏幕可用工作区高度',window.screen.availHeight)
    // console.log('屏幕分辨率的高',window.screen.height)
    if ((this.emitter.TranslateModal.clientHeight + this.target.pageY + offset)>document.body.offsetHeight) {
      Ypage = this.target.pageY - this.emitter.TranslateModal.clientHeight - offset
    } else {
      Ypage = this.target.pageY + offset
    }

    this.modal.style.left = Xpage + 'px';
    this.modal.style.top = Ypage + 'px';
    this.modal.style.opacity = 1; 
  }

  /**
   * 取词成功的生命周期回调
   */
  successLifeCycle () {
    this.emitter.trigger('success', this.text);
  }
}

module.exports = TranslateAction;