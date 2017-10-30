(function (window) {
  // 私有数据
  var data = 'atguigu'
  // 操作数据的行为
  function doSomething() {
    console.log('doSomething()', data)
  }
  function doOtherthing() {
    console.log('doOtherthing()', data)
  }
  function xxx() {
    console.log('xxx()', data)
  }

  // 向外暴露部分操作数据的行为
  window.myModule = {
    doSomething,
    doOtherthing
  }
})(window)
