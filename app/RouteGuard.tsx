import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RouteGuardProps } from "@/types";
import { useEffect } from "react";

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

const RouteGuard = ({ children }: RouteGuardProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    "/Authentication/login",
    "/Authentication/signup",
    "/home",
    "/movies",
    "/tv-series",
    "/bookmarks",
  ];
  useEffect(() => {
    const path = routes.find((item: string) => item === pathname);
    if (!path) {
      router.push(`/error`);
    }
  }, [pathname]);

  const AuthRoutes = ["/Authentication/login", "/Authentication/signup"];

  useEffect(() => {
    if (!isAuthenticated && !AuthRoutes.includes(pathname)) {
      router.push("/Authentication/login");
    } else if (
      (isAuthenticated && AuthRoutes.includes(pathname)) ||
      pathname === "/"
    ) {
      router.push("/home");
    }
  }, [isAuthenticated]);

  return children;
};

export default RouteGuard;
