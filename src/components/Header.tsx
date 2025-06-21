// * React:
import { React } from 'react';

// * UI:
import { GoMoon, GoSun } from "react-icons/go";

type HeaderProps = {
    theme: string,
    toggleTheme?: () => void
};

const Header = ({ theme, toggleTheme }: HeaderProps) => {
    return (
        <div className="flex flex-row space-x-1 items-center container">
            <p>Header</p>
            <button
                className="icon-button"
                onClick={toggleTheme}
            >
                { theme === 'dark' ? <GoSun /> : <GoMoon /> }
            </button>
        </div>
    )
}

export default Header;