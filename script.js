var c = document.getElementById('c1');
//media query
var innerWidth = window.innerWidth;
var innerHeight=window.innerHeight;
var d = c.getContext('2d');
//starting point(x,y)
d.moveTo(100,100);
/* screen respd.moveTo(innerWidth/2,innerHeight/2);*/
//Draw line moveTo
//square
d.lineTo(100,150);
d.lineTo(150,150);
d.lineTo(150,100);
d.lineTo(100,100);
//rectangle(x,y, width, height)
d.fillRect(10, 15, 50, 25);
//Line width
d.lineWidth= 5;
//color
d.strokeStyle= "yellow";
//text
d.font="15px Arial";
d.textAlign="center";
//baseline= top, hanging, middle
d.textBaseline="top";
//text color
d.fillStyle='white';
//in par text & location(x,y)
d.fillText("Rectangle", 50,50);
d.fillText("Square", 140,160);
d.stroke();
d.strokeRect(10, 15, 50, 25);
//circle & Arcs
//color of arc
d.fillStyle="red";
//to starting
d.beginPath();
//x center, y center, radius, start angle,end angle and not clockwise(true or false)
d.arc(150, 50, 25, Math.PI*.5, Math.PI*1.5, false);
d.fill();
//to end
d.closePath();
//color of circle
d.fillStyle="yellow";
//to starting
d.beginPath();
//x center, y center, radius, start angle,end angle and not clockwise(true or false)
d.arc(180, 250, 50, 0, 2* Math.PI, true);
d.fill();
//to end
d.closePath();
