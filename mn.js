let sliderLine = document . querySelector ( ".slider-line")
let Next = document . querySelector  (".Next" )
let Back = document . querySelector (".Back" )
let sliderText = document . querySelector (".slider-text")

Next.onclick = () => {
    offset += 154
    offset2 += 100 

    if (offset > 500){
        offset = 0 
    }
    if ( offset2 > 300 ){
        offset2 = 0
    }
    sliderLine.style.left = -offset + "px"
    sliderText.style.top = -offset2 + "px"
}
Back.onclick = () => {
    offset -= 154
    offset2 -= 100 

    if (offset < 0){
        offset = 462
    }
    if ( offset2 < 0 ){
        offset2 = 300
    }
    sliderLine.style.left = -offset + "px"
    sliderText.style.top = -offset2 + "px"
}

let offset = 0 // смещение от левого края 
let offset2 = 0