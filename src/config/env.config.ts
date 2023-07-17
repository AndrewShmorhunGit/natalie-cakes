const env = process.env;
export const config = {
  git: {
    user: env.REACT_APP_GIT_USER_NAME,
    email: env.REACT_APP_GIT_USER_EMAIL,
    ssh: env.REACT_APP_GIT_SSH,
  },
};
