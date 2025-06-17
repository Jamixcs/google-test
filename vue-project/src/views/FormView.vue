<script setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)
const formData = reactive({
  email: null,
  password: null,
  confirmPassword: null,
})

function onSubmit() {
  formRef.value.validate().then((success) => {
    if (success) {
      // 第三方登入

      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      })
      google.accounts.id.prompt()

      console.log('submit the login form!')
    } else {
      console.log('submit failed!!!')
    }
  })
}

function handleCredentialResponse() {
  const idToken = response.credential
  console.log('Encoded ID Token:', idToken)
}
</script>

<template>
  <div>
    <q-form ref="formRef" @submit.prevent="onSubmit" class="q-gutter-md">
      <q-input
        color="brown-5"
        outlined
        v-model="formData.email"
        label="Email"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your email',
          (val) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) ||
            'Please type the correct email format',
        ]"
      >
      </q-input>
      <q-input
        color="brown-5"
        outlined
        v-model="formData.password"
        label="Password"
        type="password"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your password',
          (val) => val.length >= 6 || 'The password must be longer than six characters.',
        ]"
      >
      </q-input>
      <q-input
        color="brown-5"
        outlined
        v-model="formData.confirmPassword"
        label="Confirm Password"
        type="password"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your confirm password',
          (val) =>
            val === formData.password ||
            'Please enter the same confirmation password as your password.',
        ]"
      >
      </q-input>
      <q-btn color="brown-5" label="Submit" type="submit" />
    </q-form>
  </div>
</template>

<style lang="scss" scoped></style>
