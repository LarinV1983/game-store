import React from 'react';
import GameItems from '../../components/game-items/GameItems.jsx';
import './home.css';

const GAMES = [
    {
        image: '/game-covers/WarThunder.jpg',
        title: 'War Thunder',
        genres: ['Симулятор', 'Полёты'],
        price: 2343,
        video: 'https://www.youtube.com/embed/jaVsvJqWwZI',
        id: 1,
        description: "War Thunder – самая масштабная бесплатная кроссплатформенная многопользовательская онлайн-игра, посвященная боевой технике самых разных войн и конфликтов – с начала XX века и до наших дней. Авиация, наземные силы и флот сражаются вместе в одном бою.",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/DCS.jpg',
        title: 'DCS World Steam Edition',
        genres: ['Симулятор', 'Реализм', 'Полёты'],
        video: 'https://www.youtube.com/embed/dtmGCYeipas',
        price: 3021,
        id: 3,
        description: 'Почувствуйте всю мощь современной боевой авиации! Займите место в российском штурмовике Су-25Т и сбросьте на головы противника несколько тонн бомб! Утомляет гул реактивных двигателей, хочется прикоснуться к чему-то раритетному? Тогда ваш выбор учебно-тренировочный самолет TF-51D, модификация легендарного истребителя P-51D “Mustang”! Отрабатывайте фигуры высшего пилотажа и полеты на предельно малой высоте, практикуйтесь в выполнении посадки в ветреную погоду и темное время суток. Добро пожаловать в DCS World!'
    },
    {
        image: '/game-covers/Arma.jpg',
        title: 'Arma Reforger',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/J8htu5b_Y30',
        price: 7166,
        id: 4,
        description: 'Примите участие в реалистичных боях времен холодной войны и присоединитесь к друзьям в борьбе за обширный остров посреди Атлантики площадью 51 км² или возьмите на себя роль Мастера игры и создайте свои собственные сценарии для других игроков.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]


function Home() {
	return (
		<div className='home-page'>
		{GAMES.map(game => <GameItems
			game={game}
			key={game.id}
			/>)}
		</div>
	)
}

export default Home;