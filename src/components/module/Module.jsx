import React from "react";
import "./module.scss";
import { IoMdClose } from "react-icons/io";

function Module({ children, width, close, bg }) {
    return (
        <>
            <div
                style={{ backgroundColor: bg }}
                onClick={() => close(false)}
                className="overlay"
            ></div>

            <div style={{ width }} className="model">
                <button onClick={() => close(false)} className="model__btn">
                    <IoMdClose />
                </button>
                {children}
            </div>
        </>
    );
}

export default Module;