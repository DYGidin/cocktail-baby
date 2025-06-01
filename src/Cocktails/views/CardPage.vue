<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCocktailStore } from '../stores/cocktail'
import ItemComponent from '../components/ItemComponent.vue'

const route = useRoute()
const store = useCocktailStore()
const isLoading = ref(false)

const getCocktailCard = async () => {
  try {
    isLoading.value = true
    await store.search(route?.name as string)
  } catch (error) {
    // можно выводить какой нибудь nofitication об ошибке
    console.error(`Fetch data error: `, error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getCocktailCard()
})
</script>
<template>
  <p v-if="isLoading">
    Please wait...
  </p>
  <ul>
    <li v-for="item in store.rows" :key="item.idDrink">
      <item-component :item="item" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: grid;
  gap: 15px;
}
</style>