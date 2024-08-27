import { useEffect, useState } from "react";


export const MOBILE_BREAKPOINT = '(max-width: 700px)';
export const TABLET_BREAKPOINT = '(min-width: 700px) and (max-width: 1280px)';
export const MEDIUM_DESKTOP_BREAKPOINT = '(min-width: 1280px) and (max-width: 1680px)';
export const LARGE_DESKTOP_BREAKPOINT = '(min-width: 1680px) and (max-width: 1880px)';
export const EXTRA_LARGE_DESKTOP_BREAKPOINT = '(min-width: 1880px)';


export interface IDeviceScreenType {
  isMobile: boolean,
  isTablet: boolean,
  isMediumDesktop: boolean,
  isLargeDesktop: boolean,
  isExtraLargeDesktop: boolean
}


/**
 * useDeviceScreen react hooks returns a number of boolean values each denoting which type of screen the app is being rendered on.
 *
 * @return   {IDeviceScreenType}
 *           Object containing all options for device screen types
 *
 * @property {boolean} isMobile
 *           is true if on mobile device
 *
 * @property {boolean} isTablet
 *           is true if on tablet device
 *
 * @property {boolean} isMediumDesktop
 *           is true if on 13/14 inches laptops/desktops
 *
 * @property {boolean} isLargeDesktop
 *           is true if on 15/16 inches laptops/desktops
 * 
 * @property {boolean} isExtraLargeDesktop
 *           is true if on screens greater than 15/16 inches
 *
 * @example
 *   const ExampleComponent = () => {
 *     const { isMobile, isTablet, isMediumDesktop, isLargeDesktop, isExtraLargeDesktop } = useDeviceScreenType();
 *
 *     return (
 *       <>
 *          {deviceSize.isExtraLargeDesktop && <h1>EXTRA LARGE!!</h1>}
            {deviceSize.isLargeDesktop && <h1>LARGE!!</h1>}
            {deviceSize.isMediumDesktop && <h1>MEDIUM LARGE!!</h1>}
            {deviceSize.isTablet && <h1>Tablet Size!!</h1>}
            {deviceSize.isMobile && <h1>Mobile Phones size</h1>}
 *       </>
 *      )
 *    }
 */


export function useDeviceScreenType(): IDeviceScreenType {

  const [sizeState, updateSizeState] = useState({
    isMobile: false,
    isTablet: false,
    isMediumDesktop: false,
    isLargeDesktop: false,
    isExtraLargeDesktop: false
  });

  useEffect(() => {
    const update = () =>
      updateSizeState({
        ...sizeState,
        isMobile: window.matchMedia(MOBILE_BREAKPOINT).matches,
        isTablet: window.matchMedia(TABLET_BREAKPOINT).matches,
        isMediumDesktop: window.matchMedia(MEDIUM_DESKTOP_BREAKPOINT).matches,
        isLargeDesktop: window.matchMedia(LARGE_DESKTOP_BREAKPOINT).matches,
        isExtraLargeDesktop: window.matchMedia(EXTRA_LARGE_DESKTOP_BREAKPOINT).matches
      });
    window.addEventListener('resize', () => {
      update();
    })
    update();
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    ...sizeState
  };
}
