<template>
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
</template>

<script>
import { mapActions } from 'vuex'
import Highlights from '../compound/Highlights.vue'
import Activities from '../compound/Activities.vue'
import Appointments from '../compound/Appointments.vue'
import OnlineTeammates from '../compound/OnlineTeammates.vue'

export default {
  name: 'home-screen',

  components: { Highlights, Activities, Appointments, OnlineTeammates },

  methods: {
    ...mapActions({
      setUserData: 'user/setUserData'
    })
  },

  mounted() {
    this.setUserData({
      name: 'Tom Cook'
    })
  }
}
</script>
