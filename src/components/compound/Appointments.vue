<template>
  <div class="px-12">
    <h3 class="mb-5 text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <appointment-item title="Meeting" category="Work" privacy="Public" location="Virtual" date="January 7, 2020" datetime="2020-01-07" />
        <appointment-item title="Meeting" category="Work" privacy="Public" location="Virtual" date="January 6, 2020" datetime="2020-01-06" />
        <appointment-item title="Meeting" category="Work" privacy="Public" location="Virtual" date="January 5, 2020" datetime="2020-01-05" />
        <appointment-item title="Meeting" category="Work" privacy="Public" location="Virtual" date="January 4, 2020" datetime="2020-01-04" />
      </ul>
    </div>
  </div>
</template>

<script>
import AppointmentItem from './AppointmentItem.vue'

export default {
  name: 'appointments',

  components: { AppointmentItem },

  props: ['title']
}
</script>
