let isHidden = true;
let text = 'Mostrar';
const timeTag = document.querySelector('#time');
const btnTag = document.querySelector('#text');

btnTag.onclick = () => {
    console.log('AQUI')
    if (text === 'Mostrar') {
        text = 'Esconder';
        timeTag.style.display = 'block';
    } else {
        text = 'Mostrar';
        timeTag.style.display = 'none';
    }
    btnTag.textContent = text;
}

function updateCountdown() {
    const targetDate = new Date("2023-08-03");
    const now = new Date();

    // Calcula a diferença entre a data atual e a data alvo em milissegundos
    const diffInMilliseconds = targetDate - now;

    // Calcula a diferença em horas, minutos e segundos
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInMinutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const diffInSeconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

    // Formatação para garantir que sempre tenhamos dois dígitos em cada valor
    const hoursFormatted = String(diffInHours).padStart(2, '0');
    const minutesFormatted = String(diffInMinutes).padStart(2, '0');
    const secondsFormatted = String(diffInSeconds).padStart(2, '0');

    // Atualiza o conteúdo da tag <p> com o ID "text" com a contagem regressiva
    document.getElementById("time").innerText = hoursFormatted + ":" + minutesFormatted + ":" + secondsFormatted;

    // Chama a função novamente após 1 segundo (1000 milissegundos)
    setTimeout(updateCountdown, 1000);
}

// Inicia a contagem regressiva
updateCountdown();