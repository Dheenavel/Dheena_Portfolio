import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React from "react";
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

const posts = [
  {
    tag: "Career",
    title: "Two Years In: What Product Management Actually Demands of You",
    description:
      "The honest account of an engineer who chased the idea of building products and what building them actually taught him.",
    date: "2025",
    url: "https://dheenakathirvel31.substack.com/p/two-years-in-what-product-management",
  },
  {
    tag: "AI",
    title: "The PM's Operating Model for the AI Era",
    description:
      "Engineering is 10x faster. Product Management is the new bottleneck. Here's the 3-part framework (Impact, Execution, Optics) to fix it.",
    date: "2025",
    url: "https://dheenakathirvel31.substack.com/p/the-pms-operating-model-for-the-ai",
  },
  {
    tag: "AI Stack",
    title: "The Product Manager's Guide to the AI Stack",
    description:
      "Navigating architecture reviews, model selection, and infrastructure constraints without being an engineer.",
    date: "2025",
    url: "https://dheenakathirvel31.substack.com/p/the-product-managers-guide-to-the",
  },
];

const speaking = [
  {
    type: "Keynote",
    title: "Product Operating Model for the AI Era",
    description:
      "Keynote presented to 100+ product leaders on moving to a new operating model for the AI era.",
    event: "Product Coffee",
    location: "Atlanta, GA",
    date: "Dec 2025",
    url: "https://www.youtube.com/live/itHp7_GQLaY",
  },
];

const tagColors: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  "Career": { bg: "#FFF7ED", text: "#EA580C", darkBg: "#1C0A00", darkText: "#FB923C" },
  "AI": { bg: "#EBF0FB", text: "#2563EB", darkBg: "#1A2438", darkText: "#5B8DEF" },
  "AI Stack": { bg: "#F3E8FF", text: "#9333EA", darkBg: "#2D1E4E", darkText: "#C084FC" },
};

function PostCard({ post }: { post: typeof posts[0] }) {
  const colors = useColors();
  const tagColor = tagColors[post.tag] ?? { bg: colors.accent, text: colors.accentForeground, darkBg: colors.accent, darkText: colors.accentForeground };

  const openPost = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(post.url);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.8 : 1 },
      ]}
      onPress={openPost}
      testID={`post-${post.title.substring(0, 20)}`}
    >
      <View style={styles.cardTop}>
        <View style={[styles.tagBadge, { backgroundColor: tagColor.bg }]}>
          <Text style={[styles.tagText, { color: tagColor.text, fontFamily: "Inter_600SemiBold" }]}>
            {post.tag}
          </Text>
        </View>
        <Text style={[styles.dateText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
          {post.date}
        </Text>
      </View>
      <Text style={[styles.postTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
        {post.title}
      </Text>
      <Text style={[styles.postDesc, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
        {post.description}
      </Text>
      <View style={styles.readMore}>
        <Text style={[styles.readMoreText, { color: colors.primary, fontFamily: "Inter_500Medium" }]}>
          Read on Substack
        </Text>
        <Feather name="arrow-right" size={14} color={colors.primary} />
      </View>
    </Pressable>
  );
}

export default function WritingScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : 0;

  const substackUrl = "https://dheenakathirvel31.substack.com/";

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 16, paddingTop: topPad + 20 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Writing header */}
      <View style={styles.pageHeader}>
        <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
        <View>
          <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
            Thoughts on Building
          </Text>
          <Text style={[styles.pageSubtitle, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            AI · Product · The future of building
          </Text>
        </View>
      </View>

      {/* Substack banner */}
      <Pressable
        style={({ pressed }) => [
          styles.substackBanner,
          { backgroundColor: colors.accent, borderColor: colors.primary, opacity: pressed ? 0.85 : 1 },
        ]}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          Linking.openURL(substackUrl);
        }}
        testID="substack-banner"
      >
        <Feather name="edit-3" size={20} color={colors.primary} />
        <View style={{ flex: 1 }}>
          <Text style={[styles.substackTitle, { color: colors.accentForeground, fontFamily: "Inter_600SemiBold" }]}>
            Follow on Substack
          </Text>
          <Text style={[styles.substackSub, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            dheenakathirvel31.substack.com
          </Text>
        </View>
        <Feather name="external-link" size={16} color={colors.primary} />
      </Pressable>

      {/* Posts */}
      <View style={styles.postsList}>
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </View>

      {/* Speaking */}
      <View style={[styles.pageHeader, { marginTop: 8 }]}>
        <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
        <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          Speaking
        </Text>
      </View>

      {speaking.map((talk, i) => (
        <Pressable
          key={i}
          style={({ pressed }) => [
            styles.speakingCard,
            { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            Linking.openURL(talk.url);
          }}
          testID="speaking-card"
        >
          <View style={[styles.speakingBadge, { backgroundColor: colors.accent }]}>
            <Feather name="mic" size={14} color={colors.accentForeground} />
            <Text style={[styles.speakingType, { color: colors.accentForeground, fontFamily: "Inter_500Medium" }]}>
              {talk.type}
            </Text>
          </View>
          <Text style={[styles.speakingTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
            {talk.title}
          </Text>
          <Text style={[styles.speakingDesc, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
            {talk.description}
          </Text>
          <View style={styles.speakingMeta}>
            <Feather name="map-pin" size={12} color={colors.mutedForeground} />
            <Text style={[styles.speakingMetaText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
              {talk.event} · {talk.location} · {talk.date}
            </Text>
          </View>
          <View style={styles.readMore}>
            <Feather name="youtube" size={14} color="#E53E3E" />
            <Text style={[styles.readMoreText, { color: "#E53E3E", fontFamily: "Inter_500Medium" }]}>
              Watch on YouTube
            </Text>
            <Feather name="arrow-right" size={14} color="#E53E3E" />
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  pageHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 16 },
  accentBar: { width: 3, height: 28, borderRadius: 2 },
  pageTitle: { fontSize: 22 },
  pageSubtitle: { fontSize: 13, marginTop: 2 },
  substackBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
  },
  substackTitle: { fontSize: 14 },
  substackSub: { fontSize: 12, marginTop: 2 },
  postsList: { gap: 14, marginBottom: 28 },
  card: { borderWidth: 1, borderRadius: 12, padding: 16 },
  cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  tagBadge: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 6 },
  tagText: { fontSize: 11 },
  dateText: { fontSize: 12 },
  postTitle: { fontSize: 15, lineHeight: 22, marginBottom: 8 },
  postDesc: { fontSize: 13, lineHeight: 20, marginBottom: 12 },
  readMore: { flexDirection: "row", alignItems: "center", gap: 6 },
  readMoreText: { fontSize: 13 },
  speakingCard: { borderWidth: 1, borderRadius: 12, padding: 16 },
  speakingBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginBottom: 10,
  },
  speakingType: { fontSize: 12 },
  speakingTitle: { fontSize: 16, lineHeight: 22, marginBottom: 8 },
  speakingDesc: { fontSize: 13, lineHeight: 20, marginBottom: 10 },
  speakingMeta: { flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 12 },
  speakingMetaText: { fontSize: 12 },
});
