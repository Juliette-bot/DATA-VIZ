//const input = document.getElementById('input')
const inputClasse = document.getElementsByClassName('input')

document.querySelector('.sticks').addEventListener('click',(e) =>
{
	e.stopPropagation();
	e.preventDefault();
  	//document.querySelector('.input').value = '';
	document.querySelector('.input-container').blur();
});



inputClasse.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {

        const response = await fetchTwitch(event.target.value)
        console.log(response.followers_total)
        const pFollowers = document.createElement('p')
        pFollowers.innerText = response.followers_total
        divInfo1.appendChild(pFollowers)

        etoilesContent()
        anyme023Content()
        squeezieContent()



    }

})