function ajax(data) {
  let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open(data.method, data.url, true)
  xhr.onload = function () {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // do something
      console.log(xhr.responseText)
    }
  }
  xhr.send(data.data)
}
