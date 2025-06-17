<script setup lang="ts">
import { ref, onMounted } from 'vue'

const googleSignInButton = ref<HTMLElement | null>(null)

function handleCredentialResponse(response: any) {
  const idToken = response.credential
  console.log('Encoded ID Token:', idToken)
}

onMounted(() => {
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    })

    console.log('googleSignInButton.value:', googleSignInButton.value)

    if (googleSignInButton.value) {
      google.accounts.id.renderButton(googleSignInButton.value, {
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        width: '280',
      })
    } else {
      console.error('Google Sign-In button container not found (after onMounted check)!')
    }
  } else {
    console.error(
      'Google Identity Services library not loaded. Check public/index.html script tag.',
    )
  }
})
</script>

<template>
  <div>
    <div ref="googleSignInButton"></div>
  </div>
</template>

<style lang="scss" scoped></style>
