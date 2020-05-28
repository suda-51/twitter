import React from "react";
import Aux from  "../../hoc/AUX";

const layout = (props)=>(
    <Aux>
        <div>
            Toolbar,SideDrawer,Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;