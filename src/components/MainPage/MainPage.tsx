import React from "react";
// import bem from 'bem-cn';
import './_MainPage.scss';
import { observer } from "mobx-react-lite";
import jpg from './img/professij.jpeg'


// const cn = bem('main');

const MainPage = observer(() => {
  return (
    <div>
      <h3>Ours employees are ours pride</h3>
      <div><img src={jpg} alt="office" /> </div>
    </div>
  );
});

export default MainPage