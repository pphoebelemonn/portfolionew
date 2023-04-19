var c1 = function( face ) {
  let x=0;
  let y=0;
  let b = 0;

  face.setup = function() {
    face.createCanvas(700, 800);
      face.stroke(253, 51, 235);
      face.noFill();
      face.angleMode(face.DEGREES);
      //uncomment this line for final product
      face.frameRate(5);
    };

  face.draw = function() {
    //green
    //face.background(232, 245, 126);
    //blue
    //face.background(18, 55, 106);
    face.background(253, 205, 255);
    face.push();
    face.translate(face.width/2, face.height/2);
    face.scale(1.5);
    face.strokeWeight(0.5);

    //base shape for face
    face.draw_face(x, y, b);

    //base for eyebrows
    face.draw_eyebrow(x, y, b);

    //base shape for eyes
    if (face.frameCount%6==0) {
      face.draw_eyes_closed(x,y);
    }
    else {
       face.draw_eyes(x,y);

    }
    //base shape for nose
    face.draw_nose(x, y, b);

    //base shape for ears
    face.draw_ears(x, y, b);

    //base shape for mouth
    face.draw_mouth(x, y, b);

    //comment out this line for final product

    // randomSeed(2);
    for (let i=0; i<=6; i++) {
      x = face.random(-8, 8);
      y = face.random(-8, 8);
      b = face.random(-8, 8);
      face.draw_face(x, y, b);
      face.draw_ears(x, y, b);
      if (face.frameCount % 6 ==0) {
        face.draw_eyes_closed(x, y);
      }
      else {
        face.draw_eyes(x, y);
      }
      face.draw_nose(x, y, b);

      }
    for (let i=0; i<=5; i++) {
      x = face.random(-3, 3);
      y = face.random(-3, 3);
      //buffer = face.random(-6, 6);
      face.draw_eyebrow(x, y, b);
      // draw_mouth(x, y);
      face.draw_mouth(x, y, b);
      face.draw_outlines(x,y);
    }
  };

    face.draw_face = function(x, y, b){
      face.push();
      face.translate(x, y);
      face.ellipse(x, y, 350+b);

      face.beginShape();
      face.curveVertex(80+b, 20+b);
      face.curveVertex(-175+b, 30+b);
      face.curveVertex(0+b, 240+b);
      face.curveVertex(175+b, 30+b);
      face.curveVertex(-80+b, 20+b);
      face.endShape();
      face.pop();
    }

    face.draw_ears = function(x, y) {
      face.push();
      face.translate(x, y);
      face.scale(1.25);

      //right
      face.beginShape();
      face.curveVertex(140, -10);
      face.curveVertex(140,-10);
      face.curveVertex(160,-20);
      face.curveVertex(170,10);
      face.curveVertex(155,53);
      face.curveVertex(140,50);
      face.curveVertex(140,50);
      face.endShape();

      //left
      face.beginShape();
      face.curveVertex(-140, -10);
      face.curveVertex(-140,-10);
      face.curveVertex(-160,-20);
      face.curveVertex(-170,10);
      face.curveVertex(-155, 53);
      face.curveVertex(-140, 50);
      face.curveVertex(-140, 50);
      face.endShape();
      face.pop();
    }

    face.draw_nose = function(x, y, b){
      face.beginShape();
      face.vertex(-30+x, 90+y);
      face.vertex(0+x, 105+y);
      face.vertex(30+x, 90+y);
      face.endShape();
    }

    face.draw_eyes_closed = function(x, y) {
      face.push();
      face.rotate(8);
      face.beginShape();
      face.vertex(-130+x, 30+y);
      face.vertex(-100+x, 50+y);
      face.vertex(-40+x, 50+y);
      //vertex(-100+x, 50+y);
      face.endShape();
      face.pop();

      face.push();
      face.rotate(-8);
      face.beginShape();
      face.vertex(130+x, 30+y);
      face.vertex(100+x, 50+y);
      face.vertex(40+x, 50+y);
      face.endShape();
      face.pop();
    }

    face.draw_eyes = function(x, y){
      face.push();
      face.rotate(8);
      face.beginShape();
      face.vertex(-130+x, 20+y);
      face.vertex(-70+x, 20+y);
      face.vertex(-40+x, 50+y);
      face.vertex(-100+x, 50+y);
      face.endShape(face.CLOSE);
      face.pop();

      face.push();
      face.rotate(-8);
      face.beginShape();
      face.vertex(130+x, 20+y);
      face.vertex(70+x, 20+y);
      face.vertex(40+x, 50+y);
      face.vertex(100+x, 50+y);
      face.endShape(face.CLOSE);
      face.pop();

    }

    face.draw_eyebrow = function(x, y,b) {
      face.translate(x, y);
      face.push();
      face.rotate(8);
      face.arc(-90, 0, 90+b, 12+b, 180, 360);
      face.pop();
      face.push();
      face.rotate(-8);
      face.arc(90, 0, 90+b, 12+b, 180, 360);
      face.pop();
    }

    face.draw_mouth = function(x, y, b) {
      face.strokeWeight(0.3);
      face.beginShape();
      face.curveVertex(-40+x, 155+y);
      face.curveVertex(-40+x, 155+y);
      face.curveVertex(0+x, 135+y);
      face.curveVertex(40+x, 155+y);
      face.curveVertex(40+x, 155+y);
      face.endShape();
      face.arc(0+x, 160+y, 80, 8, 180, 360);
      face.arc(0+x, 155+y, 85, 60, 0, 180);
    }

    face.draw_outlines = function(x,y) {
      face.strokeWeight(0.15);
      face.arc(10, 35, 20, 420, 90, 270);
      face.arc(0, 30, 350, 20, 0, 180);
    }

};

