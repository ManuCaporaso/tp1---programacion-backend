// Definición de la clase Persona
class Persona {
  constructor(nombre, apellidos, id, estadoCivil) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.id = id;
      this.estadoCivil = estadoCivil;
  }

  // Método para cambiar el estado civil
  cambiarEstadoCivil(nuevoEstadoCivil) {
      this.estadoCivil = nuevoEstadoCivil;
      console.log(`${this.nombre} ${this.apellidos} ha cambiado su estado civil a ${nuevoEstadoCivil}`);
  }
}

// Definición de la clase Empleado
class Empleado extends Persona {
  constructor(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho) {
      super(nombre, apellidos, id, estadoCivil);
      this.anioIncorporacion = anioIncorporacion;
      this.numeroDespacho = numeroDespacho;
  }

  // Método para reasignar el despacho
  reasignarDespacho(nuevoDespacho) {
      this.numeroDespacho = nuevoDespacho;
      console.log(`${this.nombre} ${this.apellidos} ha sido reasignado/a al despacho ${nuevoDespacho}`);
  }
}

// Definición de la clase Estudiante
class Estudiante extends Persona {
  constructor(nombre, apellidos, id, estadoCivil, cursoMatriculado) {
      super(nombre, apellidos, id, estadoCivil);
      this.cursoMatriculado = cursoMatriculado;
  }

  // Método para cambiar el curso matriculado
  cambiarCurso(cursoNuevo) {
      this.cursoMatriculado = cursoNuevo;
      console.log(`${this.nombre} ${this.apellidos} ha cambiado su curso matriculado a ${cursoNuevo}`);
  }
}

// Definición de la clase Profesor
class Profesor extends Empleado {
  constructor(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho, departamento) {
      super(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho);
      this.departamento = departamento;
  }

  // Método para cambiar el departamento
  cambiarDepartamento(nuevoDepartamento) {
      this.departamento = nuevoDepartamento;
      console.log(`${this.nombre} ${this.apellidos} ha sido asignado/a al departamento de ${nuevoDepartamento}`);
  }
}

// Definición de la clase PersonalServicio
class PersonalServicio extends Empleado {
  constructor(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho, seccionAsignada) {
      super(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho);
      this.seccionAsignada = seccionAsignada;
  }

  // Método para cambiar la sección asignada
  cambiarSeccion(nuevaSeccion) {
      this.seccionAsignada = nuevaSeccion;
      console.log(`${this.nombre} ${this.apellidos} ha sido asignado/a a la sección de ${nuevaSeccion}`);
  }
}

// Definición de la clase Centro Educativo
class CentroEducativo {
  constructor(nombre,direccion) {
      this.nombre = nombre;
      this. direccion = direccion;
      this.personas = [];
  }


  // Método para dar de alta a una persona
  altaPersona(persona) {
    const idExistente = this.personas.some(p => p.id === persona.id);
    if (idExistente) {
        console.log(`Error: El ID ${persona.id} ya está asignado a otra persona.`);
    } else {
        this.personas.push(persona);
        console.log(`${persona.nombre} ${persona.apellidos} ha sido admitido/a en el centro educativo`);
    }
}

  // Método para dar de baja a una persona por ID
  bajaPersona(id) {
      const index = this.personas.findIndex(persona => persona.id === id);
      if (index !== -1) {
          const personaEliminada = this.personas.splice(index, 1)[0];
          console.log(`${personaEliminada.nombre} ${personaEliminada.apellidos} ha sido dado/a de baja del centro educativo`);
      } else {
          console.log(`No se encontró a ninguna persona con identificación ${id}`);
      }
  }

  // Método para obtener una lista de estudiantes
  obtenerEstudiantes() {
      return this.personas.filter(persona => persona instanceof Estudiante);
  }

  // Método para obtener una lista de profesores
  obtenerProfesores() {
      return this.personas.filter(persona => persona instanceof Profesor);
  }

  // Método para obtener una lista de personal de servicio
  obtenerPersonalServicio() {
      return this.personas.filter(persona => persona instanceof PersonalServicio);
  }
}

const its = new CentroEducativo("Instituto Tecnico Superior Cipolletti", "Peru y Rio Salado");


// Event listener para el botón de Alta Estudiante
document.getElementById('btnAltaEstudiante').addEventListener('click', function() {
  const nombre = prompt('Ingrese el nombre del estudiante:');
  const apellidos = prompt('Ingrese los apellidos del estudiante:');
  const id = prompt('Ingrese el número de identificación del estudiante:');
  const estadoCivil = prompt('Ingrese el estado civil del estudiante:');
  const cursoMatriculado = prompt('Ingrese el curso matriculado del estudiante:');

  // Crear una instancia de Estudiante con la información proporcionada
  const estudiante = new Estudiante(nombre, apellidos, id, estadoCivil, cursoMatriculado);

  // Dar de alta al estudiante en el centro educativo
  its.altaPersona(estudiante);
});

