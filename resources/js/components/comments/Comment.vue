<template>
<div class="container">
    <div class=row>
            <div v-for="(comment, index) in comments" :key="index">
                <Comment :comment="comment" :depth="0"></Comment>
            

            <div :style="indent" class="col-8 shadow-sm p-3 mb-5 bg-white rounded">
                    {{comment.id}}  =====  {{comment.text}}
            <form>
              <div class="float-right">
                      
                      <div class="form-group">
                        <textarea class="form-control" v-model="newComment" id="exampleFormControlTextarea1" rows="3" v-show="show"></textarea>
                      </div>
                      <button class="btn-sm btn-primary" @click="show = !show" v-show="show == false">Ответить</button>
                      <button class="btn-sm btn-primary" @click="addItem(comment.id, newComment); show = !show" v-show="show == true">Отправить</button>

              </div>
            </form>        

            </div>
            <Comment v-for="(comment, index) in comment.replies" :key="index" :comment="comment" :depth="depth + 1" @addItem="additemPush">
            
            </Comment>
            </div>
    </div>
</div>
</template>
<script>
import Comment from './Comment.vue';
export default {
    components: {
        Comment
    },
    props: ['comment', 'depth'],
    data(){
      return{
        show: false,
        newComment: '',
        commentList: []
      }
    },
    name: 'Comment',
    watch: {
    msg: function() {
        // this.commentList.push(this.comment);
      }
    },

    mounted(){
        var app = this;
        axios.get('http://link.test/api/docs/comments')
            .then(function (response) {
            app.comments = response.data.comments
            })
    },

    computed: {
      indent() {
        return { transform: `translate(${this.depth * 30}px)` }
      }
    },
    methods: {
       addItem: function (id, newComment) {
          this.$emit('addItem', id, newComment)
          // console.log(newComment)
      },
      additemPush: function(id, newComment){
        this.comment.push({name: 'efds', id: 1})
        console.log(this.comment.id)
        console.log(newComment)
      }
    }

    
}
</script>