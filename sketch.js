var items = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight-100);
    for (var i=0;i<2;i++){
        items.push(new item());
   }
}

function draw() {
    
    background(51);
    for (var i=0;i<items.length;i++) {
        
        items[i].render();
        items[i].fall();
        items[i].rotate();
    }
}

