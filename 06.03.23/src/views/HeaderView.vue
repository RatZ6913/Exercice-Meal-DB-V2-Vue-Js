<template>
  <header>
    <nav class="d-flex justify-content-space-between mr-20 align-items-center">
      <div>
        <img class="ml-20" src="@/assets/images/logo.jpg" alt="Logo">
      </div>
      <ul class="d-flex">
        <li class="m-10"><a href="/">Home</a></li>
        <li class="m-10"><a href="/">Categories</a></li>
        <li class="m-10"><a href="/">Location</a></li>
        <li class="m-10"><a href="/">Meals</a></li>
      </ul>
    </nav>
  </header>
</template>



<script setup lang="ts">


</script>


<style scoped lang="scss">
nav {
  background-color: var(--gray-3);
  width: 100%;

  img {
    border-radius: 50px;
    width: 100px;
    height: 100px;
  }

  a {
    color: var(--gray-1);
  }
}
</style>