<template>
  <img class="inline-block h-9 w-9 rounded-full" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: 'avatar',

  props: ['src', 'alt']
}
</script>