<template>
  <Head>
    <title>Twotta</title>
    <meta name="description" content="Vue 3 Twitter Clone" />
  </Head>

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
import { Head } from '@vueuse/head';

export default {
  components: {
    CreateTweet,
    SideNavbar,
    TrendSidebar,
    Head,
  },
};
</script>
