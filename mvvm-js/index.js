window.onload = () => {
  const vm = new Vue({
    delimiters: ['{[', ']}'], // 解决vue模板语法和nunjucks模板语法冲突问题
    el: '#app',
    data: {
      name: 'robot',
      password: '123',
      message: '这是单项绑定的例子'
    },
    methods: {
      updateMessage() {
        this.message = this.message === 'message 更新了！' ? '这是单项绑定的例子' : 'message 更新了！'
      }
    },
  })
  
  window.vm = vm
}
