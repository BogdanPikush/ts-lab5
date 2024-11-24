"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeValidator = void 0;
class CompositeValidator {
    constructor() {
        this.validators = {};
    }
    registerValidator(type, validator) {
        this.validators[type] = validator;
    }
    validate(type, data) {
        const validator = this.validators[type];
        if (!validator) {
            throw new Error(`No validator registered for type: ${type}`);
        }
        return validator.validate(data);
    }
}
exports.CompositeValidator = CompositeValidator;
