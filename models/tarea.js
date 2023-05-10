const { v4: uuidV4 } = require("uuid");

class Tarea {
  id = "";
  desc = "";
  important='';
  completadoEn = null;

  constructor(desc, important) {
    this.id = uuidV4();
    this.desc = desc;
    this.important= important;
    this.completadoEn = null;
  }
}

module.exports = Tarea;
