import React from "react";

export const getShape = props => {
    let shape = props.shape;
    if (shape === "5-sided") {
        return (
            <svg width="22" height="20" viewBox="0 0 22 20">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M11 1l9.51 6.91-3.632 11.18H5.122L1.49 7.91z"
                />
            </svg>
        )
    } else if (shape === "6-sided") {
        return (
            <svg width="20" height="22" viewBox="0 0 20 22">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M10 1l8.66 5v10L10 21l-8.66-5V6z"
                />
            </svg>
        )
    } else if (shape === "7-sided") {
        return (
            <svg width="22" height="21" viewBox="0 0 22 21">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M11 1l7.818 3.765 1.931 8.46-5.41 6.785H6.66l-5.41-6.785 1.93-8.46z"
                />
            </svg>
        )

    } else if (shape === "8-sided") {
        return (
            <svg width="22" height="22" viewBox="0 0 22 22">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M11 1l7.071 2.929L21 11l-2.929 7.071L11 21l-7.071-2.929L1 11l2.929-7.071z"
                />
            </svg>
        )

    } else if (shape === "circle") {
        <svg xwidth="22" height="22" viewBox="0 0 22 22">
            <circle
                cx="16"
                cy="51"
                r="10"
                fill={props.color}
                fill-rule="evenodd"
                stroke="#9B9B9B"
                transform="translate(-5 -40)"
            />
        </svg>
    } else if (shape === "diamond") {
        return (
            <svg width="34" height="16" viewBox="0 0 34 16">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M17.219.54a.5.5 0 0 0-.384-.003L.811 7.073a.5.5 0 0 0-.011.92l16.023 7.005a.5.5 0 0 0 .407-.003l15.428-7.004a.5.5 0 0 0-.011-.916L17.219.54z"
                />
            </svg>
        )
    } else if (shape === "oblong") {
        return (
            <svg width="28" height="14" viewBox="0 0 28 14">
                <rect
                    width="27"
                    height="13"
                    x="2.5"
                    y="87.5"
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    rx="6.5"
                    transform="translate(-2 -87)"
                />
            </svg>
        )
    } else if (shape === "oval") {
        return (
            <svg width="31" height="17" viewBox="0 0 31 17">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M15.298 16.147c5.523 0 14.625-1.624 14.625-7.147S20.82 1.284 15.298 1.284.673 3.477.673 9s9.102 7.147 14.625 7.147z"
                />
            </svg>
        )
    } else if (shape === "rectangle") {
        return (
            <svg width="31" height="17" viewBox="0 0 31 17">
                <rect
                    width="30"
                    height="16"
                    x=".5"
                    y="215.5"
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    rx="3"
                    transform="translate(0 -215)"
                />
            </svg>
        )
    } else if (shape === "square") {
        return (
            <svg width="22" height="19" viewBox="0 0 22 19">
                <rect
                    width="21"
                    height="18"
                    x="5.5"
                    y="171.5"
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    rx="3"
                    transform="translate(-5 -171)"
                />
            </svg>
        )
    } else if (shape === "triangle") {
        return (
            <svg width="23" height="17" viewBox="0 0 23 17">
                <path
                    fill={props.color}
                    fill-rule="evenodd"
                    stroke="#9B9B9B"
                    d="M11.5 0L22 16H1z"
                />
            </svg>
        )
    } else {
        <div>"There's Nothing Here.."</div>
    }


};