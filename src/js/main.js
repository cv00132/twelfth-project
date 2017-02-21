import $ from "jquery";
import { userData, showData } from "./github";
import { resultsTemplate } from "./template";

userData().then(resultsTemplate);


export { showData }
