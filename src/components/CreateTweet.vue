<template>
  <div class="w-full h-full overflow-y-scroll md:w-7/12">
    <!-- Add Tweet -->
    <div
      class="flex items-center justify-between px-5 py-3 border-b border-lighter"
    >
      <h1 class="text-xl font-bold">Home</h1>
    </div>
    <div class="px-3 py-3 border-b-8 border-lighter sm:flex">
      <div>
        <UserIcon class="w-11 h-11" />
      </div>
      <form @submit.prevent="addNewTweet" class="relative w-full px-3">
        <textarea
          v-model="tweet.content"
          maxlength="140"
          name="tweetContent"
          placeholder="What's up?"
          class="w-full pb-6 mt-1 resize-none sm:mt-3 focus:outline-none"
          @keyup.enter.exact="addNewTweet"
        />
        <div class="flex flex-row pt-4">
          <PhotographIcon
            class="w-6 h-6 mr-1 text-lg cursor-pointer text-blue sm:mr-4"
          />
          <PollIcon
            class="w-6 h-6 mr-1 text-lg cursor-pointer text-blue sm:mr-4"
          />
          <EmojiIcon class="w-6 h-6 text-lg cursor-pointer text-blue" />
          <p
            class="absolute bottom-0.5 right-20 pr-1 sm:p-0 sm:right-24 text-xs sm:text-sm"
          >
            {{ characterCount }} / 140
          </p>
        </div>
        <button
          type="submit"
          class="absolute bottom-0 right-0 h-10 px-4 font-semibold text-white scale-90 rounded-full bg-blue hover:bg-darkblue focus:outline-none"
        >
          Twoot
        </button>
      </form>
    </div>
    <!-- End Add Tweet -->
    <!-- Tweet section -->
    <div class="flex flex-col-reverse break-all">
      <div
        v-for="tweet in tweets"
        :key="tweet"
        class="flex w-full p-4 border-b hover:bg-lighter"
      >
        <div class="flex-none mr-3">
          <UserIcon class="flex-none w-12 h-12 rounded-full" />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">User</p>
            <p class="ml-2 text-sm text-dark">@TwitterUser</p>
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
import UserIcon from './icons/UserIcon.vue'
import PhotographIcon from './icons/PhotographIcon.vue'
import PollIcon from './icons/PollIcon.vue'
import EmojiIcon from './icons/EmojiIcon.vue'
import CommentIcon from './icons/CommentIcon.vue'
import HeartIcon from './icons/HeartIcon.vue'
import ShareIcon from './icons/ShareIcon.vue'
import RetweetIcon from './icons/RetweetIcon.vue'

export default {
  components: {
    UserIcon,
    PhotographIcon,
    PollIcon,
    EmojiIcon,
    CommentIcon,
    HeartIcon,
    ShareIcon,
    RetweetIcon
  },
  data() {
    return {
      tweets: [{ content: 'First Tweet!' }],
      tweet: { content: '' }
    }
  },
  methods: {
    addNewTweet() {
      if (this.tweet.content.trim().length != 0) {
        this.tweets.push({ content: this.tweet.content })
        this.tweet = { content: '' }
      } else {
        return
      }
    }
  },
  computed: {
    characterCount() {
      return this.tweet.content.length
    }
  }
}
</script>
