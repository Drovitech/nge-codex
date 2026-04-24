interface CodexHeaderProps {
  totalCount: number
  filteredCount: number
}

export function CodexHeader({ totalCount, filteredCount }: CodexHeaderProps) {
  return (
    <div className="main-header">
      <div className="container-fluid px-0">
        <div className="nerv-logo">▶ NERV — NATIONAL EMERGENCY RESPONSE VIOLATION</div>
        <div className="title-main">
          EVANGELION
          <br />
          CHARACTER CODEX
        </div>
        <div className="title-sub">// ARCHIVO DE PERSONAL — 2015-2017 //</div>
        <div className="stat-bar">
          <span>{totalCount}</span>
          REGISTROS TOTALES &nbsp;|&nbsp;
          <span>{filteredCount}</span>
          MOSTRANDO &nbsp;|&nbsp;
          <span>CLASIFICACIÓN: NIVEL 4</span>
        </div>
      </div>
    </div>
  )
}
