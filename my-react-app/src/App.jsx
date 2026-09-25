import { useState } from 'react'

const types = [
  { name: 'Fire', emoji: '🔥', color: 'border-orange-200 bg-orange-50 text-orange-700' },
  { name: 'Water', emoji: '💧', color: 'border-sky-200 bg-sky-50 text-sky-700' },
  { name: 'Grass', emoji: '🌿', color: 'border-green-200 bg-green-50 text-green-700' },
  { name: 'Electric', emoji: '⚡', color: 'border-yellow-200 bg-yellow-50 text-yellow-700' },
]

function App() {
  const [selectedType, setSelectedType] = useState(null)
  function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setResult(response);
}
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-poke-ink sm:py-16">
      <section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <div className="mb-8 flex items-center gap-3">
          <div aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-poke-red bg-white text-xl shadow-[inset_0_-8px_0_#f1f5f9]">●</div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Pokémon Battle Assistant</span>
        </div>
        <p className="mb-2 text-sm font-semibold text-poke-red">Choose a type</p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What are you up against?</h1>
        <p className="mt-3 text-slate-600">Pick a Pokémon type to see a quick battle tip.</p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {types.map((type) => (
            <button key={type.name} type="button" aria-pressed={selectedType === type.name}
              onClick={() => handleTypeClick(type.name)}

              className={`rounded-xl border px-4 py-3 text-left font-semibold transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-poke-red ${type.color} ${selectedType === type.name ? 'ring-2 ring-poke-ink ring-offset-2' : ''}`}>
              <span className="mr-2" aria-hidden="true">{type.emoji}</span>{type.name}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-6 min-h-6 text-sm font-semibold text-poke-ink">{selectedType}</p>
        <p className="mt-6 text-center text-xs text-slate-400">Gotta catch ’em all!</p>
      </section>
    </main>
  )
}

export default App


