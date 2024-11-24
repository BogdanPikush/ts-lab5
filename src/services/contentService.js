"use strict";
// import { BaseContent, ContentOperations } from '../models/content';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
class ContentService {
    constructor(validator) {
        this.items = [];
        this.validator = validator;
    }
    create(item) {
        if (this.validator) {
            const validationResult = this.validator.validate(item);
            if (!validationResult.isValid) {
                console.error('Validation errors:', validationResult.errors);
                return;
            }
        }
        this.items.push(item);
        console.log('Item added:', item);
    }
    getById(id) {
        return this.items.find((item) => item.id === id);
    }
    getAll() {
        return this.items;
    }
}
exports.ContentService = ContentService;
