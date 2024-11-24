// content
export interface BaseContent {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  status: 'draft' | 'published' | 'archived';
}

export interface Article extends BaseContent {
  title: string;
  content: string;
  author: string;
}

export interface Product extends BaseContent {
  name: string;
  price: number;
  description: string;
}

// CRUD
export type ContentOperations<T extends BaseContent> = {
  create: (data: T) => T;
  update: (id: string, data: Partial<T>) => T;
  delete: (id: string) => boolean;
  getById: (id: string) => T | null;
};


// types for access control
export type Role = 'admin' | 'editor' | 'viewer';

export type Permission = {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
};

export type AccessControl<T extends BaseContent> = {
    role: Role;
    permissions: Permission;
    contentType: T;
};


// validation
export type ValidationResult = {
  isValid: boolean;
  errors?: string[];
};

export type Validator<T> = {
  validate: (data: T) => ValidationResult;
};

// type for versioning content
export type Versioned<T extends BaseContent> = T & {
  version: number;
  history: T[];
};