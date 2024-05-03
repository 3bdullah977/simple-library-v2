"use client";

import "../../style/register.scss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Register() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`container rounded-lg ${toggle && "active"}`}>
        <div className="form-container sign-in-container">
          <form>
            <h1 className="font-extrabold text-3xl">Sign in</h1>
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Email"
              type="email"
            />
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Password"
              type="password"
            />
            <a href="#" className="py-3">
              Forget your password?
            </a>
            <Button
              variant="outline"
              className="rounded-xl px-10 bg-[#023e8a] text-white">
              SIGN IN
            </Button>
          </form>
        </div>
        <div className="form-container sign-up-container">
          <form>
            <h1 className="font-extrabold text-3xl">Sign UP</h1>
            <span className="text-sm">or use your email for registration</span>
            <Input className="bg-[#eee] rounded-none py-5" placeholder="Name" />
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Email"
              type="email"
            />
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Password"
              type="password"
            />
            <Button
              variant="outline"
              className="rounded-xl px-10 bg-[#023e8a] text-white">
              SIGN UP
            </Button>
          </form>
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
