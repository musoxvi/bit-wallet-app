import React, {FC, ReactElement, RefAttributes, useRef, useState} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import ChevronDown from '../../assets/icons/chevronLeft.svg';
import {CurrenciesColors} from '../../constants/constants';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';
import {CustomText} from '../Text';

interface Props {
  label: string;
  value?: number | string;
  placeholder?: string;
  data: Array<{label: string; value: string}>;
  onSelect: (item: {label: string; value: string}) => void;
}

const Dropdown: FC<Props> = ({label, value, placeholder, data, onSelect}) => {
  const DropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    setVisible(true);
  };
  const onItemPress = (item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
          <View style={[styles.dropdown, {top: dropdownTop}]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <>
      <CustomText>{label}</CustomText>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        {renderDropdown()}

        {value ? (
          <CustomText style={styles.buttonText}>{value ?? ''}</CustomText>
        ) : (
          <CustomText style={styles.placeholder}>
            {placeholder ?? ''}
          </CustomText>
        )}

        <ChevronDown
          width={spacing(2)}
          height={spacing(2)}
          style={styles.chevronDown}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  chevronDown: {
    color: colors.neutral.white,
    transform: [{rotate: '-90deg'}],
    paddingHorizontal: spacing(2),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(35),
    width: '100%',
    zIndex: 2000,

    borderBottomWidth: 1,
    borderColor: colors.grey.light,
    marginTop: normalize(5),
  },
  placeholder: {
    flex: 1,
    marginLeft: spacing(1),
    color: CurrenciesColors.BTC.chartColor,
  },
  buttonText: {
    flex: 1,
    marginLeft: spacing(1),
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
});

export default Dropdown;
