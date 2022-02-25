gridwidth = 40
gridheight = 40

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(44)
    for(i = 0; i < height; i += gridheight) {
        line(i, 0, i, height)
    }

    for(i = 0; i < width; i += gridwidth) {
        line(0, i, width, i)
    }
}