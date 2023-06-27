const trainers = [
    {
        name: 'Jakob Curtis',
        position: 'Founder & Owners',
        photo: './gallery/images/trainers/trainer_1.png',
        facebook: './gallery/icons/trainers/trainers_social_media_list_1.png',
        instagram: './gallery/icons/trainers/trainers_social_media_list_2.png',
        twitter: './gallery/icons/trainers/trainers_social_media_list_3.png',
    },
    {
        name: 'Ryan Vetrovs',
        position: 'Coach',
        photo: './gallery/images/trainers/trainer_2.png',
        facebook: './gallery/icons/trainers/trainers_social_media_list_1.png',
        instagram: './gallery/icons/trainers/trainers_social_media_list_2.png',
        twitter: './gallery/icons/trainers/trainers_social_media_list_3.png',
    },
    {
        name: 'Marcus Levin',
        position: 'Coach',
        photo: './gallery/images/trainers/trainer_3.png',
        facebook: './gallery/icons/trainers/trainers_social_media_list_1.png',
        instagram: './gallery/icons/trainers/trainers_social_media_list_2.png',
        twitter: './gallery/icons/trainers/trainers_social_media_list_3.png',
    },
    {
        name: 'Ahmad Saris',
        position: 'Coach',
        photo: './gallery/images/trainers/trainer_4.png',
        facebook: './gallery/icons/trainers/trainers_social_media_list_1.png',
        instagram: './gallery/icons/trainers/trainers_social_media_list_2.png',
        twitter: './gallery/icons/trainers/trainers_social_media_list_3.png',
    },
    {
        name: 'Phillip Mango',
        position: 'Coach',
        photo: './gallery/images/trainers/trainer_5.png',
        facebook: './gallery/icons/trainers/trainers_social_media_list_1.png',
        instagram: './gallery/icons/trainers/trainers_social_media_list_2.png',
        twitter: './gallery/icons/trainers/trainers_social_media_list_3.png',
    },
    {
        name: 'Martin Calzoni',
        position: 'Coach',
        photo: './gallery/images/trainers/trainer_6.png',
        facebook: './gallery/icons/trainers/trainers_social_media_list_1.png',
        instagram: './gallery/icons/trainers/trainers_social_media_list_2.png',
        twitter: './gallery/icons/trainers/trainers_social_media_list_3.png',
    },
]

const trainersCards = document.querySelector('.js_team_trainers');
const trainersData = crateTrainerCard(trainers)

trainersCards.insertAdjacentHTML('beforeend', trainersData)


function crateTrainerCard (trainers) {
    return trainers.map(({name, position, photo, facebook, instagram, twitter}) => {
        return `<div class="card_trainer">
        <a href="">
            <img class="photo_trainer" src="${photo}" alt="Jakob Curtis">
        </a>
        <h3>${name}</h3>
        <p>${position}</p>
        <div class="social_media">
            <ul>
                <li><a href=""><img src="${facebook}" alt="Facebook"></a></li>
                <li><a href=""><img src="${instagram}" alt="Instagram"></a></li>
                <li><a href=""><img src="${twitter}" alt="Twitter"></a></li>
            </ul>
        </div>
    </div>`
    }).join('')
}