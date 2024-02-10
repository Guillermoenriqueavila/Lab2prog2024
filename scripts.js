
// Manejar eventos después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function () {
    // Función para convertir grados Celsius a Fahrenheit
    document.getElementById("convertir").addEventListener("click", function () {
        var celsius = parseFloat(document.getElementById("input1").value);
        if (!isNaN(celsius)) {
            var fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById("resultado").innerText = celsius + ' grados Celsius son ' + fahrenheit + ' grados Fahrenheit.';
        }
    });

    // Función para hacer algo al hacer clic en el botón 'interesante'
    const botonInteresante = document.getElementById('interesante');
    botonInteresante.addEventListener('click', hacerAlgoInteresante);

    function hacerAlgoInteresante() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
        console.log(`¡Has hecho algo interesante! Nuevo fondo bicolor: ${color1} - ${color2}`);
        botonInteresante.classList.add('girar-rebotar');
        setTimeout(() => {
            botonInteresante.classList.remove('girar-rebotar');
        }, 1000);
    }

    // Función para obtener un color aleatorio
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let codigoHex = '#';
        for (let i = 0; i < 6; i++) {
            codigoHex += letters[Math.floor(Math.random() * 16)];
        }
        return codigoHex;
    }

    // Función para seleccionar una carrera
    const seleccionarCarreraButton = document.getElementById('seleccionarCarrera');
    seleccionarCarreraButton.addEventListener('click', function () {
        const carreraSeleccionada = document.getElementById('carrera').value;
        if (carreraSeleccionada) {
            document.getElementById('carreraSeleccionada').textContent = `Carrera seleccionada: ${carreraSeleccionada}`;
            console.log(`Haz seleccionado correctamente la carrera: ${carreraSeleccionada}`);
        } else {
            alert('Selecciona una carrera antes de hacer clic en "Seleccionar Carrera".');
        }
    });

    // Función para calcular la velocidad
    const calcularButton = document.getElementById('calcular');
    calcularButton.addEventListener('click', function () {
        const distancia = parseFloat(document.getElementById('distancia').value);
        const tiempo = parseFloat(document.getElementById('tiempo').value);

        if (!isNaN(distancia) && !isNaN(tiempo)) {
            const velocidad = distancia / tiempo;
            document.getElementById('resultadotiempo').textContent = `La velocidad es ${velocidad.toFixed(2)} km/h.`;
            console.log(`La velocidad es ${velocidad.toFixed(2)} km/h.`);
        } else {
            alert('Ingresa valores numéricos válidos para distancia y tiempo.');
        }
    });

    // Función para verificar si un número es primo
    document.getElementById('verificarPrimo').addEventListener('click', function () {
        const numero = parseInt(document.getElementById('numero').value.trim());
        if (!isNaN(numero) && numero >= 2) {
            let esPrimo = true;
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                document.getElementById('respuesta').textContent = numero + ' es un número primo.';
            } else {
                document.getElementById('respuesta').textContent = numero + ' no es un número primo.';
            }
        } else {
            document.getElementById('respuesta').textContent = 'Por favor, ingresa un número entero mayor o igual que 2.';
        }
    });

    // Función para clasificar un triángulo
    document.getElementById('clasificarTriangulo').addEventListener('click', function () {
        const lado1 = parseFloat(document.getElementById('lado1').value);
        const lado2 = parseFloat(document.getElementById('lado2').value);
        const lado3 = parseFloat(document.getElementById('lado3').value);

        if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3) && lado1 > 0 && lado2 > 0 && lado3 > 0) {
            const clasificacion = clasificarTriangulo(lado1, lado2, lado3);
            document.getElementById('resultadoClasificacion').textContent = `Clasificación: ${clasificacion}`;
            console.log(`Clasificación: ${clasificacion}`);
        } else {
            alert('Ingresa valores válidos para los lados del triángulo.');
        }
    });

    // Función auxiliar para clasificar un triángulo
    function clasificarTriangulo(lado1, lado2, lado3) {
        if (lado1 === lado2 && lado2 === lado3) {
            return 'Triángulo Equilátero';
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            return 'Triángulo Isósceles';
        } else {
            return 'Triángulo Escaleno';
        }
    };

    // Función para jugar piedra, papel o tijera
    document.getElementById('jugar').addEventListener('click', function () {
        const seleccionJugador = document.getElementById('jugador').value;
        const seleccionMaquina = obtenerSeleccionMaquina();
        const resultado = jugarPiedraPapelTijera(seleccionJugador, seleccionMaquina);
        document.getElementById('resultadoJuego').textContent = `Jugador: ${seleccionJugador} | Máquina: ${seleccionMaquina} | Resultado: ${resultado}`;
        console.log(`Jugador: ${seleccionJugador} | Máquina: ${seleccionMaquina} | Resultado: ${resultado}`);
    });

    // Función auxiliar para obtener la selección de la máquina en piedra, papel o tijera
    function obtenerSeleccionMaquina() {
        const opciones = ['piedra', 'papel', 'tijera'];
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        return opciones[indiceAleatorio];
    }

    // Función auxiliar para jugar piedra, papel o tijera
    function jugarPiedraPapelTijera(seleccionJugador, seleccionMaquina) {
        if (seleccionJugador === seleccionMaquina) {
            return 'Empate';
        } else if (
            (seleccionJugador === 'piedra' && seleccionMaquina === 'tijera') ||
            (seleccionJugador === 'papel' && seleccionMaquina === 'piedra') ||
            (seleccionJugador === 'tijera' && seleccionMaquina === 'papel')
        ) {
            return 'Ganaste';
        } else {
            return 'Perdiste';
        }
    }

    // Manejar la operación matemática seleccionada por el usuario
    $(document).ready(function () {
        $('#calcularOperacion').click(function () {
            const numero1 = parseFloat($('#numero1').val());
            const numero2 = parseFloat($('#numero2').val());
            const operacion = $('#operacion').val();
            let resultado;
            switch (operacion) {
                case 'suma':
                    resultado = numero1 + numero2;
                    break;
                case 'resta':
                    resultado = numero1 - numero2;
                    break;
                case 'multiplicacion':
                    resultado = numero1 * numero2;
                    break;
                case 'division':
                    if (numero2 === 0) {
                        $('#resultadoOperacion').text('No se puede dividir por cero.');
                        return;
                    }
                    resultado = numero1 / numero2;
                    break;
                default:
                    $('#resultadoOperacion').text('Operación no válida.');
                    return;
            }
            $('#resultadoOperacion').text('El resultado es: ' + resultado);
        });
    });


});

