/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/main.css"
import "./src/styles/util.css"
import "./src/styles/custom.css"
import "./src/styles/hamburgers.css"
import "./src/styles/hamburgers.min.css"

import ReduxWrapper from "./redux-provider-wrapper";
// const ReduxWrapper = require('./redux-provider-wrapper').default;
export const wrapRootElement = ReduxWrapper;