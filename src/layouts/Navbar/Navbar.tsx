import "./styles.scss";
import Button from "../../components/Button";
import { LogoSVG } from "../../assets/svgs";
import { GoogleIcon } from "../../assets/svgs";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const linkList = ["Today", "Planning", "Events"];
    return (
        <div className="Navbar">
            <LogoSVG size={36} />
            <ul className="Navbar__links">
                {linkList.map((item, ind) => (
                    <li
                        key={ind}
                        className={ind === active ? "active" : ""}
                        onClick={() => {
                            setActive(ind);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <Button theme="light" icon={<GoogleIcon size={24} />}>
                Sync with Google
            </Button>
        </div>
    );
};

export default Navbar;
