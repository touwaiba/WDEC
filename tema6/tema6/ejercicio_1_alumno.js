/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
   
    
    // Crear objeto estudiante
    var estudiante = {
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",

        mostrarInfo: function () {
            var html = "";
            html += "<div class='card'><div class='card-body'>";
            html += "<h5 class='card-title'>Estudiante</h5>";
            html += "<p><strong>Nombre:</strong> " + this.nombre + "</p>";
            html += "<p><strong>Apellidos:</strong> " + this.apellidos + "</p>";
            html += "<p><strong>Edad:</strong> " + this.edad + "</p>";
            html += "<p><strong>Curso:</strong> " + this.curso + "</p>";
            html += "</div></div>";
            return html;
        }
    };

    // TODO: Mostrar el resultado en el DOM
        document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();

};

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
     var input = document.getElementById("color-input");
     var valor = input.value.trim();
     var salida = document.getElementById("resultado-ej2");

      if (valor === "") {
        salida.innerHTML = "<div class='alert alert-warning'>Introduce un color.</div>";
        return;
    }

    // TODO: Agregar el color al array usando push()
    colores.push(valor);
    // TODO: Limpiar el input
    input.value="";
    // TODO: Mostrar mensaje de confirmación
    mostrarColores();
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    var salida = document.getElementById("resultado-ej2");
    if (colores.length === 0) {
        salida.innerHTML = "<div class='alert alert-warning'>No hay colores para eliminar.</div>";
        return;
    }
    var eliminado = colores.pop();
    salida.innerHTML = "<div class='alert alert-info'>Se eliminó: " + eliminado + "</div>";
    mostrarColores();
}


function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
    for (var i = 0; i < colores.length; i++) {
        html += "<li>*" + colores[i] + "</li>";
    }  
   
    console.log(colores);

    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        { nombre: "Auriculares", precio: 20.9, categoria: "Electrónica" },
        { nombre: "Mochila", precio: 45.9, categoria: "Accesorios" },
        { nombre: "Teclado", precio: 69.99, categoria: "Electrónica" },
        { nombre: "libros de JS", precio: 38.7, categoria: "Libros" },
        { nombre: "Smartwatch", precio: 129, categoria: "Electrónica" }
    ];
 

    mostrarProductos(productsToHTML(productos));
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora

    productos.sort(function (a, b) { return a.precio - b.precio; });
    mostrarProductos(productsToHTML(productos));
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()

    var productosCaros = productos.filter(function (p) { return p.precio > 50; });
    mostrarProductos(productsToHTML(productosCaros));
}

