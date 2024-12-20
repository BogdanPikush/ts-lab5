import { Article, Validator, ValidationResult } from '../models/content';

export const articleValidator: Validator<Article> = {
  validate(data: Article): ValidationResult {
    const errors: string[] = [];

    if (!data.title || data.title.trim().length === 0) {
      errors.push('Title is required.');
    }

    if (!data.content || data.content.trim().length < 10) {
      errors.push('Content must be at least 10 characters.');
    }

    if (!data.author || data.author.trim().length === 0) {
      errors.push('Author is required.');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
};