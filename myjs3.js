    function sayPoodle(){
        console.log("Poodle");
        $("#title").html("Poodle");
        $("#title").click(function () {
            $("#title").html("Contact Details");
            $("#title").off("click");
        });
    };