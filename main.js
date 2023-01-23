var canvy = document.getElementById("myCanvas")
ctx=canvy.getContext("2d")

var mouseevent = "empty" 
var lastpositionofx,lastpositionofy
var mycolour = "black"
var widthofline = 2
var radius = 25

canvy.addEventListener("mousedown",downmouse)
canvy.addEventListener("mouseup",upmouse)
canvy.addEventListener("mouseleave",leavemouse)
canvy.addEventListener("mousemove",movemouse)

function downmouse(e){
    mycolour=document.getElementById("colourgrab").value
    widthofline=document.getElementById("widthgrab").value

    mouseevent="mde"
}

function upmouse(e){
    mouseevent="mue"
}

function leavemouse(e){
    mousevent="mle"
}

function movemouse(e){
    var currentpositionofx=e.clientX-canvy.offsetLeft
    var currentpositionofy=e.clientY-canvy.offsetTop

    if(mouseevent=="mde"){
        ctx.beginPath()
        ctx.strokeStyle=mycolour
        ctx.lineWidth=widthofline
        ctx.arc(currentpositionofx,currentpositionofy,radius,0,2* Math.PI)
        
        ctx.stroke()

    }
    
    lastpositionofx=currentpositionofx
    lastpositionofy=currentpositionofy
}