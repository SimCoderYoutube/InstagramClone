import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `DialogScrollArea`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show a scrollable content in a Dialog. The component only provides appropriate styling.
 * For the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-scroll-area.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ScrollView } from 'react-native';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.ScrollArea>
 *           <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
 *             <Text>This is a scrollable area</Text>
 *           </ScrollView>
 *         </Dialog.ScrollArea>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const DialogScrollArea: {
    (props: Props): JSX.Element;
    displayName: string;
};
export default DialogScrollArea;
