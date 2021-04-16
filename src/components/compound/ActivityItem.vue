<template>
  <li>
    <div :class="isLast ? 'relative' : 'relative pb-8'">
      <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" v-if="!isLast"></span>
      <div class="relative flex space-x-3">
        <div>
          <span class="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white">
            <slot name="icon"></slot>
          </span>
        </div>
        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p class="text-sm text-gray-500">{{ action }} <a href="#" class="font-medium text-gray-900">{{ subject }}</a></p>
          </div>
          <div class="text-right text-sm whitespace-nowrap text-gray-500">
            <time :datetime="datetime">{{ date }}</time>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'activity-item',

  props: {
    date: String,
    action: String,
    isLast: {
      type: Boolean,
      default: false
    },
    subject: String,
    datetime: String
  }
}
</script>
