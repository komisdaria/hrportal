import React, {useEffect} from "react";
import bem from 'bem-cn';
import './_MainPage.scss';
import { observer } from "mobx-react-lite";
import jpg from './img/professij.jpeg';
import employeesOption from "../../store/employeesOption";


const cn = bem('main');

const MainPage = observer(() => {

  return (
    <div  className={cn("content")}>
      <h3 className={cn("content-name")}>Ours employees are ours pride</h3>
      <div><img  className={cn("content-img")} src={jpg} alt="office" /> </div>
    </div>
  );
});

export default MainPage