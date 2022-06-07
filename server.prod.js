// Подключаем express.
const express = require("express");

// Подключаем пути.
const path = require("path");

// Создаём модель функции.
const app = express();

// Порт сервера.
const port = 80

// Подключение файлов.
app.use("/public", express.static(path.resolve(__dirname, "public")));

// Направить все маршруты на index.html
app.get("/*", (req, res) => {

    // Вывести index.html
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Слушаем порт.
app.listen(process.env.PORT || port, () => {

    // Выводим инфу.
    console.log("[Server:dev started successfully] - https://localhost/")
    console.log("[Server:dev started successfully] - Ctrl + C - it`s server stop")

});