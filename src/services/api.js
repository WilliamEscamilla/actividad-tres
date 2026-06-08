import { charactersData } from './characters'

export const getCharacters = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(charactersData)
    }, 1500)
  })
}
