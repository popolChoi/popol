export default class Util {
  /* ----------------------------
   스무스 스크롤
   
   ---------------------------- */
  static scrollTo(id = "root", id2 = "root", duration = 50) {
    const step = (timer) => {
      clearInterval(timer);
      this.timer = null;
      // this.set = 0;
    };

    let set = 0;
    const node = document.getElementById(id);
    const node2 = document.getElementById(id2);
    let top = window.pageYOffset + node.getBoundingClientRect().top;
    const top2 = window.pageYOffset + node2.getBoundingClientRect().top;

    if (top === 0) {
      top = window.pageYOffset;
    }

    if (top > top2) {
      set = top;
    }

    this.timer = setInterval(() => {
      if (top > top2) {
        set -= duration;
        if (top2 * 1 >= set * 1) {
          window.scrollTo(0, top2);
          step(this.timer);
        } else {
          window.scrollTo(0, set);
        }
      } else {
        set += duration;
        if (top2 * 1 <= set * 1) {
          window.scrollTo(0, top2);
          step(this.timer);
        } else {
          window.scrollTo(0, set);
        }
      }
    }, 1);
  }
}

// export default Util;
// export { Util };
