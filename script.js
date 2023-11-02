function validar() {
    var Email = document.getElementById("email").value;
    var SenhaVazio = document.getElementById("senha").value;

    if (Email == "") {
        window.alert("Digite um e-mail");
        document.getElementById("email").style.backgroundColor = "#ff0000";
        return false
    }
    else if (Email.indexOf("@") == -1) {
        window.alert("Digite um e-mail valído com @");
        document.getElementById("email").style.backgroundColor = "#ff0000";
        return false
    }
    else if (Email.indexOf(" ") != -1) {
        window.alert("Digite um e-mail valído sem espaços");
        document.getElementById("email").style.backgroundColor = "#ff0000";
        return false
    }
    else if (SenhaVazio == "") {
        window.alert("Digite uma senha");
        document.getElementById("senha").style.backgroundColor = "#ff0000";
        return false
    }
    else {
        window.alert("Login efetuado com sucesso!");
        return true
    }
}