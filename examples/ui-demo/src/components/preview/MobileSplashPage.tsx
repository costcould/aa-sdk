import { useAuthModal } from "@account-kit/react";

export function MobileSplashPage() {
  const { openAuthModal } = useAuthModal();
  return (
    <div className="flex flex-col flex-1 pb-5 pt-16 h-auto">
      {/* Header Text */}
      <div>
        <h3 className="text-[36px] min-[430px]:text-[46px] sm:text-[56px] sm:leading-[60px] text-center font-semibold tracking-tight text-fg-primary">
          Web2 UX,{" "}
          <span
            className="whitespace-nowrap"
            style={{
              background:
                "linear-gradient(126deg, #FF9C27 4.59%, #FD48CE 108.32%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            onchain
          </span>
        </h3>
        <p className="text-base text-fg-secondary font-normal tracking-tight text-center mt-3">
          Zero-friction onboarding, one-click transactions
        </p>
      </div>
      {/* Image Wrapper */}
      <div className="relative my-[20px] flex items-center justify-center">
        {/* Placeholder - Design would provide the actual asset here. */}
        <video
          src="/videos/splash-demo.mov"
          className="w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="sm:mt-auto">
        {/* Bottom action buttons */}
        <div className="flex flex-col sm:flex-row">
          <button
            className="btn btn-primary w-full sm:w-auto mb-2 sm:mb-0 flex-1 m-0 sm:mr-2"
            onClick={() => {
              console.log("openAuthModal");
              openAuthModal();
            }}
          >
            Try it
          </button>
          <a
            href="https://accountkit.alchemy.com/"
            target="_blank"
            className="btn btn-secondary w-full sm:w-auto flex-1 m-0 sm:ml-2"
          >
            View docs
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <span className="text-sm text-center block ">
            Visit desktop site to customize styles and auth methods
          </span>
        </div>
      </div>
    </div>
  );
}
