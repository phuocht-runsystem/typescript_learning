import { useUsers } from "../hooks/userUsers";
import { UserList } from "../components/users/UserList";

export function UsersPage() {
  const { users, loading, error } = useUsers();

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UserList users={users} />
    </div>
  );
}
