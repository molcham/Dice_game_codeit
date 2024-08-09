import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

let src;
function HandIcon({value}) {
  if(value ==='rock'){
    src=rockImg;
  }
  else if(value ==='scissor'){
    src=scissorImg;
  }
  else {
    src=paperImg;
  }
  return <img src={src} alt={value} />;
}

export default HandIcon;
