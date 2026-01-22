# React Todo List / React Список задач

## 🇷🇺 Русский

### Описание

Приложение для управления списком задач (To-Do List), созданное на React и Vite. Приложение позволяет пользователям добавлять, редактировать и удалять задачи.

### Возможности

- ✅ Добавление новых задач
- ✏️ Редактирование существующих задач
- ❌ Удаление задач
- 📱 Адаптивный дизайн

### Структура проекта

```
reactjs-todolist/
├── src/
│   ├── App.jsx           # Главный компонент приложения
│   ├── ToDoList.jsx      # Компонент списка задач
│   ├── ToDoCard.jsx      # Компонент отдельной задачи
│   ├── ToDoInput.jsx     # Компонент поля ввода новой задачи
│   ├── main.jsx          # Точка входа приложения
│   └── index.css         # Стили
├── package.json          # Зависимости проекта
└── vite.config.js        # Конфиг Vite
```

### Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone <repository-url>
cd reactjs-todolist
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение в режиме разработки:

```bash
npm run dev
```

4. Откройте браузер и перейдите на `http://localhost:5173`

### Команды

- `npm run dev` - запустить приложение в режиме разработки
- `npm run build` - собрать проект для продакшена
- `npm run lint` - проверить код с ESLint
- `npm run preview` - предпросмотр собранного проекта

### Технологии

- **React 19.2.0** - библиотека для создания пользовательских интерфейсов
- **Vite 7.2.4** - быстрый сборщик модулей
- **ESLint** - инструмент для проверки качества кода
- **localStorage** - для сохранения данных в браузере

---

## 🇬🇧 English

### Description

A to-do list management application built with React and Vite. The app allows users to add, edit, and delete tasks.

### Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks

- 📱 Responsive design

### Project Structure

```
reactjs-todolist/
├── src/
│   ├── App.jsx           # Main application component
│   ├── ToDoList.jsx      # Task list component
│   ├── ToDoCard.jsx      # Individual task component
│   ├── ToDoInput.jsx     # New task input component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Styles
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

### Installation and Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd reactjs-todolist
```

2. Install dependencies:

```bash
npm install
```

3. Run the application in development mode:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Commands

- `npm run dev` - start the app in development mode
- `npm run build` - build the project for production
- `npm run lint` - check code with ESLint
- `npm run preview` - preview the built project

### Technologies

- **React 19.2.0** - library for building user interfaces
- **Vite 7.2.4** - next generation frontend tooling
- **ESLint** - code quality checking tool
- **localStorage** - for saving data in the browser
