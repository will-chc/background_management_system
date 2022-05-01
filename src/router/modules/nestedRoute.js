import Home from '@/pages/Home'

const nestedRouter = {
  path: '/nested',
  component: Home,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: '路由嵌套',
    icon: 'el-icon-files'
  },
  children: [
    {
      path: '/nested/menu1',
      component: (resolve) => { require(['@/components/nest/menu1'], resolve) },
      name: 'Menu1',
      meta: { title: 'Menu 1' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/components/nest/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: 'Menu 1-1' }
        },
      ]
    },
    {
      path: '/nest/menu2',
      name: 'Menu2',
      component: () => import('@/components/nest/menu2'),
      meta: { title: 'Menu 2' }
    }
  ]
}

export default nestedRouter