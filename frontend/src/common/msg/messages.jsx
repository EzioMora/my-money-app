import React from "react";
import ReduxToastr from "react-redux-toastr";
import "modules/react-redux-toastr/lib/css/react-redux-toastr.css";

const Messages = (props) => (
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates={true}
    position="top-right"
    transitionIN="fadeIn"
    transitionOut="fadeOut"
    progressBar
  />
);

export default Messages;
