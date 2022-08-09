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
            <ui-input-field v-model="search" placeholder="Введите ID документа"/>
          </div>
          <div class="items">
            Результаты
            <list-item
                v-for="doc in list"
                :doc="doc"
                :key="doc.id"
                @click="setDoc(doc)"
            />
          </div>
        </div>
        <div class="item-table-detail">
          <detail-doc v-if="doc" :doc="doc" @download="downloadDoc"/>
          <div>Выберите документ, чтобы посмотреть его содержиое</div>
        </div>
      </div>
    </ui-container>
  </div>
</template>
<script lang="ts">
import UiContainer from "../ui/ui-container.vue"
import UiInputField from "../ui/ui-input-field.vue"
import DetailDoc from "../doc/detail-doc.vue"
import ListItem from "../doc/list-item.vue"
import { useDoc, State, DocInfo } from '../../stores/doc'
import {computed, ref, watch} from "vue";
import type { Ref } from 'vue'

export default {
  components: {ListItem, DetailDoc, UiInputField, UiContainer},
  setup() {
    const store:State = useDoc()
    const search = ref('')
    let searchTimerId:number
    const doc: Ref<boolean | DocInfo> = ref(false)
    useDoc().getDocs()

    function setDoc(item: DocInfo) {
      doc.value = item
    }

    watch(() => search.value, (query) => {
      clearTimeout(searchTimerId)
      searchTimerId = setTimeout(async () => {
        await useDoc().getDocs(query)
      }, 500)
    })

    async function downloadDoc(item: DocInfo) {
      const result = await fetch(item.image)
      const blobPart = await result.blob()
      const blob = new Blob([blobPart], { type: blobPart.type })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = item.name
      link.click()
      URL.revokeObjectURL(link.href)
    }

    return { list: computed(() => store.docList), doc, setDoc, search, downloadDoc }
  },
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
