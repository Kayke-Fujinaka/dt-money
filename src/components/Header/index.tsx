import logoImg from "../../assets/logo.svg"

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="icon dt money" />
            <button type="button">Nova Transação</button>
        </header>
    )
}