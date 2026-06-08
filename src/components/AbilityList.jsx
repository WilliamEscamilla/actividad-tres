function AbilityList({ character }) {
  return (
    <div>
      <h4 className="font-bold mb-2">Habilidades Conocidas:</h4>
      <ul className="list-disc pl-5">
        {character.abilities?.map((ability, idx) => (
          <li key={idx} className="mb-1">{ability}</li>
        ))}
      </ul>
    </div>
  )
}

export default AbilityList
