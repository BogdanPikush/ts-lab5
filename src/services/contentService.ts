import { BaseContent, Validator, ValidationResult } from '../models/content';

export class ContentService<T extends BaseContent> {
  private storage: Map<string, T> = new Map();
  private validator?: Validator<T>;

  constructor(validator?: Validator<T>) {
    this.validator = validator;
  }

  // create operation with validation
  create(item: T): T | null {
    if (this.validator) {
      const validationResult: ValidationResult = this.validator.validate(item);
      if (!validationResult.isValid) {
        console.error('Validation errors:', validationResult.errors);
        return null;
      }
    }
    this.storage.set(item.id, item);
    console.log('Item created:', item);
    return item;
  }

  // update operation with partial data
  update(id: string, data: Partial<T>): T | null {
    const existing = this.storage.get(id);
    if (!existing) {
      console.error(`Content with id ${id} not found`);
      return null;
    }

    const updated: T = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    } as T;

    if (this.validator) {
      const validationResult: ValidationResult = this.validator.validate(updated);
      if (!validationResult.isValid) {
        console.error('Validation errors:', validationResult.errors);
        return null;
      }
    }

    this.storage.set(id, updated);
    console.log('Item updated:', updated);
    return updated;
  }

  // delete operation
  delete(id: string): boolean {
    if (!this.storage.has(id)) {
      console.error(`Content with id ${id} not found`);
      return false;
    }
    this.storage.delete(id);
    console.log(`Item with id ${id} deleted`);
    return true;
  }

  // retrieve by ID
  getById(id: string): T | null {
    return this.storage.get(id) || null;
  }

  // retrieve all items
  getAll(): T[] {
    return Array.from(this.storage.values());
  }
}