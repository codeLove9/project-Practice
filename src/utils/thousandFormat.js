export const thousandFormat = Vue => {
  Vue.directive('thousandFormat', function (el, binding, vnode) {
    let event = new Event('input')

    function numFormat(num) {
      let num1 = num.split('.')[0]
      let num2 = num.split('.')[1]
      let c = num1.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      if (num.toString().indexOf('.') !== -1) {
        return c + '.' + num2
      } else {
        return c
      }
    }

    el.addEventListener('input', function (event) {
      let inputValue = binding.value + ''
      let cursorPos = event.target.selectionStart || 0
      // 以从后数起来说，光标位置是不变的
      let curPosFromBack = inputValue.length - cursorPos
      let inpVal = (inputValue = inputValue.replace(/,/g, ''))
      binding.value = inputValue //这里变化会导致视图变化
      let t = numFormat(inpVal) //转换为千分位格式
      console.log(t, '千分位')
      vnode.context.$nextTick(function () {
        el.querySelector('input').value = t //在上面由于value变化而更新视图后，再赋值给input.value,
        //这样可以防止这次赋值先于上面的更新视图执行
        //这里重新将光标的位置重置到输入数字的位置，否则每次正则变换后光标总是跳到最后
        el.querySelector('input').setSelectionRange(t.length - curPosFromBack, t.length - curPosFromBack)
      })
    })
    el.dispatchEvent(event) //如果数据从服务端获取，要自定义input事件发送，这样才能触发上面绑定的事件处理方法，使数据一进入输入框里面变成千分位格式
  })
}
