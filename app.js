require("colors");

const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  inquirerPause,
  inquirerReadInput,
  inquirerDeleteOptions,
  inquirerConfirm,
  inquirerCheck,
  inquirerImportant,
} = require("./helpers/inquirer");

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
        const important = await inquirerImportant();
        //console.log({important});
        tareas.crearTarea(desc,important);

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
        case "5":
        const ids = await inquirerCheck(tareas.listarArreglo);
        tareas.toggleTareasCompletadas(ids);
        break;
      case "6":
        const id = await inquirerDeleteOptions(tareas.listarArreglo);

        if (id !== "0") {
          const confirmation = await inquirerConfirm(
            "¿Está seguro de borrar esta tarea?"
          );
          if (confirmation) {
            tareas.borrarTarea(id);
            console.log("\nTarea borrada exitosamente".green);
          }
        }

        break;
    }

    guardarDb(tareas.listarArreglo);
    opt !== "0" && (await inquirerPause());
  } while (opt !== "0");
};

main();
