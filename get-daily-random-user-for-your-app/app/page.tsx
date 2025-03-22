import { promises as fs } from "fs"
import path from "path"
import type { User } from "@/app/type"
import UserCard from "./components/user-card"

export default async function Home() {
  // Get all user data from JSON files
  const userData = await getAllUserData()

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">FAKE USERS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </main>
  )
}

async function getAllUserData(): Promise<User[]> {
  const dataDirectory = path.join(process.cwd(), "data")

  try {
    // Read all files in the data directory
    const fileNames = await fs.readdir(dataDirectory)

    // Filter only JSON files that start with "user-"
    const userFileNames = fileNames.filter((fileName) => fileName.startsWith("user-") && fileName.endsWith(".json"))

    // Read and parse each file
    const allUserData = await Promise.all(
      userFileNames.map(async (fileName) => {
        const filePath = path.join(dataDirectory, fileName)
        const fileContent = await fs.readFile(filePath, "utf8")
        const userData = JSON.parse(fileContent)
        console.log({userData});

        // Extract the first user from the results array
        return userData
      }),
    )

    return allUserData
  } catch (error) {
    console.error("Error reading user data:", error)
    return []
  }
}

