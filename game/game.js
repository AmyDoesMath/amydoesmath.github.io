let gridwidth = 40
let gridheight = 40

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(44)
    let tile = Array(100)
    for(i = 0; i < height; i += gridheight) {
        for(j = 0; j < width; j += gridwidth) {
            fill(44)
            rect(i, j, gridheight, gridwidth)
            fill(255)
            text(j/gridwidth*height/gridheight+i/gridheight, i+gridheight/2, j + gridwidth/2)
            tile[j/gridwidth*height/gridheight+i/gridheight] = new Tile(0,0,0,0,j/gridheight, i/gridheight)
        }
    }

    for(i = 0; i < 99; i++) {
        if(tile[i].left = 1) {
            rect(i, i+19.5, 10)
        }
        if(tile[i].right = 1) {
            
        }
        if(tile[i].up = 1) {
            
        }
        if(tile[i].down = 1) {
            
        }
    }

    
}
