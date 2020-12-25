import { createGlobalStyle } from "styled-components";

import butler from "./Butler-Bold.woff";
import NHG from "./NHG.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "butler";
        src: url(${butler}) format('woff');
        font-weight: 700;
        font-style:bold;
    }

    @font-face {
        font-family: "NHG";
        src: url(${NHG}) format('truetype');
        font-weight: 300;
        font-style:normal;
    }
`;
