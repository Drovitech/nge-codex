import { AFFILIATION_FILTER_OPTIONS } from '../../../application/affiliationFilters'
import type { AffiliationFilter } from '../../../domain/character'

interface CodexControlsProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  affiliation: AffiliationFilter
  onAffiliationChange: (value: AffiliationFilter) => void
}

export function CodexControls({
  searchQuery,
  onSearchChange,
  affiliation,
  onAffiliationChange,
}: CodexControlsProps) {
  return (
    <div className="controls-section">
      <div className="row g-3 align-items-end">
        <div className="col-12 col-md-5">
          <div className="search-wrapper">
            <input
              type="search"
              className="search-input"
              placeholder="BUSCAR PERSONAL..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Buscar personal"
            />
            <span className="search-icon" aria-hidden>
              ⌕
            </span>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="filter-label">// CLASIFICAR POR AFILIACIÓN</div>
          <div>
            {AFFILIATION_FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`filter-btn${affiliation === opt.value ? ' active' : ''}`}
                onClick={() => onAffiliationChange(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
