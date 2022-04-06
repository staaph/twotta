<template>
  <div id="app" class="flex h-screen w-screen">
    <SideNavbar />
    <CreateTweet />
    <TrendSidebar />
  </div>
</template>

<script>
import CreateTweet from '@/components/CreateTweet.vue';
import SideNavbar from '@/components/SideNavbar.vue';
import TrendSidebar from '@/components/TrendSidebar.vue';
export default {
  components: {
    CreateTweet,
    SideNavbar,
    TrendSidebar,
  },
  metaInfo: {
    title: 'Twotta',
    content: 'A Vue 3 Twitter Clone',
  },
};
</script>
