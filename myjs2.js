    function sayPoodle(){
        console.log("Poodle");
        $("#title").html("Poodle");
        $("#title").click(function () {
            $("#title").html("Description of Me");
            $("#title").off("click");
        });
    };