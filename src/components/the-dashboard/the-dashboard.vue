<template>
  <div class="the-dashboard">
    <div class="the-dashboard-header">
      <h1>MyApp</h1>
      <div>Username</div>
    </div>
    <ui-container>
      <div class="the-dashboard-table">
        <div class="item-table-list">
          <div>
            Поиск документа
            <ui-input-field  placeholder="Введите ID документа"/>
          </div>
          <div class="items">
            Результаты
            <list-item />
            <list-item />
            <list-item />
          </div>
        </div>
        <div class="item-table-detail">
          <detail-doc />
        </div>
      </div>
    </ui-container>
  </div>
</template>
<script>
import UiContainer from "../ui/ui-container.vue"
import UiInputField from "../ui/ui-input-field.vue"
import DetailDoc from "../doc/detail-doc.vue"
import ListItem from "../doc/list-item.vue"

export default {
  components: {ListItem, DetailDoc, UiInputField, UiContainer}
}
</script>

<style scoped>
.the-dashboard {
  width: 100%;
}
.the-dashboard-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.the-dashboard-table{
  display: flex;
}

.item-table-list {
  min-width: 282px;
  display: flex;
  flex-direction: column;
}

.item-table-list .items {
  display: flex;
  flex-direction: column;
}
</style>
