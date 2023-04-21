import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "italic normal 1000 20px --fontFamily-serifTimes",
        "color": "#3bc7a7",
        "text-transform": "uppercase",
        "text-decoration-line": "",
        "text-align": "center",
        "background": "#0459b5",
        "border-style": "dashed",
        "border-width": "",
        "border-color": "rgba(130, 0, 187, 0)",
        "text-shadow": "1px 1px 0 rgba(0, 255, 248, 0)",
        "box-shadow": "0 0 0 0 #ffffff"
    },
    "index": {
        "font": "italic normal 1000 20px --fontFamily-serifTimes",
        "color": "#3bc7a7",
        "text-transform": "uppercase",
        "text-decoration-line": "",
        "text-align": "center",
        "background": "#0459b5",
        "border-style": "dashed",
        "border-width": "",
        "border-color": "rgba(130, 0, 187, 0)",
        "text-shadow": "1px 1px 0 rgba(0, 255, 248, 0)",
        "box-shadow": "0 0 0 0 #ffffff"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
