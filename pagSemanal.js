function calculaSemana(event) {
    event.preventDefault();

    const nomeEmpresa = document.getElementById("empresa").text
    const mes1 = document.getElementById("mes1").options[document.getElementById("mes1").selectedIndex].text;
    const mes2 = document.getElementById("mes2").options[document.getElementById("mes2").selectedIndex].text;
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos nos campos.");
        return;
    }

    const CalculoPercentual = ((numero2 - numero1) / numero1) * 100;

    const mensagemResultado = `${nomeEmpresa}:\n Na primeira semana do mês de ${mes1}, tivemos um resultado de ${numero1}. Já na primeira semana do mês de ${mes2}, tivemos um resultado de ${numero2}. Isso representa uma mudança percentual de ${CalculoPercentual.toFixed(2)}%`;

    document.getElementById("result").textContent = mensagemResultado;
}

/*------------------------------------------------------------------------------------ */

function calculaQuinzena(event) {
    event.preventDefault();

    const mes1 = document.getElementById("mes1").options[document.getElementById("mes1").selectedIndex].text;
    const mes2 = document.getElementById("mes2").options[document.getElementById("mes2").selectedIndex].text;
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos nos campos.");
        return;
    }

    const CalculoPercentual = ((numero2 - numero1) / numero1) * 100;

    const mensagemResultado = `Nos primeiros 15 dias do mês de ${mes1}, tivemos um resultado de ${numero1}. Já nos primeiros 15 dias do mês de ${mes2}, tivemos um resultado de ${numero2}. Isso representa uma mudança percentual de ${CalculoPercentual.toFixed(2)}%`;

    document.getElementById("result").textContent = mensagemResultado;
}

/*------------------------------------------------------------------------------------ */

function calculaMes(event) {
    event.preventDefault();

    const mes1 = document.getElementById("mes1").options[document.getElementById("mes1").selectedIndex].text;
    const mes2 = document.getElementById("mes2").options[document.getElementById("mes2").selectedIndex].text;
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos nos campos.");
        return;
    }

    const CalculoPercentual = ((numero2 - numero1) / numero1) * 100;

    const mensagemResultado = `No mês de ${mes1}, tivemos um resultado de ${numero1}. Já no mês de ${mes2}, tivemos um resultado de ${numero2}. Isso representa uma mudança percentual de ${CalculoPercentual.toFixed(2)}%`;

    document.getElementById("result").textContent = mensagemResultado;
}