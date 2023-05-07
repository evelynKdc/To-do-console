const Tarea = require("./tarea");

class Tareas {
  constructor() {
    this._listado = {};
  }


  crearTarea(desc=''){

    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;

  }
}

module.exports = Tareas;
