
	var cidadeIndex = -1;
    var label = document.getElementById('id_label');
	var cidade  = ["","lugarejo","povoado","aldeia","vila pequena","vila grande","cidade pequena", "cidade grande","metropole"];
	var populacaoMin  = ["","20","81","401","901","2001","5001","12001", "25001"];
	var populacaoMax  = ["","80","400","900","2000","5000","12000", "25000","32513"];
	var tendencia  = ["","Leal Bom","Leal Neutro","Leal Mau","Caotico Bom","Caotico Neutro", "Caotico Mau","Neutro","Neutro Bom","Neutro Mau"];
	var poder  = ["","convencional","incomum","magico", "monstruoso"];
	var limitePO  = ["","40","100","200","800","3000","15000","40000","100000"];
	var capGuarda  = ["Combatente lvl elevado","2° guerreiro lvl mais elevado","Guerreiro lvl mais elevado"];
	var modCidade  = [0,-3,-2,-1,0,3,6,9,12];
  	var classes  = ["Adeptos", "Aristoc.", "Barbaros", "Bardos", "Clerigos","Combat.", "Druidas", "Especialis.", "Feiticeiros", "Guerreiros", "Ladinos", "Magos", "Monges", "Paladinos", "Plebeus", "Rangers"];

  	var num = getRandomInteger(2,8);
	var num2 = getRandomInteger(3,12);
	var num3 = getRandomInteger(4,16);

	var classDice = [7,5,5,7,7,num,7,num2,5,9,9,5,5,4,num3,4];

	

    function getRandomInteger(min, max) 
    {
      max = parseInt(max);
      min = parseInt(min);
      return Math.floor(Math.random() * (parseInt(max) - parseInt(min))) + 			parseInt(min);
    }
    function geraDinheiroCidade()
    {
      value = getRandomInteger(0,limitePO[cidadeIndex]);
      document.getElementById('id_dinheiro').value = value;
    }
    function geraPopulacaoCidade()
    {
      var popMin = populacaoMin[cidadeIndex];
      var popMax = populacaoMax[cidadeIndex];
      value = getRandomInteger(popMin,popMax);
      //label.innerHTML = value;
      document.getElementById('id_populacao').value = value;
      document.getElementById('id_soldados').value = Math.floor(value/100);
    }
    function geraTipoCidade()
    {
		if(document.getElementById('id_tipo').value != "")
		{
			for(var i=0;i<cidade.length;i++)
			{
				if (document.getElementById('id_tipo').value == cidade[i])
				{
					cidadeIndex = i;
					console.log("cidadeIndex = " + cidadeIndex);
					return;
				}	
			}
		}
		
		var value = 0;
    	while (value == 0)
    		value = Math.floor(Math.random() * cidade.length);
		document.getElementById('id_tipo').value = cidade[value];
		cidadeIndex = value;
    }
    
    function geraTendenciaCidade()
    {
    	if (document.getElementById('id_tendencia').selectedIndex != 0)
    		return;
    		
    	var value = 0;
    	while (value == 0)
    		value = Math.floor(Math.random() * tendencia.length);
      	document.getElementById('id_tendencia').selectedIndex = value;
    }
    function geraControleCidade()
    {
		if (document.getElementById('id_controle').selectedIndex != 0)
			return;
			
		var value = 0;
		while (value == 0)
			value = Math.floor(Math.random() * poder.length);
		document.getElementById('id_controle').selectedIndex = value;
      	        
    }

	function geraMonstrosCidade()
	{	
		
		var numColumns = 5;
		var table = document.createElement("table");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.setAttribute("align","center");
		td.innerHTML = "Personagens do Local";
		td.setAttribute("colspan",numColumns);
		tr.appendChild(td);
		tbody.appendChild(tr);
		var div = document.getElementById('id_divRight2');
		div.innerHTML = "";
		label = "";
		label += "Personagens do Local<br>";
		numMonstros = 0;
		for (var j = 0;j<classes.length;j++)
		{
			var arrayNiveis = []; 
			var arrayQtd = [];
			var mod = modCidade[cidadeIndex];
			var dieResult = getRandomInteger(1,classDice[j]) + mod;
			var nivMax = dieResult;
		
			if(nivMax <= 0)
		 		continue;
		
		    arrayNiveis[0] = nivMax;
			arrayQtd[0] = 1;
			
			var nivAtual = nivMax;
			var index = 1;
			
			while (nivAtual >= 1)
			{
		
		  		nivAtual = Math.ceil(arrayNiveis[index - 1] / 2.0);
		  		arrayNiveis[index] = nivAtual;
		  		var qtdBixos = arrayQtd[index - 1] * 2;
		
		  		arrayQtd[index] = qtdBixos;
		
		  		index++;
		
		  		if(nivAtual == 1)
					nivAtual = 0;
			}
			
			var className = classes[j];
			for(var i=0;i<arrayNiveis.length;i++)
			{
				if(numMonstros%numColumns == 0)
				{
					var tr = document.createElement("tr");
				}
				numMonstros++;
				var td = document.createElement("td");
				td.innerHTML = arrayQtd[i] + " " + className + " lvl " + arrayNiveis[i];
				tr.appendChild(td);
				if(numMonstros%numColumns == 0)
				{
					tbody.appendChild(tr);
					var tr = document.createElement("tr");
					tbody.appendChild(tr);
				}
					
				
				/*label += arrayQtd[i] + " " + className + " lvl " + arrayNiveis[i];
				label += "<br>";*/
				if(arrayNiveis[i] == 1)
					break;
			}
			//label += "<br>";	
		}
		table.appendChild(tbody);
		div.appendChild(table);
		
		//document.getElementById('id_label').innerHTML = label;
		
	}

    function geraGuardaCidade()
    {
      var value = Math.floor(Math.random() * capGuarda.length);
      document.getElementById('id_capitao').value = capGuarda[value];
    }	

    function geraPersonagensCidade()
    {
      geraGuardaCidade();
      geraMonstrosCidade();
    }
	function geraCidade()
 	{
        	geraTipoCidade();
            geraTendenciaCidade();
			geraPopulacaoCidade();
			geraDinheiroCidade();
			geraControleCidade();
           
            geraPersonagensCidade();
	}
	
	
	document.getElementById('id_gerar').onclick = geraCidade;