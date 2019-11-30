<template>
  <div class="editor">
    <h1>This is an editor page</h1>
     <div class="editcontent">
         <quillEditor  v-model="content"
               :options="editorOption"
               @blur="onEditorBlur($event)"
               @focus="onEditorFocus($event)"
               @change="onEditorChange($event)">
         </quillEditor>
   </div>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'editor',
  data: function () {
    return {
      content: '',
      editorOption: {}
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorBlur (editor) { // 失去焦点事件
    },
    onEditorFocus (editor) { // 获得焦点事件
    },
    onEditorChange ({ editor, html, text }) { // 编辑器文本发生变化
      // this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.content)
    }
  }
}

</script>

<style>
    .quill-editor {
        height: 350px;
    }
    .editcontent{
        width: 80%;
        padding: 1%;
        margin-left: 8%;
    }
</style>
