import { IInnerContent } from "interfaces";
import { client } from "./http.client";

async function httpGetContents(lang: string): Promise<IInnerContent> {
  return (await client(`contents/language=${lang}`)).json();
}

export { httpGetContents };
