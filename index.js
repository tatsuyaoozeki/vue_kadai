new Vue({
  el: '#dic',
  data: {
    name: '山田花子',
    cource: 'Webエンジニアコース',
    cource_period: '2019年07月期',
    default_last_id: 3,
    students: [
      {
        id: 1,
        name: '野呂浩良',
        cource: '機械学習コース',
        cource_period: '2019年07月期'
      },
      {
        id: 2,
        name: '冨永修司',
        cource: 'Webエンジニアコース(就業達成)',
        cource_period: '2019年07月期'
      },
      {
        id: 3,
        name: '齊藤一起',
        cource: 'Webエンジニアコース(新規事業)',
        cource_period: '2019年07月期'
      }
    ],
    nextStudentId: 4
  },

  methods: {
    addStudent: function () {
      this.students.push({
        id: this.nextStudentId++,
        name: this.name,
        cource: this.cource,
        cource_period: this.cource_period
      })
    }
  }
})
