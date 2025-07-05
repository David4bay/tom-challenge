

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer>
            <a href="https://github.com/david4bay/tom-challenge">&copy; {year} Davidbay project.</a>
        </footer>
    )
}