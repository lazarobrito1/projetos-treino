
var radio = document.querySelector('.manual')

document.getElementById('btn-1').checked = true

var cont = 1
setInterval(()=>{
    proxima()
}, 3000)

function proxima() {
    cont++
    if(cont > 3){
        cont = 1
    }
    document.getElementById('btn-' + cont).checked = true
}