const convertirButton = document.getElementById('convertirMedida');
    const medidaInput = document.getElementById('medida');
    const resultadoParrafo = document.getElementById('resultadoMedida');
    const unidadOrigenSelect = document.getElementById('unidadOrigen');

    convertirButton.addEventListener('click', function () {
        const medida = parseFloat(medidaInput.value);
        const unidadOrigen = unidadOrigenSelect.value;
        const unidadDestinoSelect = document.getElementById('unidadDestino');
        const unidadDestino = unidadDestinoSelect.value;

        if (!isNaN(medida)) {
            const resultado = convertirMedida(medida, unidadOrigen, unidadDestino);
            resultadoParrafo.textContent = `Resultado: ${resultado} ${unidadDestino}`;
            console.log(`Resultado: ${resultado} ${unidadDestino}`);
        } else {
            alert('Ingresa una medida válida.');
        }
    });

    function convertirMedida(medida, unidadOrigen, unidadDestino) {
        if (unidadOrigen === 'metros') {
            if (unidadDestino === 'centimetros') {
                return medida * 100;
            } else if (unidadDestino === 'pulgadas') {
                return medida * 39.3701;
            } else {
                return medida;
            }
        } else if (unidadOrigen === 'centimetros') {
            if (unidadDestino === 'metros') {
                return medida / 100;
            } else if (unidadDestino === 'pulgadas') {
                return medida / 2.54;
            } else {
                return medida;
            }
        } else if (unidadOrigen === 'pulgadas') {
            if (unidadDestino === 'metros') {
                return medida * 0.0254;
            } else if (unidadDestino === 'centimetros') {
                return medida * 2.54;
            } else {
                return medida;
            }
        } else {
            return 'No se puede realizar la conversión.';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const lado1Input = document.getElementById('lado1');
        const lado2Input = document.getElementById('lado2');
        const lado3Input = document.getElementById('lado3');
        const jugadorSelect = document.getElementById('jugador');
        const numeroInput = document.getElementById('numero');
    
        const resultadoClasificacionParrafo = document.getElementById('resultadoClasificacion');
        const resultadoJuegoParrafo = document.getElementById('resultadoJuego');
        const respuestaCampo5 = document.getElementById('respuesta');
    
        lado1Input.addEventListener('mouseover', function () {
            lado1Input.style.backgroundColor = 'lightblue';
        });
    
        lado1Input.addEventListener('mouseout', function () {
            lado1Input.style.backgroundColor = '';
        });
    
        lado2Input.addEventListener('mouseover', function () {
            lado2Input.style.backgroundColor = 'lightblue';
        });
    
        lado2Input.addEventListener('mouseout', function () {
            lado2Input.style.backgroundColor = '';
        });
    
        lado3Input.addEventListener('mouseover', function () {
            lado3Input.style.backgroundColor = 'lightblue';
        });
    
        lado3Input.addEventListener('mouseout', function () {
            lado3Input.style.backgroundColor = '';
        });
    
        jugadorSelect.addEventListener('mouseover', function () {
            jugadorSelect.style.backgroundColor = 'lightgreen';
        });
    
        jugadorSelect.addEventListener('mouseout', function () {
            jugadorSelect.style.backgroundColor = '';
        });
    
        numeroInput.addEventListener('mouseover', function () {
            numeroInput.style.backgroundColor = 'lightcoral';
        });
    
        numeroInput.addEventListener('mouseout', function () {
            numeroInput.style.backgroundColor = '';
        });
    });
document.addEventListener('DOMContentLoaded', function () {
    // Eventos mouseover y mouseout para los botones
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'blue'; 
        });

        button.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
        });
    });

    // Eventos mouseover y mouseout para los campos de entrada
    const inputFields = document.querySelectorAll('input[type="number"]');

    inputFields.forEach(input => {
        input.addEventListener('mouseover', function () {
            this.style.border = '2px solid green';
        });

        input.addEventListener('mouseout', function () {
            this.style.border = ''; 
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Campos que recibirán el evento focus
    const campos = document.querySelectorAll('.calculator-section input, .calculator-section select');

    campos.forEach(campo => {
        campo.addEventListener('focus', function () {
            this.classList.add('zoom-effect');
        });

        campo.addEventListener('blur', function () {
            this.classList.remove('zoom-effect');
        });
    });
});

