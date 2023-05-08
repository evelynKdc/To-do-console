require("colors");

const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  inquirerPause,
  inquirerReadInput,
} = require("./helpers/inquirer");
const { menu, pause } = require("./helpers/mensajes");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = " ";

  const tareas = new Tareas();
  const data = leerDb();

  if (data) {
    tareas.cargarTareas(data);
  }

  do {
    opt = await inquirerMenu();
    // console.log({opt});

    switch (opt) {
      case "1":
        const desc = await inquirerReadInput("Descripción:");
        tareas.crearTarea(desc);

        break;

      case "2":
        //console.log(tareas.listarArreglo);
        tareas.mostrarTareas();
        break;
      case "3":
        tareas.mostrarPendientesCompletadas(true); //completadas=true, only shows 'completadas'
        break;
      case "4":
        tareas.mostrarPendientesCompletadas(false); //completadas=false, only shows 'pendientes'
        break;
    }

    guardarDb(tareas.listarArreglo);
    opt !== "0" && (await inquirerPause());
  } while (opt !== "0");
};

main();
