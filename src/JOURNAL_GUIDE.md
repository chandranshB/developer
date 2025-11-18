# Journal Entry Guide

This guide explains how to create new journal entries for your portfolio.

## Quick Start

Creating a journal entry involves 2 steps:
1. Add entry metadata to `/data/journalEntries.ts`
2. Add entry content to `/data/journalContent.tsx`

---

## Step 1: Add Entry Metadata

Open `/data/journalEntries.ts` and add a new entry to the array:

```typescript
export const journalEntries: JournalEntry[] = [
  {
    id: "my-new-entry",              // Unique ID (use kebab-case)
    title: "My Awesome Discovery",   // Title shown in list
    date: "2025-01-20",              // Date in YYYY-MM-DD format
    excerpt: "Brief description...", // Preview text
    tags: ["React", "Performance"],  // Relevant tags
    readTime: "5 min read",          // Estimated read time
  },
  // ... other entries
];
```

---

## Step 2: Add Entry Content

Open `/data/journalContent.tsx` and add your content function to the `journalContent` object:

```typescript
export const journalContent: Record<string, () => JSX.Element> = {
  "my-new-entry": () => (
    <>
      {/* Your content here using the components below */}
    </>
  ),
  // ... other entries
};
```

**Important:** The key (e.g., `"my-new-entry"`) must match the `id` from Step 1.

---

## Available Components

### Text Components

#### Paragraph
```tsx
<TextBlock variant="paragraph">
  Your regular paragraph text goes here.
</TextBlock>
```

#### Main Heading (H2)
```tsx
<TextBlock variant="heading">
  Main Section Title
</TextBlock>
```

#### Subheading (H3)
```tsx
<TextBlock variant="subheading">
  Subsection Title
</TextBlock>
```

#### Quote
```tsx
<TextBlock variant="quote">
  "An inspiring quote or key takeaway."
</TextBlock>
```

#### Bulleted List
```tsx
<TextBlock variant="list">
  <ListItem>First point</ListItem>
  <ListItem>Second point</ListItem>
  <ListItem>Third point</ListItem>
</TextBlock>
```

---

### Code Block

Display code with syntax highlighting and a copy button:

```tsx
<CodeBlock
  filename="example.tsx"           // Optional filename
  language="typescript"            // Language for syntax highlighting
  code={`const hello = "world";
console.log(hello);`}
/>
```

**Tip:** Use template literals (backticks) for multi-line code.

---

### Images

Add images with optional captions:

```tsx
<ImageBlock
  src="https://example.com/image.jpg"
  alt="Description of image"
  caption="Optional caption text"    // Optional
  size="full"                        // Options: "small", "medium", "full"
/>
```

---

### Video

Embed YouTube videos or other video URLs:

```tsx
<VideoBlock
  src="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Video title"
  caption="Optional video caption"
/>
```

---

### Callouts

Highlight important information with colored boxes:

```tsx
{/* Blue - Informational */}
<Callout type="info">
  This is useful information to know.
</Callout>

{/* Green - Success/Tip */}
<Callout type="success">
  This worked great! Here's what happened...
</Callout>

{/* Orange - Warning */}
<Callout type="warning">
  Be careful with this approach because...
</Callout>

{/* Red - Error/Critical */}
<Callout type="error">
  This caused problems. Avoid doing this...
</Callout>
```

---

### Alerts

Similar to callouts but with optional titles:

```tsx
<Alert variant="primary" title="Pro Tip">
  This is a helpful tip for developers.
</Alert>

<Alert variant="success" title="Success!">
  The implementation worked perfectly.
</Alert>

<Alert variant="warning" title="Warning">
  Be cautious when implementing this.
</Alert>
```

---

### Divider

Add visual separation between major sections:

```tsx
<Divider />
```

---

### Two Column Layout

Create side-by-side content:

```tsx
<TwoColumn
  variant="equal"  // Options: "equal", "left-heavy", "right-heavy"
  left={
    <TextBlock variant="paragraph">
      Left column content
    </TextBlock>
  }
  right={
    <CodeBlock
      code={`const example = "code";`}
      language="typescript"
    />
  }
/>
```

---

### Stats Grid

Display metrics and statistics:

```tsx
<StatsGrid
  columns={3}  // Options: 2, 3, or 4
  stats={[
    { value: "60%", label: "Performance Boost", description: "Load time reduction" },
    { value: "10k+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
  ]}
/>
```

