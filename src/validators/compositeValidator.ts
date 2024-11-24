import { Validator, ValidationResult, BaseContent } from '../models/content';

type ValidatorsMap = {
  [key: string]: Validator<any>; 
};

export class CompositeValidator {
  private validators: ValidatorsMap = {};

  registerValidator<T extends BaseContent>(type: string, validator: Validator<T>): void {
    this.validators[type] = validator as Validator<any>; 
  }

  validate<T extends BaseContent>(type: string, data: T): ValidationResult {
    const validator = this.validators[type];
    if (!validator) {
      throw new Error(`No validator registered for type: ${type}`);
    }
    return validator.validate(data);
  }
}