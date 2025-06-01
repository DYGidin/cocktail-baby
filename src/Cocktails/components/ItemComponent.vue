<script setup lang="ts">
import type { Cocktail } from '../types/cocktail/Cocktail';
defineProps<{
  item: Cocktail
}>()
</script>
<template>
  <div class="item">
    <article>
      <div class="description">
        <h1 class="header">{{ item.strDrink }}</h1>

        <p class="category">
          <strong>Category:</strong> {{ item.strCategory }}
        </p>
        <p class="category">
          <strong>Glass:</strong> {{ item.strGlass }}
        </p>

        <h2 class="header">Instructions:</h2>
        <ol>
          <li v-for="instruction in item.strInstructions" :key="instruction">
            {{ instruction }}
          </li>
        </ol>

        <h2 class="header">List of Ingredients:</h2>
        <div class="columns">
          <ul>
            <li v-for="ingredient in item.strIngredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
          <ul>
            <li v-for="measure in item.strMeasures" :key="measure">
              {{ measure }}
            </li>
          </ul>
        </div>
      </div>

      <figure class="thumb">
        <img :src="item.strDrinkThumb" :alt="item.strDrink" loading="lazy">
      </figure>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.item {
  container-name: parent-block;
  container-type: inline-size;
}

article {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 15px;
  padding: 15px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;

}

img {
  max-width: 200px;
}

strong {
  font-weight: 600;
}

.header {
  margin: 15px 0;
}

.columns {
  display: grid;
  grid-template-columns: repeat(2, 140px);
  gap: 15px;
}

.columns li+li {
  border-top: 1px solid #cdcdcd;
  margin-bottom: 5px;
}

@container parent-block (width < 600px) {
  article {
    grid-template-columns: 1fr;
  }

  .thumb {
    grid-area: 1 / 1;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: top;
  }
}
</style>