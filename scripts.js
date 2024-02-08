document.addEventListener('DOMContentLoaded', function () {
    const botonAlerta1 = document.getElementById('alerta1');
    const texto1 = document.getElementById('texto1');
    const input1 = document.getElementById('input1');

    botonAlerta1.addEventListener('click', function () {
        window.alert('Hiciste click en el primer botón');
        texto1.innerHTML = '¡Se hizo clic en el botón!';
    });

    const textval1 = texto1.innerHTML;

    texto1.addEventListener('mouseover', function () {
        texto1.innerHTML = 'Texto cambiado';
    });

    texto1.addEventListener('mouseleave', function () {
        texto1.innerHTML = textval1;
    });

    input1.addEventListener('keypress', function (event) {
        console.log('Input 1: ' + event.key);
    });

    const botonAlerta2 = document.getElementById('alerta2');
    const texto2 = document.getElementById('texto2');
    const input2 = document.getElementById('input2');

    botonAlerta2.addEventListener('click', function () {
        const inputval2 = input2.value;
        console.log('Input 2: ' + inputval2);
        texto2.innerHTML = inputval2;
    });

    const botonInteresante = document.getElementById('interesante');

    botonInteresante.addEventListener('click', function () {
        hacerAlgoInteresante();
    });

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

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let codigoHex = '#';
        for (let i = 0; i < 6; i++) {
            codigoHex += letters[Math.floor(Math.random() * 16)];
        }
        return codigoHex;
    }

    // Nuevo código para la sección de selección de carrera
    const carreraSelect = document.getElementById('carrera');
    const seleccionarCarreraButton = document.getElementById('seleccionarCarrera');
    const carreraSeleccionadaParrafo = document.getElementById('carreraSeleccionada');

    seleccionarCarreraButton.addEventListener('click', function () {
        const carreraSeleccionada = carreraSelect.value;
        if (carreraSeleccionada) {
            carreraSeleccionadaParrafo.textContent = `Carrera seleccionada: ${carreraSeleccionada}`;

            // Agregar esta línea para imprimir en la consola
            console.log(`Carrera seleccionada: ${carreraSeleccionada}`);
        } else {
            alert('Selecciona una carrera antes de hacer clic en "Seleccionar Carrera".');
        }
    });

    // Nuevo código para la sección de cálculo de distancia y tiempo
    const distanciaInput = document.getElementById('distancia');
    const tiempoInput = document.getElementById('tiempo');
    const calcularButton = document.getElementById('calcular');
    const resultadoParrafo = document.getElementById('resultado');

    calcularButton.addEventListener('click', function () {
        const distancia = parseFloat(distanciaInput.value);
        const tiempo = parseFloat(tiempoInput.value);

        if (!isNaN(distancia) && !isNaN(tiempo)) {
            const velocidad = distancia / tiempo;
            const resultadoTexto = `La velocidad es ${velocidad.toFixed(2)} km/h.`;

            // Mostrar el resultado en el párrafo y en la consola
            resultadoParrafo.textContent = `Resultado: ${resultadoTexto}`;
            console.log(resultadoTexto);
        } else {
            // Manejar el caso en que los valores ingresados no sean números
            alert('Ingresa valores numéricos válidos para distancia y tiempo.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const verificarPrimosButton = document.getElementById('verificarPrimos');
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const resultadoPrimosParrafo = document.getElementById('resultadoPrimos');

    verificarPrimosButton.addEventListener('click', function () {
        const numero1 = parseInt(numero1Input.value);
        const numero2 = parseInt(numero2Input.value);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            const esPrimo1 = esPrimo(numero1);
            const esPrimo2 = esPrimo(numero2);

            resultadoPrimosParrafo.textContent = `Número 1 ${esPrimo1 ? 'es primo' : 'no es primo'}. Número 2 ${esPrimo2 ? 'es primo' : 'no es primo'}.`;

            console.log(`Número 1 ${esPrimo1 ? 'es primo' : 'no es primo'}. Número 2 ${esPrimo2 ? 'es primo' : 'no es primo'}.`);
        } else {
            alert('Ingresa números válidos para verificar si son primos.');
        }
    });

    function esPrimo(numero) {
        if (numero < 2) return false;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const clasificarTrianguloButton = document.getElementById('clasificarTriangulo');
    const resultadoClasificacionParrafo = document.getElementById('resultadoClasificacion');

    clasificarTrianguloButton.addEventListener('click', function () {
        const lado1 = parseFloat(document.getElementById('lado1').value);
        const lado2 = parseFloat(document.getElementById('lado2').value);
        const lado3 = parseFloat(document.getElementById('lado3').value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            alert('Ingresa valores válidos para los lados del triángulo.');
        } else {
            const clasificacion = clasificarTriangulo(lado1, lado2, lado3);
            resultadoClasificacionParrafo.textContent = `Clasificación: ${clasificacion}`;
            console.log(`Clasificación: ${clasificacion}`);
        }
    });

    function clasificarTriangulo(lado1, lado2, lado3) {
        if (lado1 === lado2 && lado2 === lado3) {
            return 'Triángulo Equilátero';
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            return 'Triángulo Isósceles';
        } else {
            return 'Triángulo Escaleno';
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const jugarButton = document.getElementById('jugar');
    const resultadoJuegoParrafo = document.getElementById('resultadoJuego');

    jugarButton.addEventListener('click', function () {
        const seleccionJugador = document.getElementById('jugador').value;
        const seleccionMaquina = obtenerSeleccionMaquina();

        const resultado = jugarPiedraPapelTijera(seleccionJugador, seleccionMaquina);

        resultadoJuegoParrafo.textContent = `Jugador: ${seleccionJugador} | Máquina: ${seleccionMaquina} | Resultado: ${resultado}`;
        console.log(`Jugador: ${seleccionJugador} | Máquina: ${seleccionMaquina} | Resultado: ${resultado}`);
    });

    function obtenerSeleccionMaquina() {
        const opciones = ['piedra', 'papel', 'tijera'];
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        return opciones[indiceAleatorio];
    }

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
});
