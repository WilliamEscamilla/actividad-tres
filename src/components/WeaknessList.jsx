function WeaknessList({ character }) {
  return (
    <div>
      <h4 className="font-bold mb-2 text-red-600">Puntos Débiles (Clasificado):</h4>
      <ul className="list-disc pl-5">
        {character.weaknesses?.map((weakness, idx) => (
          <li key={idx} className="mb-1">{weakness}</li>
        ))}
      </ul>
    </div>
  )
}

export default WeaknessList
