let Box = document.querySelectorAll(".color")
let zone = document.querySelector(".zone")
let rgb;


    
    let red = document.getElementById("red")
    let orange = document.getElementById("orange")
    let yellow = document.getElementById("yellow")
    let green = document.getElementById("green")
    let blue = document.getElementById("blue")  
    let indigo = document.getElementById("indigo")
    let violet = document.getElementById("violet")


    rgb = `rainbow(${red.value},${orange.value},${yellow.value},${green.value},${blue.value},${indigo.value},${violet.value})`
    let colorfulCircles = document.getElementById("rainbow")
    colorfulCircles.setAttribute("data-id",`background-color:${rgb};`)
    colorfulCircles.style.backgroundColor = rgb;



Box.forEach((rainbow)=>{
    rainbow.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("rainbow",e.target.id)
        console.log("Drag is already started");
    })
    rainbow.addEventListener("dragend",()=>{
        console.log("Drag is already end.");
    })
})

zone.addEventListener("dragenter",()=>{
    console.log("Congrats!You entered drag zone.");
    zone.style.boxShadow = "0px 0px 7px 1px #000000"})

zone.addEventListener("dragleave",()=>{
    console.log("You left the zone.");
    zone.style.boxShadow = "initial"})

zone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log("The zone is under your investigation.");})

zone.ondrop = function(e){
	e.preventDefault();
	e.target.style.backgroundColor = e.dataTransfer.getData("rainbow");
	}


    
  