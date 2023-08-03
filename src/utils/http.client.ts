import { env } from "config/env.config";

async function client(endpoint: string, customConfig = {}): Promise<Response> {
  const config = {
    method: "GET",
    "Content-Type": "application/json",
    ...customConfig,
  };

  const response = await window.fetch(env.api.server + endpoint, config);
  const data = response;
  if (response.ok) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
}

export { client };
