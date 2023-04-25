import React, { useContext } from "react";
import { MyContext } from "../MyContext/MyContext";
import Context2 from "../Context2/Context2";

const Context = () => {
    // const {color, setState} = useContext(MyContext);
    // return(
    //     <>
    //         <h4>value: {color}</h4>

    //         <Context2 />
    //     </>
    // )

    return(
        <div>
            <MyContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <h2>color {value}</h2>
                            <Context2 />
                        </>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default Context;