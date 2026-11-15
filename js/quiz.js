document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById("comprobar");
    const resultadoDiv = document.getElementById("resultado");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", () => {
            // Respuestas correctas esperadas para las 5 preguntas
            const respuestasCorrectas = {
                p1: "b", // Escolapios (Escuelas Pías)
                p2: "a", // Piedad y Letras
                p3: "a", // En 1893, en Igualada (Barcelona, España)
                p4: "b", // Guerra Civil Española en 1936
                p5: "c"  // Papa San Juan Pablo II
            };

            // Obtener las opciones seleccionadas por el usuario
            const p1 = document.querySelector('input[name="p1"]:checked');
            const p2 = document.querySelector('input[name="p2"]:checked');
            const p3 = document.querySelector('input[name="p3"]:checked');
            const p4 = document.querySelector('input[name="p4"]:checked');
            const p5 = document.querySelector('input[name="p5"]:checked');

            // Validar que se hayan respondido todas las preguntas
            if (!p1 || !p2 || !p3 || !p4 || !p5) {
                resultadoDiv.textContent = "Por favor, respondé las 5 preguntas antes de comprobar.";
                resultadoDiv.className = "error";
                return;
            }

            let aciertos = 0;

            if (p1.value === respuestasCorrectas.p1) aciertos++;
            if (p2.value === respuestasCorrectas.p2) aciertos++;
            if (p3.value === respuestasCorrectas.p3) aciertos++;
            if (p4.value === respuestasCorrectas.p4) aciertos++;
            if (p5.value === respuestasCorrectas.p5) aciertos++;

            // Mostrar el resultado final según los aciertos
            if (aciertos === 5) {
                resultadoDiv.textContent = `¡Excelente! Obtuviste 5 de 5 respuestas correctas. ¡Conocés a la perfección la vida del Beato Ignacio Casanovas!`;
                resultadoDiv.className = "acierto";
            } else if (aciertos >= 3) {
                resultadoDiv.textContent = `¡Muy bien! Obtuviste ${aciertos} de 5 respuestas correctas. Revisá los detalles para lograr el puntaje perfecto.`;
                resultadoDiv.className = "acierto";
            } else {
                resultadoDiv.textContent = `Obtuviste ${aciertos} de 5 respuestas correctas. ¡Te invitamos a releer la biografía y la línea de tiempo para intentarlo de nuevo!`;
                resultadoDiv.className = "error";
            }
        });
    }
});