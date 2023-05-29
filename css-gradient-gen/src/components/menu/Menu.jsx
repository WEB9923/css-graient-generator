import "./Menu.scss";

export default function Menu({showVariable,generate,color1,color2}) {
    return (
        <>
            <div className={`${"menu"} ${showVariable && "showMenu"}`}>
                <h2>random gradient generator</h2>
                <div className={"generator"}>
                    <div className={"colors"}>
                        <div>
                            <div className={"color"} style={{backgroundColor:`${color1}`}}></div>
                            <p>{color1}</p>
                        </div>
                        <div>
                            <div className={"color"} style={{backgroundColor:`${color2}`}}></div>
                            <p>{color2}</p>
                        </div>
                    </div>
                    <button
                        onClick={generate}
                    >
                        generate
                    </button>
                </div>
            </div>
        </>
    )
}
