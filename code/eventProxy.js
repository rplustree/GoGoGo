let list = document.getElementById('list')
list.addEventListener('click', (e) => {
  e = e || window.event
  let target = e.target || e.srcElement
  if(target.nodeName.toLowerCase() === 'li')
  console.log(e.innerHTML)
})
