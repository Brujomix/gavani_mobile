import { Avatar } from 'react-native-elements';
import { paletOfColors } from '../../utils/colors';

export function Avatar_User({ uri }) {
  return (
    <Avatar
      rounded
      size="large"
      source={{ uri }}
      title="US"
      containerStyle={{ backgroundColor: paletOfColors.lightGray }}
    />
  );
}
