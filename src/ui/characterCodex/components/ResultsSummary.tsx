interface ResultsSummaryProps {
  count: number
}

export function ResultsSummary({ count }: ResultsSummaryProps) {
  return (
    <div className="results-info">
      <strong>{count}</strong> ARCHIVOS ENCONTRADOS // SELECCIONA UN REGISTRO PARA DETALLES
    </div>
  )
}
