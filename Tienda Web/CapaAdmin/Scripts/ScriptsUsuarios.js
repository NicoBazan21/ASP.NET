window.addEventListener('DOMContentLoaded', event => {

    var tablaData;
    tablaData = $("#tabla").DataTable({
        responsive: true,
        ordering: false,
        "ajax": {
            url: '/home/listarusuarios',
            type: "GET",
            dataType: "json"
        },
        "columns":
            [
                { "data": "nombre" },
                { "data": "apellido" },
                { "data": "correo" },
                {
                    "data": "activo", "render": function (valor) {
                        if (valor) { return '<span class="badge bg-success">Si</span>' }
                        else { return '<span class="badge bg-danger">No</span>' }
                    },
                },
                { "data": "rol" },
                {
                    "defaultContent": '<button type="button" class="btn btn-primary btn-sm btn-editar"><i class="fas fa-pen"></i></button>' +
                        '<button type="button" class="btn btn-danger btn-sm ms-2"><i class="fas fa-trash"></i></button>',
                    "orderable": false,
                    "searchable": false,
                    "width": "90px"
                },

            ],
        "language": {
            url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json',
        },
    });

    $("#tabla tbody").on("click", '.btn-editar', function () {
        var fila = $(this).closest('tr');

        var data = tablaData.row(fila).data();


    });


    const boton = document.body.querySelector("#botonPiolon");

    if (boton) {
        boton.addEventListener('click', event => {
            $("#formModal").modal("show");
        })
    }

});