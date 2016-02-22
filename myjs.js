    function sayPoodle(){
        console.log("Poodle");
        $("#title").html("Poodle");
        $("#title").click(function () {
            $("#title").html("Medo");
            $("#title").off("click");
        });
    };