---

### Timeline

Show chronological events:

```tsx
<Timeline
  items={[
    {
      date: "Jan 2025",
      title: "Project Launch",
      description: "Released version 1.0 to production"
    },
    {
      date: "Feb 2025",
      title: "Major Update",
      description: "Added new features based on user feedback"
    },
  ]}
/>
```

---

### Comparison (Before/After)

Show improvements or changes:

```tsx
<Comparison
  before={{
    title: "Before Optimization",
    items: [
      "Slow page load times",
      "Large bundle size",
      "Poor mobile experience"
    ]
  }}
  after={{
    title: "After Optimization",
    items: [
      "Fast page loads",
      "Reduced bundle by 60%",
      "Smooth mobile experience"
    ]
  }}
/>
```

---

### Feature Cards

Display features in a grid:

```tsx
import { Zap, Shield, Globe } from "lucide-react";

<FeatureCardGrid
  columns={3}  // Options: 2 or 3
  features={[
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Built with security in mind"
    },
  ]}
/>
```

---

### Tabbed Content

Organize content in tabs:

```tsx
<TabbedContent
  tabs={[
    {
      id: "react",
      label: "React",
      content: <TextBlock variant="paragraph">React content...</TextBlock>
    },
    {
      id: "vue",
      label: "Vue",
      content: <TextBlock variant="paragraph">Vue content...</TextBlock>
    },
  ]}
/>
```

---

### Accordion

Collapsible content sections:

```tsx
<Accordion
  items={[
    {
      title: "How does it work?",
      content: "Detailed explanation here..."
    },
    {
      title: "What are the benefits?",
      content: "List of benefits..."
    },
  ]}
/>
```

---

## Example Entry Template

Copy and paste this template to create a new entry:

```typescript
"my-entry-id": () => (
  <>
    <TextBlock variant="paragraph">
      Introduction paragraph explaining the context.
    </TextBlock>

    <Callout type="info">
      Important context or tip for readers.
    </Callout>

    <TextBlock variant="heading">The Problem</TextBlock>

    <TextBlock variant="paragraph">
      Describe the challenge you faced.
    </TextBlock>

    <TextBlock variant="list">
      <ListItem>First issue encountered</ListItem>
      <ListItem>Second issue encountered</ListItem>
      <ListItem>Third issue encountered</ListItem>
    </TextBlock>

    <ImageBlock
      src="https://images.unsplash.com/photo-xxxxx"
      alt="Descriptive alt text"
      caption="What this image shows"
      size="full"
    />

    <TextBlock variant="heading">The Solution</TextBlock>

    <TextBlock variant="paragraph">
      Explain your approach and solution.
    </TextBlock>

    <CodeBlock
      filename="solution.ts"
      language="typescript"
      code={`// Your code example here
function solve() {
  return "solution";
}`}
    />

    <Callout type="success">
      The results and improvements you achieved.
    </Callout>

    <Divider />

    <TextBlock variant="heading">Key Takeaways</TextBlock>

    <TextBlock variant="list">
      <ListItem>First lesson learned</ListItem>
      <ListItem>Second lesson learned</ListItem>
      <ListItem>Third lesson learned</ListItem>
    </TextBlock>

    <TextBlock variant="quote">
      "A memorable quote or conclusion."
    </TextBlock>
  </>
),
```

---

## Best Practices

1. **Start with context** - Help readers understand why this topic matters
2. **Use headings** - Break content into digestible sections
3. **Show, don't just tell** - Include code examples and images
4. **Highlight key points** - Use callouts for important information
5. **End with takeaways** - Summarize what readers should remember

---

## Tips

- Keep code blocks focused - show only relevant parts
- Use descriptive alt text for images (important for accessibility)
- Match your entry ID in both files exactly (case-sensitive!)
- Test your entry by navigating to it in the app
- Use callouts sparingly for maximum impact

---

## Troubleshooting

**Entry doesn't show up?**
- Check that the ID matches exactly in both files
- Make sure the entry is added to the `journalEntries` array
- Verify there are no TypeScript errors

**Code block looks wrong?**
- Ensure you're using template literals (backticks)
- Check for unescaped special characters
- Make sure proper indentation is preserved

**Images not loading?**
- Verify the image URL is correct and accessible
- Use https:// URLs (not http://)
- Consider using Unsplash for free stock images