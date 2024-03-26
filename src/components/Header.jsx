import LogoImage from "../assets/investment-calculator-logo.png"
export default function Header() {
    return (
        <header id="header">
            <img src={LogoImage} alt="logo with money bag" />
            <h1>Investment Calculator</h1>
        </header>
    )
}
