<template>
  <div class="p-12">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>
    <dl class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
      <highlight-item title="Total Subscribers" newVal="71,897" oldVal="70,946" direction="up" />
      <highlight-item title="Avg. Open Rate" newVal="58.16%" oldVal="56.14%" direction="up" />
      <highlight-item title="Avg. Click Rate" newVal="24.57%" oldVal="28.62%" direction="down" />
    </dl>
  </div>
</template>

<script>
import HighlightItem from './HighlightItem.vue'

export default {
  components: { HighlightItem },

  name: 'highlights',

  props: ['title']
}
</script>
