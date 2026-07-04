const Footer = () => {
    return (
        <footer className="bg-surface text-text-secondary w-full py-6 px-6 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} TWST Team Builder — feito por Victor Rodrigues
            </p>
        </footer>
    )
}

export default Footer;