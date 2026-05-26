import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";

import { useColors } from "@/hooks/useColors";

function NativeTabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: "house", selected: "house.fill" }} />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="experience">
        <Icon sf={{ default: "briefcase", selected: "briefcase.fill" }} />
        <Label>Experience</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="projects">
        <Icon sf={{ default: "square.grid.2x2", selected: "square.grid.2x2.fill" }} />
        <Label>Projects</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="writing">
        <Icon sf={{ default: "pencil.line", selected: "pencil.line" }} />
        <Label>Writing</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="contact">
        <Icon sf={{ default: "envelope", selected: "envelope.fill" }} />
        <Label>Contact</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.background,
          borderTopWidth: isWeb ? 1 : 0,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={100}
              tint={isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
          ) : isWeb ? (
            <View
              style={[StyleSheet.absoluteFill, { backgroundColor: colors.background }]}
            />
          ) : null,
        tabBarLabelStyle: { fontSize: 10, fontFamily: "Inter_500Medium" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="house" tintColor={color} size={22} />
            ) : (
              <Feather name="home" size={21} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: "Experience",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="briefcase" tintColor={color} size={22} />
            ) : (
              <Feather name="briefcase" size={21} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="square.grid.2x2" tintColor={color} size={22} />
            ) : (
              <Feather name="layers" size={21} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="writing"
        options={{
          title: "Writing",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="pencil.line" tintColor={color} size={22} />
            ) : (
              <Feather name="edit-3" size={21} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="envelope" tintColor={color} size={22} />
            ) : (
              <Feather name="mail" size={21} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
