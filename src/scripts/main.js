//animacoes
AOS.init();

//contagem regressiva
const contagem = document.querySelector(".contador");
console.log(contagem);

//captura da data do envento
const dataEvento = new Date("Mar 5, 2024 19:00:00");
//captura em decimal
const timeStampEvento = dataEvento.getTime();

// setInterval poara atualizar o contador de segundo segundo
const contagemRegressiva = setInterval(() => {
  //captura data de agora
  const agora = new Date();

  //captura em decimal
  const timeStampAtual = agora.getTime();

  // calcula a diferenca de  tempo ate o evento
  const ateOEVento = timeStampEvento - timeStampAtual;

  //calculando os dias, hora e minutos em milesegundos
  const diaEmMS = 1000 * 60 * 60 * 24;
  const horasEmMS = 1000 * 60 * 60;
  const minutosEmMS = 1000 * 60;

  // convertendo o Dia em milisegundo para  inteiro e arrendonando com math floor
  const diasAteOEvento = Math.floor(ateOEVento / diaEmMS);

  // convertendo o horas em milisegundo para  inteiro e arrendonando com math floor
  const horasAteOEvento = Math.floor((ateOEVento % diaEmMS) / horasEmMS);

  // convertendo o horas em milisegundo para  inteiro e arrendonando com math floor
  const minutosAteOEvento = Math.floor((ateOEVento % horasEmMS) / minutosEmMS);

  // convertendo o horas em milisegundo para  inteiro e arrendonando com math floor
  const segundosAteOEvento = Math.floor((ateOEVento % minutosEmMS) / 1000);

  contagem.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);
