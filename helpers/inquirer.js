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
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================================".green);
  console.log("          Seleccione una opción         ".green);
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


  console.log('\n');
  await inquirer.prompt(questionsPause); //a inquirer prompt to have a pause beetwen the decisions
};



const inquirerReadInput = async (message) =>{
  const questionInput = [
    {
      type: "input",
      name: "input",
      message
    },
  ];

  const { input } = await inquirer.prompt(questionInput); //a inquuirer prompt for to read all the inputs in differents decisions

  return input;

}

module.exports = {
  inquirerMenu,
  inquirerPause,
  inquirerReadInput
};
