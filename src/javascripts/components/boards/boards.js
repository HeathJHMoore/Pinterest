import getData from '../../helpers/data/boardsData';
import util from '../../helpers/util';
import pins from '../pins/pins';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domBuilder = (array) => {
  let domString = '';
  array.forEach((board) => {
    domString += '<div class="boards col-3">';
    domString += `<div class="card mt-2 p-2" id="${board.id}">`;
    domString += `<h4>${board.name}</h4>`;
    domString += '<button class="btn btn-warning see-pins m-auto col-6">Pins</button>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  getData.loadBoards()
    .then((resp) => {
      console.error('resp', resp.data.boards);
      const { boards } = resp.data;
      domBuilder(boards);
    })
    .catch(err => console.error('error from load boards', err));
};

export default { initBoards };
