function Informacion(){
    var nombre = (document.getElementById('nombre').value);
    var cargo = (document.getElementById('cargos').value);
    var sueldo = (document.getElementById('sueldo').value);
    var horas = (document.getElementById('horas').value);

    
    alert(`Su nombre es: ${nombre}`);
    alert(`Su cargo es: ${cargo}`);
    alert(`Su sueldo base es: ${sueldo}`);
    alert(`Usted trabajo: ${horas}`);


    console.log(`Su nombre es: ${nombre}`);
    console.log(`Su cargo es: ${cargo}`);
    console.log(`Su sueldo base es: ${sueldo}`);
    console.log(`Usted trabajo: ${horas}`);

    
    
    if(cargo == "Administrativo"){
        sueldoFinal=700+(horas*10);
        console.log("Su sueldo final es:"+sueldoFinal);
    }else if(cargo == "Supervisor"){
        sueldoFinal=650+(horas*10);
        console.log("Su sueldo final es:"+sueldoFinal);
    }else if(cargo == "Operario"){
        sueldoFinal=440+(horas*10);
        console.log("Su sueldo final es:"+sueldoFinal);
    }else if(cargo == "Control de calidad "){
        sueldoFinal=490+(horas*10);
        console.log("Su sueldo final es:"+sueldoFinal);
    }

}