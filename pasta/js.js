const NewValue = document.querySelector('#NewValue')
let x = 0
const btn = document.querySelector('#btn').addEventListener('click',(e)=>{
    x++
    e.NewValue.innerHTML = x
})
