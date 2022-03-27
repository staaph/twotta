<template>
  <div class="w-full md:w-1/2 h-full overflow-y-scroll">
    <!-- Add Tweet -->
    <div
      class="flex px-5 py-3 items-center border-b border-lighter justify-between"
    >
      <h1 class="text-xl font-bold">Home</h1>
    </div>
    <div class="border-b-8 border-lighter flex px-3 py-3">
      <div class="flex-none">
        <UserIcon class="w-11 h-11" />
      </div>
      <form v-on:submit.prevent="addNewTweet" class="w-full px-3 relative">
        <textarea
          v-model="tweet.content"
          name="tweetContent"
          placeholder="What's up?"
          class="mt-3 pb-3 w-full focus:outline-none resize-none"
        />
        <div class="flex items-center">
          <PhotographIcon
            class="text-lg text-blue mr-4 h-6 w-6 cursor-pointer"
          />
          <PollIcon class="text-lg text-blue mr-4 h-6 w-6 cursor-pointer" />
          <EmojiIcon class="text-lg text-blue mr-4 h-6 w-6 cursor-pointer" />
        </div>
        <button
          type="submit"
          class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
        >
          Twoot
        </button>
      </form>
    </div>
    <!-- End Add Tweet -->
    <!-- Tweet section -->
    <div class="flex flex-col-reverse">
      <div
        v-for="tweet in tweets"
        :key="tweet"
        class="w-full p-4 border-b hover:bg-lighter flex"
      >
        <div class="flex-none mr-3">
          <UserIcon class="h-12 w-12 rounded-full flex-none" />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">User</p>
            <p class="text-sm text-dark ml-2">@TwitterUser</p>
          </div>
          <p class="py-2">
            {{ tweet.content }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <CommentIcon class="w-5 h-5 mr-1 cursor-pointer" />
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <RetweetIcon class="w-5 h-5 mr-1 cursor-pointer" />
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <HeartIcon class="w-5 h-5 mr-1 cursor-pointer" />
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <ShareIcon class="w-5 h-5 mr-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Tweet Section -->
  </div>
</template>

<script>
import UserIcon from './icons/UserIcon.vue';
import PhotographIcon from './icons/PhotographIcon.vue';
import PollIcon from './icons/PollIcon.vue';
import EmojiIcon from './icons/EmojiIcon.vue';
import CommentIcon from './icons/CommentIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import ShareIcon from './icons/ShareIcon.vue';
import RetweetIcon from './icons/RetweetIcon.vue';

export default {
  components: {
    UserIcon,
    PhotographIcon,
    PollIcon,
    EmojiIcon,
    CommentIcon,
    HeartIcon,
    ShareIcon,
    RetweetIcon,
  },
  data() {
    return {
      tweets: [{ content: 'First Tweet!' }],
      tweet: { content: '' },
    };
  },
  methods: {
    addNewTweet() {
      this.tweets.push({ content: this.tweet.content });
      this.tweet = { content: '' };
    },
  },
};
</script>
