export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
            <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <a href="/" className="font-bold tracking-tight">carlos.dev</a>
                <div className="flex items-center gap-6 text-sm">
                    <a href="/" className="hover:text-violet-400">Início</a>
                    <a href="/projects" className="hover:text-violet-400">Projetos</a>
                    <a href="/timeline" className="hover:text-violet-400">Timeline</a>
                    <a href="/contact" className="hover:text-violet-400">Contato</a>
                    <a href="/shop" className="hover:text-violet-400">Shop</a>
                </div>
            </nav>
        </header>
    );
}
