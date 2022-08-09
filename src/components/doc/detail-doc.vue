<template>
  <div class="detail-docs ">
    <img :src="doc.image" alt="doc" />
    <div>
       <div>{{ doc.name }}</div>
       <ui-button @click="$emit('download', doc)">Скачать</ui-button>
       <ui-button>Удалить</ui-button>
      <div>
        <div>Описание:</div>
        {{ doc.description }}
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "../ui/ui-button.vue"

export default {
  name: 'DetailDocs',
  components: {UiButton},
  props: {
    doc: Object
  }
}
</script>

<style scoped>
.detail-docs {

}

.detail-docs img {
  float: left;
  max-width: 424px;
}
</style>