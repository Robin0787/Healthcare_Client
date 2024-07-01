"user client";
import { increase } from "@/redux/features/counter/counter-slice";
import { AppStore, makeStore } from "@/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(increase(1));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
