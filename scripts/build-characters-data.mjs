import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const rawPath = path.join(root, 'src/data/characters.raw.js')
const outPath = path.join(root, 'src/data/characters.data.ts')

const raw = fs.readFileSync(rawPath, 'utf8')
const header = `import type { Character } from '../domain/character'

export const CHARACTERS: Character[] =
`

fs.writeFileSync(outPath, header + raw, 'utf8')
