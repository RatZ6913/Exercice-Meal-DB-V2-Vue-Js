<template>
    <button @click="emit('display', false)" class="btn btn-primary m-10">Retour vers les plats</button>
  <section>
    <h1>AFFICHAGE MEALINFOS ( peut etre une vue seulement à voir )</h1>
    <Ingredients />
    <Recipe />
  </section>
</template>


<script setup lang="ts">
import Ingredients from '@/features/components/Meals/Ingredients.vue';
import Recipe from '@/features/components/Meals/Recipe.vue';

const props = defineProps<{
  display?: boolean;
  nameMeal: Function;
}>();

const emit = defineEmits<{
  (e: 'display', value: boolean): void;
}>();

console.log(props.nameMeal());


</script>


<style lang="scss" scoped></style>