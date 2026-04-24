import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const htmlPath = path.join(root, '..', 'nge_character_dictionary.html')
const outPath = path.join(root, 'src/data/characters.raw.js')

const html = fs.readFileSync(htmlPath, 'utf8')
const m = html.match(/const characters = (\[[\s\S]*?\])\s*;/)
if (!m) {
  console.error('No se encontró el array `characters` en:', htmlPath)
  process.exit(1)
}
fs.writeFileSync(outPath, m[1], 'utf8')
console.log('Escrito:', outPath, `(${m[1].length} bytes)`)
