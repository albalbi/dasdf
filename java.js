var name = document.getElementById("nome").value;
var raca = document.getElementById("raca");
var classe = document.getElementById("classe");
var tend = document.getElementById("tend");
var idade = document.getElementById("idade");
var level = document.getElementById("level").value;
var alt = document.getElementById("alt");
var peso = document.getElementById("peso");
var cabelos = document.getElementById("cabelos");
var olho = document.getElementById("olhos");
var carac = document.getElementById("carac1");
var carac2 = document.getElementById("carac2");
var vida = document.getElementById("vida");
var ca = document.getElementById("ca");
var forc = document.getElementById("forc");
var des = document.getElementById("des");
var con = document.getElementById("con");
var int = document.getElementById("int");
var sab = document.getElementById("sab");
var car = document.getElementById("car");
var textoCarta = document.getElementById("texto");
var botao = document.getElementById("gerar");
var reset = true;


var nomesMasc = ["Charles", "Harry", "Albert", "Edward", "William", "George", "Henry", "Alfred", 
"Ernest", "Michael", "Arthur", "Philip", "Patrick", "Andrew", "Leopold", "Christian", "Duncan", "Anthony", "Richard",
"Louis", "David", "Alexander", "Edmund", "Geoffrey", "Harold", "James", "John", "Robert", "Roger", "Stephen", "Nicholas", "Augustus",
"Lancelot", "Adrian", "Thor", "Odin", "Regan","Regis", "Kingston", "Kinsey", "Atlas"];

var nomesFem = ["Charlotte", "Elizabeth", "Diana", "Mary", "Grace", "Alice", "Alexia", "Sarah", "Anne", "Margaret", 
"Alexandra", "Victoria", "Louisa", "Adelaide", "Helena", "Augusta", "Louise", "Caroline", "Alberta", "Beatrice", 
"Amelia", "Fedore", "Anastasia", "Arabella", "Blanche", "Cecilia", "Caroline", "Catherine", "Eleanor", "Emma",
"Adela", "Jane", "Matilda","Elsa", "Hera", "Ariel", "Esmeralda", "Aurora", "Paulina", "Annie", "Gwen", "Belle", "Anna", "Amelia", "Eliza",
"Violeta", "Sadie", "Amy", "Merida", "Rosa", "Juno", "Elinor", "Amira", "Byrna", "Natália", "Cassandra", "Royanna", "Raelene", "Royce"];

var dadoVida = ["","12","8","8","8","6","10","8","6","8","10","10"];

var cabelos = ["Ruivo","Loiro","Castanho","Preto","Grisalho"];

var cabelos2 = ["longo","curto","com dreads","com moicano","raspado de um lado","com rastafari","de trança", "raspado"];
  
var olhos = ["Azuis","Verdes","Castanhos","Negros","Amarelos","Cinzas","Brancos","Vermelhos","lilás", "roxos", "mel", "Heterocromia"];

var alturaMin = ["","160","145","85","75","120","165","145","180","150","150","188","160"];

var alturaMax = ["","210","185","110","100","145","215","185","230","220","183","203","185"];

var pesoMin = ["","60","40","10","10","65","65","50","80","56","51","99","65"];

var pesoMax = ["","200","120","40","30","390","260","200","120","127","108","145","90"];

var idadeMin = ["35","175","100","50","125","30","62","20","20","30","40","60"];

var idadeMax = ["110","750","500","200","450","80","185","60","160","150","80","190"];

var caracteristica = ["cicatriz","sem dente","sem um dedo","mau halito","cheiro ruim","cheiroso", "mãos tremem",
"tosse seca","espirra e funga","voz grave","voz aguda","gagueja","fala alto","sussurra","surdez","tatuagem","calvo",
"manco","tremedeira","corcunda","sujo e descuidado","egoista","corcunda","sonolento","estudioso","observador","critico",
"pessimista","otimista","bebado","rude","vaidoso","autoritario","orgulhoso","conformista","neurotico","ciumento",
"corajoso","covarde","curioso","honesto","mentiroso","preguiçoso","religioso","ateu","melancolico","cruel",
"preconceituoso","desconfiado","brincalhao","serio","irritado"];


