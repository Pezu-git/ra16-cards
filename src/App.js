
import './App.css';
import Card from './components/Card';
import CardText from "./components/CardText";
import CardTitle from "./components/CardTitle";
import Button from "./components/Button";

const URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wlE7RxsYhCgvesbEcOzNGgF6nNDsbyxmggq-hc4AeSZnV_sBkgsCcC_2SQal3ysWBrY&usqp=CAU"

export default function App() {
  return (
    <div className='App'>
      <Card imgURL={URL}>
        <CardTitle>JavaScript-библиотека для создания пользовательских интерфейсов</CardTitle>
        <CardText>Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. 
          Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. 
          React будет своевременно их обновлять, когда данные изменяются.</CardText>
        <Button>Button 1</Button>
      </Card>
      <Card>
        <CardTitle>Основан на компонентах</CardTitle>
        <CardText>Создавайте инкапсулированные компоненты с собственным состоянием, 
          а затем объединяйте их в сложные пользовательские интерфейсы.</CardText>
        <Button>Button 2</Button>
      </Card>
    </div>
  );
}
