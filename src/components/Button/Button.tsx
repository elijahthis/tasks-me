import "./styles.scss";

interface ButtonProps {
    children: JSX.Element | string;
    theme: string;
    icon?: JSX.Element;
    variant?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    theme,
    icon,
    variant,
    onClick,
}: ButtonProps): JSX.Element => {
    const ButtonStyles = `Button ${
        theme === "light" ? "Button--light" : "Button--dark"
    } ${variant==='full'? 'Button--full': ''}`;
    return (
        <button className={ButtonStyles} onClick={onClick}>
            <>
                {icon && icon}
                {children}
            </>
        </button>
    );
};

export default Button;
