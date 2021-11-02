import HeroAvatar from '../comps/HeroAvatar';
import HeroLottie from '../comps/HeroLottie';

export default {
  title: 'Quang comps',
  component: HeroAvatar,
  component:HeroLottie,
}

export const MyAvatar = () => <HeroAvatar />
export const MyLottie = () => <HeroLottie />