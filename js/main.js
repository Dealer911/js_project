// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на
// страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(value => {

        const wrap_users = document.createElement(`div`);
        wrap_users.setAttribute(`class`, `wrap_users`);
        document.body.append(wrap_users);

        for (const item of value) {
            const user = document.createElement(`div`);
            user.setAttribute(`class`, `user`);
            user.innerHTML = `<h3>ID : ${item.id}</h3>
                            <h2>Name : ${item.name}</h2>`;
            wrap_users.append(user);

            const userDetails = document.createElement(`a`);
            userDetails.setAttribute(`target`, `_blank`);
            userDetails.setAttribute(`class`, `link_userDetails`);
            userDetails.setAttribute(`href`, `http://localhost:63342/project_js/html/user-details.html?_ijt=401nubq02h9vjq5afosgbr59bh&_ij_reload=RELOAD_ON_SAVE`);
            user.append(userDetails);
            userDetails.innerText = `User Details`;
            // userDetails.style.fontSize=`20px`;
            userDetails.style.margin = `30px`;


            userDetails.onclick = function () {
                localStorage.setItem(`idUser`, `${item.id}`);
            }


        }

    })
