/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',()=>{

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
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    genre = poster.querySelector('.promo__genre');


console.log(addInput);

addForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if(newFilm){
        if (newFilm.length > 5) {
            newFilm = `${newFilm.substring(0, 4)}...`;
        };

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        createMovieList(movieDB.movies, movieList[0]);

    }; 



    event.target.reset();
})



adv.forEach(x=>{
    x.remove();
});

genre.textContent = 'VASEAAAA';

poster.style.backgroundImage = 'url("img/bg.jpg")';


movieDB.movies.sort();

function createMovieList(films, parent){
     parent.innerHTML = '';

films.forEach((film, i) =>{
    movieList[0].innerHTML +=`
    <li class="promo__interactive-item">${film}
                            <div class="delete"></div>
                        </li>
    `;
});


document.querySelectorAll('.delete').forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        btn.parentElement.remove();
        movieDB.movie.splice(i,1);
    });

});


}

createMovieList(movieDB.movies, movieList[0]);

});