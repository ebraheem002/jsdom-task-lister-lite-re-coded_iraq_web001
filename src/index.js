document.addEventListener("DOMContentLoaded", () => {
  let sub = document.getElementById('create-task-form')
    
  sub.addEventListener('submit',function ()  {
event.preventDefault();
  let ab = document.getElementById('new-task-description').value
  let tasks = document.getElementById('tasks')
  if(ab.trim() > ''){
    let li = document.createElement('li')
    let butt = document.createElement('button')
    butt.setAttribute('class','beb')
    butt.innerHTML = 'x'
    li.innerHTML = ab
    tasks.appendChild(li)
        li.appendChild(butt)
        

    reset()
    dele()
  }
  })

function reset() {
   let ab = document.getElementById('new-task-description').value = null
}
function dele(){
  let beb = document.getElementsByClassName('button')[0]
  beb.addEventListener('click',function()  {
    beb.forEach (ele => function(){
      ele.parentNode.remove()
    })
  })
} 
});
