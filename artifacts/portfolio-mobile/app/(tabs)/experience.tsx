import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const experience = [
  {
    company: "Tesla",
    role: "AI Product Manager",
    dates: "2025 – Present",
    location: "Austin, TX",
    bullets: [] as string[],
    color: "#E82127",
    initials: "T",
  },
  {
    company: "Deluxe Corporation",
    role: "AI Product Manager",
    dates: "Jul 2024 – 2025",
    location: "Atlanta, GA",
    bullets: [
      'Launched GenAI Document AI (OCR + entity extraction + ML 3-way matching), earned "Red Shoes Award"',
      "Deployed GenAI chatbots (Claude + GPT APIs) on Deluxe.com and MyCorporation.com, 30% call center volume reduction",
      "Built AI call deflection + analytics product for Print & Promo, $300K cost savings, NPS +40%",
      "Drove $2M in savings + 50K+ labor hours saved across 4 business units via automation",
    ],
    color: "#1B3A6B",
    initials: "D",
  },
  {
    company: "Dell Technologies",
    role: "Graduate PM Intern, Multi Cloud (ISG)",
    dates: "May 2023 – Aug 2023",
    location: "Austin, TX",
    bullets: [
      "Competitive analysis of 3 hybrid/multi-cloud competitors, shaped product strategy",
      "30+ stakeholder interviews — product enhancement influence",
      'Awarded "Bravo Dell Inspire"',
    ],
    color: "#007DB8",
    initials: "D",
  },
  {
    company: "Philips India",
    role: "Software Development Engineer II/I",
    dates: "Feb 2019 – Jun 2022",
    location: "Bangalore, India",
    bullets: [
      "Call rate analysis launch — 30% complaint reduction",
      "MRI software upgrade prioritization — 10% backup time reduction",
      'Earned "Q1-2021 Quality Champion Award"',
      "60% team efficiency boost through workflow automation",
    ],
    color: "#0B1E8F",
    initials: "P",
  },
];

const education = [
  {
    school: "Texas A&M University, Mays Business School",
    degree: "Master of Business Administration (MBA)",
    date: "May 2024",
    location: "College Station, TX",
    color: "#500000",
    initials: "A&M",
  },
  {
    school: "PSG College of Technology",
    degree: "B.Tech, Information Technology",
    date: "May 2019",
    location: "Coimbatore, India",
    color: "#1A3C6E",
    initials: "PSG",
  },
];

export default function ExperienceScreen() {
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
          Experience
        </Text>
      </View>

      {/* Timeline */}
      <View style={styles.timeline}>
        {experience.map((job, i) => (
          <View key={i} style={styles.timelineItem}>
            {/* Left side: dot + line */}
            <View style={styles.timelineLeft}>
              <View style={[styles.companyLogo, { backgroundColor: job.color }]}>
                <Text style={[styles.companyInitials, { fontFamily: "Inter_700Bold" }]}>
                  {job.initials}
                </Text>
              </View>
              {i < experience.length - 1 && (
                <View style={[styles.timelineLine, { backgroundColor: colors.border }]} />
              )}
            </View>

            {/* Right side: content */}
            <View style={styles.timelineContent}>
              <View style={[styles.jobCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.jobHeader}>
                  <Text style={[styles.company, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
                    {job.company}
                  </Text>
                  <View style={[styles.dateBadge, { backgroundColor: colors.muted }]}>
                    <Text style={[styles.dateText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                      {job.dates}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.role, { color: colors.primary, fontFamily: "Inter_600SemiBold" }]}>
                  {job.role}
                </Text>
                <View style={styles.locationRow}>
                  <Feather name="map-pin" size={12} color={colors.mutedForeground} />
                  <Text style={[styles.location, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                    {job.location}
                  </Text>
                </View>

                {job.bullets.length === 0 ? (
                  <View style={[styles.newRoleBadge, { backgroundColor: colors.accent }]}>
                    <Text style={[styles.newRoleText, { color: colors.accentForeground, fontFamily: "Inter_500Medium" }]}>
                      Currently here — details coming soon
                    </Text>
                  </View>
                ) : (
                  <View style={styles.bulletList}>
                    {job.bullets.map((bullet, j) => (
                      <View key={j} style={styles.bulletRow}>
                        <View style={[styles.bulletDot, { backgroundColor: colors.primary }]} />
                        <Text style={[styles.bulletText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                          {bullet}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={[styles.pageHeader, { marginTop: 16 }]}>
        <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
        <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          Education
        </Text>
      </View>

      {education.map((edu, i) => (
        <View key={i} style={[styles.eduCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.eduLogo, { backgroundColor: edu.color }]}>
            <Text style={[styles.eduInitials, { fontFamily: "Inter_700Bold" }]}>
              {edu.initials}
            </Text>
          </View>
          <View style={styles.eduInfo}>
            <Text style={[styles.eduSchool, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
              {edu.school}
            </Text>
            <Text style={[styles.eduDegree, { color: colors.primary, fontFamily: "Inter_400Regular" }]}>
              {edu.degree}
            </Text>
            <View style={styles.locationRow}>
              <Feather name="calendar" size={11} color={colors.mutedForeground} />
              <Text style={[styles.location, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
                {edu.date} · {edu.location}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  pageHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 },
  accentBar: { width: 3, height: 22, borderRadius: 2 },
  pageTitle: { fontSize: 22 },
  timeline: { gap: 0 },
  timelineItem: { flexDirection: "row", gap: 14 },
  timelineLeft: { alignItems: "center", width: 42 },
  companyLogo: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  companyInitials: { color: "#fff", fontSize: 14 },
  timelineLine: { flex: 1, width: 2, minHeight: 24, marginVertical: 6 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  jobCard: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 4,
  },
  company: { fontSize: 15, flex: 1 },
  dateBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  dateText: { fontSize: 11 },
  role: { fontSize: 13, marginBottom: 6 },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 10 },
  location: { fontSize: 12 },
  bulletList: { gap: 8 },
  bulletRow: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  bulletDot: { width: 5, height: 5, borderRadius: 3, marginTop: 7, flexShrink: 0 },
  bulletText: { fontSize: 13, lineHeight: 19, flex: 1 },
  newRoleBadge: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, alignSelf: "flex-start" },
  newRoleText: { fontSize: 12 },
  eduCard: {
    flexDirection: "row",
    gap: 12,
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
  },
  eduLogo: {
    width: 46,
    height: 46,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  eduInitials: { color: "#fff", fontSize: 11 },
  eduInfo: { flex: 1 },
  eduSchool: { fontSize: 13, marginBottom: 3 },
  eduDegree: { fontSize: 12, marginBottom: 5 },
});
