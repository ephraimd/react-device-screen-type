# React Device Screen Type

This is a simple to use react library that offers a simple hook with which you
can detect the device screen type easily.

## Installation

```shell
# for yarn
yarn add @ephraimd/react-device-screen-type
```

```shell
# for npm
npm install @ephraimd/react-device-screen-type
```

```shell
# for pnpm
pnpm install @ephraimd/react-device-screen-type
```

## Usage

```tsx
import { useDeviceScreenType } from "@ephraimd/react-device-screen-type";

const Component = () => {
  const deviceScreenType = useDeviceScreenType();
  return (
    <>
      {deviceScreenType.isExtraLargeDesktop && <h1>EXTRA LARGE!!</h1>}
      {deviceScreenType.isLargeDesktop && <h1>LARGE!!</h1>}
      {deviceScreenType.isMediumDesktop && <h1>MEDIUM LARGE!!</h1>}
      {deviceScreenType.isTablet && <h1>Tablet Size!!</h1>}
      {deviceScreenType.isMobile && <h1>Mobile Phones size</h1>}
    </>
  );
};
```

The hook automatically updates the screen types when window is resized, this makes it easy to adapt pages to any type of screen orientation on the fly without extra boilerplate code.

## Enjoy
Enjoy as you use this library.