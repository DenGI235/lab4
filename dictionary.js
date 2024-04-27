// Хеш-таблиця для зберігання слів і їхніх значень
const dictionary = {
    "Приклад": "демонстрація того, як щось робиться або як щось працює",
    "Комп'ютер": "електронний пристрій, який обробляє дані, згідно з набором інструкцій",
    "Книга": "набір друкованих сторінок, зшитих разом і захищених обкладинкою",
    "Словник": "книга або електронний ресурс, який перераховує слова мови зазвичай у алфавітному порядку"
};

function searchWord() {
    const input = document.getElementById('wordInput');
    const word = input.value.trim();
    const resultDiv = document.getElementById('result');

    if (!word) {
        resultDiv.textContent = 'Будь ласка, введіть слово для пошуку.';
        return;
    }

    if (!isNaN(word)) {
        resultDiv.textContent = 'Будь ласка, введіть слова, а не цифри.';
        return;
    }

    const definition = dictionary[word];
    if (definition) {
        resultDiv.textContent = `Значення: ${definition}`;
    } else {
        resultDiv.textContent = 'Слово не знайдено.';
    }

    input.value = ''; // Очищення поля введення після пошуку
}
