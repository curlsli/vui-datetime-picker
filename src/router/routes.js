import NotFoundComponent from '../components/notfound/notfound';
import TestVuiDatetimePickerComponent from '../components/test-vui-datetime-picker/test-vui-datetime-picker.vue';

const routes = [
  {
    path: '',
    component: TestVuiDatetimePickerComponent
  },
  {
    path: '*',
    component: NotFoundComponent 
  }
]
export default routes;