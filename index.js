"use strict";
// import { ContentService } from './src/services/contentService';
// import { Article } from './src/models/content';
Object.defineProperty(exports, "__esModule", { value: true });
// const articleService = new ContentService<Article>();
// const newArticle: Article = {
//     id: '1',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     status: 'draft',
//     title: 'First Article',
//     content: 'This is the content of the article.',
//     author: 'John Doe'
// };
// // add article
// articleService.create(newArticle);
// // get id of article
// const fetchedArticle = articleService.getById('1');
// console.log('Fetched Article:', fetchedArticle);
const contentService_1 = require("./src/services/contentService");
const compositeValidator_1 = require("./src/validators/compositeValidator");
const articleValidator_1 = require("./src/validators/articleValidator");
// Налаштовуємо валідатор
const compositeValidator = new compositeValidator_1.CompositeValidator();
compositeValidator.registerValidator('article', articleValidator_1.articleValidator);
// Створюємо сервіс із валідатором
const articleService = new contentService_1.ContentService(articleValidator_1.articleValidator);
const newArticle = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: 'First Article',
    content: 'This is the content of the article.',
    author: 'John Doe',
};
// Спроба створення нового контенту
articleService.create(newArticle);
// Перевірка роботи з помилковими даними
const invalidArticle = {
    id: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: '', // Помилка: Title не заповнений
    content: 'Short', // Помилка: Content занадто короткий
    author: '', // Помилка: Author не заповнений
};
articleService.create(invalidArticle);
// Отримуємо статтю за ID
const fetchedArticle = articleService.getById('1');
console.log('Fetched Article:', fetchedArticle);
// Перегляд усіх статей
console.log('All Articles:', articleService.getAll());
