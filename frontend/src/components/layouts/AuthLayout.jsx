import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const normalizedType = type.toLowerCase();

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, please enter your details!
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {normalizedType === "login" ? "Don't have an account?" : "Have an account?"}
          <Link to={normalizedType === "login" ? "/register" : "/login"} className="font-bold text-blue-600">
            {normalizedType === "login" ? "Register" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
