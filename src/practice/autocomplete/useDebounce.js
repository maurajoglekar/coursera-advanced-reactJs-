const useDebounce = (func, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
const useDebounce2 = (func, delay) => {
  let timer = null;
  return (...args) => {
    // if (immediate && !timer) {
    //   func.apply(this, args);
    // }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      //func(...args);
      // func.call(this, ...args);
      //   timer = null;
    }, delay);
  };
};

export function throttle(callback, delay) {
  let timer;
  let lastCallTime = 0;

  const throttler = (...args) => {
    const currentTime = Date.now();
    const diffenceTime = currentTime - lastCallTime;
    const delayRemaining = delay - diffenceTime;

    if (delayRemaining > 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
        lastCallTime = Date.now();
      }, delayRemaining);
    } else {
      // no more delay, execute immediately
      callback.call(this, ...args);
      lastCallTime = currentTime;
    }
  };
  throttler.cancel = () => clearTimeout(timer);
  // to not include the cancel:
  //   return (...args) => {
  //     const currentTime = Date.now();
  //     const diffenceTime = currentTime - lastCallTime;
  //     const delayRemaining = delay - diffenceTime;

  //     if (delayRemaining > 0) {
  //       clearTimeout(timer);
  //       console.log("resized!");
  //       timer = setTimeout(() => {
  //         callback.apply(this, args);
  //         lastCallTime = Date.now();
  //       }, delayRemaining);
  //     } else {
  //       callback.call(this, ...args);
  //       lastCallTime = currentTime;
  //     }
  //   };
  return throttler;
}
export default useDebounce;
