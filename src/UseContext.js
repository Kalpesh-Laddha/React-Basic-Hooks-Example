import React from "react";
import NavigationContextComponent from "./ContextComponent/NavigationContextComponent";
import FormContextComponent from "./ContextComponent/FormContextComponent";
import DisplayContextComponent from "./ContextComponent/DisplayContextComponent";
import { CreateContext } from "./CreateContext";
const UseContext = () => {
  return (
    <CreateContext>
      <div>
        <h1>Welcome to Create / Use Cotext API</h1>
        <NavigationContextComponent />
        <FormContextComponent />
        <DisplayContextComponent />
      </div>
    </CreateContext>
  );
};

export default UseContext;
