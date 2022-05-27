import React, { Component } from 'react'

export default class Chatbot extends Component {

    componentDidMount()
    {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"8f72beefe4fe3dcd7e81d3a7582f8b2f","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    }

  render() {
    return (
      <></>
    )
  }
}
