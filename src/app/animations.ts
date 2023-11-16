import { animation, state, style, trigger } from "@angular/animations";

export const menuAnimation = ([
    state('in', style({ transition: 'all .3s ease-out' })),
    state('out', style({ transition: 'all .3s ease-out' })),
    // transition('* => *', animate('300ms ease')),
]);
