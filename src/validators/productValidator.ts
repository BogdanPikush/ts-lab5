import { Product, Validator, ValidationResult } from '../models/content';

export const productValidator: Validator<Product> = {
  validate(data: Product): ValidationResult {
    const errors: string[] = [];

    if (!data.name || data.name.trim().length === 0) {
      errors.push('Name is required.');
    }

    if (data.price === undefined || data.price < 0) {
      errors.push('Price must be a positive number.');
    }

    if (!data.description || data.description.trim().length < 5) {
      errors.push('Description must be at least 5 characters.');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
};