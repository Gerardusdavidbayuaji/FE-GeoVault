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

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have then 8 characters"),
});

const LoginForm = () => {
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
            className="rounded-lg w-full bg-[#00527a] hover:bg-[#00527a] mt-4"
          >
            Login
          </Button>
          <Button
            type="submit"
            className="rounded-lg w-full bg-[#00b7cc] hover:bg-[#00b7cc] mt-4"
          >
            Guest User
          </Button>
          <h4 className="mt-3 mb-5 text-center">
            Belum memiliki akun? Silakan klik disini!
          </h4>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
