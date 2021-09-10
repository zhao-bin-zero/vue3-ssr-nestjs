<template>
  <div class="user">
    User Page
    <div v-if="isLogin" class="info">
      <el-card class="box-card">
        <div>User logged in</div>
        <div>UserName: {{ userInfo.name }}</div>
      </el-card>
    </div>
    <el-form v-else class="form">
      <el-form-item label="UserName">
        <el-input v-model="userName" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button v-loading="loading" type="success" @click="submit"> Submit </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'User',
  setup() {
    console.log('setup', 'user');
  },
  // asyncData() {
  //   console.log('asyncData', 'user');
  // },
  data() {
    console.log('data', 'user');
    return {
      userName: '',
      password: '',
      loading: false
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
    isLogin(): boolean {
      return this.$store.getters['user/isLogin'];
    }
  },
  beforeCreate() {
    console.log('beforeCreate', 'user');
  },
  created() {
    console.log('created', 'user');
  },
  beforeMount() {
    console.log('beforeMount', 'user');
  },
  mounted() {
    console.log('mounted', 'user');
  },
  beforeUnmount() {
    console.log('beforeUnmount', 'user');
  },
  unmounted() {
    console.log('unmounted', 'user');
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.$notify({
          type: 'error',
          title: 'Error',
          message: 'Username is required'
        });
        return;
      }
      if (!this.password) {
        this.$notify({
          type: 'error',
          title: 'Error',
          message: 'Password is required'
        });
        return;
      }
      this.loading = true;
      window.setTimeout(() => {
        this.$store.commit('user/updateUser', {
          name: this.userName,
          userId: 1,
          token: Math.random().toString(36).slice(-8)
        });
        this.loading = false;
      }, 1500);
    }
  }
});
</script>

<style lang="scss">
.form {
  width: 450px;
  margin: 0 auto;
}
.box-card {
  width: 480px;
  margin: 20px auto;
}
</style>
