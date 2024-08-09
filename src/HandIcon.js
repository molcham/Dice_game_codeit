import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
    //IMAGES라는 객체를 생성하기
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value }) {
    //구조분해 사용하기
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
