import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cocktail } from '../types/cocktail/Cocktail'
import { cocktailApi } from '../api/cocktail'

export const useCocktailStore = defineStore('cocktail', () => {
  const rows = ref<Cocktail[]>([])
  const cachedData = new Map()

  const getMatchValues = (keyPhrase: string, data: { [key: string]: any } = {}): any[] => {
    const result: any[] = []

    for (const key of Object.keys(data)) {
      const value = data[key]
      if (key.includes(keyPhrase) && value) {
        result.push(value)
      }
    }

    return result
  }

  const search = async (value: string): Promise<void> => {
    try {
      const isCacheExists = cachedData.has(value)
      if (isCacheExists) {
        rows.value = cachedData.get(value)
        return
      }

      if (!isCacheExists) {
        const { drinks } = await cocktailApi.search(value)
        rows.value = drinks.map((item: Cocktail) => {
          // может быть усложнил, но подумал, что может быть разное кол-во ингредиентов и инструкций для каждого коктейля.
          // Решил сделать поиск по совпадению
          return {
            ...item, ...{
              strIngredients: getMatchValues('strIngredient', item),
              strInstructions: getMatchValues('strInstructions', item),
              strMeasures: getMatchValues('strMeasure', item),
            }
          }
        })
        cachedData.set(value, rows.value)
      }

    } catch (error) {
      throw error
    }
  }

  const resetCache = () => {
    cachedData.clear()
  }

  return {
    rows,
    search,
    resetCache
  }
})