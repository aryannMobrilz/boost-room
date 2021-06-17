export const rules = {
  firstName: [{ required: true, message: 'First name is required!' }],
  lastName: [{ required: true, message: 'Last name is required!' }],
  username: [{ required: true, message: 'Username is required!' }],
  email: [
    { required: true, message: 'Email is required!' },
    { type: 'email', message: 'Email a valid email address!' }
  ],
  password: [
    {
      required: true,
      message: 'Password is required!'
    },
    {
      min: 6,
      message: 'Password must be at least 6 characters long!'
    },
    {
      pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,100}$/,
      message: 'Password must contain letters and numbers!'
    }
  ],
  confirmPassword: [{ required: true, message: 'Password is required!' }]
};
