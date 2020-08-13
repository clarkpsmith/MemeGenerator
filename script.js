const imageUrl = document.querySelector('#imageUrl');
const txtOnTop = document.querySelector('#memeTextInputTop');
const txtOnBottom = document.querySelector('#memeTextInputBtm');
const addMeme = document.querySelector('#addMeme');
const memeArea = document.querySelector('#memeArea');
const deleteBtn = document.querySelector('button');
const form = document.querySelector('form');

//addMeme.addEventListener('click', (e) => createMeme(e));
form.addEventListener('submit', (e) => createMeme(e)); // Why doesnt this work??
deleteBtn.addEventListener('click', deleteMeme);

function deleteMeme() {
	memeArea.lastChild.remove();
}

function createMeme(e) {
	e.preventDefault();
	const parentDiv = document.createElement('div');
	parentDiv.classList.add('newDiv');
	const img = document.createElement('img');
	img.src = imageUrl.value;
	parentDiv.appendChild(img);
	memeArea.appendChild(parentDiv);
	const topTxtDiv = document.createElement('div');
	topTxtDiv.textContent = txtOnTop.value;
	parentDiv.appendChild(topTxtDiv);
	const bottomTxtDiv = document.createElement('div');
	bottomTxtDiv.classList.add('bottomtxt');
	topTxtDiv.classList.add('toptxt');
	bottomTxtDiv.textContent = txtOnBottom.value;
	parentDiv.appendChild(bottomTxtDiv);
	form.reset();
}
