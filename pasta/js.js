const NewValue = document.querySelector('#NewValue')
let x = 0
const btn = document.querySelector('#btn').addEventListener('click',()=>{
    x++
    NewValue.innerHTML = x
})


async function AtivarBtn(){
    const req = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = req.json()
}