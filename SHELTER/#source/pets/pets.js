const pets = [
	{
		"name": "Jennifer",
		"img": "../../assets/pets-jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Sophia",
		"img": "../../assets/pets-sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Woody",
		"img": "../../assets/pets-woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"name": "Scarlett",
		"img": "../../assets/pets-scarlet.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Katrine",
		"img": "../../assets/pets-katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Timmy",
		"img": "../../assets/pets-timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"name": "Freddie",
		"img": "../../assets/pets-freddie.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Charly",
		"img": "../../assets/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
]

const burger = document.getElementById('burger');
const bg_dop_menu = document.getElementById('bg-dop-menu');
const dop_menu = document.getElementById('dop-menu');
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const friendsContent = document.querySelector('.friends-content');
const startPage = document.querySelector('.start-page');
const prevPage = document.querySelector('.prev-page');
const page = document.querySelector('.page');
const nextPage = document.querySelector('.next-page');
const endPage = document.querySelector('.end-page');
const bg_popap = document.getElementById('bg-popap');
const popap = document.getElementById('popap');
const close_popap = document.getElementById('close-popap');

// Формируем список из 48 карточек
let fullPetsList = [];

fullPetsList = (() => {
	let tempArr = [];

	for (let i = 0; i < 6; i++) {

		const newPets = pets;

		for (let j = pets.length; j > 0; j--) {
			let randInd = Math.floor(Math.random() * j);
			const randElem = newPets.splice(randInd, 1)[0];
			newPets.push(randElem);
		}

		tempArr = [...tempArr, ...newPets];
	}
	return tempArr;
})();

fullPetsList = sort6recursively(fullPetsList);

let count_cards = 0; // Количество карточек в таблице
let start_pos = 0;   // Первая карточка в таблице
let currentPage = 1; // Текущая страница

if (window.innerWidth <= 767) {
	count_cards = 3;
} else if (window.innerWidth > 767 && window.innerWidth <= 1279) {
	count_cards = 6;
} else if (window.innerWidth > 1279) {
	count_cards = 8;
}

// Обработчик события для черного фота дополнительного меню
bg_dop_menu.addEventListener('click', function (event) {
	burger.click();
});

// Назначаем обработчик события для бургера
burger.addEventListener('click', function (event) {
	this.classList.toggle('active');
	dop_menu.classList.toggle('active');
	bg_dop_menu.classList.toggle('active');
	header.classList.toggle('active');
	document.body.classList.toggle('no-overflow');
});

// Обработчик события для логотипа
logo.addEventListener('click', function () {
	if (burger.classList.contains('active')) {
		burger.click();
	}
});

// Закрытие дполнительного меню при разрешении экрана больше 767px
window.addEventListener('resize', function (event) {
	if (this.innerWidth > 767 && burger.classList.contains('active')) {
		burger.click();
	}
});

// Обработчик события кнопки prev
prevPage.addEventListener('click', function () {
	if (start_pos - count_cards >= 0) {
		start_pos -= count_cards;
		currentPage--;
		if (currentPage === 1) {
			prevPage.setAttribute('disabled', '');
			startPage.setAttribute('disabled', '');
		}
		if (!((currentPage === 6 && count_cards === 8) || (currentPage === 8 && count_cards === 6) || (currentPage === 16 && count_cards === 3))) {
			nextPage.removeAttribute('disabled');
			endPage.removeAttribute('disabled');
		}
		createTable();
	}
});

// Обработчик события кнопки next
nextPage.addEventListener('click', function () {
	if (start_pos + count_cards < fullPetsList.length) {
		start_pos += count_cards;
		currentPage++;
		if (currentPage > 1) {
			prevPage.removeAttribute('disabled');
			startPage.removeAttribute('disabled');
		}
		if ((currentPage === 6 && count_cards === 8) || (currentPage === 8 && count_cards === 6) || (currentPage === 16 && count_cards === 3)) {
			nextPage.setAttribute('disabled', '');
			endPage.setAttribute('disabled', '');
		}
		createTable();
	}
});

