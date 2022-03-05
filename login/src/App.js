import React from "react";

import ButtonComponent from "./components/ButtonComponent";
import { BsGithub, BsGoogle } from "react-icons/bs";
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <>
      <div className="form col-md-10 m-auto mt-5">
        <article className="text-center">
          <h1>LOGIN</h1>

          <ButtonComponent bg="#F05A5A" title="Login with Google" icon={<BsGoogle style={{fontSize:20,marginLeft:10}}/>}/>
          <ButtonComponent bg="#111111" title="Login with Github" icon={<BsGithub style={{fontSize:20,marginLeft:10}}/>}/>

          <div class="alternative">
            <span>OR</span>
          </div>

          <InputComponent type="email" name="Email"/>
          <InputComponent type="password" name="Password"/>

          <div className="checkbox-div">
            <input type="checkbox" id="scales" name="scales" style={{width:"2rem"}}/>
            <label for="scales">Remember me</label>
          </div>

          <ButtonComponent bg="#887AD3" title="Login"/>
        </article>
      </div>
    </>
  );
}

export default App;
