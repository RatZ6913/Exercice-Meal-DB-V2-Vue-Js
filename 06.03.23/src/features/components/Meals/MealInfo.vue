<template>
  <button @click="emit('display', false)" class="btn btn-primary m-10">Retour vers les plats</button>
  <section>
    <h1>AFFICHAGE MEALINFOS ( peut etre une vue seulement à voir )</h1>
    <p>{{ nameMeal }}</p>

    <template v-for="getMeals in state.mealsInfo">
      <template v-for="meal in getMeals">

          <img v-if="meal.strMealThumb" :src="meal.strMealThumb" alt="">
        <p>{{ meal }}</p>
    </template>
    </template>
    <Ingredients />
    <Recipe />
  </section>
</template>


<script setup lang="ts">
import Ingredients from '@/features/components/Meals/Ingredients.vue';
import Recipe from '@/features/components/Meals/Recipe.vue';
import { fetchMealsByName } from '@/services/meals.service';
import { reactive } from 'vue';

interface MealInfo {
  strMeal: string;
  strMealThumb: Function;
  strYoutube: string;
}

const state = reactive({
  mealsInfo: null as MealInfo | null
})

const props = defineProps<{
  display?: boolean;
  idMeal: Function;
}>();

const nameMeal = props.idMeal();

console.log(nameMeal);

const getMealsByName = async () => {
  state.mealsInfo = await fetchMealsByName(nameMeal);
}

getMealsByName();

const emit = defineEmits<{
  (e: 'display', value: boolean): void;
}>();
console.log(nameMeal);

</script>


<style lang="scss" scoped></style>