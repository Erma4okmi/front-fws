// Импортируем домашнуюю страницу.
import Dashboard from "./pages/home.js";

// Импортируем страницу настроек.
import Settings from "./pages/settings.js";

// Импортируем страницу профиля
import Profile from "./pages/profile.js";

// Разбиваем путь.
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// Получаем парамертры.
const getParams = match => {

    // Получаем значения.
    const values = match.result.slice(1);
    
    // Получаем ключи.
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // Возвращаем объекты
    return Object.fromEntries(keys.map((key, i) => {
            
        // Вернуть массив ключ + значение.
        return [key, values[i]];
    }));
};

// Навигация.
const navigateTo = url => {
    
    // Получаем историю пушей.
    history.pushState(null, null, url);
    
    // Запускаем роутер
    router();
};

// Модель роутера.
const router = async () => {
    
    // модель маршрутов.
    const routes = [
        
        // Главная страница.
        { path: "/", view: Dashboard },
        
        // Страница настроек.
        { path: "/settings", view: Settings },
        
        // Страница пользователя.
        { path: "/id:id", view: Profile }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {

        // Вернуть.
        return {

            // Маршрут
            route: route,

            // Результат pathname.
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    // Поиск.
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    // Проверяем маршрут.
    if (!match) {

        // Маршрут.
        match = {

            // Маршрут 0
            route: routes[0],

            // Результат pathname.
            result: [location.pathname]
        };
    }

    // Кидаем параметры в view
    const view = new match.route.view(getParams(match));

    // Вставляем в app html страницы.
    document.querySelector("#app").innerHTML = await view.getHtml();
};

// Слушаем события.
window.addEventListener("popstate", router);

// Слушаем события DOM.
document.addEventListener("DOMContentLoaded", () => {

    // Слушаем события кликов.
    document.body.addEventListener("click", e => {

        // Проверяем на наличие data-link.
        if (e.target.matches("[data-link]")) {

            // Кидаем пустое событие.
            e.preventDefault();

            // Добавляем маршрут href в URL
            navigateTo(e.target.href);
        }
    });

    // Запускаем роутер.
    router();
});
