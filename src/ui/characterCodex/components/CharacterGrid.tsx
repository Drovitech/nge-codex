import type { Character } from '../../../domain/character'
import { CharacterCard } from './CharacterCard'

interface CharacterGridProps {
  characters: Character[]
  onSelectCharacter: (character: Character) => void
}

export function CharacterGrid({ characters, onSelectCharacter }: CharacterGridProps) {
  return (
    <div className="row g-3">
      {characters.map((c, index) => (
        <CharacterCard
          key={c.id}
          character={c}
          index={index}
          onSelect={onSelectCharacter}
        />
      ))}
    </div>
  )
}
