import getData from '../../helpers/data/boardsData';

const initBoards = () => {
  getData.loadBoards()
    .then((resp) => {
      console.error('resp', resp.data.boards);
      // const { boards } = resp.data;
    })
    .catch(err => console.error('error from load boards', err));
};

export default { initBoards };
