"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidator = void 0;
exports.productValidator = {
    validate(data) {
        const errors = [];
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
