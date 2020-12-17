var banners = ["Os melhores preços aqui na sua Móveis" , "Qualidades e preços baixos"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector("#mensagem").textContent =
    banners[bannerAtual];
    }
    setInterval(trocaBanner, 1000);