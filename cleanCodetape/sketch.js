var status = 0;
var frame = 0;
var millisPerFrame = 40; // 40 millis per frame = 25 frames per second
var interval;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(25);
  interval = setInterval(timeIt, millisPerFrame);
}
function timeIt() {
  frame++;
  println("status: " + status + " frame: " + frame);
}
function draw() {
  if (status == 0) screen0();
  if (status == 1) screen1();
  if (status == 2) screen2();
  if (status == 3) screen3();
  if (status == 4) screen4();
  if (status == 5) screen5();
  if (status == 6) screen6();
  if (status == 7) screen7();
  if (status == 8) screen8();
  if (status == 9) screen9();
  if (status == 10) screen10();
  if (status == 11) screen11();
  if (status == 12) screen12();
  if (status == 13) screen13();
  if (status == 14) screen14();
  if (status == 15) screen15();
  if (status == 16) screen16();
  if (status == 17) screen17();
  if (status == 18) screen18();
  if (status == 19) screen19();
  if (status == 20) screen20();
}
//SCREEN0\\SCREEN0\\SCREEN0\\SCREEN0\\SCREEN0\\SCREEN0\\SCREEN0\\SCREEN0\\
function screen0() {
  if (frame >= 25 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 0", 10, 30);
}
//SCREEN1\\SCREEN1\\SCREEN1\\SCREEN1\\SCREEN1\\SCREEN1\\SCREEN1\\SCREEN1\\
function screen1() {
  if (frame >= 50 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 1", 10, 30);
}
//SCREEN2\\SCREEN2\\SCREEN2\\SCREEN2\\SCREEN2\\SCREEN2\\SCREEN2\\SCREEN2\\
function screen2() {
  if (frame >= 50 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 2", 10, 30);
}
function screen3() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 3", 10, 30);
}
//SCREEN4\\SCREEN4\\SCREEN4\\SCREEN4\\SCREEN4\\SCREEN4\\SCREEN4\\SCREEN4\\
function screen4() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 4", 10, 30);
}
//SCREEN5\\SCREEN5\\SCREEN5\\SCREEN5\\SCREEN5\\SCREEN5\\SCREEN5\\SCREEN5\\
function screen5() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 5", 10, 30);
}
//SCREEN6\\SCREEN6\\SCREEN6\\SCREEN6\\SCREEN6\\SCREEN6\\SCREEN6\\SCREEN6\\
function screen6() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 6", 10, 30);
}
//SCREEN7\\SCREEN7\\SCREEN7\\SCREEN7\\SCREEN7\\SCREEN7\\SCREEN7\\SCREEN7\\
function screen7() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 7", 10, 30);
}
//SCREEN8\\SCREEN8\\SCREEN8\\SCREEN8\\SCREEN8\\SCREEN8\\SCREEN8\\SCREEN8\\
function screen8() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 8", 10, 30);
}
//SCREEN9\\SCREEN9\\SCREEN9\\SCREEN9\\SCREEN9\\SCREEN9\\SCREEN9\\SCREEN9\\
function screen9() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 9", 10, 30);
}
//SCREEN10\\SCREEN10\\SCREEN10\\SCREEN10\\SCREEN10\\SCREEN10\\SCREEN10\\
function screen10() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 10", 10, 30);
}
//SCREEN11\\SCREEN11\\SCREEN11\\SCREEN11\\SCREEN11\\SCREEN11\\SCREEN11\\
function screen11() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 11", 10, 30);
}
//SCREEN12\\SCREEN12\\SCREEN12\\SCREEN12\\SCREEN12\\SCREEN12\\SCREEN12\\
function screen12() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 12", 10, 30);
}
//SCREEN13\\SCREEN13\\SCREEN13\\SCREEN13\\SCREEN13\\SCREEN13\\SCREEN13\\
function screen13() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 13", 10, 30);
}
//SCREEN14\\SCREEN14\\SCREEN14\\SCREEN14\\SCREEN14\\SCREEN14\\SCREEN14\\
function screen14() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 14", 10, 30);
}
//SCREEN15\\SCREEN15\\SCREEN15\\SCREEN15\\SCREEN15\\SCREEN15\\SCREEN15\\
function screen15() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 15", 10, 30);
}
//SCREEN16\\SCREEN16\\SCREEN16\\SCREEN16\\SCREEN16\\SCREEN16\\SCREEN16\\
function screen16() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 16", 10, 30);
}
//SCREEN17\\SCREEN17\\SCREEN17\\SCREEN17\\SCREEN17\\SCREEN17\\SCREEN17\\
function screen17() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 17", 10, 30);
}
//SCREEN18\\SCREEN18\\SCREEN18\\SCREEN18\\SCREEN18\\SCREEN18\\SCREEN18\\
function screen18() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 18", 10, 30);
}
//SCREEN19\\SCREEN19\\SCREEN19\\SCREEN19\\SCREEN19\\SCREEN19\\SCREEN19\\
function screen19() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 19", 10, 30);
}
//SCREEN20\\SCREEN20\\SCREEN20\\SCREEN20\\SCREEN20\\SCREEN20\\SCREEN20\\
function screen20() {
  if (frame >= 100 ){frame = 0;status++;print("-");}
  background(0);
  textSize(22);
  fill(255);
  text("SCREEN 20", 10, 30);
}