// Обработчик события для кнопик endPage
endPage.addEventListener('click', function () {
	if (!((currentPage === 6 && count_cards === 8) || (currentPage === 8 && count_cards === 6) || (currentPage === 16 && count_cards === 3))) {
		start_pos = fullPetsList.length - count_cards;
		endPage.setAttribute('disabled', '');
		nextPage.setAttribute('disabled', '');

		prevPage.removeAttribute('disabled');
		startPage.removeAttribute('disabled');

		currentPage = 48 / count_cards;
		createTable();
	}

});

// Обработчик события для кнопки startPage
startPage.addEventListener('click', function () {
	if (!(currentPage === 1)) {
		start_pos = 0;
		endPage.removeAttribute('disabled');
		nextPage.removeAttribute('disabled');
		prevPage.setAttribute('disabled', '');
		startPage.setAttribute('disabled', '');

		currentPage = 1;
		createTable();
	}
})


createTable();

let consoleArray = [];
for (let i = 0; i < fullPetsList.length; i++) {
	consoleArray.push(fullPetsList[i].name);
}

//console.log(consoleArray);



// Создание таблицы карточек
function createTable() {
	friendsContent.innerHTML = "";

	for (let i = start_pos; i < start_pos + count_cards; i++) {
		friendsContent.append(CreateCard(i));
	}

	page.innerText = currentPage;
}


// Функция создание карточки питомца
function CreateCard(number) {
	let pet = fullPetsList[number];

	let card = document.createElement('div');
	card.classList.add('card');
	card.addEventListener('click', function () {
		setPopup(number);
	});

	let img = document.createElement('img');
	img.src = pet.img;
	img.alt = pet.name;
	card.append(img);

	let p = document.createElement('p');
	p.classList.add('title');
	p.innerText = pet.name;
	card.append(p);

	let button = document.createElement('button');
	button.classList.add('button_secondary');
	button.innerText = 'Learn more';
	card.append(button);

	return card;
};

// Функция создания контента для popup
function setPopup(number) {
	let pet = fullPetsList[number];

	let img = document.querySelector('#popap > div.wrap-img > img');
	img.src = pet.img;
	img.alt = pet.name;

	let h3 = document.querySelector('#popap > div.content > h3');
	h3.innerText = pet.name;

	let subtitle = document.querySelector('#popap > div.content > p.subtitle');
	subtitle.innerText = pet.type + ' - ' + pet.breed;

	let description = document.querySelector('#popap > div.content > p.description');
	description.innerText = pet.description;

	let age = document.querySelector('#popap > div.content > ul > li:nth-child(1) > span');
	age.innerText = pet.age;

	let inoculations = document.querySelector('#popap > div.content > ul > li:nth-child(2) > span');
	inoculations.innerText = pet.inoculations.join(', ');

	let diseases = document.querySelector('#popap > div.content > ul > li:nth-child(3) > span');
	diseases.innerText = pet.diseases.join(', ');

	let parasites = document.querySelector('#popap > div.content > ul > li:nth-child(4) > span');
	parasites.innerText = pet.parasites.join(', ');

	bg_popap.classList.toggle('hidden');
	popap.classList.toggle('hidden');
	document.body.classList.toggle('no-overflow');
}

// Обработчик события для bg-popap
bg_popap.addEventListener('click', function () {
	this.classList.add('hidden');
	popap.classList.add('hidden');
	document.body.classList.toggle('no-overflow');
});

// Обработчик события для close-popap
close_popap.addEventListener('click', function () {
	bg_popap.classList.add('hidden');
	popap.classList.add('hidden');
	document.body.classList.toggle('no-overflow');
});

function sort6recursively(list) {
	const length = list.length;

	for (let i = 0; i < (length / 6); i++) {
		const stepList = list.slice(i * 6, (i * 6) + 6);

		for (let j = 0; j < 6; j++) {
			const duplicatedItem = stepList.find((item, ind) => {
				return item.name === stepList[j].name && (ind !== j);
			});

			if (duplicatedItem !== undefined) {
				const ind = (i * 6) + j;
				const which8OfList = Math.trunc(ind / 8);

				list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

				sort6recursively(list);
			}
		}
	}

	return list;
}


