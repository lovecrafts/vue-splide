import { Splide, SplideSlide } from '../components';
import VueCompositionAPI from '@vue/composition-api';


export const VueSplide = {
  install( app: any ): void {
    app.use( VueCompositionAPI );
    app.component( Splide.name, Splide );
    app.component( SplideSlide.name, SplideSlide );
  },
};
