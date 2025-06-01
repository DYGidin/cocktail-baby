<script setup lang="ts">
import { ref } from 'vue'
import { navItems as cocktailItems } from '@/Cocktails/router/items'
import type { NavItem } from '@/types/navigation/Navitem'
import { useRoute } from 'vue-router'

// собираем меню из модулей
const cocktails = ref<NavItem[]>([
  ...cocktailItems
])

const route = useRoute()
</script>
<template>
  <div class="container">
    <nav class="nav-list">
      <h2>Navigation</h2>
      <ul>
        <li v-for="item in cocktails" :key="item.path">
          <router-link :to="item.path" active-class="is-active">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
    <section class="content">
      <router-view :key="route.path" />
    </section>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: grid;

  max-width: 1024px;
  min-width: calc(360px - var(--containerPadding) * 2);
  gap: 25px;

  @media(min-width:786px) {
    grid-template-columns: 200px 1fr;
  }
}

.is-active {
  font-weight: bold;
}

.nav-list {
  position: sticky;
  top: 0;
  padding: 15px 0;
  height: fit-content;
  z-index: 1;
  background: white;

  ul {
    display: flex;
    gap: 5px;
  }

  @media(min-width:786px) {
    ul {
      flex-direction: column;
    }

    position: sticky;
    top: 15px;
  }
}
</style>