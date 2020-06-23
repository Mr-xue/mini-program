import create from '../../utils/create'


create.Component({
  use: ['logs'],
  properties:{
    userName : {
      type:String,
      value : '姓名'
    }
  },
  computed: {
    logsLength() {
      return this.logs.length
    }
  }
})
