import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have then 8 characters"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <h1 className="font-semibold text-center text-3xl">Login</h1>
      <h4 className="text-center text-lg font-normal mt-3 mb-5">
        Silakan login untuk mengelola data lokasi
      </h4>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="admin_geovault@gmail.com"
                    {...field}
                    className="border border-[#00527a]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your password"
                    type="password"
                    className="border border-[#00527a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="justify-end">
          <Button
            type="submit"
            className="rounded-lg w-full bg-[#00527a] hover:bg-[#00527a]/80 mt-4"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </Button>
          <Button
            type="submit"
            className="rounded-lg w-full bg-[#00b7cc] hover:bg-[#00b7cc]/80 mt-4"
            onClick={() => navigate("/dashboard")}
          >
            Guest User
          </Button>
          <Link to="/register">
            <h4 className="mt-3 mb-5 text-center text-sm font-medium hover:underline underline-offset-1">
              Belum memiliki akun? Silakan klik disini!
            </h4>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
