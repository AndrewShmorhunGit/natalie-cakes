const environment = process.env;
export const env = {
  port: environment.REACT_APP_PORT,
  git: {
    user: environment.REACT_APP_GIT_USER_NAME,
    email: environment.REACT_APP_GIT_USER_EMAIL,
    ssh: environment.REACT_APP_GIT_SSH,
  },
  api: {
    server: environment.REACT_APP_API_URL,
  },
};
