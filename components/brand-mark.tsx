import Image from "next/image";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={600}
      src="/images/logo/khanvex-mark.svg"
      width={600}
    />
  );
}
