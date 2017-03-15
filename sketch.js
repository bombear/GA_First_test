var items = [];

function setup() {
    createCanvas(800,800);
    for (var i=0;i<10;i++){
        items.push(new item());
   }
}

function draw() {
    
    background(51);
    for (var i=0;i<items.length;i++) {
        
        items[i].render();
        items[i].fall();
    }
}

