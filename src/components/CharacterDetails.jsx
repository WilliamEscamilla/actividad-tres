function CharacterDetails({ character, render }) {
  if (!character) return null

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={character.avatarSrc}
          alt={character.englishName}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <h3 className="font-bold text-lg leading-tight">{character.englishName}</h3>
          <p className="text-sm text-gray-600">{character.role}</p>
        </div>
      </div>

      {render(character)}
    </div>
  )
}

export default CharacterDetails
