<template>
    <div class="container">
        <div class="row">
            <div class="col col-sm-12 col-md-12">
                <div class="breadcrumb">
                    <img src="../assets/Pagamento.svg" alt="Breadcrumb Dados Pessoais" class="flux-payment"/>
                </div>
            </div>
        </div>
        <div class="row">
        
        </div>
        <div class="row">
            <div class="row">            
                <div class="col col-md-6 col-sm-12 form-container">
                    <h3 class="title-form">Dados dos Cartão</h3>
                    <div class="card-container">
                        <ul class="card-contents">
                            <li class="card-contents-item">
                                <a href="#" class="card-navlink"><img src="../assets/american_express.svg" alt=""></a>
                                <a href="#" class="card-navlink"><img src="../assets/diners_club.svg" alt=""></a>
                                <a href="#" class="card-navlink"><img src="../assets/elo.svg" alt=""></a>
                                <a href="#" class="card-navlink"><img src="../assets/hiper.svg" alt=""></a>
                                <a href="#" class="card-navlink"><img src="../assets/mastercard.svg" alt=""></a>
                                <a href="#" class="card-navlink"><img src="../assets/visa.svg" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="form-fields">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Nome <span>(Como está no cartão)</span><img src="src\assets\information.svg" alt=""></label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp">
                            <div id="firstNameHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Número do Cartão</label>
                            <input type="text" class="form-control" id="lastName" aria-describedby="lastNameHelp">
                            <div id="lastNameHelp" class="form-text"></div>
                        </div>
                        <div class="form-group">

                            <div style="margin-right: 20px;">
                                    <label for="date" class="form-label">Data de Validade <img src="src\assets\information.svg"/></label>
                                    <select id="date" name="date" class="form-select" aria-label="DATE" style="width:200px;">
                                        <option selected>Mês/Ano</option>
                                    </select>
                                    <div id="ufHelp" class="form-text"></div>
                            </div>

                                <div style="margin-right: 20px">
                                    <label for="code-secutiry" class="form-label">Código de Segurança <img src="src\assets\information.svg"/></label>
                                    <select id="code-secutiry"
                                        name="code-secutiry" 
                                        class="form-select"
                                        aria-label="code-secutiry" 
                                        style="width:150px">
                                    </select>
                                    <div id="code-security" class="form-text"></div>
                            
                             </div>   
                        </div>
                                    <div style="margin-right: 20px;">
                                    <label for="installments" class="form-label">Parcela <img src="src\assets\information.svg"/></label>
                                    <select id="installments" name="installments" class="form-select" aria-label="INSTALLMENTS" style="width:200px;">
                                        <option selected>1 vez de R$195,51</option>
                                    </select>
                                    <div id="instalmensHelp" class="form-text"></div>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12 form-container">
                    <h3 class="form-title">Resumo da Compra/ Serviço</h3>
                    <div class="informations-pay">
                        <p>EQUATORIAL MARANHÃO DISTRIBUIDORA DE ENERGIA  S.A</p>
                        <p>Data: 24/01/2022 11:48</p>
                        <p>Código do Pedido: 00001683110</p> <br><br>
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
                    <div class="button-pay">
                        <button class="btn pay btn-pay">Pagar</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="row">
        <div class="col col-md-6 col-sm-12 form-container">
            <table class="table table-striped table-teste">
        <thead>
          <tr>
            <th>Referência</th>
            <th>Vencimento</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/2021</td>
            <td>28/12/2021</td>
            <td>R$ 404,32</td>
          </tr>          
        </tbody>
      </table>
        </div>
        <div class="conditions">
            <h6>
                Multa, juros e atualizações
            </h6>
            <p>Seguindo nosso valor transparência, é importante para nós que você saiba pelo que você está
                pagando.Aqui já estão somandos os encargos por atraso, com multa de 2%, juros de mora de 1% e 
                atualização monetário como refe o Artigo 126 da Resolução 414 da Aneel - Agência Nacional de Energia Elétrica.</p>
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

h3, .form-label{
    color:#5F6062
}

.card-contents-item {
    list-style: none;
}

.card-navlink{
    width: 28.54;
    height:28.57 ;
    margin-left: 20px;
    
}
.card-contents{
padding: 0;
margin-bottom: 1.5rem;
margin-top: 1.4rem;
}

.title-form{
    text-align: start;
}

.informations-pay{
    width:428px;
    height: 215px; 
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    margin-top:30px;
    margin-left: 100px;
    align-content: center;
    background-color:rgba(64, 112, 244, 0.1);
    border: 1px solid rgba(69, 118, 252, 0.3);
    border-radius: 8px;
}

.payment-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flux-payment{
    margin-bottom:20px;
}

.type-value p {
    font-size: 12px;
}

.button-pay {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-pay{
    width: 384px;
    height: 48px;
    margin-top: 110px;
}

.table-teste {
    margin-top: 112px;
}

.conditions {
    margin-top: 20px;
    width:655px;
    box-sizing: border-box;
}

span{
    color: #b4b6b9;
}

.conditions p, h6 {
    color: #5F6062;
}


</style>