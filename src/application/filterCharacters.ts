import type { AffiliationFilter, Character } from '../domain/character'

export function filterCharacters(
  characters: readonly Character[],
  query: string,
  affiliation: AffiliationFilter,
): Character[] {
  const q = query.toLowerCase().trim()
  return characters.filter((c) => {
    const matchFilter = affiliation === 'all' || c.affiliation === affiliation
    const matchSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.bio.toLowerCase().includes(q) ||
      c.jp.includes(q)
    return matchFilter && matchSearch
  })
}
