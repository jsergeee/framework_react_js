### 1. Удаление старых проектов

Если вы хотите начать заново, давайте сначала убедимся, что вы создаете новый проект, чистый от старых ошибок:

``bash
cd ~/myDocuments/framework_react_js/
rm -rf new-app # Удаляем старый проект


### 2. Создание нового проекта

Создайте новый проект с помощью create-react-app:
bash
npx create-react-app new-app
cd new-app

### 3. Установка react-router-dom

Теперь установите react-router-dom:
bash
npm install react-router-dom

Убедитесь, что в процессе установки нет ошибок. Если установка завершится успешно, выполните:

### 4. Проверка установленного пакета

Проверьте, установлен ли react-router-dom:
bash
npm list react-router-dom

Вы должны увидеть, что он установлен.

### 5. Настройка приложения

Теперь настройте маршрутизацию. Откройте файл src/App.js и обновите его, как показано ниже:

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Убедитесь, что вы создаете эти файлы.
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;


### 6. Создайте компоненты HomePage и AboutPage

Создайте папку components и добавьте в нее два файла.

#### HomePage.js:

// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <h1>Главная страница</h1>
  );
};

export default HomePage;


#### AboutPage.js:

// src/components/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <h1>О нас</h1>
  );
};

export default AboutPage;


### 7. Запуск приложения

Теперь запустите приложение:
bash
npm start

### 8. Отладка уязвимостей

Если устрашающие сообщения о уязвимостях все еще появляются, попробуйте выполнить:
bash
npm audit fix

И, если требуется:
bash
npm audit fix --force
``

### Заключение

Эти шаги должны помочь вам создать новое приложение без старых ошибок и с корректными зависимостями. Если после выполнения всех этих шагов проблема по-прежнему сохраняется, и вы видите новые сообщения об ошибках, пожалуйста, поделитесь ими, и я помогу вам дальше!

