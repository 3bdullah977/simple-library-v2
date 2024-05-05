import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type authData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const form = useForm<authData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: authData) => {
    // DB
  };

  return (
    <>
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
    </>
  );
}
