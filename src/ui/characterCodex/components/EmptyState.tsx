export function EmptyState() {
  return (
    <div className="empty-state">
      <div className="e-icon">◈</div>
      <div>NINGÚN REGISTRO ENCONTRADO</div>
      <div style={{ fontSize: '10px', marginTop: '8px', opacity: 0.5 }}>
        MODIFICA LOS PARÁMETROS DE BÚSQUEDA
      </div>
    </div>
  )
}
