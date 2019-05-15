import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      console.error('board id', boardId);
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoard };
