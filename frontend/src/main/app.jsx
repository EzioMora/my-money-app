import React from "react";
import { HashRouter } from "react-router-dom";

import "../common/template/dependencies";

import Routes from "./routes";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Messages from "../common/msg/messages";

const app = (props) => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
);

export default app;
