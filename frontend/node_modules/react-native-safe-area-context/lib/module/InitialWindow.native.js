import { UIManager } from 'react-native';
const RNCSafeAreaProviderConfig = UIManager.getViewManagerConfig('RNCSafeAreaProvider');
export const initialWindowMetrics = RNCSafeAreaProviderConfig != null && RNCSafeAreaProviderConfig.Constants != null ? RNCSafeAreaProviderConfig.Constants.initialWindowMetrics : null;
/**
 * @deprecated
 */

export const initialWindowSafeAreaInsets = initialWindowMetrics === null || initialWindowMetrics === void 0 ? void 0 : initialWindowMetrics.insets;
//# sourceMappingURL=InitialWindow.native.js.map