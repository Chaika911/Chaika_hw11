import React, { useContext } from "react";
import { MyContext } from "../MyContext/MyContext";

const Context2 = () => {
    const context = useContext(MyContext);
    // console.log(color);



    return(
        <div>
            Context2 {context}

        </div>
    )
}

export default Context2;