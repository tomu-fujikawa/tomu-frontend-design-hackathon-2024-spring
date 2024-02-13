import * as React from "react";
import { StrictMode } from "react";
import { Page } from "./component/Page";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Page />
    </StrictMode>
);
