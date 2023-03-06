<template>
  <section id="container" class="mt-20">
    <h1>La partie Catégories</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque.</p>
    <!-- <p v-for=" category in meals.strCategory">{{ meals.strCategory}}</p> -->
    <p>{{ meals }}</p>
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const meals = ref({});

const categories = [];

async function getFetch() {
  let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  let showData = await getData.json();
  return showData.meals[0];
}

// (async () => {
//   meals.value = await getFetch();
// })();


for (let index = 0; index < 15; index++) {
  meals.value = await getFetch();
  console.log(meals.value);
}



</script>


<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-1);
  width: 100%;

  h1 {
    color: brown;
  }
}
</style>