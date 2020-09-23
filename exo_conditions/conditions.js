/*
**Exerice 1
*/

var age = window.prompt("Age ??");

if (age < 18){
	window.alert("Vous etes trop jeunes vous avez " + age);
}else if (age > 18 && age < 42){
	window.alert("Vous pouveez entrer vous avez "+age);
}else{
	window.alert("salut patron");
}

/*
**Exerice 2
*/

var rand = Math.floor(Math.random()*30)+1;
console.log(rand);
if (rand<=10){
	console.log("Cool");
}else if (rand>10 && rand <= 20){
	console.log("Tepid");
}else if (rand>20 && rand<=30){
	console.log("Warm");
}

/*
**Exerice 3
*/

var d = new Date();
var n = d.getDay();

switch(n){
	case 1 :
		console.log("Il est Lundi...");
		break;
	case 2 :
		console.log("Il est mardi");
		break;
	case 3 :
		console.log("Il est mercredi");
		break;
	case 4 : 
		console.log("Il est jeudi");
		break;
	case 5 :
		console.log("Il est vendredi");
		break;
	case 6 :
		console.log("Il est samedi");
		break;
	case 7 :
		console.log("Enfin dimanche !");	
}

/*
**Exerice 4
*/
var vn = window.prompt('pomme, abricot ou poire ?');
if (vn.toLowerCase() === 'pomme'){
	vn = window.prompt('Un classique. Maintenant : chien ou chat ?');
	if (vn.toLowerCase() === 'chien'){
		vn = window.prompt('Je hais les petits chiens. Pour finir : 69 ou 42 ?');
		if (vn == 69){
	  	window.alert('Coquin.');
		}else if (vn == 42){
			window.alert('La grande réponse sur la vie, l\'univers et le reste !');
		}
	}else if (vn.toLowerCase() === 'chat'){
		window.alert('Je suis alergique aux chats, au revoir.');
	}
}else if (vn.toLowerCase() === 'abricot'){
	window.alert('Ca donne des maux de ventre ca. Je dois aller aux toilettes.');
}else if (vn === 'poire'){
	vn = window.prompt('Ca existe le jus de poire ?');
	if (vn.toLowerCase() === 'oui'){
		vn = window.prompt('Et c\'est bon ?');
		if (vn.toLowerCase() === 'oui'){
			window.alert('Bah je vais aller gouter, merci !');
		}else{
			window.alert('De toute façon t\'es moche.');
		}
	}else if (vn.toLowerCase() === 'non'){
		window.alert('Menteur, je parle pas aux menteurs.')
	}else{
		window.alert('Bah vas y dit moi n\'importe quoi tiens.');
	}
}

/*
**Exerice 5
*/

var isTrue = true;
var isFalse = false;
var verified = true;

if (verified){

	if (isTrue != true){
		verified = false;
	}
	if (isFalse === false){
		verified = false;
	}
	verified = true;

}

/*
**Exerice 6
*/
var myNum = 3;
var test;

var test = myNum === undefined ? console.log("Cette variable n'existe pas") : console.log(42);

/*
**Exerice 7
*/

var familly = window.prompt('entrer un chiffre entre 0 et 49');

switch (true){

	case familly < 10 :
		window.alert('Ce chiffre fait partie de la famille des 0');
		break;
	case familly >= 10 &&familly < 20 :
		window.alert('Ce chiffre fait partie de la famille des 10');	
		break;
	case familly >=20 &&familly < 30 :
		window.alert('Ce chiffre fait partie de la famille des 20');
		break;
	case familly >=30 && familly < 40 :
		window.alert('Ce chiffre fait partie de la famille des 30');
		break;
	case familly >=40 && familly < 50:
		window.alert('Ce chiffre fait partie de la famille des 40');
	default: 
			window.alert('Ce chiffre n\'est pas dans l\intervalle proposé');
		break;
}