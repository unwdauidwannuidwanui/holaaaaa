const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');

let currentQuestionIndex, correctAnswers, incorrectAnswers;

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    correctAnswers = [];
    incorrectAnswers = [];
    showNextQuestion();
}

function showNextQuestion() {
    resetState();
    const questionData = questions[currentQuestionIndex];
    questionElement.innerText = questionData.question;
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(option));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(option) {
    if (option.correct) {
        correctAnswers.push(questions[currentQuestionIndex].question);
    } else {
        incorrectAnswers.push(questions[currentQuestionIndex].question);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hide');
    resultElement.classList.remove('hide');
    if (incorrectAnswers.length === 0) {
        resultElement.innerHTML = `<p>¡Lo completaste!</p>
		<p>‎
		<p>
		<p>
		<p>
		<p>
		<p>	
		<p>
		<p>
		<p>
		<p>
		<p>
		<p>
		<p>
		<p>
		<p>
        <p>Si, lo completaste, me sorprende, a este punto me puedes imaginar rojo como un tomate y lo que te voy a poner continuación solo es un dato que quería poner en la carta esta alemana, eso si puedes hacer una cosa y no decirme que lo completaste así o puedes ver como el Germán del futuro se pone las manos en la cara muerto de vergüenza ahora si disfruta:</p>
        <p>A veces me pongo a pensar por qué me enamoré de ti, y aunque no lo tengo súper claro, hay algo que sí sé: me encanta cómo eres. Tu personalidad, tus gustos, esa forma de ser tan tuya, incluso cuando te despistas. Son esas cosas las que te hacen única y especial.</p>
        <p>Hay veces en las que coincidimos tanto en lo que pensamos, que me parece increíble. En lugar de decírtelo de manera seria, prefería hacer la broma de "conectados por Pepephone", para que fuera algo gracioso y solo nuestro. Y la verdad, no me arrepiento para nada de quererte o de haberte querido. Los momentos que pasamos juntos me ayudaron a ver el mundo de otra manera, a salir más y no quedarme encerrado en mi cuevita.</p>
        <p>Salir contigo, pasarla bien, y simplemente estar juntos es de lo mejor que me ha pasado, y lo seguirá siendo. Por eso te quiero, y sé que siempre te querré.
		<p>‎ 
		<p>‎ 
		<p>‎ 
		<p>‎ 
		<p>‎ 
		<p>‎ 
		<p>‎ 
		<p> Bueno, lo último que quería añadir es sobre el tiempo. A estas alturas es más que obvio lo que siento, pero bueno, dejemos eso a un lado por ahora. Lo que quiero es hablarte de cuando mencioné aquello de "sentimientos en pausa". Lo que realmente quise decir es que estoy dispuesto a esperar, porque lo que siento es tan fuerte, tan especial Es como una luz dentro de mí que nunca se apaga. Y, honestamente, siempre me digo a mí mismo: "Si tengo que esperar cuatro años, valdrá totalmente la pena". Hay tiempo de sobra para que todo crezca, y está bien así.
		<p>No te digo esto esperando ninguna respuesta, de verdad, solo quería sacarlo. Germán te suelta esto porque es lo que siente, y si no lo digo, luego me arrepiento. Me encanta ser tan cabezón en este sentido, porque cualquier otra persona ya habría dejado todo, pero yo no, y me hace feliz que sea así. El tiempo decidirá todo, supongo. Yo, por mi parte, siempre daré lo mejor de mí para ti, como persona. Sé que ya lo ves, siempre busco maneras de hacer cosas juntos, de reírnos, de crear momentos.
		<p>Sé que estos mensajes suenan un poco más serios de lo que suelo ser, pero me gusta mucho que contigo puedo ser más profundo y sincero, algo que no me pasa con el 99% de la gente que conozco. Pero bueno, al final, el tiempo dirá todo. Y ya está, no tengo más que decir… un beso, cuídate mucho. Chao ;3
		</p>`;
    } else {
        resultElement.innerHTML = `<p>Fallaste en ${incorrectAnswers.length} preguntas.</p>
        <p>Vuelve a intentarlo.</p>
        <p>Preguntas incorrectas:</p>
        <ul>${incorrectAnswers.map(question => `<li>${question}</li>`).join('')}</ul>`;
    }
}

const questions = [
    { question: "¿Cuál es mi color favorito?", options: [ { text: "Naranja", correct: false }, { text: "Rojo", correct: true }, { text: "Rosa", correct: false } ] },
    { question: "¿Cuál es mi manga favorito?", options: [ { text: "Komi-san", correct: true }, { text: "Don't Toy with me, Miss Nagatoro", correct: false }, { text: "Bocchi the Rock", correct: false } ] },
    { question: "¿Qué curso repitió?", options: [ { text: "Tercero de primaria", correct: false }, { text: "Cuarto de primaria", correct: true }, { text: "Quinto de primaria", correct: false } ] },
    { question: "¿Cuál es su forma geométrica favorita?", options: [ { text: "Cuadrado", correct: false }, { text: "Círculo", correct: false }, { text: "Triángulo", correct: true } ] },
    { question: "¿Cuál es mi anime favorito?", options: [ { text: "JoJo's Bizarre Adventure", correct: true }, { text: "Hajime no Ippo", correct: false }, { text: "Baki the Grappler", correct: false } ] },
    { question: "¿Germán es gilipollas?", options: [ { text: "Sí", correct: true }, { text: "No", correct: true } ] },
    { question: "¿En qué año inicie en YouTube?", options: [ { text: "2019", correct: false }, { text: "2018", correct: true }, { text: "2020", correct: false } ] },
    { question: "¿Cómo aprendí mi estilo de dibujo?", options: [ { text: "Tutoriales de YouTube", correct: false }, { text: "Referencias de Internet", correct: false }, { text: "Un furro me enseñó por encima", correct: true } ] },
    { question: "¿Cuál es el tipo de videojuegos que mejor se me da?", options: [ { text: "Estrategia", correct: false }, { text: "Combate por turnos", correct: false }, { text: "Puntería", correct: true } ] },
    { question: "¿Germán tiene 3 bkubs cuál de ellos es su favorito?", options: [ { text: "Tewi", correct: false }, { text: "Nazrin", correct: false }, { text: "Chen", correct: true } ] },
    { question: "¿Cuál es mi Monster favorita?", options: [ { text: "Mango loco", correct: true }, { text: "Monster blanca", correct: false }, { text: "Original", correct: false } ] },
    { question: "¿Mi alfombrilla está limpia?", options: [ { text: "Sí", correct: false }, { text: "No", correct: true } ] },
    { question: "¿Germán qué no sabe?", options: [ { text: "Multiplicar", correct: false }, { text: "Las tablas de multiplicar", correct: true }, { text: "Dividir", correct: false } ] },
    { question: "¿Germán necesitó algún tutorial para aprender a hacer trucos con el lápiz?", options: [ { text: "Sí", correct: false }, { text: "No", correct: true } ] },
    { question: "¿Cuándo Germán da algún regalo a alguien espera algo a cambio?", options: [ { text: "Sí", correct: false }, { text: "No", correct: true } ] },
    { question: "¿Cuál es mi sueño como trabajo?", options: [ { text: "Reparación y montaje de ordenadores", correct: true }, { text: "Comediante", correct: false }, { text: "Me da palo", correct: false } ] },
    { question: "¿Germán se creó el canal de YouTube con la idea de?", options: [ { text: "Ayudar a pagar la casa", correct: false }, { text: "Ganar mucho dinero", correct: false }, { text: "Hacer reír a la gente y entretener", correct: true } ] },
    { question: "¿Germán le gusta el Vocaloid desde pequeño pero por burla lo dejó de escuchar?", options: [ { text: "Verdad", correct: true }, { text: "Mentira", correct: false } ] },
    { question: "¿Con quién puedo ser MÁS yo mismo?", options: [ { text: "Vicente", correct: false }, { text: "Pitto", correct: false }, { text: "Inma", correct: true }, { text: "Zorro", correct: false } ] },
    { question: "Todo el tema de informática lo aprendí solo y no me dieron nunca una mano", options: [ { text: "Verdad", correct: true }, { text: "Mentira", correct: false } ] },
    { question: "¿Cuál es uno de mis miedos?", options: [ { text: "Bailar", correct: false }, { text: "Que la gente se dé cuenta que está mejor sin mí", correct: true }, { text: "Cantar", correct: false } ] },
    { question: "¿Cuál es mi videojuego favorito?", options: [ { text: "Undertale", correct: true }, { text: "A Hat in Time", correct: false }, { text: "USB", correct: false } ] },
    { question: "¿Germán participó en eventos con streamers?", options: [ { text: "Sí", correct: true }, { text: "No", correct: false } ] },
    { question: "¿Cómo se llama la guitarra rusa de Germán?", options: [ { text: "Blackie", correct: false }, { text: "Gibson", correct: false }, { text: "Balalaika", correct: true } ] },
    { question: "¿De dónde viene el 007 de mi nombre?", options: [ { text: "De 0 amigos 0 novias 7 denuncias del Mercadona", correct: false }, { text: "Un día que me estaba creando la cuenta del Minecraft y necesitaba números y mi madre estaba viendo la peli justa del 007", correct: true }, { text: "Por mi fecha del 2007", correct: false } ] },
    { question: "¿Por qué mi cuenta del Roblox se llama cutrutorXD?", options: [ { text: "Porque lo puse random", correct: false }, { text: "Porque era una cuenta secundaria para hacer juegos", correct: true }, { text: "Porque me lo creó mi primo", correct: false } ] },
    { question: "¿Qué le pasó a mi primera tableta gráfica?", options: [ { text: "Se rompió el cable", correct: false }, { text: "Perdí el lápiz", correct: false }, { text: "Se me quemó la pantalla", correct: true } ] },
    { question: "¿Inma ordenaste tu cuarto?", options: [ { text: "No", correct: true }, { text: "Sí", correct: true } ] },
    { question: "¿Cuándo es mi cumpleaños?", options: [ { text: "9 de septiembre", correct: false }, { text: "7 de septiembre", correct: true }, { text: "11 de septiembre", correct: false } ] },
    { question: "El deporte favorito de contacto de Germán es judo", options: [ { text: "Verdadero", correct: false }, { text: "Falso", correct: true } ] },
    { question: "¿Cuál es la forma de reírse Germán por chat?", options: [ { text: "JAJAJAJAJA", correct: false }, { text: "XDDDDDD", correct: true }, { text: "kjdskjdskjdksjk", correct: false } ] },
    { question: "Si Germán le pega al teclado es porque", options: [ { text: "Porque se quiere reír", correct: false }, { text: "Se quedó sin palabras y colapsa", correct: true }, { text: "tra tra tra 4 paquetes de sal", correct: false } ] },
    { question: "¿Merece la pena hacer todo esto si fallaste alguna?", options: [ { text: "Sí", correct: true }, { text: "No", correct: true } ] },
    { question: "La primera vez que publicó Germán un post a IG fue", options: [ { text: "11 de mayo de 2022", correct: true }, { text: "11 de mayo de 2021", correct: false }, { text: "11 de mayo de 2023", correct: false } ] },
    { question: "Última pregunta: Germán no duerme bien porque", options: [ { text: "Porque tiene calor el pobre", correct: false }, { text: "No sabe dormir", correct: true }, { text: "Es la b literalmente no se dormir y no es meme", correct: false } ] }
];
