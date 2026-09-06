import Image from "next/image";

export function PhoneMockup({
  src,
  alt,
  className,
  caption,
  step,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  step?: string;
}) {
  return (
    <figure className={`w-full max-w-[220px] ${className ?? ""}`}>
      <div className="relative">
        {step ? (
          <span className="absolute -top-3 left-1/2 z-20 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-primary text-base font-extrabold text-white shadow-lg ring-4 ring-white">
            {step}
          </span>
        ) : null}
        <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-brand-fg bg-brand-fg soft-shadow-lg">
          <span
            aria-hidden
            className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-brand-fg"
          />
          <Image
            src={src}
            alt={alt}
            width={472}
            height={1024}
            className="h-auto w-full"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-base font-bold text-brand-fg">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
