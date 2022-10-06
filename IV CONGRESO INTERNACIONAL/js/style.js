$('#collapseOne').on('shown.bs.collapse', function () {
    $(".fa").removeClass("fa-folder-o").addClass("fa-folder-open-o");
});

$('#collapseOne').on('hidden.bs.collapse', function () {
    $(".fa").removeClass("fa-folder-open-o").addClass("fa-folder-o");
});