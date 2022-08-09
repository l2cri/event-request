<template>
  <div class="list-item">
      <img :src="doc.image" alt="doc" />
    <div>
      <div>{{ doc.name }}</div>
      <div>12 MB</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    doc: Object
  }
}
</script>

<style scoped>
.list-item img {
  float: left;
  width: 70px;
}
</style>