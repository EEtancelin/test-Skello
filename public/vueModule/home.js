var data = { counter: 0 };
Vue.component('thumbs', {
  template: '<div class="fs-l glyphicon glyphicon-thumbs-up" aria-hidden="true"v-bind:class="{liked: this.isLiked}" v-on:click="toogleLike"></div>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return { isLiked: false }
  },
  methods: {
    toogleLike: function(){
        this.isLiked = !this.isLiked;
      // some code to filter users
    }
  }
})

Vue.component('comment', {
  template: '<div class=""><li class="comments list-group-item text-left pd-s"><img :src="this.imgSrc()" alt="user" class="avatar"><span class="ml-m">{{ comment }}</span></li></div>',
  props: ['comment'],
  methods:{
    imgSrc: function(){
      // Escape hack to by-passs browser cache.
      var array = [1.1,1.2,1.3,1.4,1.5,1.6]
      var proportion = array[parseInt(array.length * Math.random())] ;
      return("http://lorempixel.com/" + parseInt(400 * proportion) + "/" + parseInt(200 * proportion) + "/people/")
    }
  }
})

Vue.component('commentslist', {
  template: '<div><ul class="list-group list-group-flush comments"> <div v-for="comment in this.comments" :key="comment"> <comment :comment="comment"></comment></div></ul><addComment v-bind:addComment="addComment" ></addComment ></div>',
  props: ['comments'],
  methods: {
    addComment: function(comment) {
      this.comments.push(comment);
      this.$forceUpdate();
    }
  }
})

Vue.component('addComment', {
  props: ['addComment'],
  template: '<form class=" mx-s space-btw"><input ref="my_input" class="aa form-control"></input><button @click.prevent="submitComment()" class="btn ml-s" >add comment</button></form>',
  methods:{
    submitComment () {
      this.addComment(this.$refs.my_input.value);
      var inputs = $('.aa')
      inputs.each( function(form) {
        inputs[form].value = "";
      }) ;
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
