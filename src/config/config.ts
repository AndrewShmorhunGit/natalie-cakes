const env = process.env;
export const config = {
  git: {
    user: env.GIT_USER_NAME,
    email: env.GIT_USER_EMAIL,
    ssh: env.GIT_SSH,
  },
};
