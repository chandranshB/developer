import { CodeBlock } from "../components/journal/CodeBlock";
import { ImageBlock } from "../components/journal/ImageBlock";
import { TextBlock, ListItem } from "../components/journal/TextBlock";
import { Callout } from "../components/journal/Callout";
import { Divider } from "../components/journal/Divider";
import { StatsGrid } from "../components/journal/StatsGrid";
import { TwoColumn } from "../components/journal/TwoColumn";
import { Accordion } from "../components/journal/Accordion";
import { Alert } from "../components/journal/Alert";
import { Comparison } from "../components/journal/Comparison";
import { FeatureCardGrid } from "../components/journal/FeatureCard";
import { JSX } from "react";
import { Zap, Layout, Fingerprint, Server } from "lucide-react";

// Each journal entry has its own unique content
export const journalContent: Record<string, () => JSX.Element> = {
  "spectra-form-rescue": () => (
    <>
      <TextBlock variant="paragraph">
        When I took over the project, Spectra Geosolutions was facing a P0 crisis. Their primary lead generation channel wasn't just offline—it was leaking backend logic to the public. Instead of a quick patch, I saw an opportunity to re-engineer their entire communication architecture into something bulletproof.
      </TextBlock>

      <StatsGrid
        columns={3}
        stats={[
          { value: "100%", label: "Uptime", description: "Dual-Failover Architecture" },
          { value: "0", label: "Spam Bots", description: "7-Layer Security Grid" },
          { value: "<2s", label: "Load Time", description: "Optimized Asset Delivery" },
        ]}
      />

      <TextBlock variant="heading">The Incident: Raw Code on Production</TextBlock>

      <TwoColumn
        variant="left-heavy"
        left={
          <TextBlock variant="paragraph">
            The original system was fragile—a single syntax error in the PHP backend crashed the entire frontend render.
            <br /><br />
            This screenshot shows exactly what potential clients saw: <strong>raw, truncated server code</strong> instead of a contact form. This wasn't just a UI bug; it was a complete architectural failure.
          </TextBlock>
        }
        right={
          <Alert variant="error" title="Root Cause">
            Tightly coupled View/Controller logic meant that backend errors leaked directly into the browser, exposing internal logic.
          </Alert>
        }
      />

      {/* THE "BEFORE" IMAGE - The broken state */}
      <ImageBlock
        src="images/journal/spectra[nov-2025].webp"
        alt="Screenshot of the broken website displaying raw code"
        caption="The Incident: A snapshot of the live production site displaying raw PHP code due to a server misconfiguration."
        size="full"
      />

      <TextBlock variant="heading">From "Broken" to "Bulletproof"</TextBlock>

      <Comparison
        before={{
          title: "Legacy Mess",
          items: [
            "Leaked raw PHP code on error",
            "Zero validation (Client or Server)",
            "Silent failure if SMTP dropped",
            "Inaccessible to screen readers"
          ]
        }}
        after={{
          title: "My Architecture",
          items: [
            "Decoupled View/Controller Pattern",
            "Real-time feedback engine",
            "Self-healing Email Delivery",
            "WCAG 2.1 AA Compliant"
          ]
        }}
      />

      <TextBlock variant="heading">The "Invisible" Security Fortress</TextBlock>

      <TwoColumn
        variant="left-heavy"
        left={
          <TextBlock variant="paragraph">
            Public forms are the #1 target for bots. Most developers slap on a CAPTCHA and call it a day, but that hurts the user experience.
            <br /><br />
            I took a different approach: <strong>Defense in Depth</strong>. I implemented a 7-layer security grid that validates requests invisibly, blocking malicious actors without a single "Click all the traffic lights" puzzle.
          </TextBlock>
        }
        right={
          <Alert variant="primary" title="Philosophy">
            "Security should be a feature of the architecture itself."
          </Alert>
        }
      />

      <Accordion
        items={[
          {
            title: "Layer 1: Client-Side Behavior Analysis",
            content: "We don't just check inputs; we check behavior. Real-time validation ensures data integrity before a request is ever sent, reducing server load by catching errors at the source."
          },
          {
            title: "Layer 2: Transport & Session Security",
            content: "Enforced strict HTTPS, Secure Cookie flags (HTTPOnly, SameSite), and HSTS headers to prevent Man-in-the-Middle attacks during data transmission."
          },
          {
            title: "Layer 3: Cryptographic CSRF Protection",
            content: "Every form render generates a unique cryptographic token. If the submitted token doesn't match the session state, the request is instantly dropped—neutralizing Cross-Site Request Forgery."
          },
          {
            title: "Layer 4: Input Sanitization & Normalization",
            content: "All incoming data is stripped of HTML tags, trimmed, and filtered through strict type-checking to prevent XSS (Cross-Site Scripting) injections and SQL exploits."
          },
          {
            title: "Layer 5: The 'Honeypot' Trap",
            content: "I injected invisible input fields that are hidden from humans but visible to bots. If a bot greedily fills these out, the system silently flags and rejects the submission."
          },
          {
            title: "Layer 6: Session-Based Rate Limiting",
            content: "To prevent brute-force attacks, I implemented a session-level throttle. Users are limited to 3 submissions per 30-minute window, stopping spam bursts cold."
          },
          {
            title: "Layer 7: Timing Heuristics",
            content: "Bots are fast—too fast. I added a timestamp check. If a form is submitted in under 2 seconds (superhuman speed), we know it's a script and block it."
          }
        ]}
      />

      <TextBlock variant="heading">Engineering for Resilience</TextBlock>

      {/* THE "AFTER" IMAGE - The fixed state */}
      <ImageBlock
        src="images/journal/spectra-fix[nov-2025].webp"
        alt="The restored Spectra Geosolutions interface"
        caption="The Solution: A polished, high-performance interface that hides a massive amount of backend engineering complexity."
        size="full"
      />

      <TextBlock variant="paragraph">
        Reliability was the final piece of the puzzle. I refused to let a lead vanish just because Gmail's SMTP API blinked. I built a <strong>Dual-Failover System</strong> that guarantees delivery.
      </TextBlock>

      <CodeBlock
        filename="MailHandler.php"
        language="php"
        code={`try {
    // Priority 1: Authenticated SMTP (Rich HTML, Trackable)
    $mailer->sendViaSMTP($cleanData);
    logSuccess("SMTP Delivery");

} catch (SMTPException $e) {
    // Priority 2: Native Failover
    // If the sophisticated method fails, the rugged method takes over.
    // The business GETS the lead. No excuses.
    mail($to, $subject, $body);
    logWarning("Fallback triggered: " . $e->getMessage());
}`}
      />

      <FeatureCardGrid
        columns={2}
        features={[
          {
            icon: Layout,
            title: "Seamless Design",
            description: "Reverse-engineered existing CSS variables to ensure the new component felt completely native."
          },
          {
            icon: Server,
            title: "Smart Logging",
            description: "Comprehensive error logging that categorizes issues (User vs. System) for faster debugging."
          },
          {
            icon: Fingerprint,
            title: "Data Integrity",
            description: "Preserves user input in the session during validation errors so they never have to re-type."
          },
          {
            icon: Zap,
            title: "Zero Latency",
            description: "Implemented asynchronous processing patterns to keep the UI responsive during heavy validation."
          }
        ]}
      />

      <Divider />

      <TextBlock variant="quote">
        "True engineering isn't about using the most complex tools. It's about building systems so robust that the complexity becomes invisible to the user."
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

      <Divider />

      <TextBlock variant="heading">Key Takeaways</TextBlock>

      <TextBlock variant="list">
        <ListItem><strong>Data Integrity is Paramount:</strong> In e-commerce/booking, "mostly correct" is not enough.</ListItem>
        <ListItem><strong>Know Your Database:</strong> Understanding transaction isolation levels (Read Committed vs. Serializable) is a senior-level skill.</ListItem>
        <ListItem><strong>Fail Gracefully:</strong> A race condition isn't a system crash; it's a business logic state that needs a specific UI response.</ListItem>
      </TextBlock>
    </>
  ),

  "stale-while-revalidate-engine": () => (
    <>
      <TextBlock variant="paragraph">
        Loading spinners are a failure of imagination. I said it. When you're building for users in remote areas with spotty connections, showing a blank screen while you fetch data isn't just "bad UX"—it's broken product.
      </TextBlock>

      <StatsGrid
        columns={3}
        stats={[
          { value: "0ms", label: "Perceived Latency", description: "Immediate paint on route change" },
          { value: "100%", label: "Offline Support", description: "Full read access without network" },
          { value: "Type-Safe", label: "Architecture", description: "Generic implementation" },
        ]}
      />

      <TextBlock variant="heading">The "Instant Feel" Architecture</TextBlock>

      <TextBlock variant="paragraph">
        React's default data fetching often leads to waterfalls. I wanted something that felt "local-first" without the complexity of a massive sync engine. I built a custom <code>CacheManager</code> that strictly implements the <strong>Stale-While-Revalidate</strong> pattern.
      </TextBlock>

      <Accordion
        items={[
          {
            title: "Strategy: Stale-While-Revalidate",
            content: "We immediately return the 'stale' data from localStorage so the UI paints instantly. Then, we silently trigger a network request in the background. When that request finishes, we update the UI. The user sees content in 0ms, and sees the *fresh* content a second later."
          },
          {
            title: "Strategy: Cache Invalidation",
            content: "We set a 5-minute 'stale time'. If the user visits the page within 5 minutes, we don't even hit the network. Perfect for navigating back and forth between lists and details."
          }
        ]}
      />

      <TextBlock variant="subheading">The Implementation</TextBlock>

      <TextBlock variant="paragraph">
        Here is the heart of the engine. Notice how `getOrFetch` abstracts the entire complexity of TTL checking and background revalidation.
      </TextBlock>

      <CodeBlock
        filename="utils/cache-manager.ts"
        language="typescript"
        code={`// The heart of the engine
static async getOrFetch<T>(
  key: string, 
  fetchFn: () => Promise<T>, 
  ttl: number = this.DEFAULT_TTL,
  staleWhileRevalidate: boolean = true
): Promise<T> {
  // 1. Try to get data from local storage
  const cached = await this.get<T>(key);
  
  if (cached) {
    // 2. HIT: Return cached data IMMEDIATELY (0ms latency)
    
    // 3. Background Revalidation
    if (staleWhileRevalidate && await this.isStale(key)) {
      // Non-blocking fetch to update cache for next time
      fetchFn().then(data => this.set(key, data, ttl)).catch(() => {});
    }
    return cached;
  }

  // 4. MISS: Must fetch (fallback behavior)
  const data = await fetchFn();
  await this.set(key, data, ttl);
  return data;
}`}
      />

      <Callout type="success">
        <strong>The "Aha!" Moment:</strong> Because this runs on `localStorage`, it accidentally gave us full Offline Support. If the network fails, the `catch` block triggers, and the user just keeps browsing the cached version. No "You are offline" dinosaur game.
      </Callout>

      <Divider />

      <TextBlock variant="quote">
        "Speed isn't just about how fast bytes travel; it's about how fast the user *feels* like they are moving."
      </TextBlock>
    </>
  ),

  "serverless-security-hardening": () => (
    <>
      <TextBlock variant="paragraph">
        There's a naive belief that if you hide a button on the frontend, users can't click it. I learned the hard way that bots don't use buttons—they use cURL.
      </TextBlock>

      <TextBlock variant="heading">The Attack Vector</TextBlock>

      <TwoColumn
        variant="left-heavy"
        left={
          <TextBlock variant="paragraph">
            We had a public endpoint for vehicle bookings. Initially, I just validated the form in React.
            <br /><br />
            <strong>The result?</strong> Spambots bypassed the frontend entirely, hitting the API directly and filling our database with fake reservations. We needed a gatekeeper that lived *outside* the browser.
          </TextBlock>
        }
        right={
          <Alert variant="warning" title="Security Rule #1">
            Never trust the client. Anything running in the browser can be manipulated, mocked, or bypassed.
          </Alert>
        }
      />

      <TextBlock variant="heading">Zero-Trust at the Edge</TextBlock>

      <TextBlock variant="paragraph">
        I moved the booking logic to a <strong>Supabase Edge Function</strong>. This allowed me to perform a cryptographic handshake with Cloudflare *before* the database write ever happens.
      </TextBlock>

      <TextBlock variant="subheading">The Gatekeeper Pattern</TextBlock>

      <CodeBlock
        filename="supabase/functions/submit-vehicle-booking/index.ts"
        language="typescript"
        code={`// 1. Intercept the request at the Edge
serve(async (req) => {
  
  // 2. Extract the Turnstile token from the client
  const { turnstileToken } = await req.json();

  // 3. Verify with Cloudflare directly (Server-to-Server)
  const turnstileResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify', 
    {
      method: 'POST',
      body: new URLSearchParams({
        secret: Deno.env.get('TURNSTILE_SECRET_KEY'),
        response: turnstileToken,
      }),
    }
  );

  const result = await turnstileResponse.json();

  // 4. The Kill Switch
  if (!result.success) {
    return new Response(
      JSON.stringify({ error: 'Bot verification failed' }),
      { status: 403 }
    );
  }

  // Only NOW do we touch the database...
});`}
      />

      <Callout type="info">
        By handling CORS manually with `OPTIONS` preflight checks, we also ensured that our API rejects any request that doesn't originate from our specific domain.
      </Callout>

      <Divider />

      <TextBlock variant="heading">Why It Matters</TextBlock>

      <TextBlock variant="paragraph">
        This isn't just about clean data. It's about cost. Every database write costs money. By stopping the attack at the Edge, we save DB resources and ensure that every entry in our system represents a real, paying human.
      </TextBlock>

      <TextBlock variant="quote">
        "Security features aren't 'nice to haves'. In a public booking system, they are the difference between a business and a bot farm."
      </TextBlock>
    </>
  ),
};