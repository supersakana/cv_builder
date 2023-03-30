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
    from_uni: '',
    to_uni: '',
    company: '',
    position: '',
    description: '',
    from_comp: '',
    to_comp: ''
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
