require("colors");

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
  do {
    opt = await inquirerMenu();
    // console.log({opt});

    switch (opt) {
      case "1":
        const desc = await inquirerReadInput("Descripción:");
        tareas.crearTarea(desc);

        break;

      case "2":
        console.log(tareas._listado);

        break;
    }

    opt !== "0" && (await inquirerPause());
  } while (opt !== "0");
};

main();
