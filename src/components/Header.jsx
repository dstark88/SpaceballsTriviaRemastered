import SpaceballsImage from '../assets/spaceballs.jpg';

export default function Header() {
  return (
    <header>
      <img src={SpaceballsImage} alt="Spaceballs logo" className='image' />
      <h1>Spaceballs: The Trivia Game</h1>
    </header>
  );
}
