<template>
  <div class="px-4 py-5 sm:p-6">
    <dt class="text-base font-normal text-gray-900">
      {{ title }}
    </dt>
    <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
      <div class="flex items-baseline text-2xl font-semibold text-gray-600">
        {{ newVal }}
        <span class="ml-2 text-sm font-medium text-gray-500">
          from {{ oldVal }}
        </span>
      </div>

      <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 md:mt-2 lg:mt-0">
        <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" v-if="direction === 'up'">
          <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" v-if="direction === 'down'">
          <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="sr-only" v-if="direction === 'up'">
          Increased by
        </span>
        <span class="sr-only" v-if="direction === 'down'">
          Descreased by
        </span>
        12%
      </div>
    </dd>
  </div>
</template>

<script>
export default {
  name: 'highlight-item',

  props: ['title', 'newVal', 'oldVal', 'direction']
}
</script>