import Button from './Button'

function CharacterCard({ character, sessionData, actionConfig }) {
  return (
    <div className="rounded-lg border-black border-2 flex flex-col h-full">
      <img
        src={character.avatarSrc}
        alt={character.englishName}
        className="w-full h-64 object-cover object-top"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{character.englishName}</h3>
          <span className="text-xs px-2 py-1">
            {character.role}
          </span>
        </div>
        <p className="text-sm italic mb-2">{character.japaneseName}</p>
        <p>{character.description}</p>

        <div className="p-2">
          <p className="text-xs uppercase tracking-wider mb-1">Recompensa</p>
          <p
            className="text-xl font-bold tracking-widest"
            style={sessionData?.bountyStyle}
          >
            ฿ {character.bounty}
          </p>
        </div>

        {sessionData && (
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <p>
              <strong>{sessionData.label1}:</strong> {sessionData.value1}
            </p>
          </div>
        )}

        {actionConfig && (
          <div className="mt-auto">
            <Button 
              variant={actionConfig.variant} 
              onClick={actionConfig.onClick} 
              className="px-4 py-2 rounded-lg w-full text-sm mt-4"
            >
              {actionConfig.text}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterCard
