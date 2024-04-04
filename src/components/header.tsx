import nlwUniteIcon from "../assets/nlw-unite-icon.svg"
export function Header() {
    return (
        <div className="flex-items-center gap-5">
            <img src={nlwUniteIcon} />

            <nav className="flex items-center gap-5 py-2">
                <a href='' className="font-mediumtext-sm text-zinc-300">Eventos</a>
                <a href='' className="font-mediumtext-sm">Participantes</a>
            </nav>
        </div>
    )
}