var myp5_1 = new p5(c1, 'sketch1');

var c2 = function( face ) {
  let x=0;
  let y=0;
  let b = 0;

  face.setup = function() {
    face.createCanvas(700, 800);
      face.stroke(253, 51, 235);
      // face.stroke(253, 9, 254);

      face.noFill();
      face.angleMode(face.DEGREES);
      //uncomment this line for final product
      face.frameRate(5);
    };

  face.draw = function() {
    //blue
    //face.background(18, 55, 106)
    //green
    // face.background(232, 245, 126);
    // face.background(253, 205, 257);
    face.background(253, 205, 255);
    face.push();
    face.translate(face.width/2, face.height/2);
    face.scale(1.5);
    face.strokeWeight(0.5);

    //base shape for face
    face.draw_face(x, y, b);

    //base for eyebrows
    face.draw_eyebrow(x, y, b);

    //base shape for eyes
    if (face.frameCount%6==0) {
      face.draw_eyes_closed(x,y);
    }
    else {
       face.draw_eyes(x,y);

    }
    //base shape for nose
    face.draw_nose(x, y, b);

    //base shape for ears
    face.draw_ears(x, y, b);

    //base shape for mouth
    face.draw_mouth(x, y, b);

    //comment out this line for final product

    // randomSeed(2);
    for (let i=0; i<=6; i++) {
      x = face.random(-8, 8);
      y = face.random(-8, 8);
      b = face.random(-8, 8);
      face.draw_face(x, y, b);
      face.draw_ears(x, y, b);
      if (face.frameCount % 6 ==0) {
        face.draw_eyes_closed(x, y);
      }
      else {
        face.draw_eyes(x, y);
      }
      face.draw_nose(x, y, b);

      }
    for (let i=0; i<=5; i++) {
      x = face.random(-3, 3);
      y = face.random(-3, 3);
      //buffer = face.random(-6, 6);
      face.draw_eyebrow(x, y, b);
      // draw_mouth(x, y);
      face.draw_mouth(x, y, b);
      face.draw_outlines(x,y);
    }
  };

    face.draw_face = function(x, y, b){
      face.push();
      face.translate(x, y);
      face.ellipse(x, y, 350+b);

      face.beginShape();
      face.curveVertex(80+b, 20+b);
      face.curveVertex(-175+b, 30+b);
      face.curveVertex(0+b, 240+b);
      face.curveVertex(175+b, 30+b);
      face.curveVertex(-80+b, 20+b);
      face.endShape();
      face.pop();
    }

    face.draw_ears = function(x, y) {
      face.push();
      face.translate(x, y);
      face.scale(1.25);

      //right
      face.beginShape();
      face.curveVertex(140, -10);
      face.curveVertex(140,-10);
      face.curveVertex(160,-20);
      face.curveVertex(170,10);
      face.curveVertex(155,53);
      face.curveVertex(140,50);
      face.curveVertex(140,50);
      face.endShape();

      //left
      face.beginShape();
      face.curveVertex(-140, -10);
      face.curveVertex(-140,-10);
      face.curveVertex(-160,-20);
      face.curveVertex(-170,10);
      face.curveVertex(-155, 53);
      face.curveVertex(-140, 50);
      face.curveVertex(-140, 50);
      face.endShape();
      face.pop();
    }

    face.draw_nose = function(x, y, b){
      face.beginShape();
      face.vertex(-30+x, 90+y);
      face.vertex(0+x, 105+y);
      face.vertex(30+x, 90+y);
      face.endShape();
    }

    face.draw_eyes_closed = function(x, y) {
      face.push();
      face.rotate(8);
      face.beginShape();
      face.vertex(-130+x, 30+y);
      face.vertex(-100+x, 50+y);
      face.vertex(-40+x, 50+y);
      //vertex(-100+x, 50+y);
      face.endShape();
      face.pop();

      face.push();
      face.rotate(-8);
      face.beginShape();
      face.vertex(130+x, 30+y);
      face.vertex(100+x, 50+y);
      face.vertex(40+x, 50+y);
      face.endShape();
      face.pop();
    }

    face.draw_eyes = function(x, y){
      face.push();
      face.rotate(8);
      face.beginShape();
      face.vertex(-130+x, 20+y);
      face.vertex(-70+x, 20+y);
      face.vertex(-40+x, 50+y);
      face.vertex(-100+x, 50+y);
      face.endShape(face.CLOSE);
      face.pop();

      face.push();
      face.rotate(-8);
      face.beginShape();
      face.vertex(130+x, 20+y);
      face.vertex(70+x, 20+y);
      face.vertex(40+x, 50+y);
      face.vertex(100+x, 50+y);
      face.endShape(face.CLOSE);
      face.pop();

    }

    face.draw_eyebrow = function(x, y,b) {
      face.translate(x, y);
      face.push();
      face.rotate(8);
      face.arc(-90, 0, 90+b, 12+b, 180, 360);
      face.pop();
      face.push();
      face.rotate(-8);
      face.arc(90, 0, 90+b, 12+b, 180, 360);
      face.pop();
    }

    face.draw_mouth = function(x, y, b) {
      face.strokeWeight(0.3);
      face.beginShape();
      face.curveVertex(-40+x, 155+y);
      face.curveVertex(-40+x, 155+y);
      face.curveVertex(0+x, 135+y);
      face.curveVertex(40+x, 155+y);
      face.curveVertex(40+x, 155+y);
      face.endShape();
      face.arc(0+x, 160+y, 80, 8, 180, 360);
      face.arc(0+x, 155+y, 85, 60, 0, 180);
    }

    face.draw_outlines = function(x,y) {
      face.strokeWeight(0.15);
      face.arc(10, 35, 20, 420, 90, 270);
      face.arc(0, 30, 350, 20, 0, 180);
    }

};

var myp5_2 = new p5(c2, 'sketch2');
