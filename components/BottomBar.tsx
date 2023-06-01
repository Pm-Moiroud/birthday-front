import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

type BottomBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

export default function BottomBar({
  state,
  descriptors,
  navigation,
}: BottomBarProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                height: 70,
                width: '100%',
                justifyContent: 'center',
                backgroundColor: isFocused ? '#eee' : '#fff',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
