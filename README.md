# Front-FWS - Frontend FrameWork Studentosi 

Front-FWS - Это JavaScript Framework для Front части сайта Studentosi.com. Основная технология - это SPA (Single Page Application). Данный фреймворк разрабатывался под клиентскую часть сайт STUDENTOSI.COM, Основные модули Node.JS + Express среда сборки Webpack + uglifyjs.

Front-FWS имеет два вида запуска и один вид сборки.

Когда ты выполняешь `npm run start:dev`, Node.JS Запускает сервер в режиме разработки. 

Когда ты выполняешь `npm run start:prod`, Node.JS Запускает собранную версию сервера. 

Когда ты выполняешь `npm run build:prod`, Первым делом происходит сборка клиента и выходит минифицированный файл JS, далее происходит сборка сервера. 

Чтобы сборка вступила в силу, требуется закоментить строчку в index.html и добавить новый собранный js, после этого произведите запуск `npm run start:prod`

## Установка & Использование

    git clone https://github.com/Erma4okmi/front-fws
    cd front-fws
    npm install
    
    npm run start:dev        // for development
        // OR
    npm run build:prod
                             // for production 
    npm start                // navigate to localhost:8080 for local dev

## Security

Пожалуйста, убедитесь, что ваша версия Node и NPM обновлена, и запустите `npm audit` после установки, чтобы убедиться в отсутствии уязвимостей. Если это так, следуйте инструкциям аудита по их устранению.
