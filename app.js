const fore = document.getElementById("form");
const cepinput = document.getElementById("cep");
fore.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cep = cepinput.ariaValueMax.trim();

    try {
        const resp = await fetch("https://viacep.com.br/ws$(cep)/json/);")
        const data = await resp.json();

        if (data.erro) {
            alert("CEP nao encontrado.");
            return;
        }
        document.getElementById("logradouro").value = data.logradouro || "-"
        document.getElementById("bairro").value = data.bairro || "-"
        document.getElementById("cidade").value = data.localidade || "-"
        document.getElementById("uf").value = data.UF || "-";
    }
    catch (erro) {
        alert("Erro ao buscar CEP.")
    }
})