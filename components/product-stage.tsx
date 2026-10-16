import Image from "next/image";

type ProductStageProps = {
  preload?: boolean;
};

export function ProductStage({ preload = false }: ProductStageProps) {
  return (
    <figure className="product-stage">
      <div className="stage-grid" aria-hidden="true" />
      <div className="stage-glow" aria-hidden="true" />
      <div className="stage-label">
        <span className="status-dot" />
        Mobile experiences by Khanvex
      </div>
      <Image
        alt="Two mobile application interface mockups for productivity and wellness"
        className="stage-product-image"
        height={1086}
        preload={preload}
        sizes="(max-width: 720px) 92vw, (max-width: 980px) 78vw, 680px"
        src="/images/app-ss.webp"
        width={1448}
      />
      <figcaption className="stage-note">
        Thoughtful mobile products for real everyday needs.
      </figcaption>
    </figure>
  );
}
