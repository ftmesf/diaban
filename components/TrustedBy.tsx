import { Reveal } from "./Reveal";

const INSTITUTIONS = [
  "سازمان غذا و دارو",
  "علوم پزشکی تهران",
  "علوم پزشکی شهید بهشتی",
  "علوم پزشکی اصفهان",
  "علوم پزشکی مازندران",
  "علوم پزشکی کرمان",
  "دانش‌بنیان",
];

export function TrustedBy() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold text-muted-foreground sm:text-sm">
            مورد اعتماد مراکز درمانی و دانشگاه‌های علوم پزشکی سراسر کشور
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-6 flex flex-nowrap items-center justify-start gap-2 overflow-x-auto pb-1 sm:justify-center sm:gap-3 sm:overflow-visible">
            {INSTITUTIONS.map((name) => (
              <li
                key={name}
                className="shrink-0 whitespace-nowrap rounded-full border border-brand-border/80 bg-white px-3 py-1.5 text-[11px] font-medium text-brand-fg/75 sm:text-xs"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
