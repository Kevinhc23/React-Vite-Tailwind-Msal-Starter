import { useEffect, type FC } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useMsalAuth } from "@/hooks/useMsalAuth";
import { useLoadingStore } from "@/app/store/useLoadingStore";
import LoadingOverlay from "@/components/widgets/LoadingOverlay";
import { MicrosoftIcon } from "@/components/ui/icons";
import { Lock, Layers } from "lucide-react";

const SignInPage: FC = () => {
  const { inProgress, isAuthenticated, login } = useMsalAuth();
  const navigate = useNavigate();
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);

  useEffect(() => {
    if (inProgress === "none" && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [inProgress, isAuthenticated, navigate]);

  const handleSignIn = async () => {
    showLoading("Authenticating with Microsoft...");
    try {
      await login();
    } catch (error) {
      console.error("MSAL Login Error:", error);
    } finally {
      hideLoading();
    }
  };

  if (inProgress !== "none" || isAuthenticated) {
    return <LoadingOverlay />;
  }

  return (
    <div className="flex justify-center items-center min-h-dvh w-full bg-zinc-50 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 min-h-[600px]">
        {/* Left Side: Branding & Visuals */}
        <div className="relative w-full md:w-1/2 flex-col justify-between bg-zinc-900 p-12 flex items-start overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
          </div>

          <div className="relative z-10 flex items-center gap-2 text-white mb-12">
            <Layers className="size-8 text-primary" />
            <span className="font-bold text-xl tracking-tight">
              Boilerplate
            </span>
          </div>

          <div className="relative z-10 flex-1 flex items-center">
            <blockquote className="space-y-6">
              <p className="text-3xl lg:text-4xl font-medium leading-tight text-white tracking-tight">
                "Start building premium modular applications instantly."
              </p>
              <footer className="text-lg text-zinc-400 font-medium tracking-wide">
                System Engineering Team
              </footer>
            </blockquote>
          </div>

          <div className="relative z-10 text-sm text-zinc-500 mt-12 w-full flex justify-between">
            <span>© 2026 Platform</span>
            <span>Enterprise Raw Engine</span>
          </div>
        </div>

        {/* Right Side: Login Actions */}
        <div className="flex w-full md:w-1/2 items-center justify-center p-8 lg:p-16 relative">
          <div className="w-full max-w-[420px] space-y-8 relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Welcome back
              </h2>
              <p className="text-zinc-500 font-medium">
                Log in to access your secure dashboard workspace.
              </p>
            </div>

            <div className="space-y-5">
              <Button
                onClick={handleSignIn}
                size="lg"
                className="group relative flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 text-base font-medium text-zinc-700 transition-all hover:bg-zinc-50 hover:shadow-sm active:scale-[0.98] shadow-sm"
              >
                <MicrosoftIcon />
                Continue with Microsoft SSO
              </Button>

              <div className="relative pt-6 pb-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-zinc-100" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-zinc-400 font-bold tracking-widest">
                    Enterprise Protection
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-zinc-50/50 p-5 border border-zinc-100">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Lock className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600 font-medium">
                    Your session is strictly protected by conditional access
                    policies and multi-factor authentication triggers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-zinc-500 font-medium pt-4">
              Having trouble logging in?{" "}
              <Link
                to="/contact"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
                viewTransition
              >
                Contact IT Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
