
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
         /*if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
         }*/
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const padre = document.body.querySelector('#Ver');
    const hijo = document.body.querySelector('#collapseLayouts')

    if (padre)
    {
        if (localStorage.getItem('abierto') === 'true') {
            padre.classList.remove('collapsed');
            hijo.classList.add('show');
        }

        padre.addEventListener('click', event => {
            event.preventDefault();
            localStorage.setItem('abierto', !padre.classList.contains('collapsed'));
        });
    }
});
