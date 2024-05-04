"use client";

import "../../style/register.scss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

type authData = {
  name: string;
  email: string;
  password: string;
  loginEmail: string;
  loginPass: string;
};

export default function Register() {
  const [toggle, setToggle] = useState(false);
  const form = useForm<authData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: authData) => {
    // DB !!!!
  };

  return (
    <>
      <div className={`container rounded-lg ${toggle && "active"} `}>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h1 className="font-extrabold text-3xl">Sign in</h1>
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="admin@example.com"
              type="email"
              {...register("loginEmail", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_^{1}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "invalid email address",
                },
                required: "email is required",
              })}
            />
            <p className="text-red-500">{errors.loginEmail?.message}</p>
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Password"
              type="password"
              {...register("loginPass", { required: "password is required" })}
            />
            <p className="text-red-500">{errors.loginPass?.message}</p>
            <a href="#" className="py-3">
              Forget your password?
            </a>
            <Button
              variant="outline"
              className="rounded-xl px-10 bg-[#164863] text-white">
              SIGN IN
            </Button>
          </form>
        </div>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h1 className="font-extrabold text-3xl">Sign UP</h1>
            <span className="text-sm">or use your email for registration</span>
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Name"
              {...register("name", { required: "name is required" })}
            />
            <p className="text-red-500">{errors.name?.message}</p>
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="admin@example.com"
              type="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_^{1}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "invalid email address",
                },
                required: "email is required",
              })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <Input
              className="bg-[#eee] rounded-none py-5"
              placeholder="Password"
              type="password"
              {...register("password", { required: "password is required" })}
            />
            <p className="text-red-500">{errors.password?.message}</p>
            <Button
              variant="outline"
              className="rounded-xl px-10 bg-[#164863] text-white">
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
