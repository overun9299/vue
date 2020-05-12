<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../../../assets/logo.png" alt="">
      </div>
      <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" class="login_form">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
    export default {
        data() {
          // 数据绑定
          return {
            labelPosition: 'left',

            loginForm: {
              username: 'admin',
              password: '123456'
            },
            //表单验证规则
            loginFormRules: {
              username: [
                { required: true, message: '请输入登录名', trigger: 'blur' },
                {
                  min: 3,
                  max: 10,
                  message: '登录名长度在 3 到 10 个字符',
                  trigger: 'blur'
                }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                {
                  min: 6,
                  max: 15,
                  message: '密码长度在 6 到 15 个字符',
                  trigger: 'blur'
                }
              ]
            }
          }
        },
      methods: {
        //添加表单重置方法
        resetLoginForm() {
          //this=>当前组件对象，其中的属性$refs包含了设置的表单ref
          //   console.log(this)
          this.$refs.LoginFormRef.resetFields()
        },
        login() {
          //点击登录的时候先调用validate方法验证表单内容是否有误
          this.$refs.LoginFormRef.validate(async valid => {
            console.log(this.loginFormRules)
            //如果valid参数为true则验证通过
            if (!valid) {
              return
            }

            //发送请求进行登录
            const { data: res } = await this.$http.post('login', this.loginForm)
            //   console.log(res);
            if (res.meta.status !== 200) {
              return this.$message.error('登录失败:' + res.meta.msg) //console.log("登录失败:"+res.meta.msg)
            }

            this.$message.success('登录成功')
            console.log(res)
            //保存token
            window.sessionStorage.setItem('token', res.data.token)
            // 导航至/home
            this.$router.push('/home')
          })
        }
      }
    }
</script>

<style lang="less" scoped>

  .login_container {
    background-color: #2b5b6b;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form {
    /*position: absolute;*/
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 24%;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
