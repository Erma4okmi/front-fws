// Подключаем express.
const express = require("express");

// Подключаем пути.
const path = require("path");

// Создаём модель функции.
const app = express();

// Подключение файлов.
app.use("/public", express.static(path.resolve(__dirname, "public")));

// Направить все маршруты на index.html
app.get("/*", (req, res) => {

    // Вывести index.html
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Слушаем порт 8080.
app.listen(process.env.PORT || 8080, () => {

    // Вывод информации.
    console.log("Server started successfully! \n")
    console.log("HOST: localhost:8080 \n")
    console.log("Ctrl + C - it`s stop server\n")

});