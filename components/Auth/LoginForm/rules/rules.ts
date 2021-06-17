export const rules = {
  username: [{ required: true, message: 'Username is required!' }],
  email: [
    { required: true, message: 'Email is required!' },
    { type: 'email', message: 'Email a valid email address!' }
  ],
  password: [{ required: true, message: 'Password is required!' }]
};
