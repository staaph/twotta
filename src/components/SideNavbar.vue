<template>
  <div
    class="border-r lg:w-1/3 px-2 lg:pl-12 py-4 border-lighter flex flex-col"
  >
    <!-- Twotta Logo -->
    <a
      href="/"
      class="h-12 w-12 text-blue hover:text-black text-center justify-center items-center flex cursor-pointer"
    >
      <TwottaIcon class="w-10 h-10" />
    </a>

    <!-- Nav Items -->
    <nav class="pt-6 flex flex-col items-start">
      <div
        v-for="tab in tabs"
        @click="id = tab.id"
        :key="tab.id"
        :class="`flex items-center px-4 py-3 ${
          id === tab.id ? 'text-blue' : ''
        }`"
      >
        <a class="flex items-center cursor-pointer group">
          <component
            :is="tab.icon"
            class="h-6 w-6 duration-300 group-hover:scale-75 scale-110 lg:text-black"
          />
          <span class="text-lg px-4 hidden lg:block">{{ tab.title }}</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import TwottaIcon from './icons/TwottaIcon.vue';
import BookmarkIcon from './icons/BookmarkIcon.vue';
import HashtagIcon from './icons/HashtagIcon.vue';
import HomeIcon from './icons/HomeIcon.vue';
import ListsIcon from './icons/ListsIcon.vue';
import MessagesIcon from './icons/MessagesIcon.vue';
import MoreIcon from './icons/MoreIcon.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import UserIcon from './icons/UserIcon.vue';

export default {
  components: {
    TwottaIcon,
  },

  data() {
    return {
      tabs: [
        { icon: HomeIcon, title: 'Home', id: 'home' },
        { icon: HashtagIcon, title: 'Explore', id: 'explore' },
        { icon: NotificationIcon, title: 'Notifications', id: 'notifications' },
        { icon: MessagesIcon, title: 'Messages', id: 'messages' },
        { icon: BookmarkIcon, title: 'Bookmarks', id: 'bookmarks' },
        { icon: ListsIcon, title: 'Lists', id: 'lists' },
        { icon: UserIcon, title: 'Profile', id: 'profile' },
        { icon: MoreIcon, title: 'More', id: 'more' },
      ],
      id: 'home',
    };
  },
};
</script>
