/**
 * Created by HOD on 7. 7. 2014.
 */
function alertInfo(event, ui) {
    var strAlert = "";

    for (var thing in event) {
        strAlert += thing + " : " + event[thing] + "\n";
    }
    alert(strAlert);
}


//ROZVRH

;jQuery(function ($) {
    $(document)
        .on("pagecreate", "#rozvrh", function (event, ui) {
            //console.log("create rozvrh");

            $("#rozvrh")
                .swipeleft(function () {
                    //console.log("swipeleft");
                    $.mobile.pageContainer.pagecontainer("change", "dochazka.html", {});
                })
                .swiperight(function () {
                    //console.log("swiperight");
                    $.mobile.pageContainer.pagecontainer("change", "hodnoceni.html", {});
                });
        })
        .on("pagecreate", "#dochazka", function (event, ui) {
            //console.log("create dochazka");

            $("#dochazka")
                .swipeleft(function () {
                    //console.log("swipeleft");
                    $.mobile.pageContainer.pagecontainer("change", "hodnoceni.html", {});
                })
                .swiperight(function () {
                    //console.log("swiperight");
                    $.mobile.pageContainer.pagecontainer("change", "rozvrh.html", {});
                });
        })
        .on("pagecreate", "#hodnoceni", function (event, ui) {
            //console.log("create hodnoceni");

            $("#hodnoceni")
                .swipeleft(function () {
                    //console.log("swipeleft");
                    $.mobile.pageContainer.pagecontainer("change", "rozvrh.html", {});
                })
                .swiperight(function () {
                    //console.log("swiperight");
                    $.mobile.pageContainer.pagecontainer("change", "dochazka.html", {});
                });
        });
});

