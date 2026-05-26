import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const contactLinks = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "dheenavel@gmail.com",
    url: "mailto:dheenavel@gmail.com",
    description: "Best way to reach me",
    color: "#2563EB",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "dheenadayalan-kathirvel",
    url: "https://linkedin.com/in/dheenadayalan-kathirvel/",
    description: "Connect professionally",
    color: "#0A66C2",
  },
  {
    icon: "edit-3" as const,
    label: "Substack",
    value: "dheenakathirvel31.substack.com",
    url: "https://dheenakathirvel31.substack.com/",
    description: "Read my writing",
    color: "#FF6719",
  },
];

function ContactItem({ item }: { item: typeof contactLinks[0] }) {
  const colors = useColors();
  const [copied, setCopied] = useState(false);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(item.url);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.contactCard,
        { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.8 : 1 },
      ]}
      onPress={handlePress}
      testID={`contact-${item.label}`}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + "20" }]}>
        <Feather name={item.icon} size={22} color={item.color} />
      </View>
      <View style={styles.contactInfo}>
        <Text style={[styles.contactLabel, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
          {item.label}
        </Text>
        <Text style={[styles.contactValue, { color: colors.primary, fontFamily: "Inter_400Regular" }]}>
          {item.value}
        </Text>
        <Text style={[styles.contactDesc, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {item.description}
        </Text>
      </View>
      <Feather name="external-link" size={16} color={colors.mutedForeground} />
    </Pressable>
  );
}

export default function ContactScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : 0;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 16, paddingTop: topPad + 20 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.pageHeader}>
        <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
        <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          Get In Touch
        </Text>
      </View>

      {/* Intro card */}
      <View style={[styles.introCard, { backgroundColor: colors.accent, borderColor: colors.border }]}>
        <Text style={[styles.introEmoji, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>
          Let's connect
        </Text>
        <Text style={[styles.introText, { color: colors.accentForeground, fontFamily: "Inter_400Regular" }]}>
          I'm always open to discussing AI product opportunities, collaborations, or just geeking out about the future of AI and product management.
        </Text>
      </View>

      {/* Contact links */}
      <View style={styles.linksList}>
        {contactLinks.map((item, i) => (
          <ContactItem key={i} item={item} />
        ))}
      </View>

      {/* Quick stats footer */}
      <View style={[styles.statsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.statsTitle, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
          At a Glance
        </Text>
        <View style={styles.statsList}>
          {[
            { icon: "briefcase" as const, text: "AI Product Manager @ Tesla" },
            { icon: "map-pin" as const, text: "Austin, TX" },
            { icon: "trending-up" as const, text: "$2M+ cost savings shipped" },
            { icon: "book-open" as const, text: "Substack writer on AI & PM" },
          ].map((stat, i) => (
            <View key={i} style={styles.statRow}>
              <Feather name={stat.icon} size={15} color={colors.primary} />
              <Text style={[styles.statText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                {stat.text}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <Text style={[styles.footer, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
        Built with Replit · Dheena's Portfolio
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  pageHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 },
  accentBar: { width: 3, height: 22, borderRadius: 2 },
  pageTitle: { fontSize: 22 },
  introCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginBottom: 22,
  },
  introEmoji: { fontSize: 16, marginBottom: 6 },
  introText: { fontSize: 14, lineHeight: 22 },
  linksList: { gap: 10, marginBottom: 22 },
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfo: { flex: 1 },
  contactLabel: { fontSize: 15, marginBottom: 2 },
  contactValue: { fontSize: 13, marginBottom: 3 },
  contactDesc: { fontSize: 12 },
  statsCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
  },
  statsTitle: { fontSize: 14, marginBottom: 14 },
  statsList: { gap: 12 },
  statRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  statText: { fontSize: 14 },
  footer: { textAlign: "center", fontSize: 12, marginTop: 4 },
});
