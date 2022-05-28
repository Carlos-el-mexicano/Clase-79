nombre_alumno_array=[];

function submit(){
    var nombre1 = document.getElementById("nombre_1").value;
    var nombre2 = document.getElementById("nombre_2").value;
    var nombre3 = document.getElementById("nombre_3").value;
    var nombre4 = document.getElementById("nombre_4").value;

    nombre_alumno_array.push(nombre1);
    nombre_alumno_array.push(nombre2);
    nombre_alumno_array.push(nombre3);
    nombre_alumno_array.push(nombre4);

    console.log(nombre_alumno_array);

    document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;
    document.getElementById("b_enviar").style.display = "none";
    document.getElementById("b_ordenar").style.display = "inline-block";
}
function sorting(){
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;
}