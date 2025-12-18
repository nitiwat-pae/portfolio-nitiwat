export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-secondary text-center text-muted-foreground text-sm">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                <p className="mt-2 text-xs opacity-60">Designed & Built with Next.js and Tailwind CSS</p>
            </div>
        </footer>
    );
}
