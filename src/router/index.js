import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutosView from '@/views/ProdutosView.vue'
import EstoqueView from '@/views/EstoqueView.vue'
import VendaView from '@/views/VendaView.vue'
import HistoricoView from '@/views/HistoricoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produtos/:idproduto',
      name: 'produtosEditar',
      component: ProdutosView
    },
    {
      path: '/produtos/',
      name: 'produtos',
      component: ProdutosView
    },
    {
      path: '/estoque',
      name: 'estoque',
      component: EstoqueView
    },
    {
      path: '/venda',
      name: 'venda',
      component: VendaView
    },
    {
      path: '/historico',
      name: 'historico',
      component: HistoricoView
    }
  ],
})

export default router
