console.log(333);
var images = require("images");

console.log(111);

images("bg.png")           //Load image from file 
                    //加载图像文件
  .size(750,1180)             //Geometric scaling the image to 400 pixels width
                    //等比缩放图像到400像素宽
  .draw(images("kv-title.png"), 10, 10)  //Drawn logo at coordinates (10,10)
                    //在(10,10)处绘制Logo
  .save("output.png");