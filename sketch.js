function setup() {
  createCanvas(900, 900)
  noLoop()
}

function draw() {
  background('#FAFAFA')
  noFill()
  strokeWeight(10)
  
  const cx = height * 0.5
  const cy = width * 0.5
  const cr = height * 0.5
  
  const row = 90
  const col = 90
  const marginy = col * 0.5
  const marginx = row * 0.5
  
  for (let y = marginy ; y < height - marginy; y += col) {
    for (let x = marginx; x < width - marginx; x += row) {
      
      let arcType = 0
      const r = int(random(0, 7))
      
      if (r == 0) {
          arcType = HALF_PI
      } else if (r == 1) {
        arcType = PI
      } else if (r == 2) {
          arcType = - HALF_PI
      } else if (r == 3) {
          arcType = - PI
      } else if (r == 4) {
          arcType = PI + QUARTER_PI
      } else if (r == 5) {
          arcType = PI
      } else if (r == 6) {
          arcType = HALF_PI + PI
      }
        
      push()
      translate(x, y)
      arc(0, 0, col, row, r, arcType)
      pop()
      
    }
  }  
}
