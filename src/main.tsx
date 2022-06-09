import { render } from "solid-js/web";

import { App } from "./component/app";

const container = document.getElementById("container");
if (container) {
    render(() => <App />, container);
}
