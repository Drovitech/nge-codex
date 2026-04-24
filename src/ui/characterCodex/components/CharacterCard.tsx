import type { Character } from '../../../domain/character'

const BIO_PREVIEW_LENGTH = 90

interface CharacterCardProps {
  character: Character
  index: number
  onSelect: (character: Character) => void
}

export function CharacterCard({ character: c, index, onSelect }: CharacterCardProps) {
  const preview =
    c.bio.length > BIO_PREVIEW_LENGTH ? `${c.bio.slice(0, BIO_PREVIEW_LENGTH)}...` : c.bio

  return (
    <div
      className="col-6 col-md-4 col-lg-3 animate-in"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <article
        className="char-card p-3"
        role="button"
        tabIndex={0}
        onClick={() => onSelect(c)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect(c)
          }
        }}
        aria-label={`Abrir ficha de ${c.name}`}
      >
        <div className="d-flex align-items-center gap-3 mb-2">
          <div
            className="card-avatar"
            style={{
              background: `${c.color}22`,
              borderColor: c.colorBorder,
              color: c.colorText,
            }}
          >
            {c.initials}
          </div>
          <div>
            <div
              className="card-tag mb-1"
              style={{
                borderColor: `${c.colorBorder}55`,
                color: c.colorText,
              }}
            >
              {c.affiliation}
            </div>
            <div className="card-name">{c.name}</div>
          </div>
        </div>
        <div className="divider-line" />
        <div className="card-role mt-2">{c.role}</div>
        <div className="card-desc">{preview}</div>
        <div className="card-corner" aria-hidden />
      </article>
    </div>
  )
}
