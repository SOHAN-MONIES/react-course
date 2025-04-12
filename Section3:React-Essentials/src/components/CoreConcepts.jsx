import React from "react";
import CoreConcept from "../components/CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((core) => (
          <CoreConcept
            key={core.title}
            image={core.image}
            title={core.title}
            description={core.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
