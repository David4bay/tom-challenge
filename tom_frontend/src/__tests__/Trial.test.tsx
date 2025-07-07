import { render, screen } from "@testing-library/react"

function App() {
    return (
    <>
        <h1>Hello Test!</h1>
    </>)
}

test("renders this test App component", () => {
    render(<App />)
    expect(screen.getByText(/Hello Test!/i)).toBeInTheDocument()
})