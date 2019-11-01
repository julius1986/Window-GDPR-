import './plugins/gdprplugin/css/main.css';
import GdprPlugin from './plugins/gdprplugin/GdprPlugin'
import checkLocalStorage from './plugins/gdprplugin/components/checkLocalStorage';

if (checkLocalStorage()) {
  GdprPlugin();
}
