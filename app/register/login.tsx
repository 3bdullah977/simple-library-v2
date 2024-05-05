import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type authData = {
  email: string;
  password: string;
};

export default function Login() {
  const form = useForm<authData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: authData) => {
    // DB
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="font-extrabold text-3xl">Sign in</h1>
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
        <a href="#" className="py-3">
          Forget your password?
        </a>
        <Button
          variant="outline"
          className="rounded-xl px-10 bg-[#164863] text-white">
          SIGN IN
        </Button>
      </form>
    </>
  );
}
