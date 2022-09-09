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
import useDeviceSize from "@ephraimd/react-device-screen-type";

const Component = () => {
  return (
    <>
      {deviceSize.isExtraLargeDesktop && <h1>EXTRA LARGE!!</h1>}
      {deviceSize.isLargeDesktop && <h1>LARGE!!</h1>}
      {deviceSize.isMediumDesktop && <h1>MEDIUM LARGE!!</h1>}
      {deviceSize.isTablet && <h1>Tablet Size!!</h1>}
      {deviceSize.isMobile && <h1>Mobile Phones size</h1>}
    </>
  );
};
```

The hook automatically updates the screen types when window is resized, this makes it easy to adapt pages to any type of screen orientation on the fly without extra boilerplate code.

## Thanks
Enjoy as you use this library.