/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  const token = localStorage.getItem("token");

  if (token !== null) {
    next();
  } else {
    next({ name: "login" });
  }
};

export default haveRoleGuard;