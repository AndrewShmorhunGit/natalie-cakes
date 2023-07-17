import { IContent } from "interfaces";
import { client } from "./http.client";

async function httpGetContents(): Promise<IContent> {
  return (await client("contents")).json();
}

export { httpGetContents };