// When a new <option> is selected
raca.addEventListener('change', function () {
  var racaIndex = raca.selectedIndex;
  // Add that data to the <p>
  //textoCarta.innerHTML = 'selectedIndex: ' + racaIndex;
});

var max = 2;
var min = 1;


//********************************************************
// AQUI EH O CODIGO NOVO DE ESCOLHER IMAGEM DO PERSONAGEM


var maxWidth = 300, maxHeight = 286;
document.getElementById('myCanvas').width = maxWidth;
document.getElementById('myCanvas').height = maxHeight;
document.getElementById('myCanvas').style = "border:1px solid #000000;";

console.log("div = " + document.getElementById('id_divRight_img'));
console.log("div.width = " + document.getElementById('id_divRight_img').width);
console.log("div.height = " + document.getElementById('id_divRight_img').height);

document.getElementById('id_divRight_img').setAttribute("style","width:"+maxWidth+"px; height:"+maxHeight+"px;");

//document.getElementById('id_divRight_img').width = maxWidth + 20;
//document.getElementById('id_divRight_img').height = maxHeight + 20;
console.log("div.width = " + document.getElementById('id_divRight_img').width);
console.log("div.height = " + document.getElementById('id_divRight_img').height);

var Aolho;
var Acabelo;
var AcorCabelo;
var Aboca;
var Asobrancelha;
var ACordoOlho;
var ANariz;
var ABarba;
var ABigode;
var AOrelha;

var timer; 

var maxOlho, maxCabelo, maxCorCabelo,maxBoca,maxSobrancelha,maxCordoOlho,maxNariz,maxBarba, maxBigode, maxOrelha;
maxOlho =  maxCabelo =  maxCorCabelo = maxBoca = maxSobrancelha = maxCordoOlho = maxNariz = maxBarba = maxBigode = maxOrelha = 5;
Aolho = Acabelo = AcorCabelo = Aboca = Asobrancelha = ACordoOlho = ANariz = ABarba = ABigode = AOrelha = 0;

maxBoca = 3;
maxNariz = 3;
maxOlho = 3;
maxOrelha = 3;
maxSobrancelha = 4;
maxBarba = 4;
maxBigode = 4;
maxCorCabelo = 4;
maxCordoOlho = 3;

document.getElementById('id_butLeft').onclick = ChangeLeft;
document.getElementById('id_butRight').onclick = ChangeRight;


function ChangeLeft()
{
	clearInterval(timer);
	/*<option value="1">Olho</option>
      <option value="2">Cor do Olho</option>
      <option value="3">Cabelo</option>
      <option value="4">Cor do Cabelo</option>
      <option value="5">Boca</option>
      <option value="6">Sobrancelha</option>
      <option value="7">Nariz</option>
      <option value="8">Barba</option>*/
  var parameter = parseInt(document.getElementById('id_select').value);
  switch(parameter)
  {
    case 1:
      Aolho--;
      if(Aolho < 1)
        Aolho  = maxOlho;
      break;
    case 2:
      ACordoOlho--;
      if(ACordoOlho < 1)
        ACordoOlho  = maxCordoOlho;
      break;
    case 3:
      Acabelo--;
      if(Acabelo < 1)
        Acabelo = maxCabelo;
      break;
    case 4:
      AcorCabelo--;
      if(AcorCabelo < 1)
        AcorCabelo = maxCorCabelo;
      break;
    case 5:
      Aboca--;
      if(Aboca < 1)
        Aboca = maxBoca;
      break;
    case 6:
      Asobrancelha--;
      if(Asobrancelha < 1)
        Asobrancelha = maxSobrancelha;
      break;
    case 7:
      ANariz--;
      if(ANariz < 1)
        ANariz = maxNariz;
      break;
    case 8:
      ABarba--;
      if(ABarba < 1)
        ABarba = maxBarba;
      break;
    case 9:
      AOrelha--;
      if(AOrelha < 1)
        AOrelha = maxOrelha;
      break;
    case 10:
      ABigode--;
      if(ABigode < 1)
        ABigode = maxBigode;
      break;
    default:
    
  }
  AtualizaImagem();
}

function ChangeRight()
{
	clearInterval(timer);
  var parameter = parseInt(document.getElementById('id_select').value);
  switch(parameter)
  {
    case 1:
      Aolho++;
      if(Aolho > maxOlho)
        Aolho  = 1;
      break;
    case 2:
      ACordoOlho++;
      if(ACordoOlho > maxCordoOlho)
        ACordoOlho  = 1;
      break;
    case 3:
      Acabelo++;
      if(Acabelo > maxCabelo)
        Acabelo = 1;
      break;
    case 4:
      AcorCabelo++;
      if(AcorCabelo > maxCorCabelo)
        AcorCabelo = 1;
      break;
    case 5:
      Aboca++;
      if(Aboca > maxBoca)
        Aboca = 1;
      break;
    case 6:
      Asobrancelha++;
      if(Asobrancelha > maxSobrancelha)
        Asobrancelha = 1;
      break;
    case 7:
      ANariz++;
      if(ANariz > maxNariz)
        ANariz = 1;
      break;
    case 8:
      ABarba++;
      if(ABarba > maxBarba)
        ABarba = 1;
      break;
     case 9:
      AOrelha++;
      if(AOrelha > maxOrelha)
        AOrelha = 1;
      break;
     case 10:
      ABigode++;
      if(ABigode > maxBigode)
        ABigode = 1;
      break;
    default:
    
  }
  AtualizaImagem();
}

