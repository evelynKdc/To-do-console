require("colors");
const inquirer = require("inquirer");

const questionsMenu = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================================".green);
  console.log("          Seleccione una opción         ".white);
  console.log("========================================\n".green);

  const { option } = await inquirer.prompt(questionsMenu); //inquirer prompt function where the result is option from the restruture object

  return option;
};

const inquirerPause = async () => {
  const questionsPause = [
    {
      type: "input",
      name: "pause",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(questionsPause); //a inquirer prompt to have a pause beetwen the decisions
};

const inquirerReadInput = async (message) => {
  const questionInput = [
    {
      type: "input",
      name: "input",
      message,
    },
  ];

  const { input } = await inquirer.prompt(questionInput); //a inquuirer prompt for to read all the inputs in differents decisions

  return input;
};

const inquirerDeleteOptions = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const index = `${i + 1}. `.green;
    return {
      value: tarea.id,
      name: `${index}${tarea.desc}`,
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar'
  })

  const questionsDelete = [
    {
      type: "list",
      name: "id",
      message: "¿Que tarea deseas borrar?",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questionsDelete);
  return id;
};

const inquirerConfirm = async (message) => {
  const questionConfirm = [
    {
      type: "confirm",
      name: "confirm",
      message,
    },
  ];
  const { confirm } = await inquirer.prompt(questionConfirm);

  return confirm;
};

module.exports = {
  inquirerMenu,
  inquirerPause,
  inquirerReadInput,
  inquirerDeleteOptions,
  inquirerConfirm,
};
