export const setUser = (user: any) => ({
  type: "SET_USER",
  payload: user,
});

export const clearUser = () => ({
  type: "CLEAR_USER",
});
export const checkUser = (user: any) => ({
  type: "CHECK_USER",
  payload: user,
});
