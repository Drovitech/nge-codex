import type { AffiliationFilter } from '../domain/character'

export interface AffiliationFilterOption {
  value: AffiliationFilter
  label: string
}

export const AFFILIATION_FILTER_OPTIONS: AffiliationFilterOption[] = [
  { value: 'all', label: 'TODOS' },
  { value: 'Piloto EVA', label: 'PILOTOS' },
  { value: 'NERV', label: 'NERV' },
  { value: 'SEELE', label: 'SEELE' },
  { value: 'Ángel', label: 'ÁNGELES' },
  { value: 'Civil', label: 'CIVILES' },
]
