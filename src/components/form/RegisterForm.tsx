import { useForm } from "react-hook-form";
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

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  username: z.string().min(1, "Usernamediperlukan").max(30),
  email: z.string().min(1, "Email diperlukan").email("Email tidak valid"),
  password: z
    .string()
    .min(1, "Password diperlukan")
    .min(8, "Password harus memiliki minimal 8 karakter"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <h1 className="font-semibold text-center text-3xl">Register</h1>
      <h4 className="text-center text-lg font-normal mt-3 mb-5">
        Silakan mengisi data terlebih dahulu
      </h4>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2 mt-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="e.g: geovault" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g: geovault@gmail.com" {...field} />
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
                    placeholder="Masukan password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="rounded-lg w-full bg-[#00527a] hover:bg-[#00527a]/80 mt-4"
            onClick={() => navigate("/")}
          >
            Register
          </Button>
        </div>
        <Link to="/">
          <h4 className="mt-3 mb-5 text-center text-sm font-medium hover:underline underline-offset-1">
            Sudah memiliki akun? Silakan klik disini!
          </h4>
        </Link>
      </form>
    </Form>
  );
};

export default RegisterForm;
