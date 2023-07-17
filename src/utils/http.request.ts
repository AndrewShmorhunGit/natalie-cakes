import { client } from "./http.client";

async function httpGetContents(): Promise<any> {
  return await client("contents");
}

export { httpGetContents };
