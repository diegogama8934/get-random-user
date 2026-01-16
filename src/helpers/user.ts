import type { User } from "../interfaces/User";

export function getUserFullName(user: User) {
  return `${user.name.first} ${user.name.last}`;
}