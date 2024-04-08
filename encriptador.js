let listaCaracteres = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};
let fraseEncri =[];

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function ocultarObjetos(){
    let imagen = document.querySelector('.muñeco');
    imagen.style.display = 'none';
    let mensaje = document.querySelector('.mensaje_principal');
    mensaje.style.display = 'none';
    let frase = document.querySelector('.frase_inicial');
    frase.style.display = 'none';
    let botonCopiar = document.querySelector('.copiar');
    botonCopiar.style.visibility = 'visible'
}

function limpiarCajas(){
    document.querySelector('#texto').textContent ='';
    fraseEncri = [];
}

function copiar(){
    let mensaje = document.querySelector('.encriptado').innerText;
    navigator.clipboard.writeText(mensaje);
}

function encriptado(){
    ocultarObjetos();
    let texto = document.getElementById('texto').textContent;
    let textoFinal = texto.toLowerCase();
    let textoAnalizado = textoFinal.split('');
    for (let i=0; i<textoAnalizado.length;i++){
        if (listaCaracteres.hasOwnProperty(textoAnalizado[i])){
            fraseEncri.push(listaCaracteres[textoAnalizado[i]]);
        }
        else{
            fraseEncri.push(textoAnalizado[i]);
        }
    }
    asignarTextoElemento('.encriptado',fraseEncri.join(''));
    limpiarCajas();
}

function desencriptar(){
    let texto = document.getElementById('texto').textContent;
    let textoFinal = texto.toLowerCase();
    let valores = Object.values(listaCaracteres);
    var claves = Object.keys(listaCaracteres);
    for (let i=0; i<valores.length;i++){
        if (textoFinal.includes(valores[i])){
            textoFinal = textoFinal.replaceAll(valores[i],claves[i]);
        }
    }
    asignarTextoElemento('.encriptado',textoFinal);
    limpiarCajas();
}


