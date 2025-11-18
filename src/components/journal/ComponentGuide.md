# Journal Components Guide

This guide explains how to use all the available journal/blog components to create rich content.

## Available Components

### 1. TextBlock
Use for all text content with different variants:

```tsx
import { TextBlock, ListItem } from "./components/journal/TextBlock";

// Paragraph
<TextBlock variant="paragraph">
  Your paragraph text here...
</TextBlock>

// Heading (H2)
<TextBlock variant="heading">
  Main Section Title
</TextBlock>

// Subheading (H3)
<TextBlock variant="subheading">
  Subsection Title
</TextBlock>

// Quote
<TextBlock variant="quote">
  "An inspiring quote or important statement."
</TextBlock>

// List
<TextBlock variant="list">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</TextBlock>
```

### 2. CodeBlock
Display code with syntax highlighting and copy functionality:

```tsx
import { CodeBlock } from "./components/journal/CodeBlock";

<CodeBlock
  filename="example.tsx"
  language="typescript"
  code={`const greeting = "Hello, World!";
console.log(greeting);`}
/>
```

### 3. ImageBlock
Add images with optional captions:

```tsx
import { ImageBlock } from "./components/journal/ImageBlock";

<ImageBlock
  src="https://example.com/image.jpg"
  alt="Description"
  caption="Optional image caption"
  size="full" // Options: "small", "medium", "full"
/>
```

### 4. VideoBlock
Embed YouTube videos:

```tsx
import { VideoBlock } from "./components/journal/VideoBlock";

<VideoBlock
  src="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Video title"
  caption="Optional caption"
/>
```

### 5. Callout
Highlight important information:

```tsx
import { Callout } from "./components/journal/Callout";

<Callout type="info">
  This is an informational callout.
</Callout>

<Callout type="success">
  This indicates success or positive information.
</Callout>

<Callout type="warning">
  This is a warning or caution.
</Callout>

<Callout type="error">
  This indicates an error or critical information.
</Callout>
```

### 6. Alert
Similar to callout with optional title:

```tsx
import { Alert } from "./components/journal/Alert";

<Alert variant="primary" title="Pro Tip">
  Helpful information here.
</Alert>
```

### 7. Divider
Add visual separation between sections:

```tsx
import { Divider } from "./components/journal/Divider";

<Divider />
```

### 8. TwoColumn
Create side-by-side layouts:

```tsx
import { TwoColumn } from "./components/journal/TwoColumn";

<TwoColumn
  variant="equal" // Options: "equal", "left-heavy", "right-heavy"
  left={<TextBlock variant="paragraph">Left content</TextBlock>}
  right={<CodeBlock code="..." language="typescript" />}
/>
```

### 9. StatsGrid
Display statistics and metrics:

```tsx
import { StatsGrid } from "./components/journal/StatsGrid";

<StatsGrid
  columns={3} // Options: 2, 3, or 4
  stats={[
    { value: "60%", label: "Performance Boost", description: "Load time reduction" },
    { value: "10k+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
  ]}
/>
```

### 10. Timeline
Show chronological events:

```tsx
import { Timeline } from "./components/journal/Timeline";

<Timeline
  items={[
    {
      date: "Jan 2025",
      title: "Project Launch",
      description: "Released version 1.0"
    },
    {
      date: "Feb 2025",
      title: "Major Update",
      description: "Added new features"
    },
  ]}
/>
```

### 11. Comparison
Show before/after comparisons:

```tsx
import { Comparison } from "./components/journal/Comparison";

<Comparison
  before={{
    title: "Before Optimization",
    items: ["Slow load times", "Large bundle", "Poor mobile UX"]
  }}
  after={{
    title: "After Optimization",
    items: ["Fast loads", "Reduced bundle", "Great mobile UX"]
  }}
/>
```

### 12. TabbedContent
Organize content in tabs:

```tsx
import { TabbedContent } from "./components/journal/TabbedContent";

<TabbedContent
  tabs={[
    {
      id: "react",
      label: "React",
      content: <TextBlock variant="paragraph">React content</TextBlock>
    },
    {
      id: "vue",
      label: "Vue",
      content: <TextBlock variant="paragraph">Vue content</TextBlock>
    },
  ]}
/>
```

### 13. Accordion
Collapsible sections:

```tsx
import { Accordion } from "./components/journal/Accordion";

<Accordion
  items={[
    {
      title: "How does it work?",
      content: "Explanation here..."
    },
    {
      title: "What are the benefits?",
      content: "Benefits listed here..."
    },
  ]}
/>
```

### 14. FeatureCard & FeatureCardGrid
Display features in cards:

```tsx
import { FeatureCardGrid } from "./components/journal/FeatureCard";
import { Zap, Shield } from "lucide-react";

<FeatureCardGrid
  columns={3} // Options: 2 or 3
  features={[
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Built with security in mind"
    },
  ]}
/>
```

## Example Entry Structure

```tsx
<TextBlock variant="heading">Introduction</TextBlock>

<TextBlock variant="paragraph">
  Start with context and background...
</TextBlock>

<ImageBlock
  src="..."
  alt="..."
  caption="..."
/>

<TextBlock variant="subheading">The Problem</TextBlock>

<TextBlock variant="list">
  <ListItem>First challenge</ListItem>
  <ListItem>Second challenge</ListItem>
</TextBlock>

<Callout type="warning">
  Important consideration to keep in mind.
</Callout>

<TextBlock variant="heading">The Solution</TextBlock>

<CodeBlock
  filename="solution.ts"
  language="typescript"
  code={`...`}
/>

<Divider />

<TextBlock variant="quote">
  "A relevant quote or key takeaway."
</TextBlock>
```

## Tips

- Use headings to structure your content
- Mix text, code, and images for engaging content
- Use callouts sparingly for important information
- Add captions to images for context
- Use dividers to separate major sections