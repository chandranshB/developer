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
  "snt-concurrency-architecture": () => (
    <>
      <TextBlock variant="paragraph">
        In building <strong>SeetaNarayan Travels</strong>, the most critical challenge wasn't visible on the screen—it was in the database. When dealing with real-time travel bookings, the margin for error is zero. A "double booking" (two users booking the same seat simultaneously) isn't just a bug; it's a broken promise to a customer who might be left stranded.
      </TextBlock>

      <Callout type="info">
        In distributed systems, <strong>Correctness</strong> often competes with <strong>Performance</strong>. The art of engineering is balancing the two without compromising the user experience.
      </Callout>

      <TextBlock variant="heading">The Invisible Problem: Race Conditions</TextBlock>

      <TextBlock variant="paragraph">
        During load testing, we discovered a critical "check-then-act" race condition. Standard validation logic checks if a seat is available and <em>then</em> books it. However, in the milliseconds between the <code>READ</code> and the <code>WRITE</code>, another request could slip in.
      </TextBlock>

      <TextBlock variant="paragraph">
        In a high-concurrency environment, this standard approach fails:
      </TextBlock>

      <CodeBlock
        filename="unsafe-booking.ts"
        language="typescript"
        code={`// ❌ THE NAIVE APPROACH (Vulnerable to Race Conditions)
async function bookSeat(vehicleId, seatNumber, userId) {
  // 1. Check availability
  const isAvailable = await db.checkSeat(vehicleId, seatNumber);
  
  if (!isAvailable) {
    throw new Error('Seat taken');
  }

  // 🔴 RACE CONDITION WINDOW: Another request can book here!

  // 2. Book the seat
  return await db.createBooking(vehicleId, seatNumber, userId);
}`}
      />

      <TextBlock variant="paragraph">
        This is a classic concurrency anomaly. With standard PostgreSQL <code>READ COMMITTED</code> isolation, both transactions see the seat as "free" before either commits.
      </TextBlock>

      <TextBlock variant="heading">The Solution: Pessimistic Locking</TextBlock>

      <TextBlock variant="paragraph">
        To solve this with absolute certainty, I implemented <strong>Pessimistic Locking</strong> using PostgreSQL's <code>SELECT ... FOR UPDATE</code>. This forces the database to lock the specific row (inventory item) for the duration of the transaction, effectively serializing access to that specific seat without locking the entire table.
      </TextBlock>

      <CodeBlock
        filename="transaction-manager.ts"
        language="typescript"
        code={`// ✅ THE ROBUST APPROACH
async function bookSeatSecurely(vehicleId, seatNumber, userId) {
  return await db.transaction(async (trx) => {
    // 1. Lock the specific row for this transaction
    // "FOR UPDATE" prevents other transactions from modifying this row
    const seat = await trx('inventory')
      .where({ vehicle_id: vehicleId, seat_number: seatNumber })
      .forUpdate() // 🔒 The Magic Line
      .first();

    if (seat.status !== 'AVAILABLE') {
      throw new Error('Seat unavailable');
    }

    // 2. Process Booking
    const booking = await trx('bookings').insert({
      vehicle_id: vehicleId,
      seat_number: seatNumber,
      user_id: userId,
      status: 'CONFIRMED'
    });

    // 3. Update Inventory
    await trx('inventory')
      .where({ id: seat.id })
      .update({ status: 'BOOKED' });

    return booking;
  });
}`}
      />

      <Callout type="success">
        By utilizing database-level row locking, we guaranteed <strong>ACID compliance</strong> for every booking. Zero double bookings, regardless of traffic spikes.
      </Callout>

      <TextBlock variant="heading">Optimizing the User Experience</TextBlock>

      <TextBlock variant="paragraph">
        Solving the backend problem created a frontend challenge: latency. Locking rows introduces wait times. To mask this, I implemented an <strong>Optimistic UI</strong> pattern handling specifically for the <code>409 Conflict</code> status code.
      </TextBlock>

      <ImageBlock
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        alt="Server Architecture Diagram"
        caption="Balancing strong consistency on the backend with eventual consistency on the frontend."
        size="full"
      />

      <TextBlock variant="paragraph">
        If a lock contention occurs or a booking fails due to a race condition (which is now caught safely), the UI needs to handle it gracefully without crashing or confusing the user.
      </TextBlock>

      <CodeBlock
        filename="useBooking.ts"
        language="typescript"
        code={`// Handling the edge case gracefully in the UI
const handleBooking = async (seatId: string) => {
  // 1. Optimistic Update: Visually reserve immediately
  setSeatStatus(seatId, 'RESERVED');

  try {
    await api.bookSeat(seatId);
    toast.success('Booking Confirmed!');
  } catch (error) {
    // 2. Rollback on failure
    setSeatStatus(seatId, 'AVAILABLE');
    
    // 3. Specific handling for concurrency conflicts
    if (error.status === 409) {
      toast.error('Someone just snatched this seat! Please choose another.');
      // Automatically refresh inventory to show latest state
      refreshInventory(); 
    } else {
      toast.error('Booking failed. Please try again.');
    }
  }
};`}
      />

      <Divider />

      <TextBlock variant="heading">Key Takeaways</TextBlock>

      <TextBlock variant="list">
        <ListItem><strong>Data Integrity is Paramount:</strong> In e-commerce/booking, "mostly correct" is not enough.</ListItem>
        <ListItem><strong>Know Your Database:</strong> Understanding transaction isolation levels (Read Committed vs. Serializable) is a senior-level skill.</ListItem>
        <ListItem><strong>Fail Gracefully:</strong> A race condition isn't a system crash; it's a business logic state that needs a specific UI response.</ListItem>
      </TextBlock>

      <TextBlock variant="quote">
        "True optimization isn't just making things faster; it's making them robust enough to handle the chaos of the real world."
      </TextBlock>
    </>
  ),
};
