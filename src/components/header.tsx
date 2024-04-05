import nlwUniteIcon from "../assets/nlw-unite-icon.svg"
import { NavLink } from "./nav-link"
export function Header() {
    return (
        <div className="flex-items-center gap-2">
            <img src={nlwUniteIcon} />

            <nav className="flex items-center gap-5 py-5">
                <NavLink href="/evento">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
            </nav>
        </div>
    )
}
