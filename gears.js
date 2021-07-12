/*Renderizar mapa*/
for(x=-4; x<2; x++){
    let wraper = document.getElementById('wrap')

    let columnDiv = document.createElement('div')
    columnDiv.id = `flexColumn${x}`

    for(y=1; y<11; y++){
        let columnsImgs = document.createElement('img')
        columnsImgs.src = `day/${x},${y}.png`
        columnsImgs.onmouseover = () => {
            document.getElementById('zoomIMG').src = columnsImgs.src
        }
        columnDiv.append(columnsImgs)
    }

    wraper.append(columnDiv)
}


/*Funções de estilo*/
function lightSwitch(color){
    localStorage.setItem('backColor', color)
    document.body.style.background = color
}

function marginSwitch(marginValue){
    localStorage.setItem('marginValue', marginValue)
    for(i = 0; i<61; i++){
        document.getElementsByTagName('img')[i].style.margin = marginValue
    }
}

function gridSwitch(borderValue){
    localStorage.setItem('borderValue', borderValue)
    for(i = 0; i<61; i++){
        document.getElementsByTagName('img')[i].style.border = borderValue
    }
}

/*Sessão anterior*/
document.body.style.background = localStorage.getItem('backColor')
for(i = 0; i<61; i++){
    document.getElementsByTagName('img')[i].style.margin = localStorage.getItem('marginValue')
}

for(i = 0; i<61; i++){
    document.getElementsByTagName('img')[i].style.border = localStorage.getItem('borderValue')
}