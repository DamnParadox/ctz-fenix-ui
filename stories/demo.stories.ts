import CtzComp from '../packages/demo'

export default {
  title: 'CtzComp',
  component: CtzComp
}

export const ShowMessage = () => ({
  components: { CtzComp },
  template: '<ctz-comp :msg="hello" @click="onClick">Show</ctz-comp>',
  methods: {
    onClick () {
      console.log('Hello ctz-comp!')
    }
  }
})
