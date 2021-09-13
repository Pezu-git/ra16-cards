
import './App.css';
import Card from './components/Card';
import CardText from "./components/CardText";
import CardTitle from "./components/CardTitle";
import Button from "./components/Button";

const URL = "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/89c43dde-6bb9-4c1d-8e2c-59c3af5430d6/800x800"

export default function App() {
  return (
    <div className='App'>
      <Card imgURL={URL}>
        <CardTitle>Card Title 1</CardTitle>
        <CardText>Card Text Card Text Card Text Card Text Card Text</CardText>
        <Button>Button 1</Button>
      </Card>
      <Card>
        <CardTitle>Card Title 2</CardTitle>
        <CardText>Card Text Card Text Card Text Card Text Card Text</CardText>
        <Button>Button 2</Button>
      </Card>
    </div>
  );
}
