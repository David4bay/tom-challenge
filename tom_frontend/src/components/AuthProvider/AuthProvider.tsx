/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface AuthProviderProp {
    children: ReactNode
}

interface User {
    id: string
    username: string
    key: string
}

interface UserContextType {
    user: User | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export default function AuthProvider({ children }: AuthProviderProp) {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const storedUser: any = localStorage.getItem("user")

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser)
                setUser(parsedUser)
            } catch(error: unknown) {
                console.error("Error getting user from localStorage:", error)
                localStorage.removeItem("user")
            }
        }
    }, [])

    const userValue: UserContextType = { user }

    return (
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}