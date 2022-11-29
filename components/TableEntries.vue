<template>
  <div>
    <h1>Here are database entries</h1>
    <p>{{ displayData }}</p>
  </div>
</template>

<script setup lang="ts">
import AllEntries from "../server/model/AllEntries.model"

const theEntries = ref(AllEntries.getInstance())
const displayData = theEntries.value.getEntries()
</script>

<style scoped>

</style>