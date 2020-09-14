/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	movieList = document.querySelectorAll('.promo__interactive-list'),

	genre = poster.querySelector('.promo__genre');

adv.forEach(x=>{
	x.remove();
});

genre.textContent = 'VASEAAAA';

poster.style.backgroundImage = 'url("img/bg.jpg")';

 movieList[0].innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
	movieList[0].innerHTML +=`
	<li class="promo__interactive-item">${film}
                            <div class="delete"></div>
                        </li>
	`;
})




event listener

const btn = document.querySelector('button');

//btn.onclick = ()=> alert('Click');

// btn.addEventListener('click', (e)=>{
//  e.target.remove();
//  alert('vasea');
// });

let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    i++;
    if (i == 3) {
        btn.removeEventListener('click', deleteElement);
    }; 
};

btn.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event)=>{
    event.preventDefault();
})


dom tree
//console.log(document.head);
//console.log(document.documenElement);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);


//console.log(document.querySelector('#current').parentNode.parentNode);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let i of document.body.childNodes) {
    if(i.nodeName == '#text') {continue};
    console.log(i);
}