import React from 'react'
import Codemirror from 'codemirror'
const Editor = () => {
  useEffect(()=>{
    async function init(){
      Codemirror.fromTextArea(document.getElement('realtimeEditor'),{
        mode: "text/x-c++src",
        lineNumbers: true
      });
    }
  })
  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor
