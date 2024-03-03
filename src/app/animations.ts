import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('WorksPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%'
      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: 1 })]),
    group([
      query(':enter', [animate('1.5s ease-out', style({ right: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ])
]);