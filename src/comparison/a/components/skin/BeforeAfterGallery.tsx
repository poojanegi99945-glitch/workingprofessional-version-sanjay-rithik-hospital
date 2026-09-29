import { useState, type PointerEvent } from "react";
import { ArrowLeftRight, ShieldCheck } from "lucide-react";

import case01Before from "@/comparison/a/assets/aviclear-gallery/01-before.png";
import case01After from "@/comparison/a/assets/aviclear-gallery/01-after.png";
import case02Before from "@/comparison/a/assets/aviclear-gallery/02-before.png";
import case02After from "@/comparison/a/assets/aviclear-gallery/02-after.png";
import case03Before from "@/comparison/a/assets/aviclear-gallery/03-before.png";
import case03After from "@/comparison/a/assets/aviclear-gallery/03-after.png";
import case04Before from "@/comparison/a/assets/aviclear-gallery/04-before.png";
import case04After from "@/comparison/a/assets/aviclear-gallery/04-after.png";
import case05Before from "@/comparison/a/assets/aviclear-gallery/05-before.png";
import case05After from "@/comparison/a/assets/aviclear-gallery/05-after.png";
import case06Before from "@/comparison/a/assets/aviclear-gallery/06-before.png";
import case06After from "@/comparison/a/assets/aviclear-gallery/06-after.png";

const CASES = [
  {
    before: case01Before,
    after: case01After,
    title: "Acne Scar Treatment",
    sessions: "6 Sessions",
  },
  {
    before: case02Before,
    after: case02After,
    title: "Acne Treatment",
    sessions: "4 Sessions",
  },
  {
    before: case03Before,
    after: case03After,
    title: "Pigmentation Treatment",
    sessions: "2 Sessions",
  },
  {
    before: case04Before,
    after: case04After,
    title: "Melasma Treatment",
    sessions: "5 Sessions",
  },
  {
    before: case05Before,
    after: case05After,
    title: "Laser Hair Removal - Legs",
    sessions: "3 Sessions",
  },
  {
    before: case06Before,
    after: case06After,
    title: "Laser Hair Removal - Face",
    sessions: "4 Sessions",
  },
] as const;

function BeforeAfterCard({
  before,
  after,
  title,
  sessions,
  index,
}: {
  before: string;
  after: string;
  title: string;
  sessions: string;
  index: number;
}) {
  const [position, setPosition] = useState(50);

  function setFromPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("input, button")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromPointer(event);
  }

  return (
    <article className="premium-results-card">
      <div
        className="premium-results-compare"
        onPointerDown={startDrag}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) setFromPointer(event);
        }}
        onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            setFromPointer(event);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        <img
          src={before}
          alt={`${title} reference before`}
          draggable={false}
          className="premium-results-before"
        />
        <div
          className="premium-results-after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={after} alt={`${title} reference after`} draggable={false} />
        </div>

        <span className="premium-results-pill premium-results-before-label">Before</span>
        <span className="premium-results-pill premium-results-after-label">After</span>

        <div className="premium-results-divider" style={{ left: `${position}%` }}>
          <span>
            <ArrowLeftRight />
          </span>
        </div>

        <div className="premium-results-copy">
          <h3>{title}</h3>
          <p>{sessions}</p>
        </div>

        <label className="premium-results-range">
          <span className="sr-only">Drag before and after comparison {index + 1}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label={`Drag before and after comparison ${index + 1}`}
          />
        </label>
      </div>
    </article>
  );
}

export function BeforeAfterGallery() {
  return (
    <section id="a-before-after" className="premium-results-section">
      <div className="premium-results-shell">
        <header className="premium-results-header">
          <p>Transformations</p>
          <h2>Before &amp; After Results</h2>
          <span>
            Explore reference before-and-after examples and drag the divider to compare each image.
          </span>
        </header>

        <div className="premium-results-grid">
          {CASES.map((item, index) => (
            <BeforeAfterCard key={item.title} {...item} index={index} />
          ))}
        </div>

        <div className="premium-results-note">
          <ShieldCheck />
          <p>
            These photos are published for informational purposes only to illustrate the nature of
            the intervention. Individual results may vary and no specific outcome is guaranteed.
            These are reference examples and are not Sanjay Rithik Hospital patient results.
          </p>
        </div>
      </div>
    </section>
  );
}
