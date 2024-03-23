const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen pb-10 w-full  justify-center items-center ">
      {children}
    </div>
  );
};

export default AuthLayout;
