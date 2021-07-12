document.body.style.background = localStorage.getItem('backColor')
for(i = 0; i<61; i++){
    document.getElementsByTagName('img')[i].style.margin = localStorage.getItem('borderValue')
}

function lightSwitch(color){
    localStorage.setItem('backColor', color)
    document.body.style.background = color
}

function borderSwitch(value){
    localStorage.setItem('borderValue', value)
    for(i = 0; i<61; i++){
        document.getElementsByTagName('img')[i].style.margin = value
    }
}


function zoomThis(fileName){
    document.getElementById('zoomIMG').src = fileName
    let coordinates = fileName.substring(4,8)
    document.getElementById('coordinates').innerText = coordinates
}