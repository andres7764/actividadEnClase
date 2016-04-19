window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
        context.translate(65, 25);//Posición central del canvas...
    //Crear el código necesario para mostrar el logo de Altria
    //El cual consiste en una grilla de 5x5 con diferentes colores.
    //Hacer uso de la función randomColor()
    //Para crear un cuadrado puede hacer uso de la función
    //context.rect(x, y, ancho, alto);

    context.fillStyle = "#323465";
    context.font = "120px times new roman";
    //context.fillText("Altria", 40, 420);

    var width = 20;
    var height = 15;
    for (var fil = 0; fil < 5; fil++){
        
        for(var col = 0; col < 5; col++){
            context.beginPath();
            context.fillStyle = randomColor();
            context.rect(fil*90,col*90, 90,90);
            context.fill();
            width += 90;
        }

    }

    function randomColor()
    {
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };
};
