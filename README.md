# Front-FWS - Frontend FrameWork Studentosi 

Front-FWS - Это JavaScript Framework для Front части сайта Studentosi.com. Основная технология - это SPA (Single Page Application) 

Front-FWS имеет несколько видов сборки и запуска.

Когда ты выполняешь `npm run start:dev`, Node.JS Запускает сервер и проект выпускается в режиме разработки. 

Когда ты выполняешь `npm run start:prod`, Node.JS Запускает собранную версию сервера. 

Когда ты выполняешь `npm run build:cli`, Webpack запускает сборку клиентской части. 

Когда ты выполняешь `npm run build:srv`, Webpack запускает сборку серверной части. 

Когда ты выполняешь `npm run build:all`, Первым делом происходит сборка клиента и выходит минифицированный файл JS, далее происходит сборка сервера. 

Когда ты выполняешь `npm run build:prod`, Первым делом происходит сборка клиента и выходит минифицированный файл JS, далее происходит сборка сервера, после заверщения всех операци, происходит запуск сервера. 

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
