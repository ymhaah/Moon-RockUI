import Button from "./uiComponents/Button";

function Header(prop) {
    return (
        <header className="main-header">
            <div className="header__Logo">
                <a href="./index.html" className="focus">
                    <span className="visually-hidden"> my logo </span>
                </a>
            </div>
        </header>
    );
}

export default Header;
