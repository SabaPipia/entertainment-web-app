import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RouteGuardProps } from "@/types";
import { useEffect } from "react";

const RouteGuard = ({ children }: RouteGuardProps) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  const router = useRouter();
  const pathname = usePathname();
  // TODO: uncomment
  const AuthRoutes = ["/Authentication/login", "/Authentication/signup"];

  useEffect(() => {
    if (!isAuthenticated && !AuthRoutes.includes(pathname)) {
      router.push("/Authentication/login");
    } else if (isAuthenticated && AuthRoutes.includes(pathname)) {
      router.push("/home");
    }
  }, [isAuthenticated]);

  return children;
};

export default RouteGuard;