function AtualizaImagem()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, maxWidth, maxHeight); 
	  
	var genero = document.getElementById('genero').value;
	var raca2 = document.getElementById('raca').value;
	
	if (genero == 0)
		genero = "masculino";
	else
		genero = "feminino";
  //Desenha a imagem base do personagem
  
  if(ACordoOlho + Aolho + Acabelo + 
  	AcorCabelo + Aboca + Asobrancelha + 
  	ACordoOlho + ANariz + ABarba + 
  	ABigode + AOrelha != 0)
  {
	  var img = document.getElementById("img");
	  img.src = "fotos/" + raca2 + "/" + genero + "/base.png";
	  ctx.drawImage(img, 0, 0,maxWidth,maxHeight);	
  }
	

  if (Aolho != 0)
  {
  	console.log("AI_Aolho = " + Aolho);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/olho" + Aolho + ".png";
 	var imgOlho = document.getElementById('id_imgOlho');
    imgOlho.src = caminho;
    ctx.drawImage(imgOlho , 0,0,maxWidth,maxHeight);
  }
   if (ACordoOlho != 0)
  {
	console.log("AI_ACordoOlho = " + ACordoOlho);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/cor" + ACordoOlho + ".png";
 	var imgCordoOlho = document.getElementById('id_imgCordoOlho');
    imgCordoOlho.src = caminho;
    ctx.drawImage(imgCordoOlho , 0,0,maxWidth,maxHeight);	
	
  }
  if (ABarba != 0)
  {
  	if(genero == 'masculino')
	{
		console.log("AI_ABarba = " + ABarba);
	  		
	  	var caminho = "fotos/" + raca2 + "/" + genero + "/barba" + ABarba + ".png";
	 	var imgBarba = document.getElementById('id_imgBarba');
	    imgBarba.src = caminho;
	    ctx.drawImage(imgBarba , 0,0,maxWidth,maxHeight);	
	}
  }
  if (AcorCabelo != 0 && Acabelo != 0)
  {
	console.log("AI_AcorCabelo = " + AcorCabelo);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/cabelo" + Acabelo +"." + AcorCabelo + ".png";
 	var imgCorDoCabelo = document.getElementById('id_imgCordoCabelo');
    imgCorDoCabelo.src = caminho;
    ctx.drawImage(imgCorDoCabelo , 0,0,maxWidth,maxHeight);	
	
  }
   if (Aboca != 0)
  {
	console.log("AI_ABoca = " + Aboca);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/boca" + Aboca + ".png";
 	var imgBoca = document.getElementById('id_imgBoca');
    imgBoca.src = caminho;
    ctx.drawImage(imgBoca , 0,0,maxWidth,maxHeight);	
	
  }
   if (AOrelha != 0)
  {
	console.log("AI_AOrelha = " + AOrelha);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/orelha" + AOrelha + ".png";
 	var imgOrelha = document.getElementById('id_imgOrelha');
    imgOrelha.src = caminho;
    ctx.drawImage(imgOrelha , 0,0,maxWidth,maxHeight);	
	
  }
   if (ABigode != 0)
  {
  	if(genero == 'masculino')
	{
		console.log("AI_ABigode = " + ABigode);
	  		
	  	var caminho = "fotos/" + raca2 + "/" + genero + "/bigode" + ABigode + ".png";
	 	var imgBigode = document.getElementById('id_imgBigode');
	    imgBigode.src = caminho;
	    ctx.drawImage(imgBigode , 0,0,maxWidth,maxHeight);	
	}
  }
  
  if (ANariz != 0)
  {
	console.log("AI_ANariz = " + ANariz);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/nariz" + ANariz + ".png";
 	var imgNariz = document.getElementById('id_imgNariz');
    imgNariz.src = caminho;
    ctx.drawImage(imgNariz , 0,0,maxWidth,maxHeight);	
	
  }
  
   if (ASobrancelha != 0)
  {
	console.log("AI_ASobrancelha = " + ASobrancelha);
  		
  	var caminho = "fotos/" + raca2 + "/" + genero + "/sobrancelha" + ASobrancelha + ".png";
 	var imgSobrancelha = document.getElementById('id_imgSobrancelha');
    imgSobrancelha.src = caminho;
    ctx.drawImage(imgSobrancelha , 0,0,maxWidth,maxHeight);	
	
  }
  console.log("termineir");
}

//********************************************************

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function geraNome() {
	if(document.getElementById("nome").value == "")
	{
		genero = document.getElementById('genero').selectedIndex;
		if(genero == 1)
		{
			var x = Math.floor(Math.random() * nomesMasc.length);
	    	document.getElementById("nome").value = nomesMasc[x];
		}
		else
		{
			var x = Math.floor(Math.random() * nomesFem.length);
	    	document.getElementById("nome").value = nomesFem[x];
		}
		
   	}
}

function geraLevel() {
	if(document.getElementById("level").value == "")
	{
	    var x = Math.floor((Math.random() * 20))+1;
	    document.getElementById("level").value = x;
   	}
}

function geraStatus() {
	if(document.getElementById("forc").value == 1)
	{
	    var x = Math.floor((Math.random() * 16))+3;
	    document.getElementById("forc").value = x;
   	}
	if(document.getElementById("des").value == 1)
	{
	    var x = Math.floor((Math.random() * 16))+3;
	    document.getElementById("des").value = x;
   	}
	if(document.getElementById("int").value == 1)
	{
	    var x = Math.floor((Math.random() * 16))+3;
	    document.getElementById("int").value = x;
   	}
	if(document.getElementById("sab").value == 1)
	{
	    var x = Math.floor((Math.random() * 16))+3;
	    document.getElementById("sab").value = x;
   	}
	if(document.getElementById("con").value == 1)
	{
	    var x = Math.floor((Math.random() * 16))+3;
	    document.getElementById("con").value = x;
   	}
	if(document.getElementById("car").value == 1)
	{
	    var x = Math.floor((Math.random() * 16))+3;
	    document.getElementById("car").value = x;
   	}
}
	
