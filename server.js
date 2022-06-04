const express = require("express");
const path = require("path");

const app = express();

app.use("/public", express.static(path.resolve(__dirname, "src", "public")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {

    // Вывод информации.
    console.log("Server started successfully! \n")
    console.log("HOST: localhost:8080 \n")
    console.log("Ctrl + C - it`s stop server\n")

});
