document.addEventListener('DOMContentLoaded', function () {
    const example1 = document.getElementById('example1');
    const example2 = document.getElementById('example2');
    const example3 = document.getElementById('example3');

    
    example1.addEventListener('click', function () {
        const textoIngresado = prompt('Ingresa un texto:');
        if (textoIngresado !== null) {
            example1.textContent = textoIngresado;
        }
        console.log('Haz hecho clic en Ejemplo 1');
    });

    // Ejemplo 2:  salta y gira
    example2.addEventListener('click', function () {
        
        example2.classList.add('jumpAndRotate');

        
        setTimeout(function () {
            example2.classList.remove('jumpAndRotate');
        }, 500); // Ajustar la duración de la animación en milisegundos
        console.log('Haz hecho clic en Ejemplo 2');
    });

    
    example3.addEventListener('click', function () {
        mostrarListaCarreras();
        console.log('Haz hecho clic en Ejemplo 3');
    });

    
    example1.addEventListener('focus', function () {
        example1.style.color = 'red';
        console.log('Ejemplo 1 ha recibido el foco');
    });

   
    example2.addEventListener('focus', function () {
        example2.style.color = 'blue';
        console.log('Ejemplo 2 ha recibido el foco');
    });

    
    example3.addEventListener('focus', function () {
        example3.style.color = 'green';
        console.log('Ejemplo 3 ha recibido el foco');
    });

    // Función mostrar lista de carreras
    function mostrarListaCarreras() {
        const carreras = [
            'Medicina',
            'Arquitectura',
            'Ingeniería en Sistemas',
            'Redes Informáticas',
            'Psicología',
            'Licenciatura en Inglés'
        ];

        // alert para mostrar las carreras
        alert('Lista de Carreras:\n\n' + carreras.join('\n'));
    }
});
