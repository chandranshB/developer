import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CodeBlock } from "../components/journal/CodeBlock";
import { ImageBlock } from "../components/journal/ImageBlock";
import { TextBlock, ListItem } from "../components/journal/TextBlock";
import { Callout } from "../components/journal/Callout";
import { Divider } from "../components/journal/Divider";
import { projectsData } from "../data/projectsData";

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <div className="min-h-screen pt-24 pb-32 px-5 md:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 -ml-4 hover:bg-muted/50 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 mb-6 text-[15px] text-muted-foreground">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.duration}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          <h1 className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-[21px] text-muted-foreground leading-[1.4] mb-8">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="rounded-full px-4 py-1.5 text-[15px]">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <ImageBlock
            src={project.thumbnail}
            alt={project.title}
            size="full"
          />
        </motion.div>

        {/* Project Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TextBlock variant="heading">Overview</TextBlock>

          <TextBlock variant="paragraph">
            This project was built to solve real-world problems and provide users with an intuitive, seamless experience. The development process involved careful planning, iterative design, and robust implementation.
          </TextBlock>

          <TextBlock variant="paragraph">
            Working on this project taught me valuable lessons about scalability, user experience, and the importance of clean, maintainable code.
          </TextBlock>

          <Divider />

          <TextBlock variant="heading">The Challenge</TextBlock>

          <TextBlock variant="paragraph">
            Every great project starts with a challenge. For this one, the main obstacles were:
          </TextBlock>

          <TextBlock variant="list">
            <ListItem>Building a scalable architecture that could handle growing user demands</ListItem>
            <ListItem>Creating an intuitive interface that works seamlessly across all devices</ListItem>
            <ListItem>Implementing real-time features without compromising performance</ListItem>
            <ListItem>Ensuring data security and user privacy throughout the application</ListItem>
          </TextBlock>

          <Callout type="info">
            Understanding the problem deeply before jumping into solutions is crucial for successful project outcomes.
          </Callout>

          <TextBlock variant="heading">Technical Implementation</TextBlock>

          <TextBlock variant="subheading">Architecture</TextBlock>

          <TextBlock variant="paragraph">
            The application was built using a modern tech stack, with careful consideration for performance, scalability, and developer experience.
          </TextBlock>

          {/* <CodeBlock
            filename="example-component.tsx"
            language="typescript"
            code={`import { useState, useEffect } from 'react';

interface DataItem {
  id: string;
  title: string;
  status: 'active' | 'pending' | 'completed';
}

export function Dashboard() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const items = await response.json();
        setData(items);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="dashboard">
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}`}
          /> */}

          <ImageBlock
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
            alt="Dashboard view"
            caption="The main dashboard interface with real-time data updates"
            size="full"
          />

          <TextBlock variant="subheading">Key Features</TextBlock>

          <TextBlock variant="list">
            <ListItem><strong>Real-time updates:</strong> Implemented WebSocket connections for instant data synchronization</ListItem>
            <ListItem><strong>Responsive design:</strong> Fully optimized for desktop, tablet, and mobile devices</ListItem>
            <ListItem><strong>Performance optimization:</strong> Lazy loading, code splitting, and efficient caching strategies</ListItem>
            <ListItem><strong>Security:</strong> JWT authentication, input validation, and data encryption</ListItem>
          </TextBlock>

          <Divider />

          <TextBlock variant="heading">Results & Impact</TextBlock>

          <TextBlock variant="paragraph">
            The project exceeded expectations and delivered measurable results:
          </TextBlock>

          <Callout type="success">
            Achieved a 60% increase in user engagement and reduced page load times by 45% through careful optimization.
          </Callout>

          <ImageBlock
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
            alt="Analytics dashboard"
            caption="Performance metrics showing significant improvements"
            size="medium"
          />

          <TextBlock variant="heading">Lessons Learned</TextBlock>

          <TextBlock variant="list">
            <ListItem>Start with a solid architecture—it's harder to fix later</ListItem>
            <ListItem>User feedback is invaluable throughout the development process</ListItem>
            <ListItem>Performance should be a priority from day one, not an afterthought</ListItem>
            <ListItem>Documentation and code comments save time in the long run</ListItem>
            <ListItem>Testing early and often prevents costly bugs in production</ListItem>
          </TextBlock>

          <TextBlock variant="quote">
            "This project pushed me to think differently about scalability and user experience. The challenges we faced became opportunities for innovation."
          </TextBlock>

          <Divider />

          <TextBlock variant="paragraph">
            Want to discuss this project or collaborate on something similar? Feel free to reach out!
          </TextBlock>
        </motion.article>
      </div>
    </div>
  );
}
