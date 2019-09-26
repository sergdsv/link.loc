<template>
<div class="container">
    <div class=row>
            <div v-for="(comment, index) in comments" :key="index">
            <div :style="indent" class="col-8 shadow-sm p-3 mb-5 bg-white rounded">
                    {{comment.id}}  =====  {{comment.text}}
              </div>
            </div>
                <div class="form-group">
                    <textarea class="form-control" v-model="newComment" id="exampleFormControlTextarea1" rows="3"></textarea>
                      
                      <button class="btn-sm btn-primary" @click="addItem()">Отправить</button>
                </div>
                <!-- <Comment v-if="!comment.replies.length" v-for="(comment, index) in comment.replies" :key="index" :comment="comment" :depth="depth + 1" @addItem="additemPush">
                </Comment> -->
<!-- 
                <div v-for="(comment, index) in comment.replies" :key="index" :depth="depth + 1">
                    <div :style="indent">{{comment.id}}  =====  {{comment.text}}</div>
                      <div v-for="(comment, index) in comment.replies" :key="index" :depth="depth + 1">
                    <div :style="indent">{{comment.id}}  =====  {{comment.text}}</div>
                    
                      <div v-for="(comment, index) in comment.replies" :key="index" :depth="depth + 1">
                    <div :style="indent">{{comment.id}}  =====  {{comment.text}}</div>
                    
                      <div v-for="(comment, index) in comment.replies" :key="index" :depth="depth + 1">
                    <div :style="indent">{{comment.id}}  =====  {{comment.text}}</div>
                </div>
                </div>
                </div>
                </div> -->
                

            <!-- </div> -->
    
<!--        
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
            <div v-if="comment.replies.length">
                <Comment v-for="(comment, index) in comment.replies" :key="index" :comment="comment" :depth="depth + 1" @addItem="additemPush">
                </Comment>
            </div> -->
            

    </div>
</div>
</template>
<script>
import Comment from './Comment.vue';
export default {
    components: {
        Comment
    },
    // props: ['comment'],
    data(){
      return{
        show: false,
        comments: [
            { id: 0, text: 'Comment 1 test', parent_id: 0 },
            { id: 1, text: 'Comment 2 test', parent_id: 0 },
            { id: 2, text: 'Comment 3 test', parent_id: 0 },
            { id: 3, text: 'Comment 4 test', parent_id: 0 },
        ],
        newComment: '',
        commentList: [],
        depth: 0
      }
    },
    name: 'Comment',
    watch: {
    msg: function() {
        // this.commentList.push(this.comment);
      }
    },

    // mounted(){
    //     var app = this;
    //     axios.get('http://link.test/api/docs/comments')
    //         .then(function (response) {
    //         app.comments = response.data.comments
    //         })
    // },

    computed: {
      indent() {
        return { transform: `translate(${this.depth * 30}px)` }
      }
    },
    methods: {
      addItem: function(){
          if (!this.comments[0].replies){
            this.comments[0].replies = []
            console.log('if')
          }
        this.comments[0].replies.push({ id: 0, text: 'Comment 1 test', parent_id: 0 })
        console.log(this.comments[0])
      }
    }

    
}
</script>