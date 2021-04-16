<template>
  <div class="mr-4 relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
    <div class="flex-shrink-0">
      <div>
        <span class="animate-pulse absolute top-4 left-4 block h-4 w-4 rounded-full ring-2 ring-white bg-gray-400"></span>
        <avatar :src="image" alt="avatar" />
      </div>
    </div>
    <div class="flex-1 min-w-0">
      <a href="#" class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <p class="text-sm font-medium text-gray-900">
          {{ name }}
        </p>
        <p class="text-sm text-gray-500 truncate">
          {{ position }}
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import Avatar from '../simple/Avatar.vue'

export default {
  name: 'teammate',

  props: ['name', 'position', 'image'],

  components: { Avatar }
}
</script>
