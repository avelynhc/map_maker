const addTileClicked = (evt) => {
    const containClass = evt.target.classList
    if (containClass.contains("tile-select")){
        console.log("tile button selected")
        if(!containClass.contains("selected")){
            document.querySelector(".selected").classList.remove("selected")
            containClass.add("selected")
        }
    }
}
const mapTileClicked = (e) => {
    if(e.target.classList.contains("tile")){
        e.target.innerHTML = `<img src="${document.querySelector(".selected").src}">`
        e.target.classList.add("occupied")
    }
    else if (e.target.parentElement.classList.contains("tile")){
        console.log("remove tile was pressed!")
        e.target.parentElement.innerHTML = ""
    }
}
const createNewMapButtonPressed = () => {
    const containOccupied = document.querySelectorAll(".occupied")
    for(let i=0; i<containOccupied.length; i++){
        containOccupied[i].innerHTML = ""
    }
    document.querySelector(".selected").classList.remove("selected")
    document.querySelector("img").classList.add("selected")
}
document.querySelector(".select-map-tile").addEventListener("click",addTileClicked)
document.querySelector(".map").addEventListener("click",mapTileClicked)
document.querySelector("button").addEventListener("click",createNewMapButtonPressed)