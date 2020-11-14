export const handlePress = ({
  onPress,
  value,
  onValueChange
}) => {
  onValueChange ? onValueChange(value) : onPress === null || onPress === void 0 ? void 0 : onPress();
};
export const isChecked = ({
  value,
  status,
  contextValue
}) => {
  if (contextValue) {
    return contextValue === value ? 'checked' : 'unchecked';
  } else {
    return status;
  }
};
//# sourceMappingURL=utils.js.map