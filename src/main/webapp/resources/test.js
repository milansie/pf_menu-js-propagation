$(document).ready(function() {

    // this works
    // var elements = document.getElementsByClassName("mouseOutTest");
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].onmouseleave = function(event) {
    //         document.getElementById("frmTest:outputPanel_content").innerText = event.target.id;
    //     }
    // }

    jQuery version not working properly
    $('.mouseOutTest').on('mouseleave', function(event) {
        $('#frmTest\\:outputPanel_content').text(event.target.id);
    });

});