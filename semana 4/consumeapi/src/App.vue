<template>
    <Navbar brandName="Countries API"/>
  <router-view/>
</template>

<script>
import Navbar from '../src/components/navbar/index.vue';

export default({
  components:({
    Navbar
  })
})
</script>