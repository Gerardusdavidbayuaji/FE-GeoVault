import LoginForm from "@/components/form/LoginForm";

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('/assets/background.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative flex items-center justify-center w-full h-full">
        <div className="bg-white/60 w-1/3 p-2 rounded-lg text-[#00527a]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
