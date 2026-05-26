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

const projects = [
  {
    name: "GenAI OCR + Cash Application",
    description:
      "AI-powered document processing with OCR, entity extraction, and ML 3-way matching for receivables automation at Deluxe (R360+ product).",
    tags: ["GenAI", "OCR", "ML"],
    link: "https://www.deluxe.com/receivables-management/cash-application/",
    hasLink: true,
  },
  {
    name: "Deluxe GenAI Chatbot",
    description:
      "Deployed GenAI chatbots using Claude and GPT APIs on Deluxe.com and MyCorporation.com, reducing call center volume by 30%.",
    tags: ["Claude", "GPT", "GenAI"],
    link: "https://www.deluxe.com/",
    hasLink: true,
  },
  {
    name: "Competitive Analysis Agent",
    description: "Automates market research and competitive insight generation using AI agents.",
    tags: ["Lovable", "n8n", "Gemini"],
    link: null,
    hasLink: false,
  },
  {
    name: "DocWriter Assistant",
    description:
      "MCP server that scrapes web data and collaboratively edits documents via conversation.",
    tags: ["Claude Sonnet 3.7", "MCP"],
    link: null,
    hasLink: false,
  },
  {
    name: "Reflect.ai",
    description: "Full-stack app analyzing user reflections through conversational UI.",
    tags: ["Lovable", "Supabase"],
    link: null,
    hasLink: false,
  },
];

const skills = [
  { title: "Core PM", color: "#2563EB", bg: "#EBF0FB", items: ["Roadmapping", "Product Strategy", "Prototyping", "Customer Research", "Agile"] },
  { title: "AI & Analytics", color: "#9333EA", bg: "#F3E8FF", items: ["GPT", "Claude", "Gemini", "Document AI", "n8n", "LangChain", "MCP", "RAG", "Prompt Design", "Tableau", "Power BI"] },
  { title: "Technical", color: "#16A34A", bg: "#DCFCE7", items: ["Python", "SQL", "Java", "C#", "APIs", "SDKs", "RPA"] },
  { title: "Tools", color: "#EA580C", bg: "#FFF7ED", items: ["JIRA", "MS Office"] },
  { title: "Certifications", color: "#6B7280", bg: "#F9FAFB", items: ["AI Product Management (OpenAI, Dec 2025)"] },
];

const skillsDark = [
  { title: "Core PM", color: "#5B8DEF", bg: "#1A2438" },
  { title: "AI & Analytics", color: "#C084FC", bg: "#2D1E4E" },
  { title: "Technical", color: "#4ADE80", bg: "#052E16" },
  { title: "Tools", color: "#FB923C", bg: "#1C0A00" },
  { title: "Certifications", color: "#9CA3AF", bg: "#1F2937" },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const colors = useColors();
  const openLink = () => {
    if (!project.hasLink || !project.link) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(project.link);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.projectCard,
        { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed && project.hasLink ? 0.8 : 1 },
      ]}
      onPress={openLink}
      disabled={!project.hasLink}
      testID={`project-${project.name}`}
    >
      <View style={styles.projectHeader}>
        <Text style={[styles.projectName, { color: colors.foreground, fontFamily: "Inter_600SemiBold" }]}>
          {project.name}
        </Text>
        {project.hasLink ? (
          <Feather name="external-link" size={15} color={colors.primary} />
        ) : (
          <View style={[styles.wip, { backgroundColor: colors.muted }]}>
            <Text style={[styles.wipText, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
              WIP
            </Text>
          </View>
        )}
      </View>
      <Text style={[styles.projectDesc, { color: colors.mutedForeground, fontFamily: "Inter_400Regular" }]}>
        {project.description}
      </Text>
      <View style={styles.tagsRow}>
        {project.tags.map((tag) => (
          <View key={tag} style={[styles.tag, { backgroundColor: colors.accent }]}>
            <Text style={[styles.tagText, { color: colors.accentForeground, fontFamily: "Inter_500Medium" }]}>
              {tag}
            </Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

export default function ProjectsScreen() {
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
      <View style={styles.pageHeader}>
        <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
        <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          Projects
        </Text>
      </View>

      <View style={styles.projectsList}>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </View>

      {/* Skills */}
      <View style={[styles.pageHeader, { marginTop: 12 }]}>
        <View style={[styles.accentBar, { backgroundColor: colors.primary }]} />
        <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "Inter_700Bold" }]}>
          Skills
        </Text>
      </View>

      {skills.map((category, i) => (
        <View key={i} style={[styles.skillCategory, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.skillCategoryTitle, { fontFamily: "Inter_600SemiBold", color: colors.foreground }]}>
            {category.title}
          </Text>
          <View style={styles.skillChips}>
            {category.items.map((item) => (
              <View key={item} style={[styles.skillChip, { backgroundColor: colors.accent }]}>
                <Text style={[styles.skillChipText, { color: colors.accentForeground, fontFamily: "Inter_400Regular" }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  pageHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 16 },
  accentBar: { width: 3, height: 22, borderRadius: 2 },
  pageTitle: { fontSize: 22 },
  projectsList: { gap: 12, marginBottom: 28 },
  projectCard: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
    gap: 8,
  },
  projectName: { fontSize: 15, flex: 1, lineHeight: 20 },
  wip: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  wipText: { fontSize: 11 },
  projectDesc: { fontSize: 13, lineHeight: 20, marginBottom: 12 },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  tag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  tagText: { fontSize: 11 },
  skillCategory: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  skillCategoryTitle: { fontSize: 14, marginBottom: 10 },
  skillChips: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  skillChip: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6 },
  skillChipText: { fontSize: 12 },
});
