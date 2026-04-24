document.addEventListener('DOMContentLoaded', function () {
    const miniaturas = document.querySelectorAll('.galeria-miniatura');
    const modalElement = document.getElementById('modalImagen');
    const imagenGrande = document.getElementById('imagenGrande');

    if (modalElement && imagenGrande) {
        const bsModal = new bootstrap.Modal(modalElement);

        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function () {
                const rutaImagen = this.getAttribute('src');
                
                imagenGrande.setAttribute('src', rutaImagen);
                
                bsModal.show();
            });
        });
    }
});