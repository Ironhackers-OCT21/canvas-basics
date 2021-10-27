let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = '#f0e9e9'

// imagine this to be your paint brush
let ctx = canvas.getContext('2d')
console.log(ctx)


// ------------------------------------
//            Rectangle
// -------------------------------------

// fillRect (x, y, width , height) - > creates a colored Rectangle

ctx.fillRect( 150, 150, 100, 200)
ctx.fillStyle = 'red'

ctx.fillRect( 280, 150, 100, 200)

// strokeRect (x, y, width , height) - > creates a bordered Rectangle
ctx.strokeStyle = 'blue'
ctx.strokeRect(150 , 380, 100, 200)

// clearRect (x, y, width , height) -> clears the canvas at that position
// CLEARS EVERYTHING AT THOSE CO-ORDINATES
ctx.clearRect(0, 0, canvas.width, canvas.height )
//ctx.clearRect(0, 0, 200, 400 )

// JUST TO SHOW YOU ALL THE GRID
let p = 0;
function drawBoard(){
    for (var x = 0; x <= canvas.width; x += 100) {
        ctx.moveTo(0.5 + x + p, p);
        ctx.lineTo(0.5 + x + p, canvas.height + p);
    }

    for (var x = 0; x <= canvas.height; x += 100) {
        ctx.moveTo(p, 0.5 + x + p);
        ctx.lineTo(canvas.width + p, 0.5 + x + p);
    }
    ctx.strokeStyle = "#c2bebe";
    ctx.stroke();
}

drawBoard();
// -------------------------------------
//               Line
// -------------------------------------
/*
//moveTo( x, y)
ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.moveTo(100, 200)
ctx.lineTo(400, 100)
ctx.lineTo(400, 400)
ctx.lineTo(100, 200)
ctx.stroke() // draws the line
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.moveTo(100, 700)
ctx.lineTo(500, 700)
ctx.stroke()
ctx.closePath()
*/


// -------------------------------------
//               Circle
// -------------------------------------
/*
ctx.beginPath()
ctx.strokeStyle = 'black'
//arc(x,y,radius, startAngle, endAngle, ?antiClockwise)
ctx.arc(300, 300, 150, 0, 2* Math.PI, true)
ctx.stroke()
ctx.closePath()
*/

// -------------------------------------
//               Smiley
// -------------------------------------
/*
ctx.beginPath()
ctx.strokeStyle = 'black'
//arc(x,y,radius, startAngle, endAngle, ?antiClockwise)
ctx.arc(300, 300, 150, 0, 2* Math.PI, true)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(250, 250, 25, 0, 2* Math.PI, true)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.arc(350, 250, 25, 0, 2* Math.PI, true)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.moveTo(300, 290)
ctx.lineTo(300, 330)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(300, 330, 75, 0, Math.PI)
ctx.stroke()
ctx.closePath()
console.log(ctx)


// CLEARS EVERYTHING AT THOSE CO-ORDINATES
ctx.clearRect(0, 0, canvas.width, canvas.height )
*/
// ------------------------------------- 
//             Pokeball
// -------------------------------------
/*
ctx.fillStyle = 'white';
ctx.lineWidth = 10
ctx.beginPath()
ctx.arc(200, 200, 100, 0, Math.PI)
ctx.lineTo(300, 200)
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'red';
ctx.lineWidth = 10
ctx.beginPath()
ctx.arc(200, 200, 100, 0, Math.PI, true)
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'white';
ctx.lineWidth = 20
ctx.beginPath()
ctx.arc(200, 200, 20, 0, Math.PI*2, true)
ctx.stroke()
ctx.fill()
ctx.closePath()
*/


// ------------------------------------- 
//             IMAGES
// -------------------------------------

// drawImage(Img element, x, y, width, height )

let img = document.createElement('img')
img.src = 'https://tinyurl.com/ironhack-pokemons/7.svg'

img.addEventListener('load', () => {
    ctx.drawImage(img, 250, 300)
})


let char = new Image()
char.src = 'https://tinyurl.com/ironhack-pokemons/4.svg'

char.addEventListener('load', () => {
    ctx.drawImage(char, 100, 300, 20, 30)
})


// ------------------------------------- 
//             TEXT
// -------------------------------------
//fillText (text in string, x, y)

ctx.font = '32px Verdana'
ctx.fillStyle = 'black'
ctx.fillText('Todays lab is super duper hard', 50, 100)