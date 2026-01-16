import type { SuccessUserResponse } from "../interfaces/User";

export async function getRandomUser(): Promise<[SuccessUserResponse["results"][0], string]> {

  const res: SuccessUserResponse | Error = await fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .catch((err) => new Error(err));

  if (res instanceof Error) {
    return [{} as SuccessUserResponse["results"][0], res.message];
  }

  return [res.results[0], ""];

}

