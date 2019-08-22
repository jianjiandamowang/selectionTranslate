import EventEmiiter from './emiiter.js';
import TranslateAction from './TranslateAction.js';

const EnReg = /[a-zA-Z]+$/;  // 至少包含英文

class TextTranslate extends EventEmiiter {
  // Element = null;
  // Text = '';
  // TranslateAction = null;

  constructor (el = '', options = {}) {
    super();

    this.elbindEvent(el);
    this.createTranslateModal();
  }


  /**
   * 绑定的dom元素
   * @param {HTMLElement} el 
   */
  elbindEvent (el) {
    if (!el) {
      this.Element = document.body;
      this.Element.addEventListener('mouseup', (e) => this.onMouseUpAction(e));
    } else {
      this.Element = document.querySelector(el);
      this.Element.addEventListener('mouseup', (e) => this.onMouseUpAction(e));
    }
  }

  /**
   * 鼠标抬起获取选中的文字
   * @param {*} e 
   */
  onMouseUpAction (e) {
    if (this.Text) {
      this.Text = '';
    }

    this.Text = this.getSelectionText();
    if (!this.Text) {
      this.hideModal();
      return
    }
    this.setTextFrom();
    this.setContent('翻译中...');
    this.TranslateAction = null
    // if (!EnReg.test(this.Text)) {
    //   throw '选中的文字必须包含英文';
    // }
    this.TranslateAction = new TranslateAction({
      text: this.Text,
      target: e,
      emitter: this,
      element: this.Element,
      modal: this.TranslateModal
    });
  }

  getSelectionText () {
    if (document.selection) {
      return document.selection.createRange().text;
    } else {
        return window.getSelection().toString();
    }

  }

  /**
   * 初始化翻译弹窗
   */
  createTranslateModal () {
    // this.TranslateModal = document.createElement('div');
    // this.TranslateModal.className = 'translateModal';
    this.TranslateModal = document.querySelector('.translateModal');
    if (!this.TranslateModal) throw '缺少翻译弹窗dom节点,';

    this.TranslateModal.style.opacity = 0;
    this.TranslateModal.style.position = 'absolute';
    this.TranslateModal.addEventListener('mouseup', (e) => e.stopPropagation() );
   
    this.closeBtn = document.querySelector('#translate-close');
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.hideModal();
      });
    }

    // document.body.appendChild(this.TranslateModal);
  }

  /**
   * 关闭弹窗
   */
  hideModal () {
    // var clearSlct = "getSelection" in window ? function(){
    //   window.getSelection().removeAllRanges();
    //  } : function(){
    //   document.selection.empty();
    //  };
    this.TranslateModal.style.opacity = 0;
    this.setContent('');
  }

  /**
   * 设置翻译结果到窗口中
   * @param {*String} translateContent 翻译结果 
   */
  setContent (translateContent) {
    let dom = document.querySelector('.translateModal #translate-result');
    if (!dom) throw '缺少显示翻译内容的节点， 节点id为translate-content';

    dom.innerHTML = translateContent;
  }

  /**
   * 设置取词文本到窗口中
   */
  setTextFrom () {
    let dom = document.querySelector('.translateModal #translate-from');
    if (!dom) throw '缺少显示原内容的节点， 节点id为translate-from';
    dom.innerHTML = this.Text;
  }
  

}

module.exports = TextTranslate;