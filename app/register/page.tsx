"use client";

import "../../style/register.scss";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Login from "./login";
import SignUp from "./signUp";

export default function Register() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`container rounded-lg ${toggle && "active"} `}>
        <div className="form-container sign-in-container">
          <Login />
        </div>
        <div className="form-container sign-up-container">
          <SignUp />
        </div>
        <div className="overlay-container relative">
          <Button
            onClick={() => setToggle(!toggle)}
            variant="outline"
            className="absolute z-10 top-[60%] left-[40%] bg-transparent shadow-none text-white">
            {toggle ? "SIGN UP" : "SIGN IN"}
          </Button>
          <div className="main-content">
            <div className="overlay">
              <div className="moleskine-wrapper overlay-panel left">
                <div className="moleskine-notebook">
                  <div className="notebook-cover">
                    <div className="notebook-skin">
                      <h1>Don't have account</h1>
                    </div>
                  </div>
                  <div className="notebook-page"></div>
                </div>
              </div>
              <div className="moleskine-wrapper overlay-panel right">
                <div className="moleskine-notebook">
                  <div className="notebook-cover">
                    <div className="notebook-skin">
                      <h1>Welcome Back!</h1>
                    </div>
                  </div>
                  <div className="notebook-page"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
