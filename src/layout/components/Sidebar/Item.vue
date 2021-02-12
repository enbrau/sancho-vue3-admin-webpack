<script>
// export default {
//   name: 'MenuItem',
//   functional: true,
//   props: {
//     icon: {
//       type: String,
//       default: ''
//     },
//     title: {
//       type: String,
//       default: ''
//     }
//   },
//   render(h, context) {
//     c
//     const vnodes = []

//     if (icon) {
//       vnodes.push(<svg-icon icon-class={icon}/>)
//     }

//     if (title) {
//       vnodes.push(<span slot='title'>{(title)}</span>)
//     }
//     return vnodes
//   }
// }
//import { h } from 'vue'

const MenuItem = (props) => {
  const { icon, title } = props

  const vnodes = []

  if (icon) {
    vnodes.push(<svg-icon icon-class={icon}/>)
  }

  if (title) {
    vnodes.push(<span>{(title)}</span>)
  }
  return vnodes
}

MenuItem.props = ['icon', 'title']

export default MenuItem
</script>
