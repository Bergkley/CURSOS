import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUserImperativeHandle = () => {
    const compoentRef = useRef();
  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref={compoentRef} />
      <button onClick={() => compoentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  )
}

export default HookUserImperativeHandle
