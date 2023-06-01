import "./Menu.scss";

// eslint-disable-next-line react/prop-types
export default function Menu({showVariable, generate, color1, color2, detectSelectedVal, selectedVal}) {
    return (
        <>
            <div className={`${"menu"} ${showVariable && "showMenu"}`}>
                <h2>random gradient generator</h2>
                <div className={"generator"}>
                    <div className={"colors"}>
                        <div>
                            <div className={"color"} style={{backgroundColor: `${color1}`}}/>
                            <p>{color1}</p>
                        </div>
                        <div>
                            <div className={"color"} style={{backgroundColor: `${color2}`}}/>
                            <p>{color2}</p>
                        </div>
                    </div>
                    <div className={"select"}>
                        <select
                            onChange={detectSelectedVal}
                            value={selectedVal}
                        >
                            <option value="select gradient position" selected={true} disabled={true}>
                                select gradient position
                            </option>
                            <option value="right">right</option>
                            <option value="left">left</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                        </select>
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
