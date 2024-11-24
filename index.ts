import { ContentService } from './src/services/contentService';
import { CompositeValidator } from './src/validators/compositeValidator';
import { articleValidator } from './src/validators/articleValidator';
import { Article } from './src/models/content';

// configuring the validator
const compositeValidator = new CompositeValidator();
compositeValidator.registerValidator<Article>('article', articleValidator);

const articleService = new ContentService<Article>(articleValidator);

// crate article
const newArticle: Article = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'draft',
  title: 'First Article',
  content: 'This is the content of the article.',
  author: 'John Doe',
};

articleService.create(newArticle);

// check erros
const invalidArticle: Article = {
  id: '2',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'draft',
  title: '', 
  content: 'Short', 
  author: '',
};

articleService.create(invalidArticle);

// get article by id
const fetchedArticle = articleService.getById('1');
console.log('Fetched Article:', fetchedArticle);

// view all articles
console.log('All Articles:', articleService.getAll());