// Подключаем основу.
import AbstractView from "./AbstractView.js";

// Стандартный класс унаследован от основы.
export default class extends AbstractView {

    // Конструктор с параметрами.
    constructor(params) {

        // Кидаем в рожительсикй класс.
        super(params);

        // Получаем параметры.
        this.postId = params.id;

        // Меняем Title.
        this.setTitle("Профиль");
    }

    // Выводим html.
    async getHtml() {
        return `
            <h1>Профиль</h1>
            <p>Ты видишь страницу пользователя с id  ${this.postId}.</p>
        `;
    }
}

