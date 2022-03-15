//Конфигурация скрипта
var min = 1, max = 5
var gender = 'женский'
var count = getRandomIntInclusive(min, max);




//Исходный код скрипта
if (gender == 'мужской') { var text = 'загадал' } else if (gender == 'женский') { var text = 'загадала' } else { var text = 'загадало' }
document.getElementById('message').innerHTML = `Я ${text} число от ${min} до ${max}, попробуй отгадать!`

btn.onclick = function () { 
    var input = document.getElementById('input').value
    if (count == input) {
        document.getElementById('message').innerHTML = `Я загадал ${count}, твой ответ ${input}.<br>
        <div class="text-success fw-bold">Ты угадал!</div>`
    } else {
        document.getElementById('message').innerHTML = `Я загадал ${count}, твой ответ ${input}.<br>
        <div class="text-danger fw-bold">Ты не угадал!</div>`
    }
    count = getRandomIntInclusive(min, max);
}








//Функция для рандомного вывода числа
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        }


