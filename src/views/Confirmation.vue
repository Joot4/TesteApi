<template>
    <div class="container">
        <div class="row" id="row-master">
            <div class="col col-sm-12 col-md-12">
                <div class="breadcrumb">
                    <!-- precisa atualizar breadcrumb para a pagina de confirmacao -->
                                            <!-- checked -->
                    <img src="../assets/Pagamento.svg" alt="Breadcrumb Dados Pessoais" width="522px" />
                </div>
                <div class="text-inform">
                    <p class="payment-text">Pagamento em análise!</p>
                    <img src="../assets/@.svg" alt="information" class="inform-img">
                </div>
            </div>
        </div>
        <div class="row">
            <!-- colocar layout de confirmacao  -->
             <div class="informations">
                <h3>Resumo da Compra/ Serviço</h3>
                <p>EQUATORIAL MARANHÃO DISTRIBUIDORA DE ENERGIA  S.A</p>
                <p>Data: 24/01/2022 11:48</p>
                <p>Código do Pedido: 00001683110</p><br>
            
                <div class="payment-type">
                    <div class="type1">
                    <p>Á vista.<br>Mastercard</p>
                    </div>
                    <div class="type-value">
                    <p>VALOR TOTAL</p>
                    <h6>R$ 404,32</h6>
                </div>
            </div>
            </div>
        </div>
        <div class="row">
            <!-- colocar botoes de acao  -->
            <div class="buttons">
            <button class="btn show-payments">Status Pedido</button>
            <button class="btn show-payments">Voltar para home</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
.title, .text-inform {
    text-align:center;
}

.informations {
    width:364px;
    height: 226px;
    padding: 18px;
    box-sizing: border-box;
    background-color:rgba(64, 112, 244, 0.1);
    border: 1px solid rgba(69, 118, 252, 0.3);
    border-radius: 8px;
   
}

p {
    margin-bottom: 0;
}

.informations h3 {
    color: rgb(94, 94, 94);
    font-size: 17px;
}

.informations p {
    color: #5F6062;
    font-size:14px;
}

.payment-text{
    font-size: 22px;
    color: #4070F4;
    font-weight:bold;
    margin-bottom: 15px;
  
}

.payment-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-inform{
    margin-bottom: 15px;
}

.type-value h6 {
    font-size: 24px;
  color: #5F6062;
}

#row-main{
    justify-content: center;
    margin-bottom: 30px;
}

.row {
    justify-content: center;
}

.buttons{
    display: flex;
    justify-content: center;
    width: 200px;
    margin-top: 50px;
    gap:10px;
}

</style>