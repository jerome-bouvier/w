function setup() {
  createCanvas(900, 900)
  noLoop()
}

function draw() {
  background('#FAFAFA')
  noFill()
  strokeWeight(40)
  
  const cx = height * 0.5
  const cy = width * 0.5
  const cr = height * 0.5
  
  const row = 150  
  const col = 150
  
  for (let y = col * 1.5 ; y < height - col ; y += col) {
    for (let x = row ; x < width ; x += row) {
      
      let ang = getAngle()
        
      push()
      translate(x, y)
      arc(0, 0, col, row, 0, ang)
      stroke('rgba(70,70,70,0.25)')
      arc(col * 0.1, row * 0.1, col, row, 0, ang)
      pop()
      
    }
  }
  
  function getAngle(){
    
    let r = int(random(0, 4))
    
    switch(r) {
      case 0:
        return HALF_PI
      break
      case 1:
        return PI
      break
      case 2:
        return - HALF_PI
      break
      case 3:
        return - PI
      break
      case 4:
        return PI + QUARTER_PI
      break
      case 5:
        return HALF_PI + PI
      break
      case 6:
        return PI + HALF_PI
      break
    }
  }
}
