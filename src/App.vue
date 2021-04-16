<template>
  <default-layout>
    <div class="flex flex-col">
      <highlights title="Last 30 Days" />

      <div class="flex flex-row">
        <activities title="Activities" />
        <appointments title="Upcoming Appointments" />
      </div>
      
      <div class="flex flex-col p-12">
        <online-teammates title="Teammates Online" />
      </div>
    </div>
  </default-layout>
</template>

<script>
import Avatar from './components/simple/Avatar.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import Highlights from './components/compound/Highlights.vue'
import Activities from './components/compound/Activities.vue'
import Appointments from './components/compound/Appointments.vue'
import OnlineTeammates from './components/compound/OnlineTeammates.vue'

export default {
  components: { Avatar, Highlights, DefaultLayout, Activities, Appointments, OnlineTeammates }
}
</script>