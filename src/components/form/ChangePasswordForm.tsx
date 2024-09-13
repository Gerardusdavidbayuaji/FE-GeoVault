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

import { useNavigate } from "react-router-dom";

const FormSchema = z
  .object({
    password: z.string().min(1, "Password diperlukan").max(30),
    newPassword: z
      .string()
      .min(1, "Password baru diperlukan")
      .min(8, "Password baru harus memiliki minimal 8 karakter"),
    confirmationPassword: z
      .string()
      .min(1, "Konfirmasi password diperlukan")
      .min(8, "Konfirmasi password harus memiliki minimal 8 karakter"),
  })
  .refine((data) => data.newPassword === data.confirmationPassword, {
    message: "Upss, password tidak sama",
    path: ["confirmationPassword"],
  });

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmationPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    navigate("/dashboard");
  };

  return (
    <Form {...form}>
      <p>Buat perubahan pada password Anda di sini.</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2 mt-2">
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
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Baru</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan password baru"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmationPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konfirmasi Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Konfirmasi password baru"
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
          >
            Simpan
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
