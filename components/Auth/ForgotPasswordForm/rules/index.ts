export interface IRules {
  email: Record<string, string | boolean>[];
  password: Record<string, string | boolean>[];
  confirmPassword: Record<string, string | boolean>[];
}

export { rules } from './rules';
