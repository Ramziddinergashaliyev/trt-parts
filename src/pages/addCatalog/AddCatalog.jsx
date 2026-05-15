import React, { useState } from "react";
import "./addCatalog.scss";
import FilterCatalog from "../../components/filterCatalog/FilterCatalog";
import Module from "../../components/module/Module";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useCreateCatalogMutation } from "../../context/api/catalogApi";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
    trtNo: "",
    ctrNo: "",
    lemforderNo: "",
    englishName: "",
    russianName: "",
    contents: "",
    weightPerPcKg: "",
    startOfSales: "",
};

const AddCatalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoFile, setPhotoFile] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const [oemList, setOemList] = useState([]);
    const [oemInput, setOemInput] = useState("");
    const [carNameList, setCarNameList] = useState([]);
    const [carNameInput, setCarNameInput] = useState("");
    const [modelList, setModelList] = useState([]);
    const [modelInput, setModelInput] = useState("");
    const [yearsList, setYearsList] = useState([]);
    const [yearsInput, setYearsInput] = useState("");

    const [CreateCatalog, { isLoading }] = useCreateCatalogMutation();
    const { formData, setFormData, handleChange } = useGetValue(initialState);

    const handleTagKeyDown = (e, input, list, setList, setInput) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const val = input.trim();
            if (val && !list.includes(val)) {
                setList([...list, val]);
            }
            setInput("");
        }
    };

    const removeTag = (index, list, setList) => {
        setList(list.filter((_, i) => i !== index));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhotoFile(file);
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const resetForm = () => {
        setFormData(initialState);
        setOemList([]); setOemInput("");
        setCarNameList([]); setCarNameInput("");
        setModelList([]); setModelInput("");
        setYearsList([]); setYearsInput("");
        setPhotoFile(null);
        setPhotoPreview(null);
    };

    const getFinalList = (list, input) => {
        const trimmed = input.trim();
        if (!trimmed) return list;
        if (list.includes(trimmed)) return list;
        return [...list, trimmed];
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalOem = getFinalList(oemList, oemInput);
        const finalCarName = getFinalList(carNameList, carNameInput);
        const finalModel = getFinalList(modelList, modelInput);
        const finalYears = getFinalList(yearsList, yearsInput);

        const data = new FormData();
        data.append("trtNo", formData.trtNo);
        data.append("oemNo", JSON.stringify(finalOem));
        data.append("ctrNo", formData.ctrNo);
        data.append("lemforderNo", formData.lemforderNo);
        data.append("englishName", formData.englishName);
        data.append("russianName", formData.russianName);
        data.append("contents", formData.contents);
        data.append("carName", JSON.stringify(finalCarName));
        data.append("model", JSON.stringify(finalModel));
        data.append("years", JSON.stringify(finalYears));
        data.append("weightPerPcKg", formData.weightPerPcKg);
        data.append("startOfSales", formData.startOfSales);
        if (photoFile) data.append("photo", photoFile);

        CreateCatalog(data)
            .unwrap()
            .then(() => { setIsOpen(false); resetForm(); })
            .catch((err) => console.error("Error:", err));
    };

    return (
        <div className="catalog-page">
            <div className="catalog-topbar">
                <div className="catalog-topbar__left">
                    <h2 className="catalog-topbar__left-title">Parts catalog</h2>
                </div>
                <button className="btn-add" onClick={() => setIsOpen(true)}>
                    + Add product
                </button>
            </div>

            <FilterCatalog />

            {isOpen && (
                <Module close={setIsOpen} width={550} bg={"#aaa9"}>
                    <form onSubmit={handleSubmit} className="modal">
                        <div className="modal__header">
                            <h3 className="modal__header-title">Add new product</h3>
                        </div>

                        <div className="modal__body">
                            <div className="modal__grid">
                                <div className="field">
                                    <label>TRT №</label>
                                    <input name="trtNo" value={formData.trtNo} onChange={handleChange} placeholder="R8000" />
                                </div>

                                <div className="field">
                                    <label>OEM №</label>
                                    <div className="tag-input">
                                        {oemList.map((v, i) => (
                                            <span key={i} className="tag">
                                                {v}
                                                <button type="button" onClick={() => removeTag(i, oemList, setOemList)}>×</button>
                                            </span>
                                        ))}
                                        <input
                                            value={oemInput}
                                            onChange={(e) => setOemInput(e.target.value)}
                                            onKeyDown={(e) => handleTagKeyDown(e, oemInput, oemList, setOemList, setOemInput)}
                                            placeholder="94788122"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label>CTR №</label>
                                    <input name="ctrNo" value={formData.ctrNo} onChange={handleChange} placeholder="CB0160" />
                                </div>

                                <div className="field">
                                    <label>LEMFÖRDER №</label>
                                    <input name="lemforderNo" value={formData.lemforderNo} onChange={handleChange} placeholder="12152 05" />
                                </div>
                            </div>

                            <div className="modal__grid">
                                <div className="field">
                                    <label>English name</label>
                                    <input name="englishName" value={formData.englishName} onChange={handleChange} placeholder="BALL JOINT" />
                                </div>

                                <div className="field">
                                    <label>Russian name</label>
                                    <input name="russianName" value={formData.russianName} onChange={handleChange} placeholder="ШАРОВАЯ ОПОРА" />
                                </div>

                                <div className="field">
                                    <label>Contents</label>
                                    <input name="contents" value={formData.contents} onChange={handleChange} placeholder="LOWER" />
                                </div>

                                <div className="field">
                                    <label>Car name</label>

                                    <div className="tag-input">
                                        {carNameList.map((v, i) => (
                                            <span key={i} className="tag">
                                                {v}
                                                <button type="button" onClick={() => removeTag(i, carNameList, setCarNameList)}>×</button>
                                            </span>
                                        ))}
                                        <input
                                            value={carNameInput}
                                            onChange={(e) => setCarNameInput(e.target.value)}
                                            onKeyDown={(e) => handleTagKeyDown(e, carNameInput, carNameList, setCarNameList, setCarNameInput)}
                                            placeholder="DAEWOO Nexia"
                                        />
                                    </div>

                                </div>

                            </div>

                            <div className="modal__grid">
                                <div className="field">
                                    <label>Model</label>

                                    <div className="tag-input">
                                        {modelList.map((v, i) => (
                                            <span key={i} className="tag">
                                                {v}
                                                <button type="button" onClick={() => removeTag(i, modelList, setModelList)}>×</button>
                                            </span>
                                        ))}

                                        <input
                                            value={modelInput}
                                            onChange={(e) => setModelInput(e.target.value)}
                                            onKeyDown={(e) => handleTagKeyDown(e, modelInput, modelList, setModelList, setModelInput)}
                                            placeholder="ATA19"
                                        />
                                    </div>

                                </div>

                                <div className="field">
                                    <label>Years</label>

                                    <div className="tag-input">
                                        {yearsList.map((v, i) => (
                                            <span key={i} className="tag">
                                                {v}
                                                <button type="button" onClick={() => removeTag(i, yearsList, setYearsList)}>×</button>
                                            </span>
                                        ))}

                                        <input
                                            value={yearsInput}
                                            onChange={(e) => setYearsInput(e.target.value)}
                                            onKeyDown={(e) => handleTagKeyDown(e, yearsInput, yearsList, setYearsList, setYearsInput)}
                                            placeholder="95~08"
                                        />

                                    </div>
                                </div>

                            </div>

                            <div className="modal__grid">

                                <div className="field">
                                    <label>Weight (kg)</label>
                                    <input name="weightPerPcKg" value={formData.weightPerPcKg} onChange={handleChange} type="number" step="0.001" placeholder="0.635" />
                                </div>

                                <div className="field">
                                    <label>Start of sales</label>
                                    <input name="startOfSales" value={formData.startOfSales} onChange={handleChange} type="date" />
                                </div>

                                <div className="field field--full">
                                    <label>Photo</label>

                                    <div className="upload-box" onClick={() => document.getElementById("photoInput").click()}>
                                        <input
                                            type="file"
                                            id="photoInput"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={handlePhotoChange}
                                        />

                                        {photoPreview ? (
                                            <img src={photoPreview} alt="preview" style={{ maxHeight: 50, objectFit: "contain", borderRadius: 6 }} />
                                        ) : (
                                            <>
                                                <span className="upload-box__icon"><MdOutlineDriveFolderUpload /></span>
                                                <p>Click to upload image</p>
                                            </>
                                        )}

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="modal__footer">
                            <button type="button" className="btn-cancel" onClick={() => { setIsOpen(false); resetForm(); }}>Cancel</button>
                            <button type="submit" className="btn-save" disabled={isLoading}>
                                {isLoading ? "Saving..." : "✓ Save"}
                            </button>
                        </div>
                    </form>
                </Module>
            )}
        </div>
    );
};

export default AddCatalog;