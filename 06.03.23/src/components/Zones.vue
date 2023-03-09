<template>
  <section id="container" class="mt-20">
    <h1>Voici les plats classés par pays</h1>
    <p>Envie de voyager, entre les saveurs ? Allez-y faîtes votre choix</p>

    <div id="box-cat">
      <template v-for="zone in state.zones.meals">
        <button v-if="zone.strArea === 'Unknown' === false" 
        class="btn-cat m-10 btn btn-danger">{{ zone.strArea }}</button>
      </template>
    </div>
  </section>
</template>


<script setup lang="ts">
import { fetchMealsZones } from '@/services/meals.service';
import { reactive } from 'vue';

const state = reactive<any>({
  zones: [],
})

const fetch = (async () => {
  try {
    state.zones = await fetchMealsZones();
  } catch (error) {
    console.log(error);
  }
  return;
})();

console.log(state);


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

  #box-cat {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    background-color: var(--gray-2);

    .btn-cat {
      width: 250px;
      box-shadow: 1px 2px 1px var(--gray-1);
    }
  }
}
</style>