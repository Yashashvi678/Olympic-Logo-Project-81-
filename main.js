canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d"); 
color = "red"; 

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(190, 190, 430, 210);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(300, 270, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(400, 270, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(500, 270, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(350, 310, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(450, 310, 40 ,0 , 2*Math.PI); 
ctx.stroke();