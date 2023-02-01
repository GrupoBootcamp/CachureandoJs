var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);
const select = document.querySelector('#Selector');
const resultado = document.querySelector('#resultado');
let encuesta = document.querySelector('#encuesta');

console.log(encuesta.textContent);

console.log(select);
console.log('hola mundo');


eventos();

function eventos(){

  select.addEventListener('click', mostrarSeleccionado);

}



function mostrarSeleccionado (e){

    let x = e.target.value;
    console.log(x);


    switch(true){

        case (x<=3):mostrarHtml('Muy deficiente');
                    break;
        case (x>3 && x<=5): mostrarHtml('Insuficiente');
                     break;
        case (x>5 && x<=6): mostrarHtml('Suficiente');
                    break;
        case (x>6 && x<=7): mostrarHtml('Bien');
                    break;
        case (x>7 && x<=9): mostrarHtml('Notable');
                    break;
        case (x>9): mostrarHtml('Sobresaliente');
                    break;
        default: mostrarHtml('Seleccione una opción');
                break

    }

}

function mostrarHtml(valor){


    resultado.textContent = valor;

    
}




function startTime(){
    
    today=new Date();
    dd=today.getDate();
    mmm=today.getMonth();
    aa=today.getFullYear();
    switch (mmm) {
     case 0:
         mm='Enero';
         break;
     case 1:
         mm='Febrero';
         break;
     case 2:
         mm='Marzo';
         break;
     case 3:
         mm='Abril';
         break;
     case 4:
         mm='Mayo';
         break;
     case 5:
         mm='Junio';
         break;
     case 6:
         mm='Julio';
         break;
     case 7:
         mm='Agosto';
         break;        
     case 8:
         mm='Septiembre';
         break;
     case 9:
         mm='Octubre';
         break;
     case 10:
         mm='Noviembre';
         break;    
 
     default:
         mm='Diciembre'      
     }
     h=today.getHours();
     m=today.getMinutes();
     s=today.getSeconds();
     m=checkTime(m);
     s=checkTime(s);
     document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
     document.getElementById('fecha').innerHTML=dd+" de "+mm+' del '+aa;
     t=setTimeout('startTime()',500);}                                                                                                                          
     function checkTime(i)
     {if (i<10) {i="0" + i;}return i;}
     window.onload=function(){startTime();}



     function verClasificacion(xclasifica){
        alert('Enero')
       
     }