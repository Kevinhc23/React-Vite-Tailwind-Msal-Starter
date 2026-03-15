import type { ComponentType, ReactNode } from "react";
import { TanStackProvider } from "@/app/providers/TanStackProvider";
import { MsalAppProvider } from "@/app/providers/MsalAppProvider";
import ErrorBoundary from "@/components/widgets/ErrorBoundary";

type Props = { children: ReactNode };
type Provider = ComponentType<Props>;

/**
 * Composes multiple provider components into a single provider.
 * @param p - The provider components to compose.
 * @returns A single provider component.
 */
const composeProviders = (...p: Provider[]) =>
  p.reduceRight(
    (Acc, P) =>
      ({ children }: Props) => (
        <P>
          <Acc>{children}</Acc>
        </P>
      ),
    ({ children }: Props) => <>{children}</>,
  );


/**
 * Compose the providers.
 */
const AppProviders = composeProviders(ErrorBoundary, TanStackProvider, MsalAppProvider);

export default AppProviders;
