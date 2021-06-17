export interface IRules {
  username: Record<string, string | boolean>[];
  email: Record<string, any>[];
  password: Record<string, string | boolean>[];
}

export { rules } from './rules';
