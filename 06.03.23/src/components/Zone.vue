<template>
  <section id="zone">
    <h2>ICI LA PAGE LES PLATS PAR ZONE GEOGRAPHIQUE</h2>
    <p>{{ state }}</p>
  </section>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue';

const stateZones = inject('statezone');



// const stateZones = inject
const state = reactive<any>({
  meals: [],
  stateZones: stateZones
})

console.log(stateZones);



</script>

<style lang="scss" scoped></style>