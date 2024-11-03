// Пример загрузки данных через админ панель
const telegramLink = 'https://t.me/your_channel'; // Ссылка на Telegram
document.getElementById('telegram-button').href = telegramLink;

// Пример добавления курсов
const courses = [
    { title: 'Курс по дизайну', preview: 'preview1.jpg', buyLink: 'https://example.com/buy1', program: 'Программа курса...' },
    { title: 'Курс по программированию', preview: 'preview2.jpg', buyLink: 'https://example.com/buy2', program: 'Программа курса...' },
];

const courseList = document.getElementById('course-list');
courses.forEach(course => {
    const courseDiv = document.createElement('div');
    courseDiv.innerHTML = 
        <h2>${course.title}</h2>
        <a href="${course.buyLink}" class="button">Купить</a>
        <button onclick="showProgram('${course.program}')" class="button">Программа обучения</button>
    ;
    courseList.appendChild(courseDiv);
});

// Функция для показа программы курса
function showProgram(program) {
    alert(program); // Замените на всплывающее окно
}

