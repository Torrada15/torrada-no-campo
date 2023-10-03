canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
torradawidth=50;
torradaheight=60;
backgroundimage="https://th.bing.com/th/id/OIP.iSxzy3yP_4_0N7PcUezq8QHaEK?pid=ImgDet&rs=1";
torradaimage="torrada1.png"
torradax=300;
torraday=250;
function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundimage;
    torradaImgTag = new Image();
    torradaImgTag.onload = uploadtorrada;
    torradaImgTag.src = torradaimage;

}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);

}
function uploadtorrada() {
ctx.drawImage(torradaImgTag, torradax, torraday, torradawidth, torradaheight);

}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();

    }
    if(keyPressed == '40')
    {
        down()
    }
    if(keyPressed == '37')
    {
        left()
    }
    if(keyPressed == '39')
        {
            right();
        }
}
function up()
{
    if(torraday >=0)
    {
        torraday = torraday - 10
    console.log("Quando a seta para cima é pressionada, x = " + torradax + "I y = " + torraday);
    uploadBackground();
    uploadtorrada();
    }
}
function down()
{
    if (torraday<=540)
    {
        torraday = torraday+10;
        console.log("Quando seta para baixo é pressionada, x = "+ torradax + "I y = "+torraday);
        uploadBackground();
        uploadtorrada();
    
    }
}
function left()
{
    if(torradax >=0)
    {
        torradax = torradax - 10;
        console.log("Quando seta para esquerda é pressionada, x = "+ torradax + "I y = "+torraday);
        uploadBackground();
        uploadtorrada()
        
    }
}
function right()
{
if(torradax <=750)
    {
        torradax = torradax + 10;
        console.log("Quando seta para direita é pressionada, x = "+ torradax + "I y = "+torraday);
        uploadBackground();
        uploadtorrada()
        
    }
}