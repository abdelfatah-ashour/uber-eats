import { useAppSelector } from "./ReduxHooks";

export default function useWithAuth() {
  const { isAuth } = useAppSelector((s) => s.auth);

  function checkIsAuth(fn: () => void, callback: () => void) {
    isAuth ? fn() : callback();
  }

  return {
    checkIsAuth,
  };
}
