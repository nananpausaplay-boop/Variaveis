document.getElementById("demo").innerHTML= "pirulito de maçã"
let x, y, z;

x= 5;
y= 2;
z= x*y;

document.getElementById("resultado").innerHTML= z;

let a,b;

a=3;
b=(100+50)*a;

document.getElementById("resultado2").innerHTML= b;

function pegarValor()
{
    //Pegando o elemento input pelo id e armazenamento em uma variavel
    let sabrina = document.getElementById("meuInput");
    //extrai o valor digitado usando o .value

    let ValorDigitado = sabrina.ariaValueMax;
    //Exibir os dados
    document.getElementById("ola").innerHTML= ValorDigitado
}