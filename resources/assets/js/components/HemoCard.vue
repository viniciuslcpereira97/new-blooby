<template>
    <div class="col l3" v-bind:state="hemocenter.State">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="images/blood_donation.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4" style="height: 70px">{{ hemocenter.Address }}<i class="material-icons right">more_vert</i></span>
                <p><a class="map-trigger" href="#modal-map">Veja aqui minha localização</a></p>
            </div>
            <div class="card-reveal">
                <div class="row">
                    <span class="card-title red-text text-darken-2">{{ hemocenter.Name }}<i class="material-icons right">close</i></span>
                </div>
                <div class="row">
                    <div class="container-fluid">
                        <table class="responsive-table">
                            <label>Cidade</label>
                            <p>{{ hemocenter.City }}</p>
                            <label>Bairro</label>
                            <p>{{ hemocenter.District }}</p>
                            <label>Endereço</label>
                            <p>{{ hemocenter.Address }}</p>
                            <label>Telefone</label>
                            <p>{{ hemocenter.Phone }}</p>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        props: [
            "hemocenter"
        ]
    }
</script>