function geraCabelos()
{
	if(document.getElementById("cabelos").value == "")
	{
	    var x = Math.floor((Math.random() * cabelos.length));
	    var y = Math.floor((Math.random() * cabelos2.length));
	    
	    document.getElementById("cabelos").value = cabelos[x]+" "+cabelos2[y];
   	}
}

function geraCaracteristicas() {
	if(document.getElementById("char1").value == "")
	{
	    var x = Math.floor((Math.random() * caracteristica.length));
	    document.getElementById("char1").value = caracteristica[x];
   	}
	if(document.getElementById("char2").value == "")
	{
	    var x = Math.floor((Math.random() * caracteristica.length));
	    document.getElementById("char2").value = caracteristica[x];
   	}
}

function geraSexo()
{
	genero = document.getElementById("genero");
	if(genero.value == "")
	{
		var opts = genero.options;
		var newIndex = 0;
		while(newIndex == 0)
		{
			newIndex = Math.floor(Math.random()*opts.length);
		}
		
	    genero.selectedIndex= newIndex;
   	}
}

function geraRaca()
{
	raca = document.getElementById("raca");
	if(raca.value == "")
	{
		var opts = raca.options;
		var newIndex = 0;
		while(newIndex == 0)
		{
			newIndex = Math.floor(Math.random()*opts.length);
		}
		
	    raca.selectedIndex= newIndex;
   	}
}

function geraClasse()
{
	classe = document.getElementById("classe");
	if(classe.value == "")
	{
		var opts = classe.options;
		var newIndex = 0;
		while(newIndex == 0)
		{
			newIndex = Math.floor(Math.random()*opts.length);
		}
		
	    classe.selectedIndex= newIndex;
   	}
}

function geraTendencia()
{
	tend = document.getElementById("tend");
	if(tend.value == "")
	{
		var opts = tend.options;
		var newIndex = 0;
		while(newIndex == 0)
		{
			newIndex = Math.floor(Math.random()*opts.length);
		}
		
	    tend.selectedIndex= newIndex;
   	}
}

function geraOlhos()
{
	olhos = document.getElementById("olhos");
	if(olhos.value == "")
	{
		var opts = olhos.options;
		var newIndex = 0;
		while(newIndex == 0)
		{
			newIndex = Math.floor(Math.random()*opts.length);
		}
		
	    olhos.selectedIndex= newIndex;
   	}
}

function geraIdade()
{
	if(document.getElementById('idade').value != 1)
	{
		return;
	}
	
	var idadeMin = ["","35","175","100","50","125","30","62","20","20","30","40","60"];
	var idadeMax = ["","110","750","500","200","450","80","185","60","160","150","80","190"];
	var index = document.getElementById('raca').selectedIndex;
	
	var min = parseInt(idadeMin[index]);
	var max = parseInt(idadeMax[index]);
	
	document.getElementById('idade').value = Math.floor(Math.random() * (max - min + 1) ) + min;
	
}

function geraPeso()
{
	if(document.getElementById('peso').value != 1)
	{
		return;
	}
	var index = document.getElementById('raca').selectedIndex;
	
	var min = parseInt(pesoMin[index]);
	var max = parseInt(pesoMax[index]);
	
	document.getElementById('peso').value = Math.floor(Math.random() * (max - min + 1) ) + min +" kg";
	
}

function geraAltura()
{
	if(document.getElementById('alt').value != 1)
	{
		return;
	}
	var index = document.getElementById('raca').selectedIndex;
	
	var min = parseInt(alturaMin[index]);
	var max = parseInt(alturaMax[index]);
	
	document.getElementById('alt').value = Math.floor(Math.random() * (max - min + 1) ) + min + " cm";
	
}

