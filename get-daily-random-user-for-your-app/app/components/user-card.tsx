import Image from "next/image"
import type { User } from "@/app/type"

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={user.picture.large || "/placeholder.svg"}
            alt={`${user.name.first} ${user.name.last}`}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium capitalize">{user.gender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-medium">{user.dob.age}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="font-medium">{user.location.country}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">City</p>
            <p className="font-medium">{user.location.city}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="grid grid-cols-1 gap-2">
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium">{user.login.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

