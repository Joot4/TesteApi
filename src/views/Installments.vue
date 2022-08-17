<script>
  import router from '../router';

  export default {
    data() {
      return {
        installments: [
          {
            id: 1,
            reference: '12/2021',
            date: '28/12/2021',
            amount: 404.32            
          },
          {
            id: 2,
            reference: '11/2021',
            date: '21/11/2021',
            amount: 304.00
          }
        ],
        installmentsSelected: [],
        errors: []
      }      
    },

    methods: {
      checkForm: function() {
        this.errors = [];    
        
        if(this.installmentsSelected.length <= 0){
          this.errors.push('Selecione uma fatura');
          return
        }

        //

        router.push('/dados-pessoais')
      }
    }
  }
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Selecione as faturas ou débitos que deseja pagar</h3>
      </div>
    </div>
    <div class="row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Selecione</th>
            <th>Referência</th>
            <th>Vencimento</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in installments">
            <td>
              <input v-model="installmentsSelected" class="form-check-input" type="checkbox" :value="i" id="check-installment-0" />
            </td>
            <td>{{i.reference}}</td>
            <td>{{i.date}}</td>
            <td>{{i.amount}}</td>
          </tr>          
        </tbody>
      </table>
      <p class="error" v-show="errors.length">
        <span v-for="error in errors">{{error}}</span>
      </p>
    </div>
    <div class="row">
      <div class="actions-inst">
        <button type="button" v-on:click="checkForm" class="btn pay">Próximo</button>
      </div>
    </div>
  </div>
</template>
<style>
  
  table thead{
    background: rgba(90, 18, 158, 0.1);     
  }

  table thead tr th {
    border: 0.5px solid #5A129E;
    text-align: center;
    color: #5A129E;
  }

  table tbody tr td {    
    text-align: center;    
  }

  .actions-inst {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
  .error{
    color: red;
  }
</style>