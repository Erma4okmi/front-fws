// Подключаем основу.
import AbstractView from "./AbstractView.js";

// Стандартный класс унаследован от основы.
export default class extends AbstractView {

    // Конструктор с параметрами.
    constructor(params) {

        // Кидаем в рожительсикй класс.
        super(params);

        // Меняем Title.
        this.setTitle("Settings");
    }
    
    // Выводим html.
    async getHtml() {
        return `
            <h1>Настройки</h1>
            <p>Страница настроек.</p>
        `;
    }
}
