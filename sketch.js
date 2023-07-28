let img;
let cnv;
function preload(){
  img = loadImage('assets/thewomen.jpg');
}
//only run once
function setup(){
  cnv = createCanvas(img.width, img.height);
  //print(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  //access the pixels of the image
  for(let col = 0; col< img.width; col++){
    for(let row = 0; row< img.height; row++){
      let c = img.get(col, row);
      stroke(color(c));
      strokeWeight(10);
      point(col, row);
    }
  }
}
