import kind from "@enact/core/kind";
import MoonstoneDecorator from "@enact/moonstone/MoonstoneDecorator";
import Panels from "@enact/moonstone/Panels";
import React from "react";
//import LS2Request from "@enact/webos/LS2Request";
import MainPanel from "../views/MainPanel";

import "./attachErrorHandler";

import css from "./App.module.less";

const App = kind({
  name: "App",

  styles: {
    css,
    className: "app"
  },

  render: props => (
    <Panels {...props}>
      <MainPanel />
      <script type="text/javascript" src="webOSjs-0.1.0/webOS.js" />
    </Panels>
  )
});

export default MoonstoneDecorator(App);
