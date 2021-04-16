<template>
  <a href="#" :class="cssStr">
    <slot></slot>
    <badge v-if="badgeVal">{{ badgeVal }}</badge>
  </a>
</template>

<script>
import Badge from '../simple/Badge.vue'

const activeCss = 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
const inactiveCss = 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md'

export default {
  name: 'sidebar-nav-item',

  components: { Badge },

  props: ['current', 'badgeVal'],

  computed: {
    cssStr () {
      return typeof this.current != 'undefined' ? activeCss : inactiveCss
    }
  }
}
</script>