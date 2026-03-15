import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "@/lib/msalInstance";
import type { ReactNode } from "react";

export const MsalAppProvider = ({ children }: { children: ReactNode }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};
