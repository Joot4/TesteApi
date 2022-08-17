import { createRouter, createWebHistory } from 'vue-router'
import ContractCode from '../views/ContractCode.vue'
import Installments from '../views/Installments.vue'
import PersonalData from '../views/PersonalData.vue'
// import PaymentData from '../views/PaymentData.vue'
// import PaymentFinished from '../views/PaymentFinished.vue'

const routes = [
    {
        path: '/',
        name: 'Conta Contrato',
        component: ContractCode
    },
    {
        path: '/parcelas',
        name: 'Parcelas',
        component: Installments
    },{
        path: '/dados-pessoais',
        name: 'Dados Pessoais',
        component: PersonalData
    },{
        path: '/dados-pagamento',
        name: 'Dados do Pagamento',
        component: () => PaymentData
    },{
        path: '/confirmacao',
        name: 'Pagamento Enviado',
        component: () => PaymentFinished
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router