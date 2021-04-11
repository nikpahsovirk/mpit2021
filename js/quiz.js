const questions = [
	{ // 1
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Проверять правильность работы офисного оборудования и следить за его состоянием", right: true },
			{ title: "Управлять каким-либо видом техники (автомобиль, самолет, мотоцикл)", right: false },
			{ title: "Ухаживать за домашними животными", right: false },
			{ title: "Обрабатывать музыкальные композиции", right: false },
		]
	},
	{ // 2
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Вести занятия в фитнес-зале", right: false },
			{ title: "Учитель математики", right: false },
			{ title: "Заниматься оформлением выставок и витрин", right: true },
			{ title: "Разрабатывать компьютерные программы и алгоритмы", right: false },
		]
	},
	{ // 3
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Лечить людей или помогать им психологически", right: false },
			{ title: "Следить за исправностью техники в аэропорту или вокзале и вовремя ремонтировать ееt", right: false },
			{ title: "Исследовать поведение животных в искусственных лабораторных условиях", right: true },
			{ title: "Обрабатывать фотографии с помощью компьютерных программ", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Вести свой блог или писать статьи для различных изданий", right: false },
			{ title: "Ремонтировать и настраивать компьютерную технику", right: false },
			{ title: "Изучать микроорганизмы и бактерии с помощью современных микроскопов", right: true },
			{ title: "Анализировать изменения цен акций на бирже", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Проверять правильность заполнения документов, договоров, доверенностей", right: false },
			{ title: "Проводить предпродажное тестирование смартфонов и компьютерной техники", right: false },
			{ title: "Заниматься разведением и дрессировкой породистых собак", right: true },
			{ title: "Заниматься обработкой и анализом собранных данных", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Обрабатывать собранные данные страховой компании, строить прогнозы и страховые риски", right: false },
			{ title: "Заниматься сборкой и настройкой интернет оборудования и компьютеров", right: false },
			{ title: "Заниматься поиском месторождений полезных ископаемых", right: true },
			{ title: "Анализировать и определять самые выгодные способы доставки товаров в магазины", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Обслуживать промышленное техническое оборудование", right: false },
			{ title: "Находить неисправности в автомобилях, ремонтировать их и выполнять сервисное обслуживание", right: false },
			{ title: "Изобретать новые бытовые электроприборы", right: true },
			{ title: "Систематизировать книги в библиотеке и оптимизировать их хранение", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Обучать учеников или студентов", right: false },
			{ title: "Вести документооборот в компании", right: false },
			{ title: "Создавать новые модели одежды или аксессуаров в соответствии с модой", right: true },
			{ title: "Подбирать для туристов оптимальные места отдыха, проводить им экскурсии", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Придумывать сценарии и декорации для различных праздников и событий", right: false },
			{ title: "Составлять сценарии для промороликов и флешмобов", right: false },
			{ title: "Следить за состоянием лесов, вовремя предпринимать меры по их восстановлению", right: true },
			{ title: "Разводить редких, экзотических животных", right: false },
		]
	},
	{
		title: "Какую профессию вы бы предпочли?",
		questions: [
			{ title: "Участвовать в театральных постановках", right: false },	
			{ title: "Обеспечивать безопасность корпоративной сетевой инфраструктуры", right: false },
			{ title: "Создавать дизайн сайтов, иллюстрации в журналах", right: true },
			{ title: "Следить за курсами валют и акций, участвовать в торгах", right: false },
		]
	},
]
let points = 0;
let quest = 0;

const rightAnswer = () => {
	++points;
	console.log(points);
	nextQuestion();
}

const nextQuestion = () => {
	if (quest === 10) {
		concludeResults();
		return;
	}

	const title = document.querySelector('.question');
	const buttons = document.querySelectorAll('.option button');
	const question = questions[quest];
	const options = question.questions;

	title.innerHTML = `Вопрос ${quest + 1}. ${question.title}`;

	for (let i = 0; i < 4; ++i) {
		const option = options[i];
		const button = buttons[i];
		const right = option.right;

		button.innerHTML = option.title;
		button.onclick = right ? rightAnswer : nextQuestion;
	}

	++quest;
}

const concludeResults = () => {
	const professions = ["Гуманитарий", "Физмат", "ЕНП", "МИТ"];
	const wrapper = document.querySelector('.results');
	const qtitle = document.querySelector('.question');
	const qoptions = document.querySelector('.options');

	wrapper.style.display = "flex";
	qtitle.style.display = "none";
	qoptions.style.display = "none";

	const profession = document.querySelector('.profession');
	const suggestions = document.querySelectorAll('.suggestion');

	profession.innerHTML = professions[Math.floor(Math.random() * professions.length)];

	if (points < 2) {
		suggestions[0].innerHTML = 'Якутская государственная сельскохозяйственная академия';
		suggestions[1].innerHTML = 'Якутский гуманитарный институт';
		suggestions[2].innerHTML = 'Академия труда и социальных отношений';
		suggestions[3].innerHTML = 'Якутский государственный инженерно-технический институт';
	} else if (points < 5) {
		suggestions[0].innerHTML = 'Сибирский государственный университет водного транспорта — филиал';
		suggestions[1].innerHTML = 'Институт деловой карьеры';
		suggestions[2].innerHTML = 'Финансово-экономический колледж имени И.И. Фадеева';
		suggestions[3].innerHTML = 'Гуманитарный университет профсоюзов';
	} else if (points < 8) {
		suggestions[0].innerHTML = 'Северо-Восточный федеральный университет им. М.К. Аммосова';
		suggestions[1].innerHTML = 'Арктический государственный институт культуры и искусств';
		suggestions[2].innerHTML = 'Восточно-Сибирский институт экономики и менеджмента';
		suggestions[3].innerHTML = 'Институт современного искусства';
	} else {
		suggestions[0].innerHTML = 'Санкт-Петербургский государственный университет';
		suggestions[1].innerHTML = 'Московский физико-технический институт';
		suggestions[2].innerHTML = 'Московский физико-технический институт';
		suggestions[3].innerHTML = 'Томский государственный университет';
	}
}

nextQuestion();