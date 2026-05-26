import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const HERO_TITLES = ["AI Product Manager", "Builder", "Substack Writer", "AI Enthusiast"];

const personal = {
  name: "Dheenadayalan Kathirvel",
  shortName: "Dheena",
  title: "AI Product Manager",
  tagline: "Builder at heart, shipping AI products that create real impact.",
  bio: [
    "I'm an AI Product Manager with over 5 years of experience building and shipping AI-powered products. I don't just write strategy documents; I'm hands-on with LLMs, RAG pipelines, MCP servers, and agentic workflows.",
    "My focus is on creating tangible business value. Recently, I've driven $2M+ in cost savings and reduced call center volume by 30% through targeted GenAI deployments.",
  ],
  quote: "I believe the best PMs are builders first.",
};

const links = {
  linkedin: "https://linkedin.com/in/dheenadayalan-kathirvel/",
  substack: "https://dheenakathirvel31.substack.com/",
  email: "dheenavel@gmail.com",
};

function StatCard({ value, label }: { value: string; label: string }) {
  const colors = useColors();
  return (
    <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.statValue, { color: colors.primary, fontFamily: "Inter_700Bold" }]}>
        {value}
      </Text>
      <Text style={[styles.statLabel, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
        {label}
      </Text>
    </View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [titleIndex, setTitleIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]).start();
      setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [fadeAnim]);

  const openLink = (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(url);
  };

  const topPad = Platform.OS === "web" ? 67 : 0;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 16 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={[styles.heroSection, { paddingTop: topPad + 32 }]}>
        <View style={[styles.badge, { backgroundColor: colors.accent }]}>
          <View style={[styles.badgeDot, { backgroundColor: colors.primary }]} />
          <Text style={[styles.badgeText, { color: colors.accentForeground, fontFamily: "Inter_500Medium" }]}>
            Open to Opportunities
          </Text>
        </View>

        <Text style={[styles.heroName, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          {personal.shortName}
        </Text>

        <Animated.Text
          style={[
            styles.heroTitle,
            { color: colors.primary, fontFamily: "Inter_600SemiBold", opacity: fadeAnim },
          ]}
        >
          {HERO_TITLES[titleIndex]}
        </Animated.Text>

        <Text style={[styles.tagline, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {personal.tagline}
        </Text>

        {/* CTA Buttons */}
        <View style={styles.ctaRow}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryBtn,
              { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 },
            ]}
            onPress={() => openLink(`mailto:${links.email}`)}
            testID="contact-btn"
          >
            <Feather name="mail" size={16} color="#fff" />
            <Text style={[styles.primaryBtnText, { fontFamily: "Inter_600SemiBold" }]}>
              Get in Touch
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.secondaryBtn,
              { borderColor: colors.border, backgroundColor: colors.card, opacity: pressed ? 0.75 : 1 },
            ]}
            onPress={() => openLink(links.linkedin)}
            testID="linkedin-btn"
          >
            <Feather name="linkedin" size={16} color={colors.foreground} />
            <Text style={[styles.secondaryBtnText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>
              LinkedIn
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <StatCard value="$2M+" label="Cost Savings" />
        <StatCard value="30%" label="Call Deflection" />
        <StatCard value="5+" label="Years" />
      </View>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      {/* About */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
          <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
            About
          </Text>
        </View>

        {personal.bio.map((paragraph, i) => (
          <Text
            key={i}
            style={[styles.bodyText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}
          >
            {paragraph}
          </Text>
        ))}

        <View style={[styles.quoteCard, { backgroundColor: colors.accent, borderLeftColor: colors.primary }]}>
          <Text style={[styles.quoteText, { color: colors.accentForeground, fontFamily: "Inter_500Medium" }]}>
            "{personal.quote}"
          </Text>
        </View>
      </View>

      {/* Links */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Inter_700Bold", marginBottom: 12 }]}>
          Find Me Online
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.linkRow,
            { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.75 : 1 },
          ]}
          onPress={() => openLink(links.substack)}
          testID="substack-link"
        >
          <Feather name="edit-3" size={18} color={colors.primary} />
          <Text style={[styles.linkText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>
            Substack Newsletter
          </Text>
          <Feather name="external-link" size={14} color={colors.mutedForeground} style={{ marginLeft: "auto" }} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.linkRow,
            { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.75 : 1 },
          ]}
          onPress={() => openLink(links.linkedin)}
          testID="linkedin-link"
        >
          <Feather name="linkedin" size={18} color={colors.primary} />
          <Text style={[styles.linkText, { color: colors.foreground, fontFamily: "Inter_500Medium" }]}>
            LinkedIn Profile
          </Text>
          <Feather name="external-link" size={14} color={colors.mutedForeground} style={{ marginLeft: "auto" }} />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  heroSection: { marginBottom: 28 },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    marginBottom: 16,
  },
  badgeDot: { width: 7, height: 7, borderRadius: 4 },
  badgeText: { fontSize: 12 },
  heroName: { fontSize: 42, lineHeight: 50, letterSpacing: -1, marginBottom: 4 },
  heroTitle: { fontSize: 22, lineHeight: 30, marginBottom: 12 },
  tagline: { fontSize: 15, lineHeight: 22, marginBottom: 24 },
  ctaRow: { flexDirection: "row", gap: 10 },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 7,
  },
  primaryBtnText: { color: "#fff", fontSize: 14 },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    gap: 7,
  },
  secondaryBtnText: { fontSize: 14 },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  statCard: {
    flex: 1,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },
  statValue: { fontSize: 20, marginBottom: 2 },
  statLabel: { fontSize: 11, textAlign: "center" },
  divider: { height: 1, marginBottom: 24 },
  section: { marginBottom: 28 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 },
  accentBar: { width: 3, height: 22, borderRadius: 2 },
  sectionTitle: { fontSize: 20 },
  bodyText: { fontSize: 15, lineHeight: 24, marginBottom: 12 },
  quoteCard: {
    borderLeftWidth: 3,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 8,
  },
  quoteText: { fontSize: 14, lineHeight: 22 },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    gap: 12,
    marginBottom: 8,
  },
  linkText: { fontSize: 15 },
});
