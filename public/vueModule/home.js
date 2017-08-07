var data = { counter: 0 };
Vue.component('thumbs', {
  template: '<button v-bind:class="{liked: isliked}" v-on:click="toogleLike">{{ isLiked }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return { isLiked: true }
  },
  methods: {
        toogleLike: function(){
            this.isLiked = !this.isLiked;
          // some code to filter users
        }
      }
})


var app = new Vue({
  el: '.container',
  data: {
    posts: {
        a: {
          liked: true
        }
      }
  },

  methods: {
    toggleLike: function(postId){
      this.posts.postId.liked = !this.posts.postId.liked
    }
  }
})
