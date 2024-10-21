document.addEventListener('DOMContentLoaded', function(){

    navegacion()
    crearGaleria()


})


function navegacion(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    const cantidadimg = 16

    for(let i = 1; i <= cantidadimg; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `galeria de imagen`

        // event handler

        imagen.onclick = function(){
            mostrarimg(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarimg(i){

    // mostar imagen 

    const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `galeria de imagen`


    // generar modal 

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarmodal
    modal.appendChild(imagen)

    // boton de cerrar 

    const btn = document.createElement('BUTTON')
    btn.textContent = 'X'
    btn.classList.add('btn-cerrar')
    btn.onclick = cerrarmodal

    modal.appendChild(btn)

    // agregar al html 

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarmodal(){
    const cerrarmodal = document.querySelector('.modal')
    cerrarmodal.classList.add('fade-out')

    setTimeout(() => {
        cerrarmodal?.remove()

        const body = document.querySelector('body')
    body.classList.remove('overflow-hidden')
    },500)
}