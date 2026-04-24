export type Affiliation =
  | 'Piloto EVA'
  | 'NERV'
  | 'SEELE'
  | 'Ángel'
  | 'Civil'

export type AffiliationFilter = 'all' | Affiliation

export interface Character {
  id: number
  name: string
  jp: string
  initials: string
  color: string
  colorBorder: string
  colorText: string
  affiliation: Affiliation
  role: string
  age: string
  sex: string
  blood: string
  sync: string
  eva: string
  origin: string
  bio: string
  traits: string[]
  seiyuu: string
}
