import { User } from "../../types/user";
import { UserItem } from "./UserItem";

interface Props {
  users: User[];
}

export function UserList({ users }: Props) {
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <ul className="divide-y divide-gray-200 rounded-lg shadow">
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </ul>
  );
}
