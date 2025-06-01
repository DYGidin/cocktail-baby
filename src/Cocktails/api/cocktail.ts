/**
  * Отдельный модуль cocktailApi,
  * который может содержать поиск, добавление или удаление данных
  */
import axios from '@/helpers/axios'
import type { CocktailResponse } from '../types/cocktail/CocktailResponse';

const cocktailApi = {
  async search(value: string): Promise<CocktailResponse> {
    return axios.get(`/search.php?s=${value}`).then((data) => data.data)
  },
};

export {
  cocktailApi
}
