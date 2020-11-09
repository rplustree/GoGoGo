function jsonp(data) {
  let script = document.createElement('script')
  let url = data.baseurl + '?callback=' + data.callback.name
  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}