// Event listener para el botón de Alta Profesor
document.getElementById('btnAltaProfesor').addEventListener('click', function() {
  const nombre = prompt('Ingrese el nombre del profesor:');
  const apellidos = prompt('Ingrese los apellidos del profesor:');
  const id = prompt('Ingrese el número de identificación del profesor:');
  const estadoCivil = prompt('Ingrese el estado civil del profesor:');
  const anioIncorporacion = prompt('Ingrese el año de incorporación del profesor:');
  const numeroDespacho = prompt('Ingrese el número de despacho del profesor:');
  const departamento = prompt('Ingrese el departamento del profesor:');

  // Crear una instancia de Profesor con la información proporcionada
  const profesor = new Profesor(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho, departamento);

  // Dar de alta al profesor en el centro educativo
  its.altaPersona(profesor);
});

// Event listener para el botón de Alta Personal de Servicio
document.getElementById('btnAltaPersonalServicio').addEventListener('click', function() {
  const nombre = prompt('Ingrese el nombre del personal de servicio:');
  const apellidos = prompt('Ingrese los apellidos del personal de servicio:');
  const id = prompt('Ingrese el número de identificación del personal de servicio:');
  const estadoCivil = prompt('Ingrese el estado civil del personal de servicio:');
  const anioIncorporacion = prompt('Ingrese el año de incorporación del personal de servicio:');
  const numeroDespacho = prompt('Ingrese el número de despacho del personal de servicio:');
  const seccionAsignada = prompt('Ingrese la sección asignada del personal de servicio:');

  // Crear una instancia de Personal de Servicio con la información proporcionada
  const personalServicio = new PersonalServicio(nombre, apellidos, id, estadoCivil, anioIncorporacion, numeroDespacho, seccionAsignada);

  // Dar de alta al personal de servicio en el centro educativo
  its.altaPersona(personalServicio);
});

// Event listener para el botón de Baja Persona por ID
document.getElementById('btnBajaPersona').addEventListener('click', function() {
  const id = prompt('Ingrese el número de identificación de la persona a dar de baja:');

  // Dar de baja a la persona por su ID
  its.bajaPersona(id);
});

// Event listener para el botón de Listar Estudiantes
document.getElementById('btnListarEstudiantes').addEventListener('click', function() {
  // Filtrar y listar solo los estudiantes
  const estudiantes = its.personas.filter(persona => persona instanceof Estudiante);
  estudiantes.forEach(estudiante => {
      console.log(`Nombre: ${estudiante.nombre} ${estudiante.apellidos}, Curso: ${estudiante.cursoMatriculado}`);
  });
});

// Event listener para el botón de Listar Profesores
document.getElementById('btnListarProfesores').addEventListener('click', function() {
  // Filtrar y listar solo los profesores
  const profesores = its.personas.filter(persona => persona instanceof Profesor);
  profesores.forEach(profesor => {
      console.log(`Nombre: ${profesor.nombre} ${profesor.apellidos}, Departamento: ${profesor.departamento}`);
  });
});

// Event listener para el botón de Listar Personal de Servicio
document.getElementById('btnListarPersonalServicio').addEventListener('click', function() {
  // Filtrar y listar solo el personal de servicio
  const personalServicio = its.personas.filter(persona => persona instanceof PersonalServicio);
  personalServicio.forEach(personal => {
      console.log(`Nombre: ${personal.nombre} ${personal.apellidos}, Sección: ${personal.seccionAsignada}`);
  });
});

// Obtener referencia al contenedor de la lista de personas
const personasListContainer = document.getElementById('personas-list');

// Función para mostrar la lista de personas en el contenedor
function mostrarListaPersonas(personas) {
    // Limpiar el contenido actual del contenedor
    personasListContainer.innerHTML = '';

    // Recorrer la lista de personas y crear elementos de lista para cada una
    personas.forEach(persona => {
        const personaItem = document.createElement('div');
        personaItem.classList.add('persona-item');
        personaItem.innerHTML = `
            <p>Nombre: ${persona.nombre} ${persona.apellidos}</p>
            <p>ID: ${persona.id}</p>
            <p>Estado Civil: ${persona.estadoCivil}</p>
        `;
        personasListContainer.appendChild(personaItem);
    });
}

// Event listener para el botón de Listar Estudiantes
document.getElementById('btnListarEstudiantes').addEventListener('click', function() {
    // Obtener la lista de estudiantes del centro educativo
    const estudiantes = its.obtenerEstudiantes();
    // Mostrar la lista de estudiantes en el contenedor
    mostrarListaPersonas(estudiantes);
});

// Event listener para el botón de Listar Profesores
document.getElementById('btnListarProfesores').addEventListener('click', function() {
    // Obtener la lista de profesores del centro educativo
    const profesores = its.obtenerProfesores();
    // Mostrar la lista de profesores en el contenedor
    mostrarListaPersonas(profesores);
});

// Event listener para el botón de Listar Personal de Servicio
document.getElementById('btnListarPersonalServicio').addEventListener('click', function() {
    // Obtener la lista de personal de servicio del centro educativo
    const personalServicio = its.obtenerPersonalServicio();
    // Mostrar la lista de personal de servicio en el contenedor
    mostrarListaPersonas(personalServicio);
});
