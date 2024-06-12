import { reactive } from 'vue'

export const sidebarstatus = reactive({
  // 侧边栏展开收起状态，全局通用
  show: false,
  //  点击动作，更改状态
  click() {
    this.show = !this.show
  },
})

export const treepopstatus = reactive({
  // 目录树修改/新增弹框
  show: false,
  // 弹框状态
  type: '',
  //  点击动作，更改状态
  click() {
    this.show = !this.show
    if (this.type === 'add') {
      // 新增状态的弹框，则置空输入框
      webitem.item = { webname: '', website: '' }
    }
  },
})

export const weblist = reactive({
  data: (localStorage.getItem('weblist')
    ? JSON.parse(localStorage.getItem('weblist')!)
    : []) as any,
  // 网页hover状态
  hoverindex: 0,
  read() {
    this.data = (
      localStorage.getItem('weblist')
        ? JSON.parse(localStorage.getItem('weblist')!)
        : []
    ) as any
  },

  // 网页hover状态
  updatehoverindex(hoverindex: number) {
    this.hoverindex = hoverindex
  },
})

export const webitem = reactive({
  item: { webname: '', website: '' },
  index: null,
  update(webinfo: any, index: any) {
    ;(this.item = webinfo), (this.index = index)
  },
})

export const weburl = reactive({
  url: '',
  update(url: string) {
    this.url = url
  },
})
