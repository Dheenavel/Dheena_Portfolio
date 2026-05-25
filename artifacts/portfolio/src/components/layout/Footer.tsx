export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dheenadayalan Kathirvel
        </p>
        <p className="font-mono text-sm text-muted-foreground flex items-center gap-1">
          Built with <span className="text-destructive">❤️</span> and AI
        </p>
      </div>
    </footer>
  );
}
