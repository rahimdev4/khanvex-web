export function ProductStage() {
  return (
    <div className="product-stage" aria-label="Reserved presentation area for approved Khanvex product screenshots">
      <div className="stage-grid" aria-hidden="true" />
      <div className="stage-label">
        <span className="status-dot" />
        Product showcase foundation
      </div>
      <div className="stage-screen stage-screen-back">
        <div className="stage-screen-bar" />
        <div className="stage-screen-block" />
        <div className="stage-screen-lines"><span /><span /><span /></div>
      </div>
      <div className="stage-screen stage-screen-front">
        <div className="stage-screen-bar" />
        <div className="stage-icon-slot">K</div>
        <div className="stage-screen-lines"><span /><span /><span /></div>
        <div className="stage-button-slot" />
      </div>
      <p className="stage-note">Approved product imagery will appear here.</p>
    </div>
  );
}
