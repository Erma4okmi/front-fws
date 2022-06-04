// Дефолтный класс.
export default class {

    // Конструктор.
    constructor(params) {

        // Получаем параметры.
        this.params = params;
    }

    // Меняем название страницы.
    setTitle(title) {

        // Меняем title.
        document.title = title;
    }

    // Получаем html.
    async getHtml() {

        // Вернуть.
        return "";
    }
}
