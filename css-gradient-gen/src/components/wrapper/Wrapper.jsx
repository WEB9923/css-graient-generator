import "./Wrapper.scss";
import {IoMdColorPalette} from "react-icons/io";
import Menu from "../menu/Menu.jsx";
import {useEffect, useState} from "react";


export default function Wrapper() {
    const [showMenu,setShowMenu] = useState(false);
    const [gradient,setGradient] = useState("");
    const [randomColor1,setRandomColor1] = useState("");
    const [randomColor2,setRandomColor2] = useState("");
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const generateGradient = () => {
        const str = "ABCDEF0123456789";
        let random1 = "#";
        let random2 = "#";
        for (let i = 0; i < 6; i += 1) {
            random1 += str[Math.floor(Math.random() * 16)];
            random2 += str[Math.floor(Math.random() * 16)];
        }
        let gradientStyle = `linear-gradient(to right, ${random1},${random2})`;
        setGradient(gradientStyle);
        setRandomColor1(random1);
        setRandomColor2(random2);
    }
    useEffect(() => {
        generateGradient();
    }, []);

    return (
        <>
            <div className={"wrapper"} style={{background:`${gradient}`}}>
                <div className={"btn"}>
                    <button
                        onClick={handleShowMenu}
                        className={`${showMenu && "active"}`}
                    >
                        <IoMdColorPalette size={35}/>
                    </button>
                </div>
                <Menu
                    showVariable={showMenu}
                    generate={generateGradient}
                    color1={randomColor1}
                    color2={randomColor2}
                />
            </div>
        </>
    )
}
