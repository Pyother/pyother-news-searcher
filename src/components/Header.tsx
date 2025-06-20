// * React:
import { React } from 'react';

type HeaderProps = {
    toggleTheme?: () => void
};

const Header = ({ toggleTheme }: HeaderProps) => {
    return (
        <div className="w-full p-[var(--spacing)]">
            Header
            <button
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default Header;