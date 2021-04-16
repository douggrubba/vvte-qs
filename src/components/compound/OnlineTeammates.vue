<template>
  <h3 class="mb-5 text-lg leading-6 font-medium text-gray-900">
    {{ title }}
  </h3>
  <div class="flex">
    <teammate
      name="Leslie Alexander"
      position="Co-Founder / CEO"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=uNthX00zQD&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />
    <teammate
      name="Leslie Alexander"
      position="Co-Founder / CEO"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=uNthX00zQD&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />
    <teammate
      name="Leslie Alexander"
      position="Co-Founder / CEO"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=uNthX00zQD&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />
    <teammate
      name="Leslie Alexander"
      position="Co-Founder / CEO"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=uNthX00zQD&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />
  </div>
</template>

<script>
import Teammate from '../compound/Teammate.vue'

export default {
  name: 'online-teammates',

  components: { Teammate },

  props: ['title']
}
</script>
