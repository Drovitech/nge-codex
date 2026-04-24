import { useEffect } from 'react'
import type { Character } from '../../../domain/character'

interface CharacterDetailModalProps {
  character: Character | null
  onClose: () => void
}

export function CharacterDetailModal({ character, onClose }: CharacterDetailModalProps) {
  const open = character !== null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {character && (
        <div
          className="modal-box"
          role="dialog"
          aria-modal="true"
          aria-labelledby="character-modal-title"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="modal-header-bar">
            <span>
              ARCHIVO #{String(character.id).padStart(3, '0')} //{' '}
              {character.affiliation.toUpperCase()} // NERV HQ
            </span>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Cerrar">
              ✕
            </button>
          </div>
          <div className="modal-body">
            <div className="d-flex align-items-start gap-4 mb-4">
              <div
                className="modal-avatar"
                style={{
                  background: `${character.color}33`,
                  borderColor: character.colorBorder,
                  color: character.colorText,
                }}
              >
                {character.initials}
              </div>
              <div>
                <h2 className="modal-name" id="character-modal-title">
                  {character.name}
                </h2>
                <div className="modal-jp">{character.jp}</div>
                <div className="mt-2">
                  <span
                    className="soul-tag"
                    style={{
                      borderColor: character.colorBorder,
                      color: character.colorText,
                      background: `${character.color}33`,
                    }}
                  >
                    {character.affiliation}
                  </span>
                </div>
                <div className="modal-role-line">{character.role}</div>
              </div>
            </div>

            <div className="modal-section-title">// DATOS DE PERSONAL</div>
            <div className="stat-row">
              <span className="skey">EDAD</span>
              <span className="sval">{character.age} años</span>
            </div>
            <div className="stat-row">
              <span className="skey">SEXO</span>
              <span className="sval">{character.sex}</span>
            </div>
            <div className="stat-row">
              <span className="skey">TIPO SANGUÍNEO</span>
              <span className="sval">{character.blood}</span>
            </div>
            <div className="stat-row">
              <span className="skey">ORIGEN</span>
              <span className="sval">{character.origin}</span>
            </div>
            {character.sync !== 'N/A' && (
              <div className="stat-row">
                <span className="skey">TASA SYNC</span>
                <span className="sval" style={{ color: character.colorText }}>
                  {character.sync}
                </span>
              </div>
            )}
            {character.eva !== 'N/A' && (
              <div className="stat-row">
                <span className="skey">UNIDAD EVA</span>
                <span className="sval" style={{ color: character.colorText }}>
                  {character.eva}
                </span>
              </div>
            )}
            {character.seiyuu ? (
              <div className="stat-row">
                <span className="skey">SEIYUU</span>
                <span className="sval">{character.seiyuu}</span>
              </div>
            ) : null}

            <div className="modal-section-title">// PERFIL PSICOLÓGICO</div>
            <p className="modal-bio">{character.bio}</p>

            <div className="modal-section-title">// RASGOS DOMINANTES</div>
            <div>
              {character.traits.map((t) => (
                <span
                  key={t}
                  className="soul-tag"
                  style={{
                    borderColor: `${character.colorBorder}55`,
                    color: character.colorText,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
