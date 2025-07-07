/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useAuth } from "../AuthProvider/AuthProvider"

interface User {
    name: string
}

export default function UserCard() {

    const auth = useAuth()

    const username = auth.user as unknown as User

    if (!username) return ""

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", padding: "16px" }}>
            <p data-testid="welcome">Welcome, {username.name || ""}</p>
        </div>
    )
}