function productsToHTML(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría

    var html = "";
    // TODO: Recorrer el array y crear HTML para cada producto
    for (var i = 0; i < arrayProductos.length; i++) {
        var p = arrayProductos[i];
        html += "<div class='card mb-2'><div class='card-body'>";
        html += "<h6 class='card-title'>" + p.nombre + "</h6>";
        html += "<p class='card-text'><strong>Precio:</strong> " + p.precio.toFixed(2) + " €</p>";
        html += "<span class='badge text-bg-secondary'>" + p.categoria + "</span>";
        html += "</div></div>";
    }
    if (arrayProductos.length === 0) {
        html = "<div class='alert alert-warning'>No hay productos para mostrar</div>";
    }
    return html;
   
}
    function mostrarProductos(html) {
    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        var cont = document.getElementById("resultado-ej4");
        if (typeof nota !== "number" || isNaN(nota)) {
            cont.innerHTML = "<div class='alert alert-warning'>Introduce un número válido.</div>";
            return;
        }
        if (nota < 0 || nota > 10) {
            cont.innerHTML = "<div class='alert alert-warning'>La nota debe estar entre 0 y 10.</div>";
            return;
        }

        // TODO: Agregar la nota al array de notas
        this.notas.push(nota);

        // TODO: Mostrar mensaje de confirmación
        cont.innerHTML = "<div class='alert alert-success'>Nota agregada correctamente.</div>";
        cont.innerHTML += this.mostrarNotas();
    },


    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        if (this.notas.length === 0) {
            return 0;
        }
        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        var promedio = suma / this.notas.length;
        return Math.round(promedio * 100) / 100;
    },
    

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
        var html = "<h6>Notas de " + this.nombre + ":</h6>";
        if (this.notas.length === 0) {
            html += "<div class='alert alert-info'>Sin notas aún.</div>";
        } else {
            html += "<p>" + this.notas.join(", ") + "</p>";
            html += "<p><strong>Promedio:</strong> " + this.calcularPromedio() + "</p>";
        }
        return html;
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    var input = document.getElementById("nota-input");

    // TODO: Convertir a número
    var valor = parseFloat(input.value);

    // TODO: Llamar al método agregarNota del objeto
    estudianteNotas.agregarNota(valor);

    // TODO: Limpiar el input
    input.value = "";

    // TODO: Actualizar la visualización
    document.getElementById("resultado-ej4").innerHTML += estudianteNotas.mostrarNotas();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    var prom = estudianteNotas.calcularPromedio();

    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML +=
        "<div class='alert alert-primary'>Promedio actual: " + prom + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
        document.getElementById("resultado-ej4").innerHTML = estudianteNotas.mostrarNotas();

}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Ana",    departamento: "IT",        salario: 3200, antiguedad: 2 },
        { nombre: "basma",   departamento: "Ventas",    salario: 2800, antiguedad: 1 },
        { nombre: "francesca",  departamento: "IT",        salario: 3900, antiguedad: 4 },
        { nombre: "carlos", departamento: "Marketing", salario: 3100, antiguedad: 3 },
        { nombre: "Sarah",   departamento: "RRHH",      salario: 2700, antiguedad: 2 },
        { nombre: "imane",  departamento: "Ventas",    salario: 3500, antiguedad: 5 }   
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados

    var departamento = ""; // TODO: Obtener del input
    departamento = document.getElementById("depto-input").value.trim().toLowerCase();

    var empleadosDepto = []; // TODO: Implementar filtro`
    empleadosDepto = empleados.filter(function (e) {
         return e.departamento.toLowerCase() === departamento;
    });


    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = []; // TODO: Implementar filtro
    empleadosAltoSalario = empleados.filter(function (e) {
        return e.salario > 3000;
    });


    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = "";
     if (!arrayEmpleados || arrayEmpleados.length === 0) {
        html = "<div class='alert alert-warning'>No hay empleados para mostrar</div>";
    } else {
        for (var i = 0; i < arrayEmpleados.length; i++) {
            var e = arrayEmpleados[i];
            html += "<div class='card mb-2'><div class='card-body'>";
            html += "<h6 class='card-title'>" + e.nombre + "</h6>";
            html += "<p class='card-text'><strong>Departamento:</strong> " + e.departamento + "</p>";
            html += "<p class='card-text'><strong>Salario:</strong> " + e.salario + " €</p>";
            html += "<span class='badge text-bg-light'>Antigüedad: " + e.antiguedad + " años</span>";
            html += "</div></div>";
        }
    }

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var eliminadas = ciudades.splice(2, 2);

    var html = "<div class='alert alert-info'>Elementos eliminados: " + eliminadas.join(", ") + "</div>";
    html += "<p><strong>Array resultante:</strong> " + ciudades.join(", ") + "</p>";

    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcion = ciudades.slice(1, 4);

    var html = "<div class='alert alert-secondary'>Porción extraída (slice 1,4): " + porcion.join(", ") + "</div>";
    html += "<p><strong>Array original intacto:</strong> " + ciudades.join(", ") + "</p>";

    document.getElementById("resultado-ej6").innerHTML = html;
}


function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var encontrada = ciudades.find(function (c) {
        return c === "Madrid";
    });

    var posicion = ciudades.indexOf("Madrid");

    var html = "";
    if (encontrada) {
        html += "<div class='alert alert-success'>Ciudad encontrada con find(): " + encontrada + "</div>";
        html += "<p><strong>Posición con indexOf():</strong> " + posicion + "</p>";
    } else {
        html += "<div class='alert alert-warning'>Madrid no se encuentra en el array.</div>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;

    // TODO: Crear método acelerar() que incremente la velocidad
    this.acelerar = function () {
        this.velocidad += 10;
    };

    // TODO: Crear método mostrarInfo() que retorne información
    this.mostrarInfo = function () {
        return (
            "<strong>" +
            this.marca +
            " " +
            this.modelo +
            "</strong> (" +
            this.año +
            ") — Velocidad actual: " +
            this.velocidad +
            " km/h"
        );
    };
}


var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    vehiculos = []; // reiniciar el array antes de crear nuevos

    vehiculos.push(new Vehiculo("Toyota", "Corolla", 2019));
    vehiculos.push(new Vehiculo("Tesla", "Model 3", 2022));
    vehiculos.push(new Vehiculo("Seat", "Ibiza", 2021));
    vehiculos.push(new Vehiculo("Renault", "Clio", 2018));
    vehiculos.push(new Vehiculo("Peugeot", "208", 2020));

    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    if (vehiculos.length === 0) {
        document.getElementById("resultado-ej7").innerHTML =
            "<div class='alert alert-warning'>Primero crea los vehículos antes de acelerar.</div>";
        return;
    }

    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar();
    }

    mostrarInfoVehiculos();
}


function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo

    if (vehiculos.length === 0) {
        html = "<div class='alert alert-info'>No hay vehículos para mostrar.</div>";
    } else {
        for (var i = 0; i < vehiculos.length; i++) {
            html += "<div class='card mb-2'><div class='card-body'>";
            html += vehiculos[i].mostrarInfo();
            html += "</div></div>";
        }
    }

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    // Pista: usar bucles anidados y Math.random()
    matriz = [];

    for (var i = 0; i < 3; i++) {
        var fila = [];
        for (var j = 0; j < 3; j++) {
            // Generar número aleatorio entre 1 y 100
            var numero = Math.floor(Math.random() * 100) + 1;
            fila.push(numero);
        }
        matriz.push(fila);
    }

    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    // TODO: Mostrar el resultado

    if (matriz.length === 0) {
        document.getElementById("resultado-ej8").innerHTML =
            "<div class='alert alert-warning'>Primero crea la matriz.</div>";
        return;
    }

    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }

    document.getElementById("resultado-ej8").innerHTML +=
        "<div class='alert alert-success mt-2'>Suma de la diagonal principal: " + suma + "</div>";
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered text-center'>";

    // TODO: Crear filas y celdas de la tabla
    for (var i = 0; i < matriz.length; i++) {
        html += "<tr>";
        for (var j = 0; j < matriz[i].length; j++) {
            html += "<td><strong>" + matriz[i][j] + "</strong></td>";
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = []; // TODO: Completar
    for (var i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números
    var duplicados = []; // TODO: Implementar map
    duplicados = numeros.map(function (n) {
        return n * 2;
    });

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares
    var pares = []; // TODO: Implementar filter
    pares = numeros.filter(function (n) {
        return n % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    var suma = 0; // TODO: Implementar reduce
    suma = numeros.reduce(function (acumulador, n) {
        return acumulador + n;
    }, 0);

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success mt-2'>Suma total (reduce): " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}


// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = ""; // TODO: Obtener del input
    var autor = "";  // TODO: Obtener del input
    var año = 0;     // TODO: Obtener y convertir a número
    var genero = ""; // TODO: Obtener del select

    // (implementación)
    titulo = document.getElementById("libro-titulo").value.trim();
    autor  = document.getElementById("libro-autor").value.trim();
    año    = parseInt(document.getElementById("libro-year").value, 10);
    genero = document.getElementById("libro-genero").value;

    // TODO: Validar que todos los campos estén completos
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-warning'>Completa todos los campos correctamente.</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };
    biblioteca.push(libro);

    // TODO: Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";

    // TODO: Mostrar mensaje de confirmación
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro agregado correctamente.</div>";

    // TODO: Actualizar visualización
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    var librosOrdenados = []; // TODO: Implementar sort

    // (implementación)
    librosOrdenados = biblioteca.slice().sort(function (a, b) {
        var ta = a.titulo.toLowerCase();
        var tb = b.titulo.toLowerCase();
        if (ta < tb) return -1;
        if (ta > tb) return 1;
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var librosFiltrados = []; // TODO: Implementar filter

    // (implementación) — usamos el MISMO select del formulario
    var g = document.getElementById("libro-genero").value; // "" = todos
    librosFiltrados = biblioteca.filter(function (l) {
        return g === "" ? true : l.genero === g;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter

    // (implementación)
    recientes = biblioteca.filter(function (l) {
        return l.año > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (!arrayLibros || arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
        for (var i = 0; i < arrayLibros.length; i++) {
            var l = arrayLibros[i];
            html += "<div class='card mb-2'><div class='card-body'>";
            html += "<h6 class='card-title'>" + l.titulo + "</h6>";
            html += "<p class='card-text'><strong>Autor:</strong> " + l.autor + "</p>";
            html += "<p class='card-text'><strong>Año:</strong> " + l.año + "</p>";
            html += "<span class='badge text-bg-info'>" + l.genero + "</span>";
            html += "</div></div>";
        }
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}


// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);


});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/