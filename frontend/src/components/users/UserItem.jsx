import { User } from "../../types/user";

interface Props {
  user: User;
}

export function UserItem({ user }: Props) {
  return (
    <li className="p-4 border-b hover:bg-gray-50 transition">
      <p className="font-semibold">{user.name}</p>
      <p className="text-sm text-gray-600">{user.email}</p>
    </li>
  );
}
