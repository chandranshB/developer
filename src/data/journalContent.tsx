import { CodeBlock } from "../components/journal/CodeBlock";
import { ImageBlock } from "../components/journal/ImageBlock";
import { TextBlock, ListItem } from "../components/journal/TextBlock";
import { Callout } from "../components/journal/Callout";
import { Divider } from "../components/journal/Divider";
import { JSX } from "react";

// Each journal entry has its own unique content
export const journalContent: Record<string, () => JSX.Element> = {
  "solving-state-management": () => (
    <>
      <TextBlock variant="paragraph">
        Recently, I encountered a challenging issue while working on a large-scale React application. The state management was becoming increasingly complex, and I needed to find a better solution that could scale with our growing codebase.
      </TextBlock>

      <Callout type="warning">
        When your component tree gets deep and state updates become unpredictable, it's time to rethink your architecture.
      </Callout>

      <TextBlock variant="heading">The Problem</TextBlock>

      <TextBlock variant="paragraph">
        Our application had multiple features that needed to share state across distant components. Props drilling was becoming a nightmare, and useContext wasn't performing well with frequent updates.
      </TextBlock>

      <TextBlock variant="list">
        <ListItem>Component re-renders were happening too frequently</ListItem>
        <ListItem>State updates were difficult to track and debug</ListItem>
        <ListItem>The codebase was becoming hard to maintain</ListItem>
        <ListItem>Team members were confused about where to put new state</ListItem>
      </TextBlock>

      <ImageBlock
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
        alt="Code on screen"
        caption="Analyzing the component tree helped identify performance bottlenecks"
        size="full"
      />

      <TextBlock variant="heading">The Solution</TextBlock>

      <TextBlock variant="paragraph">
        After researching different approaches including Redux, Zustand, and Jotai, I implemented a custom hook pattern combined with Zustand for global state. Here's the pattern I discovered:
      </TextBlock>

      <CodeBlock
        filename="useOptimizedState.ts"
        language="typescript"
        code={`import { useCallback, useRef, useState } from 'react';

export function useOptimizedState<T>(initialValue: T) {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);

  const setOptimizedState = useCallback((value: T | ((prev: T) => T)) => {
    setState((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      stateRef.current = newValue;
      return newValue;
    });
  }, []);

  return [state, setOptimizedState, stateRef] as const;
}`}
      />

      <TextBlock variant="paragraph">
        This hook provides both the state value and a ref, allowing us to access the latest value without causing unnecessary re-renders in event handlers and async functions.
      </TextBlock>

      <Callout type="success">
        After implementing this pattern alongside Zustand for global state, we saw a 40% reduction in unnecessary re-renders and a significant improvement in application performance.
      </Callout>

      <Divider />

      <TextBlock variant="heading">Key Takeaways</TextBlock>

      <TextBlock variant="list">
        <ListItem>Always measure performance before and after optimization</ListItem>
        <ListItem>Understanding React's rendering behavior is crucial for large apps</ListItem>
        <ListItem>Custom hooks can encapsulate complex logic effectively</ListItem>
        <ListItem>Choose the right tool for the job - not every app needs Redux</ListItem>
        <ListItem>Documentation and code comments are essential for team collaboration</ListItem>
      </TextBlock>

      <TextBlock variant="quote">
        "The best code is not the cleverest code, but the code that is easiest to understand and maintain."
      </TextBlock>
    </>
  ),

  "performance-optimization": () => (
    <>
      <TextBlock variant="paragraph">
        Performance optimization is one of those topics that sounds scary but can have massive impact. Let me share how I reduced load time by 60% in a production app.
      </TextBlock>

      <TextBlock variant="heading">Where I Started</TextBlock>

      <TextBlock variant="paragraph">
        The app was slow. Users were complaining, and our analytics showed high bounce rates on the landing page. Time to investigate.
      </TextBlock>

      <Callout type="info">
        Always start with measurement. Use Chrome DevTools, Lighthouse, and Web Vitals to identify actual bottlenecks before optimizing.
      </Callout>

      <TextBlock variant="subheading">Initial Metrics</TextBlock>

      <TextBlock variant="list">
        <ListItem>First Contentful Paint: 3.2s</ListItem>
        <ListItem>Largest Contentful Paint: 5.8s</ListItem>
        <ListItem>Time to Interactive: 7.1s</ListItem>
        <ListItem>Bundle size: 850KB gzipped</ListItem>
      </TextBlock>

      <TextBlock variant="heading">Optimization Strategies</TextBlock>

      <TextBlock variant="subheading">1. Code Splitting</TextBlock>

      <CodeBlock
        filename="App.tsx"
        language="typescript"
        code={`import { lazy, Suspense } from 'react';

// Instead of importing everything at once
// import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';

// Lazy load route components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}`}
      />

      <TextBlock variant="subheading">2. Image Optimization</TextBlock>

      <TextBlock variant="paragraph">
        Images were the biggest culprit. I implemented next/image for automatic optimization and WebP format support.
      </TextBlock>

      <ImageBlock
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
        alt="Performance metrics"
        caption="Before and after comparison of Web Vitals scores"
        size="full"
      />

      <TextBlock variant="subheading">3. Lazy Loading Components</TextBlock>

      <CodeBlock
        filename="LazyComponent.tsx"
        language="typescript"
        code={`import { useEffect, useRef, useState } from 'react';

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '100px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export function HeavyComponent() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      {isInView ? <ActualHeavyContent /> : <Skeleton />}
    </div>
  );
}`}
      />

      <Callout type="success">
        Final Results: FCP 1.2s, LCP 2.1s, TTI 2.8s, Bundle 320KB. User engagement increased by 45%.
      </Callout>

      <Divider />

      <TextBlock variant="quote">
        "Performance is not just about speed - it's about user experience and business outcomes."
      </TextBlock>
    </>
  ),

  "typescript-patterns": () => (
    <>
      <TextBlock variant="paragraph">
        TypeScript has transformed how I write JavaScript. Here are the advanced patterns that have made the biggest difference in my code quality.
      </TextBlock>

      <TextBlock variant="heading">Pattern 1: Discriminated Unions</TextBlock>

      <TextBlock variant="paragraph">
        This pattern helps create type-safe state machines and API responses.
      </TextBlock>

      <CodeBlock
        filename="types.ts"
        language="typescript"
        code={`type LoadingState = {
  status: 'loading';
  data: null;
  error: null;
};

type SuccessState<T> = {
  status: 'success';
  data: T;
  error: null;
};

type ErrorState = {
  status: 'error';
  data: null;
  error: Error;
};

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState;

function handleState<T>(state: AsyncState<T>) {
  switch (state.status) {
    case 'loading':
      return <Spinner />;
    case 'success':
      // TypeScript knows data is T here!
      return <Display data={state.data} />;
    case 'error':
      // TypeScript knows error exists here!
      return <Error message={state.error.message} />;
  }
}`}
      />

      <Callout type="info">
        Discriminated unions eliminate runtime errors by making invalid states unrepresentable.
      </Callout>

      <TextBlock variant="heading">Pattern 2: Generic Constraints</TextBlock>

      <CodeBlock
        filename="generics.ts"
        language="typescript"
        code={`interface WithId {
  id: string;
}

function findById<T extends WithId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Works with any type that has an id
const user = findById(users, '123');
const post = findById(posts, '456');`}
      />

      <TextBlock variant="heading">Pattern 3: Template Literal Types</TextBlock>

      <CodeBlock
        filename="template-literals.ts"
        language="typescript"
        code={`type Theme = 'light' | 'dark';
type Size = 'sm' | 'md' | 'lg';

// Creates: 'light-sm' | 'light-md' | 'light-lg' | 'dark-sm' | ...
type VariantKey = \`\${Theme}-\${Size}\`;

const variants: Record<VariantKey, string> = {
  'light-sm': 'bg-white text-xs',
  'light-md': 'bg-white text-sm',
  'light-lg': 'bg-white text-base',
  'dark-sm': 'bg-black text-xs',
  'dark-md': 'bg-black text-sm',
  'dark-lg': 'bg-black text-base',
};`}
      />

      <Divider />

      <TextBlock variant="list">
        <ListItem>Use discriminated unions for state management</ListItem>
        <ListItem>Leverage generic constraints to make APIs type-safe</ListItem>
        <ListItem>Template literals create powerful type combinations</ListItem>
        <ListItem>Always prefer types over interfaces for unions</ListItem>
      </TextBlock>

      <TextBlock variant="quote">
        "Strong typing isn't about restricting what you can do - it's about expressing intent clearly."
      </TextBlock>
    </>
  ),
};
