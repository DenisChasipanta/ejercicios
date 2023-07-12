function Informacion(){
    var ci = parseInt(document.getElementById('ci').value);
    var nombre = (document.getElementById('nombre').value);
    var apellido = (document.getElementById('apellido').value);
    var direccion = (document.getElementById('direccion').value);
    var auto = (document.getElementById('auto').value);
    var precio = (document.getElementById('precio').value);
    
    alert(`Su número de cedula es: ${ci}`)
    alert(`Su nombre es: ${nombre}`);
    alert(`Su apellido es: ${apellido}`);
    alert(`Su direccion es: ${direccion}`);
    alert(`Su auto es: ${auto}`);
    console.log(`Su número de cedula es: ${ci}`);
    console.log(`Su nombre es: ${nombre}`);
    console.log(`Su apellido es: ${apellido}`);
    console.log(`Su direccion es: ${direccion}`);
    console.log(`Su auto es: ${auto}`);
    
    
    if(auto == "Ford Fiesta"){
        precioFinal=(precio*0.05);
        console.log("Su precio final es:"+precioFinal);
    }else if(`${auto}`=="Ford Focus"){
        precioFinal=(precio*0.10);
        console.log('Su precio final es:'+precioFinal);
    }
}