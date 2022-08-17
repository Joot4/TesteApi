<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="title">Pagamento de Faturas</h2>
        <h3 class="subtitle">Pague suas faturas on-line, com cartão de crédito, com total segurança e muita praticidade.</h3>
        <div class="mb-3">
          <label 
            for="contractFormControl" 
            class="form-label">
            Trocar Conta Contrato
          </label>
          <input 
            type="text" 
            class="form-control contract-form" 
            id="contractFormControl" 
            name="contractCode"
            v-model="contractCode"            
            placeholder="Digite sua Conta Contrato" />

          <p class="error" v-show="errors.length">
            <span v-for="error in errors">{{error}}</span>
          </p>
          
        </div>
        <div class="actions-cc">
          <button type="button" v-on:click="changeShowInstallmentPayed" class="btn show-payments">Ver Pagamentos</button>
          <button type="button" v-on:click="checkForm" class="btn pay">Pagar</button>
        </div>
      </div>      
    </div>
    <div class="row">
      <div class="col">
        <div class="installment-payed" v-show="installmentPayed.show">
          <div class="card">
            <div class="card-header">
              <h5>Realizado</h5>
              <span>000000000048</span>
            </div>
            <div class="card-body">              
              <h3 class="card-title">Pagamento pelo site</h3>
              <p>Data da solicitação: 09/08/2022 20:24:39</p>
              <p>Valor: <strong>R$ 117,58</strong></p>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Realizado</h5>
              <span>000000076079</span>
            </div>
            <div class="card-body">              
              <h3 class="card-title">Pagamento pelo Aplicativo</h3>
              <p>Data da solicitação: 14/01/2021 15:45:25</p>
              <p>Valor: <strong>R$ 41,62</strong></p>
            </div>
          </div>          
        </div>
      </div>      
    </div>    
  </div>  
</template>

<script>
  import router from '../router'

  export default {
    data() {
      return {
        contractCode: '',
        installmentPayed: {
          show: false
        },
        errors: []
      }      
    },

    methods: {
      changeShowInstallmentPayed: function(){
        if(!this.installmentPayed.show){
          this.installmentPayed.show = true
        }else {
          this.installmentPayed.show = false
        }
      },
      checkForm: function(){        
        
        this.errors = [];

        if(!this.contractCode){
          this.errors.push('Conta Contrato obrigatória');
          return
        }

        //request para o endpoint de conta contrato (validacao)

        router.push('/parcelas')
      },
      
    }
    

  }
</script>

<style>
  .container{
    flex-direction: column;
  }  
  .row{
    width:100%
  }
  .title{
    text-align: left;
    color: #5A129E
  }
  .subtitle{
    text-align: left;
    width: 50%;
    color: #5F6062;
    font-size: 16px;
    margin-bottom: 30px
  }
  label{
    color: #5A129E;
    font-weight: bold;
  }
  .contract-form{
    width: 350px;
    border-radius: 50px;
  }
  .actions-cc {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    margin-top: 20px;
  }
  .show-payments {
    margin-right: 1rem;
    border: 1px solid #5A129E;
    border-radius: 50px;
    color: #5A129E;    
    min-width: 200px
  }
  .show-payments:hover {
    border: 1px solid #4C019F;    
    color: #4C019F;        
  }
  .pay {    
    background-color: #5A129E;
    border: 1px solid #5A129E;
    border-radius: 50px;
    color: #FFFFFF;    
    min-width: 200px
  }
  .pay:hover{
    background-color: #4C019F;
    color: #FFFFFF;
  }
  .installment-payed{
    margin-top: 35px;
  }
  .installment-payed .card{
    width: 350px;
    padding: 0.2rem;
    float: left;
    margin-right: 15px;
    border-radius: 10px;
    box-shadow: 10px 5px 5px #eaeaea;
    min-height: 249px;
  }  
  .card-header{
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF !important;
    border-bottom: 0;

  }
  .card-header h5{
    background-color: #eaeaea;
    border-radius: 50px;
    font-size: 16px;
    padding: 5px 25px;
  }
  .error{
    color: red;
  }
</style>