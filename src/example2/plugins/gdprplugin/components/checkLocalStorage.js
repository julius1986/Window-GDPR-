import {
  TWENTY_FOUR_HOURS_IN_MILLESECONDS
} from './constants';
export default function() {
  if (localStorage.getItem('gdprDate') && localStorage.getItem('gdprAnswer')) {
    let timeLeft = Date.now() - Number(localStorage.getItem('gdprDate'));
    if (timeLeft < TWENTY_FOUR_HOURS_IN_MILLESECONDS) {
      return false;
    }
    localStorage.removeItem('gdprAnswer');
    localStorage.setItem('gdprDate', Date.now());
  } else {
    localStorage.removeItem('gdprAnswer');
    localStorage.setItem('gdprDate', Date.now());
  }
  return true;
}
