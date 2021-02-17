const semana = {
    dia: "sabado",
    categoria: "el mejor de la semana"
}

// console.log(semana);
// console.log(semana.mostrarInfoTarea());

function Tarea(queHacer, urgencia) {
    this.queHacer = queHacer;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInfoTarea = function() {
    return `Para hacer ${this.queHacer} con urgencia de tipo ${this.urgencia}`;
}

const tarea1 = new Tarea("almorzar", "super urgente");
console.log(tarea1);
console.log(tarea1.mostrarInfoTarea());