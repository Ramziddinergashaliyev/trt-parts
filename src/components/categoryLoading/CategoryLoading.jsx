import React from "react";
import "./categoryLoading.scss";

const CategoryLoading = () => {
    return (
        <div className="categoryLoading">
            <div className="categoryLoading__wrapper">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className="categoryLoading__item" key={index}>
                        <div className="categoryLoading__img bg__animation"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryLoading;