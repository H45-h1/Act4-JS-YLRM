let campo_nombre= document.querySelector("#campo-nombre");
let campo_parcial1=document.querySelector("#campo-parcial1");
let campo_parcial2=document.querySelector("#campo-parcial2");

let boton_registrar= document.querySelector("#boton-registrar");
let boton_reiniciar=document.querySelector("#boton-reiniciar")

let lista= document.querySelector("#lista-tarjetas")

boton_registrar.addEventListener("click",()=>{
    const parcial1=Number(campo_parcial1.value);
    const parcial2=Number(campo_parcial2.value);
    const nombre=campo_nombre.value;

    const promedio=((parcial1+parcial2)/2).toFixed(1);

    if (promedio >= 6.0) {
        lista.innerHTML += `
        <div class="tarjeta estado-positivo">
        <h3>${nombre}</h3>
        <p>Promedio: ${promedio}</p>
        <p>Estado: Aprobado</p>
        </div>
        `;
    }else{
        lista.innerHTML += `
        <div class="tarjeta estado-alerta">
        <h3>${nombre}</h3>
        <p>Promedio: ${promedio}</p>
        <p>Estado: Reprobado</p>
        </div>
        `;
    }

    campo_nombre.value="";
    campo_parcial1.value="";
    campo_parcial2.value="";
    campo_nombre.focus();
})

boton_reiniciar.addEventListener("click",()=>{
    lista.innerHTML="";
})

