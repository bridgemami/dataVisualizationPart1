var c = document.getElementById('c1');
var d = c.getContext('2d');
//starting point(x,y)
d.moveTo(100,100);
//Draw line moveTo
d.lineTo(100,150);
d.lineTo(150,150);
d.lineTo(150,100);
d.lineTo(100,100);
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
d.fillText("Square", 50,50);
d.stroke();