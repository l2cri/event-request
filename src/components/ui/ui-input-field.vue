<template>
  <div class="el-input-field" :class="{error}">
    <label v-if="title">{{ title }}</label>
    <input
        v-bind="attrs"
        :value="modelValue"
        @input="updateValue"
    />
  </div>
</template>

<script setup>
import {useAttrs} from "vue"

defineProps({
  modelValue: { default: null },
  title: String,
  error: [Number, Boolean],
})

const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.el-input-field {

}
.el-input-field label{

}
.el-input-field input {
  border: 2px solid #e9ecef;
  padding: 16px 24px;
  border-radius: 8px;
}

.el-input-field.error input {
  border-color: #dc3545;
}
</style>