function geraVida()
{
	if(document.getElementById('vida').value != 1)
		return;
		
	cons = document.getElementById('con').value;
	level = document.getElementById('level').value;
	classeIndex = document.getElementById('classe').selectedIndex;
	max = dadoVida[classeIndex];
	min = 1;
	var somatorio = 0;
	
	console.log('max = ' + max);
	for(var i = 0; i<level;i++)
	{
		somatorio += parseInt(Math.floor(Math.random() * (max - min + 1) ) + min) + Math.floor((parseInt(cons)-10)*0.5);
	}
	document.getElementById('vida').value = somatorio;
}

function geraCA()
{
	if(document.getElementById('ca').value != 1)
		return;
	var destreza = Math.floor((document.getElementById('des').value - 10)*0.5);
	var CA = 10 + parseInt(destreza);
	document.getElementById('ca').value = CA;
}

function geraFoto()
{
	if(reset == false)
		return;
		
	Aolho = getRandomInt(1,maxOlho);
	Acabelo = getRandomInt(1,maxCabelo);
	AcorCabelo = getRandomInt(1,maxCabelo);
	Aboca = getRandomInt(1,maxBoca);
	Asobrancelha = getRandomInt(1,maxSobrancelha);
	ACordoOlho = getRandomInt(1,maxCordoOlho);
	ANariz = getRandomInt(1,maxNariz);
	ABarba = getRandomInt(1,maxBarba);
	ABigode = getRandomInt(1,maxBigode);
	AOrelha = getRandomInt(1,maxOrelha);
	
	console.log('AOrelha = ' + AOrelha);
	AtualizaImagem();
}

function geraFicha()
{
	geraSexo();
	geraNome();
	geraRaca();
	geraClasse();
	geraTendencia();
	geraCaracteristicas();
	geraLevel();
	geraStatus();
	geraIdade();
	//geraVida();
	//geraCA();
	console.log("reset = "+reset);
	geraFoto();
	timer = setInterval(AtualizaImagem, 100);
	reset = false;
}
function limparTudo()
{
	document.getElementById("nome").value = "";
	document.getElementById("genero").selectedIndex = 0;
	document.getElementById("raca").selectedIndex = 0;
	document.getElementById("classe").selectedIndex = 0;
	document.getElementById("tend").selectedIndex = 0;
	document.getElementById("char1").value = "";
	document.getElementById("char2").value = "";
	document.getElementById("level").value = "";
	document.getElementById("forc").value = 1;
	document.getElementById("des").value = 1;
	document.getElementById("int").value = 1;
	document.getElementById("sab").value = 1;
	document.getElementById("con").value = 1;
	document.getElementById("car").value = 1;
	document.getElementById("idade").value = 1;
	document.getElementById("peso").value = 1;
	document.getElementById("alt").value = 1;
	document.getElementById("vida").value = 1;
	document.getElementById("ca").value = 1;
	document.getElementById("img").setAttribute("style","display:none");
	document.getElementById("img-cabelo").setAttribute("style","display:none");
	reset = true;
	clearInterval(timer);
	Aolho = Acabelo = AcorCabelo = Aboca = Asobrancelha = ACordoOlho = ANariz = ABarba = ABigode = AOrelha = 0;
	
	
	var c = document.getElementById("myCanvas");
	  var ctx = c.getContext("2d");
	  ctx.clearRect(0, 0, maxWidth, maxHeight);
}

botao.onclick = geraFicha;
document.getElementById('limpar').onclick = limparTudo;


document.getElementById("id_divRight").style.width = (screen.width*0.47)+"px";
document.getElementById("id_divLeft").style.width = (screen.width*0.47)+"px";
document.getElementById("id_divRight2").style.width = (screen.width*0.47)+"px";
document.getElementById("id_divLeft2").style.width = (screen.width*0.47)+"px";
				