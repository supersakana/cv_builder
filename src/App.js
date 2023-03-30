import Form from "./components/Form";
import Doc from "./components/Doc";
import { useState } from "react";

function App() {
  const [cvContent, setContent] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    degree: '',
    fromUni: '',
    toUni: '',
    company: '',
    position: '',
    description: '',
    fromComp: '',
    toComp: ''
  })

  const updateDoc = (e) => {
    const updated = {...cvContent}
    updated[e.target.id] = e.target.value
    setContent(updated)
  }

  return (
    <div className="flex">
      <Form updateDoc={updateDoc} />
      <Doc content={cvContent}/>
    </div>
  );
}

export default App;
