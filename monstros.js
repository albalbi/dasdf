var monsterIndex = -1;
var names = [];
var challengeRating = [];
var challengeXP = [];
var ACType = [];
var AC = [];
var STR = [];
var STRMod = [];
var DEX = [];
var DEXMod = [];
var CON = [];
var CONMod = [];
var INT = [];
var INTMod = [];
var WIS = [];
var WISMod = [];
var CHA = [];
var CHAMod = [];
var HPDice = [];
var HP = [];

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                analyzeText(allText);
            }
        }
    };
    rawFile.send(null);
}

function analyzeText(text)
{
	
	var currentCol = 0;
	var curWord = "";
	for(var i=0;i<text.length;i++)
	{
		if(text[i] == ";" || text[i] == "\n")
		{
			if(curWord == "Name")
				curWord = "";
			else if(curWord == "")
				curWord = "NONE";
			
			if(currentCol == 18)
			{
				curWord = curWord.substring(0, curWord.length - 1);
			}
					
			switch(currentCol)
			{
				case 0:
					names[names.length] = curWord;
					break;
				case 1:
					challengeRating[challengeRating.length] = curWord;
					break;
				case 2:
					challengeXP[challengeXP.length] = curWord;
					break;
				case 3:
					ACType[ACType.length] = curWord;
					break;
				case 4:
					AC[AC.length] = curWord;
					break;
				case 5:
					STR[STR.length] = curWord;
					break;
				case 6:
					STRMod[STRMod.length] = curWord;
					break;
				case 7:
					DEX[DEX.length] = curWord;
					break;
				case 8:
					DEXMod[DEXMod.length] = curWord;
					break;
				case 9:
					CON[CON.length] = curWord;
					break;
				case 10:
					CONMod[CONMod.length] = curWord;
					break;
				case 11:
					INT[INT.length] = curWord;
					break;
				case 12:
					INTMod[INTMod.length] = curWord;
					break;
				case 13:
					WIS[WIS.length] = curWord;
					break;
				case 14:
					WISMod[WISMod.length] = curWord;
					break;
				case 15:
					CHA[CHA.length] = curWord;
					break;
				case 16:
					CHAMod[CHAMod.length] = curWord;
					break;
				case 17:
					HPDice[HPDice.length] = curWord;
					break;
				case 18:
					HP[HP.length] = curWord;
					break;
				default:
					break;
			}
			if(currentCol == 18)
				currentCol = -1;
			currentCol++;
			curWord = "";
		}
		else
			curWord+=text[i];
	}
	console.log(HP);
	
	select = document.getElementById('id_Monster');
	for(var i=0;i<names.length;i++)
	{
	   var element = names[i];
	   var opt = document.createElement("option");
	   opt.value= element;
	   opt.innerHTML = element; 
	   select.appendChild(opt);
	}
}

function geraTipoMonstro()
{
	if(document.getElementById('id_Monster').value != "")
	{
		monsterIndex = document.getElementById('id_Monster').selectedIndex;
		return;
	}
		
	var value = 0;
	while (value == 0)
		value = Math.floor(Math.random() * names.length);
	monsterIndex = value;
	document.getElementById('id_Monster').selectedIndex = value;

}

function geraAC()
{
	document.getElementById('id_MonsterAC').value = AC[monsterIndex];
	document.getElementById('id_MonsterACType').value = ACType[monsterIndex];
}

function geraChallenge()
{
	document.getElementById('id_MonsterChaRating').value = challengeRating[monsterIndex];
	document.getElementById('id_MonsterChaXP').value = challengeXP[monsterIndex];
}


function geraSTR()
{
	document.getElementById('id_MonsterSTR').value = STR[monsterIndex];
	document.getElementById('id_MonsterSTRMod').value = STRMod[monsterIndex];
}

function geraDEX()
{
	document.getElementById('id_MonsterDEX').value = DEX[monsterIndex];
	document.getElementById('id_MonsterDEXMod').value = DEXMod[monsterIndex];
}

function geraCON()
{
	document.getElementById('id_MonsterCON').value = CON[monsterIndex];
	document.getElementById('id_MonsterCONMod').value = CONMod[monsterIndex];
}

function geraINT()
{
	document.getElementById('id_MonsterINT').value = INT[monsterIndex];
	document.getElementById('id_MonsterINTMod').value = INTMod[monsterIndex];
}
function geraWIS()
{
	document.getElementById('id_MonsterWIS').value = WIS[monsterIndex];
	document.getElementById('id_MonsterWISMod').value = WISMod[monsterIndex];
}

function geraCHA()
{
	document.getElementById('id_MonsterCHA').value = CHA[monsterIndex];
	document.getElementById('id_MonsterCHAMod').value = CHAMod[monsterIndex];
}

function geraHP()
{
	document.getElementById('id_MonsterHP').value = HP[monsterIndex];
	document.getElementById('id_MonsterHPMod').value = HPDice[monsterIndex];
}

function geraImg()
{
	if(reset = false)
		return;
			
	fonte = "monstros/";
	fonte += names[monsterIndex]+".jpg";
	
	document.getElementById('img_monster').setAttribute("src",fonte);
	document.getElementById('img_monster').setAttribute("style","");
}

function geraMonstro()
{
	if(names.length == 0)
		return;
	
	geraTipoMonstro();
	geraAC();
	geraChallenge();
	geraSTR();
	geraDEX();
	geraCON();
	geraINT();
	geraWIS();
	geraCHA();
	geraHP();
	
	geraImg();

}

function monster_limparTudo()
{
	document.getElementById('id_Monster').selectedIndex = 0;
	document.getElementById('id_MonsterAC').value = "";
	document.getElementById('id_MonsterACType').value = "";
	document.getElementById('id_MonsterSTR').value = "";
	document.getElementById('id_MonsterSTRMod').value = "";
	document.getElementById('id_MonsterChaRating').value = "";
	document.getElementById('id_MonsterChaXP').value = "";
	document.getElementById('id_MonsterDEX').value = "";
	document.getElementById('id_MonsterDEXMod').value = "";
	document.getElementById('id_MonsterCON').value = "";
	document.getElementById('id_MonsterCONMod').value = "";
	document.getElementById('id_MonsterINT').value = "";
	document.getElementById('id_MonsterINTMod').value = "";
	document.getElementById('id_MonsterWIS').value = "";
	document.getElementById('id_MonsterWISMod').value = "";
	document.getElementById('id_MonsterCHA').value = "";
	document.getElementById('id_MonsterCHAMod').value = "";
	document.getElementById('id_MonsterHP').value = "";
	document.getElementById('id_MonsterHPMod').value = "";
	document.getElementById("img_monster").setAttribute("style","display:none");
}

document.getElementById('id_monsterCreate').onclick = geraMonstro;
document.getElementById('id_monsterClear').onclick = monster_limparTudo;
readTextFile("monsters.csv");


document.getElementById("id_divRight3").style.width = (screen.width*0.47)+"px";
document.getElementById("id_divLeft3").style.width = (screen.width*0.47)+"px";