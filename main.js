class alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    get promedio() {
        let promedio = Math.round((this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4))

        return "el promedio de mis notas es: " + promedio
    }
    get condicion() {
        let promedio = Math.round((this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4))
        if (promedio >= 12) {
            return "Felicidades! Aprobaste"
        } else {
            return "Lo sentimos: Reprobaste el curso"
        }
    }
    get obsequio() {
        let promedio = Math.round((this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4))
        if (promedio >= 17) {
            return "Te ganaste una mochila"
        } else {
            return "No ganaste nada"
        }
    }
}
let Listalumnos = []
//generador de nombres
var firstname = ["Adrián", "Agustín", "Alberto", "Alejandro", "Alexander", "Alexis", "Alonso", "Andrés Felipe", "Ángel", "Anthony", "Antonio", "Bautista", "Benicio", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Carlos Roberto", "César", "Cristóbal", "Daniel", "David", "Diego", "Dylan", "Eduardo", "Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto", "Ethan", "Fabián", "Facundo", "Felipe", "Félix", "Félix María", "Fernando", "Francisco", "Francisco Javier", "Gabriel", "Gaspar", "Gustavo Adolfo", "Hugo", "Ian", "Iker", "Isaac", "Jacob", "Javier", "Jayden", "Jeremy", "Jerónimo", "Jesús", "Jesús Antonio", "Jesús Víctor", "Joaquín", "Jorge", "Jorge  Alberto", "Jorge Luis", "José", "José Antonio", "José Daniel", "José David", "José Francisco", "José Gregorio", "José Luis", "José Manuel", "José Pablo", "Josué", "Juan", "Juan Ángel", "Juan Carlos", "Juan David", "Juan Esteban", "Juan Ignacio", "Juan José", "Juan Manuel", "Juan Pablo", "Juan Sebastián", "Julio", "Julio Cesar", "Justin", "Kevin", "Lautaro", "Liam", "Lian", "Lorenzo", "Lucas", "Luis", "Luis Alberto", "Luis Emilio", "Luis Fernando", "Manuel", "Manuel Antonio", "Marco Antonio", "Mario", "Martín", "Mateo", "Matías", "Maximiliano", "Maykel", "Miguel", "Miguel  ngel", "Nelson", "Noah", "Oscar", "Pablo", "Pedro", "Rafael", "Ramón", "Raúl", "Ricardo", "Rigoberto", "Roberto", "Rolando", "Samuel", "Samuel David", "Santiago", "Santino", "Santos", "Sebastián", "Thiago", "Thiago Benjamín", "Tomás", "Valentino", "Vicente", "Víctor", "Víctor Hugo"];

var lastname = ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin", "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Alvarez", "Muñoz", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez",
    "Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina", "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez", "Iglesias", "Medina", "Garrido", "Santos", "Castillo", "Cortes", "Lozano", "Guerrero", "Cano", "Prieto", "Mendez", "Calvo", "Cruz", "Gallego", "Vidal", "Leon", "Herrera", "Marquez", "Peña", "Cabrera", "Flores", "Campos", "Vega", "Diez", "Fuentes", "Carrasco", "Caballero", "Nieto", "Reyes", "Aguilar", "Pascual", "Herrero", "Santana", "Lorenzo", "Hidalgo", "Montero", "Ibañez", "Gimenez", "Ferrer", "Duran", "Vicente", "Benitez", "Mora", "Santiago", "Arias", "Vargas", "Carmona", "Crespo", "Roman", "Pastor", "Soto", "Saez", "Velasco", "Soler", "Moya", "Esteban", "Parra", "Bravo", "Gallardo", "Rojas", "Pardo", "Merino", "Franco", "Espinosa", "Izquierdo", "Lara", "Rivas", "Silva", "Rivera", "Casado", "Arroyo", "Redondo", "Camacho", "Rey", "Vera", "Otero", "Luque", "Galan", "Montes", "Rios", "Sierra", "Segura", "Carrillo", "Marcos", "Marti", "Soriano", "Mendoza"];

document.write('<br><h1>Lista de alumnos</h1>')
//Fin generador de nombres
for (let i = 0; i < 1000; i++) {
    var rand_first = Math.floor(Math.random() * firstname.length);
    var rand_last = Math.floor(Math.random() * lastname.length);
    var nombreA = firstname[rand_first] + " " + lastname[rand_last]

    let alumno1 = { codigo: i, nombre: nombreA, nota1: Math.round(Math.random() * 20), nota2: Math.round(Math.random() * 20), nota3: Math.round(Math.random() * 20), nota4: Math.round(Math.random() * 20) }
    Listalumnos.push(alumno1);
}

for (const index in Listalumnos) {
    if (Object.hasOwnProperty.call(Listalumnos, index)) {
        const element = Listalumnos[index];
        let alumno1 = new alumno(element.codigo, element.nombre, element.nota1, element.nota2, element.nota3, element.nota4)
        document.write('<h2>Promedio de ' + alumno1.nombre + " " + alumno1.codigo + '</h2>')
        document.write(alumno1.promedio);
        document.write('<br>')
        document.write(alumno1.condicion);
        document.write('<br>')
        document.write(alumno1.obsequio);
    }
}



