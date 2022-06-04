// Подключаем основу.
import AbstractView from "./AbstractView.js";

// Стандартный класс унаследован от основы.
export default class extends AbstractView {

    // Конструктор с параметрами.
    constructor(params) {

        // Кидаем в родительский класс.
        super(params);

        // Меняем Title.
        this.setTitle("Dashboard");
    }

    // Выводим html.
    async getHtml() {
        return `
            <h1>Добро пожаловать!</h1>
            <p>
                SPA 
            </p>
            <p>
                <a href="/id1" data-link>Миша</a>
                <a href="/id2" data-link>Артём</a>
            </p>
        `;
    }
}
