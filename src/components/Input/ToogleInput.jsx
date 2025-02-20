import { useState } from "react";

function ToogleInput({
    labelTitle,
    labelStyle = "",
    containerStyle = "",
    defaultValue,
    updateFormValue,
    updateType,
    size = "md",
    labelPosition = "top",
}) {
    const [value, setValue] = useState(defaultValue);

    const updateToogleValue = () => {
        setValue(!value);
        updateFormValue({ updateType, value: !value });
    };

    return (
        <div
            className={`form-control ${containerStyle}`}
            style={{
                display: "flex",
                flexDirection: labelPosition === "left" ? "row" : "column", // Cambia la dirección de diseño
                alignItems: labelPosition === "left" ? "center" : "flex-start", // Alineación para filas
            }}
        >
            <label
                className={`label cursor-pointer ${labelStyle} ${
                    labelPosition === "left" ? "w-1/4" : "w-full"
                }`}
                style={{
                    marginRight: labelPosition === "left" ? "1rem" : "0", // Espaciado lateral en filas
                }}
            >
                <span className="label-text text-base-content">{labelTitle}</span>
            </label>
            <input
                type="checkbox"
                className={`toggle ${labelPosition === "left" ? "" : "w-full"} toggle-${size}`}
                checked={value}
                onChange={updateToogleValue}
            />
        </div>
    );
}

export default ToogleInput;
