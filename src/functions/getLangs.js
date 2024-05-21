import { langColors } from "../services/config"


export const getLangsFrom = (repositories) => {
  let stats = repositories
  // pega somente a linguagem dentro do array
  .map((repository) => repository.language)
  .reduce((data, language) => ({
    ...data,
    [language]: ( data[language] || 0 ) + 1,
  }), [])

  // deleta todas as linguagens que ele não encontrar
  delete stats.null

  // cria um array com todas as linguagens que o stats tem
  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()]
    }))
    // comparar qual linguagem aparece mais
    .sort((a, b) => b.count - a.count)

  return stats
}
