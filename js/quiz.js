document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById("comprobar");
    const resultadoDiv = document.getElementById("resultado");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", () => {
            // Respuestas correctas esperadas (p1: b -> Escolapios, p2: a -> Piedad y Letras)
            const respuestaCorrectaP1 = "b";
            const respuestaCorrectaP2 = "a";

            // Obtener la opción seleccionada por el usuario
            const p1Seleccionada = document.querySelector('input[name="p1"]:checked');
            const p2Seleccionada = document.querySelector('input[name="p2"]:checked');

            // Validar que se hayan respondido ambas preguntas
            if (!p1Seleccionada || !p2Seleccionada) {
                resultadoDiv.textContent = "Por favor, respondé todas las preguntas antes de comprobar.";
                resultadoDiv.className = "error";
                return;
            }

            let aciertos = 0;

            if (p1Seleccionada.value === respuestaCorrectaP1) {
                aciertos++;
            }
            if (p2Seleccionada.value === respuestaCorrectaP2) {
                aciertos++;
            }

            // Mostrar el resultado final según los aciertos
            if (aciertos === 2) {
                resultadoDiv.textContent = `¡Felicitaciones! Obtuviste 2 de 2 respuestas correctas. ¡Conocés muy bien la historia del Beato Ignacio Casanovas!`;
                resultadoDiv.className = "acierto";
            } else {
                resultadoDiv.textContent = `Obtuviste ${aciertos} de 2 respuestas correctas. ¡Revisá la biografía e intentalo de nuevo!`;
                resultadoDiv.className = "error";
            }
        });
    }
});