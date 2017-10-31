/*
在分线程执行的js
 */

// document.write('----')
console.log(this)
function fibonacci(number) { // 递归调用
  return number<=2 ? 1 : fibonacci(number-1)+fibonacci(number-2)
}

var onmessage = function (event) {
  const number = event.data
  console.log('分线程接收到主线程发送的消息', number)
  const result = fibonacci(number)
  postMessage(result)
  console.log('分线程向主线程发送消息', result)
}