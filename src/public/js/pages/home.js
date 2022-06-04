import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

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