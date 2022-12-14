//MessageBox erstellen:
function ShowCopyMessage() {
    document.getElementById("MessageBox").style.display = "block";

    setTimeout(DisableCopyMessage, 3000);

    // Erstellen Sie ein textarea-Element
    let textarea = document.createElement("textarea");

    // Setzen Sie den Inhalt des textarea-Elements auf den Inhalt des div-Elements
    textarea.value = document.getElementById("QuickResult").innerText;

    // Fügen Sie das textarea-Element zum DOM hinzu
    document.body.appendChild(textarea);

    // Markieren Sie den Inhalt des textarea-Elements
    textarea.select();

    // Kopieren Sie den markierten Inhalt in die Zwischenablage
    document.execCommand("copy");

    // Entfernen Sie das textarea-Element aus dem DOM
    document.body.removeChild(textarea);

}

function DisableCopyMessage() {
    document.getElementById("MessageBox").style.display = "none";
}


//Code für das NavigationsMenü
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


//Benachrichtigungen der App
function Notify2() {
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
        notify();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                notify();
            }
        });
    }

    function notify() {
        var notification = new Notification('Wizard Calculator', {
            icon: 'https://th.bing.com/th/id/OIP.fFyd-n5GuX7NN0WLbJ-LkgHaHv?pid=ImgDet&rs=1',
            body: "Hey! This feature is still under development",
        });

        notification.onclick = function () {
            window.open("http://carnes.cc");
        };
        setTimeout(notification.close.bind(notification), 7000);
    }
}

function notify3() {
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
        notify5();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                notify5();
            }
        });
    }

    function notify5() {
        var notification = new Notification('Wizard Calculator', {
            icon: 'https://th.bing.com/th/id/OIP.fFyd-n5GuX7NN0WLbJ-LkgHaHv?pid=ImgDet&rs=1',
            body: "You are already on the start :)",
        });

        notification.onclick = function () {
            window.open("http://carnes.cc");
        };
        setTimeout(notification.close.bind(notification), 7000);
    }
}


//Menü Ladebalken!
var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

move()


// Alle Keybinds für die Tastatur!
document.onkeydown = function (e) {
    let keyCode = e.keyCode;
    if (keyCode == 48) {
        appendOperation(0);
    }
    if (keyCode == 49) {
        appendOperation(1);
    }
    if (keyCode == 50) {
        appendOperation(2);
    }
    if (keyCode == 51) {
        appendOperation(3);
    }
    if (keyCode == 52) {
        appendOperation(4);
    }
    if (keyCode == 53) {
        appendOperation(5);
    }
    if (keyCode == 54) {
        appendOperation(6);
    }
    if (keyCode == 55) {
        appendOperation(7);
    }
    if (keyCode == 56) {
        appendOperation(8);
    }
    if (keyCode == 57) {
        appendOperation(9);
    }
    if (keyCode == 8) {
        deleteLast();
    }
    if (keyCode == 27) {
        deleteall();
    }
    if (keyCode == 111) {
        appendOperation(' / ');
    }
    if (keyCode == 106) {
        appendOperation(' * ');
    }
    if (keyCode == 107) {
        appendOperation(' + ');
    }
    if (keyCode == 109) {
        appendOperation(' - ');
    }
    if (keyCode == 110) {
        appendOperation('.');
    }
    if (keyCode == 188) {
        appendOperation('.');
    }
    if (keyCode == 13) {
        calculateResult();
    }
    if (event.shiftKey && event.keyCode == 56) {
        deleteLast();
        appendOperation(' ( ');
    }
    if (event.shiftKey && event.keyCode == 57) {
        deleteLast();
        appendOperation(' ) ');
    }

    //Alle Zahlen nur für das Nummpad!
    if (keyCode == 96) {
        appendOperation(0);
    }
    if (keyCode == 97) {
        appendOperation(1);
    }
    if (keyCode == 98) {
        appendOperation(2);
    }
    if (keyCode == 99) {
        appendOperation(3);
    }
    if (keyCode == 100) {
        appendOperation(4);
    }
    if (keyCode == 101) {
        appendOperation(5);
    }
    if (keyCode == 102) {
        appendOperation(6);
    }
    if (keyCode == 103) {
        appendOperation(7);
    }
    if (keyCode == 104) {
        appendOperation(8);
    }
    if (keyCode == 105) {
        appendOperation(9);
    }
    ;
};



