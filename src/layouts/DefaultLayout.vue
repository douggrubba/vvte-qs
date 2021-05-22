<template>
  <div class="flex flex-row bg-gray-100">
    <!-- Sidebar -->
    <div class="flex flex-col h-0 border-r border-gray-200 bg-white w-64 min-h-screen h-screen pt-12">
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 mx-auto">
          <logo />
        </div>
        <nav class="mt-5 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          <router-link to="/">
            <sidebar-nav-item current>
              <sidebar-icon>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </sidebar-icon>
              Dashboard
            </sidebar-nav-item>
          </router-link>

          <router-link to="/appointments">
            <sidebar-nav-item badge-val="3">
                <sidebar-icon>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </sidebar-icon>
                Appointments
            </sidebar-nav-item>
          </router-link>

          <sidebar-nav-item>
            <sidebar-icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </sidebar-icon>
            Customers
          </sidebar-nav-item>

          <sidebar-nav-item>
            <sidebar-icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </sidebar-icon>
            Finances
          </sidebar-nav-item>

          <sidebar-nav-item badge-val="12">
            <sidebar-icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </sidebar-icon>
            Documents
          </sidebar-nav-item>

          <sidebar-nav-item>
            <sidebar-icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </sidebar-icon>
            Reports
          </sidebar-nav-item>
        </nav>
      </div>
      <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
        <profile-button />
      </div>
    </div>

    <div class="absolute inset-y-0 right-0 left-64 overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Logo from '../components/simple/Logo.vue'
import SidebarIcon from '../components/simple/SidebarIcon.vue'
import ProfileButton from '../components/compound/ProfileButton.vue'
import SidebarNavItem from '../components/compound/SidebarNavItem.vue'

export default {
  components: { Logo, SidebarIcon, SidebarNavItem, ProfileButton, SidebarNavItem }
}
</script>