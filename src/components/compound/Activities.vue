<template>
  <div class="flow-root ml-12">
    <h3 class="mb-5 text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>
    <ul class="bg-white shadow rounded-lg p-6">
      <activity-item date="Sep 20" datetime="2020-09-20" action="Applied to" subject="Front End Developer">
        <template v-slot:icon>
          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </template>
      </activity-item>

      <activity-item date="Sep 22" datetime="2020-09-22" action="Advanced to phone screening by" subject="Bethany Blake">
        <template v-slot:icon>
          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </template>
      </activity-item>

      <activity-item date="Sep 28" datetime="2020-09-28" action="Completed phone screening with" subject="Martha Gardner">
        <template v-slot:icon>
          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
      </activity-item>

      <activity-item date="Sep 30" datetime="2020-09-30" action="Advanced to interview by" subject="Bethany Blake">
        <template v-slot:icon>
          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
      </activity-item>

      <activity-item date="Oct 4" datetime="2020-10-04" action="Completed interview with" subject="Katherine Snyder" is-last>
        <template v-slot:icon>
          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
      </activity-item>
      
    </ul>
  </div>
</template>

<script>
import ActivityItem from './ActivityItem.vue'

export default {
  name: 'activities',

  props: ['title'],

  components: { ActivityItem }
}
</script>