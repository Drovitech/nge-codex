import { useMemo, useState } from 'react'
import { filterCharacters } from '../../application/filterCharacters'
import { CHARACTERS } from '../../data/characters.data'
import type { AffiliationFilter, Character } from '../../domain/character'
import { CharacterDetailModal } from './components/CharacterDetailModal'
import { CharacterGrid } from './components/CharacterGrid'
import { CodexControls } from './components/CodexControls'
import { CodexHeader } from './components/CodexHeader'
import { EmptyState } from './components/EmptyState'
import { PageChrome } from './components/PageChrome'
import { ResultsSummary } from './components/ResultsSummary'
import { TopStatusBar } from './components/TopStatusBar'

const TOTAL_RECORDS = CHARACTERS.length

export function CharacterCodexPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [affiliation, setAffiliation] = useState<AffiliationFilter>('all')
  const [selected, setSelected] = useState<Character | null>(null)

  const filtered = useMemo(
    () => filterCharacters(CHARACTERS, searchQuery, affiliation),
    [searchQuery, affiliation],
  )

  return (
    <PageChrome>
      <TopStatusBar />
      <CodexHeader totalCount={TOTAL_RECORDS} filteredCount={filtered.length} />
      <CodexControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        affiliation={affiliation}
        onAffiliationChange={setAffiliation}
      />

      <section className="grid-section" aria-label="Listado de personajes">
        <ResultsSummary count={filtered.length} />
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <CharacterGrid characters={filtered} onSelectCharacter={setSelected} />
        )}
      </section>

      <CharacterDetailModal character={selected} onClose={() => setSelected(null)} />
    </PageChrome>
  )
}
