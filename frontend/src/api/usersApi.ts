import { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // mock API

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
