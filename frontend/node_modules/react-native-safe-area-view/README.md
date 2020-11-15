# react-native-safe-area-view

This is a JS-only version of React Native's SafeAreaView, it adds a small api that makes SafeAreaView more flexible for complex UIs.

## Installation

```
npm install react-native-safe-area-view
```

## Usage

Wrap components that touch any edge of the screen with SafeAreaView.

```jsx
<SafeAreaView>
  <View>
    <Text>Look, I'm safe!</Text>
  </View>
</SafeAreaView>
```

Get height of a specific side from the SafeArea.

```jsx
...
const { width, height } = Dimensions.get('window');
import { getInset } from 'react-native-safe-area-view';

const landScape = width > height;
const bottomPadding = getInset('bottom', landScape);
```

### forceInset

Sometimes you will observe unexpected behavior and jank because SafeAreaView uses `onLayout` then calls `measureInWindow` on the view. If you know your view will touch certain edges, use `forceInset` to force it to apply the inset padding on the view.

```jsx
<SafeAreaView forceInset={{ top: 'always' }}>
  <View>
    <Text>Yeah, I'm safe too!</Text>
  </View>
</SafeAreaView>
```

`forceInset` takes an object with the keys `top | bottom | left | right | vertical | horizontal` and the values `'always' | 'never'`. Or you can override the padding altogether by passing an integer.

### With HOC

Sometimes you would prefer to use a higher-order component to wrap components.

```js
withSafeArea()(Component);

// Or with forceInset props
withSafeArea({ top: 'always' })(Component);
```
