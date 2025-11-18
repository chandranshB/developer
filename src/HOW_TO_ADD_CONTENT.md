# Complete Guide: Adding Content to Your Portfolio

This guide covers how to add journal entries and projects to your portfolio.

---

## 📝 Adding Journal Entries

### Step 1: Add Entry Metadata

Edit `/data/journalEntries.ts`:

```typescript
export const journalEntries: JournalEntry[] = [
  {
    id: "unique-entry-id",           // Use kebab-case
    title: "Your Entry Title",
    date: "2025-01-20",              // YYYY-MM-DD
    excerpt: "Brief description...",
    tags: ["Tag1", "Tag2"],
    readTime: "5 min read",
  },
  // Add more entries here
];
```

### Step 2: Add Entry Content

Edit `/data/journalContent.tsx`:

```typescript
export const journalContent: Record<string, () => JSX.Element> = {
  "unique-entry-id": () => (
    <>
      <TextBlock variant="paragraph">
        Your content here...
      </TextBlock>
      
      <CodeBlock
        filename="example.ts"
        language="typescript"
        code={`const example = "code";`}
      />
      
      {/* More components... */}
    </>
  ),
};
```

### Available Journal Components:

- `<TextBlock variant="paragraph">` - Regular text
- `<TextBlock variant="heading">` - Main heading (H2)
- `<TextBlock variant="subheading">` - Subheading (H3)
- `<TextBlock variant="quote">` - Blockquote
- `<TextBlock variant="list">` - Bulleted list (use with `<ListItem>`)
- `<CodeBlock>` - Code with syntax highlighting
- `<ImageBlock>` - Images with captions
- `<Callout type="info|success|warning|error">` - Highlighted boxes
- `<Divider />` - Visual separator

See `/JOURNAL_GUIDE.md` for detailed examples.

---

## 🚀 Adding Projects

### Step 1: Add Project to List

Edit `/data/projectsData.ts`:

```typescript
export const projectsData: ProjectData[] = [
  {
    id: "project-slug",
    title: "Project Name",
    subtitle: "Short description",
    thumbnail: "https://images.unsplash.com/...",  // Project image
    tags: ["React", "Node.js"],
    year: "2024",
    duration: "3 months",
    role: "Full-stack Developer",
  },
  // Add more projects here
];
```

### Step 2: (Optional) Customize Project Detail Page

Projects automatically get detail pages using the template in `/pages/ProjectDetailPage.tsx`.

To customize content for a specific project, you can:
1. Create project-specific content files (similar to journal entries)
2. Edit the ProjectDetailPage component to render different content based on `projectId`

**Example Structure:**

```typescript
// In ProjectDetailPage.tsx
const projectContent: Record<string, () => JSX.Element> = {
  "project-slug": () => (
    <>
      <TextBlock variant="heading">Custom Content</TextBlock>
      {/* Your custom project details */}
    </>
  ),
};
```

---

## 🎨 Styling Guidelines

### Dark Mode Support

All components automatically support dark mode. The theme toggle is in the header.

**Key classes for dark mode:**
- `dark:bg-background` - Dark background
- `dark:bg-card` - Card background in dark mode
- `dark:border-white/5` - Border for dark mode
- `dark:text-foreground` - Text color in dark mode

### Apple Design Language

The site follows Apple's design principles:
- **Typography:** Specific font sizes (14px, 15px, 17px, 19px, 21px, 28px, 32px, 40px, 48px, 56px, 64px)
- **Rounded corners:** 20px, 28px, 40px border radius
- **Spacing:** Generous whitespace with py-32 for sections
- **Colors:** Primary blue (#0071e3), clean neutrals
- **Motion:** Smooth transitions with Motion (Framer Motion)

---

## 📂 File Structure

```
/data/
  ├── journalEntries.ts     # Journal metadata
  ├── journalContent.tsx    # Journal full content
  └── projectsData.ts       # Project metadata

/pages/
  ├── InsightsPage.tsx      # Journal list page
  ├── JournalEntryPage.tsx  # Individual journal entry
  ├── ProjectsListPage.tsx  # Projects list page
  └── ProjectDetailPage.tsx # Individual project page

/components/
  ├── journal/
  │   ├── CodeBlock.tsx     # Code component
  │   ├── ImageBlock.tsx    # Image component
  │   ├── TextBlock.tsx     # Text components
  │   ├── Callout.tsx       # Callout boxes
  │   ├── Divider.tsx       # Divider line
  │   └── VideoBlock.tsx    # Video embeds
  └── ...
```

---

## ✅ Quick Checklist

### Adding a Journal Entry:
- [ ] Add entry to `/data/journalEntries.ts` with unique ID
- [ ] Add content function to `/data/journalContent.tsx` with matching ID
- [ ] Test by clicking the entry in the Insights page
- [ ] Verify it displays correctly in both light and dark mode

### Adding a Project:
- [ ] Add project to `/data/projectsData.ts` with unique ID
- [ ] Add thumbnail image URL (use Unsplash for free images)
- [ ] Add relevant tags
- [ ] Test by viewing in the Projects page
- [ ] Customize project detail page if needed

---

## 💡 Pro Tips

1. **Consistent IDs:** Use kebab-case for all IDs (e.g., `my-awesome-project`)
2. **Images:** Use Unsplash for high-quality free stock photos
3. **Code Blocks:** Keep code examples focused and well-commented
4. **Tags:** Reuse tags across entries for consistency
5. **Dates:** Use ISO format (YYYY-MM-DD) for proper sorting
6. **Testing:** Always check both light and dark mode

---

## 🔧 Customization

### Changing Colors

Edit `/styles/globals.css` to customize the color palette:

```css
:root {
  --primary: 210 100% 50%;  /* Blue */
  /* ... other colors */
}
```

### Contact Email

Update the email in `/components/Contact.tsx`:

```typescript
window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
```

### Personal Information

Update these components:
- `/components/Header.tsx` - Your name
- `/components/Hero.tsx` - Hero section content
- `/components/About.tsx` - About section
- `/components/Contact.tsx` - Contact details
- `/components/Footer.tsx` - Footer information

---

## 🚨 Troubleshooting

**Entry/Project not showing?**
- Check console for TypeScript errors
- Verify IDs match exactly (case-sensitive)
- Ensure proper export in data files

**Dark mode not working?**
- Check if component has `dark:` variant classes
- Verify ThemeProvider wraps the app

**Mailto not working?**
- Check if all form fields have values
- Verify email format is correct in Contact.tsx

---

## 📚 Additional Resources

- `/JOURNAL_GUIDE.md` - Detailed journal component examples
- `/components/journal/ComponentGuide.md` - Component documentation
- Lucide Icons: https://lucide.dev
- Unsplash: https://unsplash.com
