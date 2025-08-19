import { useState, useEffect } from "react"
import { User } from "../../types/user"

interface Props {
  initialData?: Omit<User, "id">
  onSubmit: (data: Omit<User, "id">) => void
}

export default function UserForm({ initialData, onSubmit }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email })
    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Save
      </button>
    </form>
  )
}
