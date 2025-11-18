import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Projects } from "./components/Projects";
import { TechShowcase } from "./components/TechShowcase";
import { SkillsBadges } from "./components/SkillsBadges";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CallToAction } from "./components/CallToAction";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { InsightsPage } from "./pages/InsightsPage";
import { JournalEntryPage } from "./pages/JournalEntryPage";
import { ProjectsListPage } from "./pages/ProjectsListPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

type Page = "home" | "insights" | "projects" | "journal-entry" | "project-detail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedJournalEntry, setSelectedJournalEntry] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<string>("");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleJournalEntryClick = (id: string) => {
    setSelectedJournalEntry(id);
    setCurrentPage("journal-entry");
  };

  const handleProjectClick = (id: string) => {
    setSelectedProject(id);
    setCurrentPage("project-detail");
  };

  const handleBackToInsights = () => {
    setCurrentPage("insights");
    setSelectedJournalEntry("");
  };

  const handleBackToProjects = () => {
    setCurrentPage("projects");
    setSelectedProject("");
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        
        {currentPage === "home" && (
          <main>
            <Hero />
            <About />
            <Stats />
            <Projects />
            <TechShowcase />
            <SkillsBadges />
            <Process />
            <Testimonials />
            <FAQ />
            <CallToAction />
            <Contact />
          </main>
        )}

        {currentPage === "insights" && (
          <InsightsPage onEntryClick={handleJournalEntryClick} />
        )}

        {currentPage === "journal-entry" && selectedJournalEntry && (
          <JournalEntryPage entryId={selectedJournalEntry} onBack={handleBackToInsights} />
        )}

        {currentPage === "projects" && (
          <ProjectsListPage onProjectClick={handleProjectClick} />
        )}

        {currentPage === "project-detail" && selectedProject && (
          <ProjectDetailPage projectId={selectedProject} onBack={handleBackToProjects} />
        )}

        <Footer />
      </div>
    </ThemeProvider>
  );
}