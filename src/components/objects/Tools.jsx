import { useSyncExternalStore, TouchEvent, useState } from 'react';

export function useWindowDimensions() {
    // the 3rd parameter is optional and only needed for server side rendering
    return useSyncExternalStore(getCurrentWindowSize, getSnapshot, getServerSnapshot);
}

export function getCurrentWindowSize(callback) {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}

export function getSnapshot() {
    return { width: window.innerWidth, height: window.innerHeight };
}

export function getServerSnapshot() {
    return {
        width: 0,
        height: 0,
    };
}

export function getCurrentWidth() {
    getCurrentWindowSize();
    return getSnapshot().width;
}

export function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

// interface SwipeInput {
//     onSwipedLeft: () => void
//     onSwipedRight: () => void
// }

// interface SwipeOutput {
//     onTouchStart: (e: TouchEvent) => void
//     onTouchMove: (e: TouchEvent) => void
//     onTouchEnd: () => void
// }

// export default (input: SwipeInput): SwipeOutput => {
//     const [touchStart, setTouchStart] = useState(0);
//     const [touchEnd, setTouchEnd] = useState(0);

//     const minSwipeDistance = 50;

//     const onTouchStart = (e: TouchEvent) => {
//         setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
//         setTouchStart(e.targetTouches[0].clientX);
//     }

//     const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

//     const onTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;
//         const distance = touchStart - touchEnd;
//         const isLeftSwipe = distance > minSwipeDistance;
//         const isRightSwipe = distance < -minSwipeDistance;
//         if (isLeftSwipe) {
//             input.onSwipedLeft();
//         }
//         if (isRightSwipe) {
//             input.onSwipedRight();
//         }
//     }

//     return {
//         onTouchStart,
//         onTouchMove,
//         onTouchEnd
//     }
// }