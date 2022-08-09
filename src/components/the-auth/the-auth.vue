<template>
  <div class="the-auth">
    <h1>MyApp</h1>
    <ui-container>
      АВТОРИЗАЦИЯ
      <form @submit.prevent="submitForm">
        <ui-input-field
            title="Email"
            placeholder="test@test.com"
            v-model="state.email"
            :error="v$.email.$errors.length"
            :disabled="pending"
        />
        <ui-input-field
            title="Пароль"
            placeholder="*********"
            type="password"
            v-model="state.password"
            :error="v$.password.$errors.length"
            :disabled="pending"
        />
        <p>{{ errorMessage }}</p>
        <ui-button type="submit" :loading="pending">Войти</ui-button>
      </form>
    </ui-container>
  </div>
</template>

<script>
import {reactive, ref, watch} from "vue"
import useVuelidate from '@vuelidate/core'
import rules from './validator'
import UiContainer from "../ui/ui-container.vue"
import UiInputField from "../ui/ui-input-field.vue"
import UiButton from "../ui/ui-button.vue"

export default {
  name: "TheAuth",
  components: {UiButton, UiContainer, UiInputField},
  setup() {
    const state = reactive({ email: '', password: '' })
    const errorMessage = ref('')
    const pending = ref(false)
    const $externalResults = ref({})

    const v$ = useVuelidate(rules, state, { $externalResults })

    const doAsyncStuff = async function () {
      return new Promise((resolve) => {
        setTimeout(() => resolve(false), 1000)
      })
    }

    const submitForm = async function () {
      v$.value.$clearExternalResults()
      pending.value = true
      if (!await v$.value.$validate()) {
        pending.value = false
        return
      }
      const success = await doAsyncStuff()
      const serverErrors =  success ? [] : ['Неверный Email или Пароль']
      pending.value = false

      $externalResults.value = {
        email: serverErrors,
        password: serverErrors,
      }
    }

    watch(() => v$, (error) => {
      const firstError = error.value.$errors[0]
      errorMessage.value = firstError && firstError.$message
    }, { deep: true })

    return { state, v$, submitForm, errorMessage, pending }
  }
}
</script>

<style scoped>
  .the-auth {
    width: 585px;
    margin: 0 auto;
  }
  .the-auth h1 {
    text-align: center;
  }
</style>