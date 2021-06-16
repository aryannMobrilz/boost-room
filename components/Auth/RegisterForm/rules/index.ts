export interface IRules {
  firstName: Record<string, string | boolean>[];
  lastName: Record<string, string | boolean>[];
  username: Record<string, string | boolean>[];
  email: Record<string, any>[];
  password: Record<string, any>[];
  confirmPassword: Record<string, string | boolean>[];
}

export { rules } from './rules';
