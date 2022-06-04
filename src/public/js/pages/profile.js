import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Профиль");
    }

    async getHtml() {
        return `
            <h1>Профиль</h1>
            <p>Ты видишь страницу пользователя с id  ${this.postId}.</p>
        `;
    }
}
