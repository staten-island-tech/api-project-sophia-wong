try {
const cat_result = document.getElementById( 'cat-result' );
const cat_btn = document.getElementById( 'cat-btn' );
cat_btn.addEventListener( 'click', getRandomCat );

function getRandomCat() {
	fetch( 'https://aws.random.cat/meow' )
		.then( res => res.json() )
		.then( data => {
			cat_result.innerHTML = `<img src="${data.file}" />`;
		} );
}} catch (error) {
  console.log (error);
  alert("Opps, something went wrong. Please try again later.")
};


try{
const dog_result = document.getElementById( 'dog-result' );
const dog_btn = document.getElementById( 'dog-btn' );
dog_btn.addEventListener( 'click', getRandomDog );

function getRandomDog() {
	fetch( 'https://random.dog/woof.json' )
		.then( res => res.json() )
		.then( data => {
			if ( data.url.includes( '.mp4' ) ) {
				getRandomDog();
			} else {
				dog_result.innerHTML = `<img src="${data.url}" />`;
			}
		} );
}} catch (error) {
  console.log (error);
  alert("Opps, something went wrong. Please try again later.")
};


(async () => {
  const rawResponse = await 	fetch('https://kronapp.ru/api/v1/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
	  username: 'junspecorp@gmail.com',
	  password: 'Stritflesh5'
	})
  });
  const content = await rawResponse.json();
	
  console.log(rawResponse);
})();