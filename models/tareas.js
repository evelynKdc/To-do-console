require("colors");
const Tarea = require("./tarea");

class Tareas {
  constructor() {
    this._listado = {};
  }

  get listarArreglo() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      //it is a loop where it create an array with all keys

      const tarea = this._listado[key]; //
      listado.push(tarea);
    });

    return listado;
  }

  crearTarea(desc = "", important = "") {
    const tarea = new Tarea(desc, important);

    this._listado[tarea.id] = tarea;
  }

  cargarTareas(data = []) {
    data.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  mostrarTareas() {
    console.log();
    this.listarArreglo.forEach((tarea, index) => {
      const cont = `${index + 1}. `.green;
      const { desc, completadoEn, important } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;
      let imp = "";
      switch (important) {
        case "Alto":
          imp = ` (Alto)`.magenta;
          break;

        case "Medio":
          imp = ` (Medio)`.yellow;
          break;
        case "Bajo":
          imp = ` (Bajo)`.cyan;
          break;
      }
      console.log(`${cont}${desc}${imp} :: ${estado}`);
    });
  }

  mostrarPendientesCompletadas(completadas = true) {
    console.log();
    let cont = 0;
    this.listarArreglo.forEach((tarea) => {
      const { desc, completadoEn, important } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;
      let imp = "";
      switch (important) {
        case "Alto":
          imp = ` (Alto)`.magenta;
          break;

        case "Medio":
          imp = ` (Medio)`.yellow;
          break;
        case "Bajo":
          imp = ` (Bajo)`.cyan;
          break;
      }

      if (completadas) {
        if (completadoEn) {
          cont++;
          console.log(
            `${cont.toString().green}${".".green}${desc}${imp}:: ${
              completadoEn.cyan
            }`
          );
        }
      } else {
        if (!completadoEn) {
          cont++;
          console.log(
            `${cont.toString().green}${".".green}${desc}${imp} :: ${estado}`
          );
        }
      }
    });
  }

  toggleTareasCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toDateString();
      }

      this.listarArreglo.forEach((tarea) => {
        if (!ids.includes(tarea.id)) {
          this._listado[tarea.id].completadoEn = null;
        }
      });
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}

module.exports = Tareas;
