<template>
    <div class="container">
        <div class="row">
            <div class="breadcrumb">
                <img src="../assets/personal-data-timeline.svg" alt="Breadcrumb Dados Pessoais" />
            </div>            
        </div>
        <form>
            <div class="row">            
                <div class="col col-md-6 col-sm-12 form-container">
                    <h3 class="form-title">Dados Pessoais</h3>
                    <div class="form-fields">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Primeiro Nome</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp">
                            <div id="firstNameHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Segundo Nome</label>
                            <input type="text" class="form-control" id="lastName" aria-describedby="lastNameHelp">
                            <div id="lastNameHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" class="form-control" id="cpf" aria-describedby="cpfHelp">
                            <div id="cpfHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Telefone</label>
                            <input type="text" class="form-control" id="phone" aria-describedby="phoneHelp">
                            <div id="phoneHelp" class="form-text"></div>
                        </div>                                    
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12 form-container">
                    <h3 class="form-title">Dados de Cobran??a</h3>
                    <div class="form-fields">
                        <div class="mb-3">
                            <label for="cep" class="form-label">CEP</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp">
                            <div id="firstNameHelp" class="form-text"></div>
                        </div>
                        <div class="form-group">
                            <div style="margin-right: 20px">
                                <label for="uf" class="form-label">UF</label>
                                <select id="uf" name="uf" class="form-select" aria-label="UF">
                                    <option selected>Selecione</option>
                                    <option value="ma">MA</option>
                                    <option value="pi">PI</option>
                                    <option value="al">AL</option>
                                </select>
                                <div id="ufHelp" class="form-text"></div>
                            </div>
                            <div style="width: 100%">
                                <label for="city" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="city" aria-describedby="cityHelp">
                                <div id="cityHelp" class="form-text"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div style="width: 100%; margin-right: 20px">
                                <label for="street" class="form-label">Rua</label>
                                <input type="text" class="form-control" id="street" aria-describedby="streetHelp">
                                <div id="streetHelp" class="form-text"></div>
                            </div>
                            <div>
                                <label for="number" class="form-label">N??mero</label>
                                <input type="text" class="form-control" id="number" aria-describedby="numberHelp">
                                <div id="numberHelp" class="form-text"></div>
                            </div>
                        </div>
                        
                        <div class="mt-0 mb-3">
                            <label for="complement" class="form-label">Complemento</label>
                            <input type="text" class="form-control" id="complement" aria-describedby="complementHelp">
                            <div id="complementHelp" class="form-text"></div>
                        </div>                                    
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>
    form {
        width: 100%
    }
    .breadcrumb {
        display: flex;
        justify-content: center;
        text-align: center;
    }    
    .form-title {
        text-align: center;
    }
    .form-control {
        border-radius: 50px;                
    }
    .form-group{
        display: flex;
        margin-bottom: 0.8rem
    }
    .form-select {
        border-radius: 50px
    }    
    #uf,#number{
        width: 125px
    }
    
</style>