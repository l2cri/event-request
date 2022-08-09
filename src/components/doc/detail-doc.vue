<template>
  <div class="detail-docs ">
    <img src="../../assets/no-image.svg" alt="doc" />
    <div>
       <div>Документ 2</div>
       <ui-button>Скачать</ui-button>
       <ui-button>Удалить</ui-button>
      <div>
        <div>Описание:</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "../ui/ui-button.vue"

export default {
  name: 'DetailDocs',
  components: {UiButton}
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