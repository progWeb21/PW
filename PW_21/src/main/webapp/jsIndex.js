var menuItems = document.getElementsByClassName("elMenu");

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("mouseover", function() {
        this.style.color = "red";
        this.style.fontSize = "18px";
    });

    menuItems[i].addEventListener("mouseout", function() {
        this.style.color = "";
        this.style.fontSize = "";
    });
}

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        var text = this.textContent;
        var output = document.querySelector("#corpo");
        output.textContent = "Hai cliccato su " + text;
    });
}
