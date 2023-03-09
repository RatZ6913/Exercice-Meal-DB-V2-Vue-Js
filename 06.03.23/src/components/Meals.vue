<template>
  <section id="container" class="mt-20">
    <h1>Voici la liste des plats</h1>
    <p>Quelles plats vous intéresse ? Faîtes votre choix</p>
    <small>Les plats sont listés par lettres</small>

    <section id="box-meals">
      <template v-for="letter in arrLetters">
        <div class="box-by-letters m-20 d-flex justify-content-center flex-column align-items-center">
          <h3>{{ letter }}</h3>
          <ul>
            <template v-for="mealsByLetter in state.mealsByLetter.meals">
              <template v-if="mealsByLetter.strMeal.charAt(0).toLowerCase() === letter">
                <li class="nameMeals">{{ mealsByLetter.strMeal }}</li>
              </template>
            </template>
          </ul>
        </div>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { fetchMealsByLetters } from '../services/meals.service';

const arrLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const state = reactive<any>({
  mealsByLetter: [],
  letters: arrLetters,
  results: []
})

const fetchMealsByLetter = (async () => {
  try {
    // for (const letter of state.letters) {
      state.mealsByLetter = await fetchMealsByLetters('a');
      // state.results.push(state.mealsByLetter)
    // }
  } catch (error) {
    console.log(error);
  }
})();

console.log(state.mealsByLetter);



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

  #box-meals {
    width: 60%;
  }

  .box-by-letters {
    border: var(--border)
  }

  .nameMeals {
    color: var(--primary-1);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>