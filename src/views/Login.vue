<template>
  <div>
    <form v-if="!isReg">
      <div>用户名：</div>
      <input type="text" v-model="username"/>
      <div>密码：</div>
      <input type="password" v-model="password"/>
      <div style="margin-top:10px">
      <button type="button" @click="login()" >登录</button>
      <button type="button" @click="reg" style="margin-left:10px;">注册</button>
      </div>
    </form>
    <form v-else>
      <div>用户名：</div>
      <input type="text" v-model="username"/>
      <div>密码：</div>
      <input type="password" v-model="password"/>
      <div>确认密码：</div>
      <input type="password" v-model="repeat" />
      <div style="margin-top:10px">
      <button type="button" @click="sure()">确定</button>
      <button type="button" @click="concle()" style="margin-left:10px">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data(){
 return {
        isReg: false,
        username: '',
        password: '',
        repeat: ''
  }
  },
  methods: {
    login() {
      if(this.username == localStorage.username && this.password == localStorage.password)
      {
        this.$router.push('/home/list')
        }else{
          alert("用户名密码错误！")
        }
    },
    reg() {
      this.isReg = true
    },
    concle() {
      this.isReg = false
    },
    sure() {
      if(this.password == this.repeat ){
        localStorage.setItem("username",this.username),
        localStorage.setItem("password",this.password),
        this.username = '',
        this.password = '',
        this.repeat = '',
        this.isReg = false
      } else{
        alert('密码不一致！')
      }
    }
  }
}
</script>

