/**
 * Course Cards Block Component
 * Displays a grid of course cards with customizable layout and design.
 */

import {Icon} from "../../shared/components/Icon.jsx";

// Simple markdown renderer adapted for Preact
function renderMarkdown(text) {
  if (!text) return "";
  return String(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

export const CourseCardsBlock = ({content, design, _id}) => {
  const cards = content?.cards || [];
  const blockTitle = content?.title || "";
  const blockId = _id || "course-cards";

  const cardDesign = design?.card || {};
  const cardClass = cardDesign.css_class || "";
  const cardStyle = cardDesign.css_style || "";

  // Overlay Opacity Logic (from CTA)
  let overlayOpacity = 0.15;
  if (cardDesign.overlay_opacity !== undefined) {
    const val = parseFloat(cardDesign.overlay_opacity);
    if (!Number.isNaN(val)) overlayOpacity = Math.max(0, Math.min(1, val));
  }

  // Text Color Logic (from CTA)
  let textColorMode = "auto";
  if (["light", "dark", "auto"].includes(cardDesign.text_color?.toLowerCase())) {
    textColorMode = cardDesign.text_color.toLowerCase();
  }

  let cardTextClasses = "text-gray-900 dark:text-gray-100";
  let blockTitleClasses = "text-gray-900 dark:text-white";

  // Background Logic
  const bg = design?.background || {};
  const gradientStart = bg.gradient?.start || "";
  const gradientEnd = bg.gradient?.end || "";
  const gradientDirection = bg.gradient?.direction ? `deg-${bg.gradient.direction}` : "";

  let backgroundClass = "bg-white dark:bg-gray-900";
  if (gradientStart && gradientEnd) {
    backgroundClass = `bg-gradient-to-${gradientDirection} from-${gradientStart} to-${gradientEnd}`;
    // Assume dark background for gradients to set default text color
    const isDarkBg = ["primary-7", "primary-8", "primary-9", "secondary-7", "secondary-8", "secondary-9"].some((p) => gradientStart.startsWith(p));
    if (textColorMode === "auto" && isDarkBg) {
      cardTextClasses = "text-white"; // Main card text
      blockTitleClasses = "text-white"; // Block title
    } else if (textColorMode === "light") {
      cardTextClasses = "text-white";
      blockTitleClasses = "text-white";
    } else if (textColorMode === "dark") {
      cardTextClasses = "text-gray-900 dark:text-white"; // Retain dark mode support for explicit dark
      blockTitleClasses = "text-gray-900 dark:text-white";
    }
  } else {
     // For non-gradient backgrounds explicitly set block title color
     blockTitleClasses = "text-gray-800 dark:text-white";
  }


  // Layout Logic
  const columns = design?.columns || 2; // Default to 2 columns if not specified
  const cardSize = design?.card_size || "medium"; // small, medium, large

  const getCardSizeClass = (size) => {
    switch (size) {
      case "small": return "text-sm p-4";
      case "large": return "text-lg p-8";
      case "medium":
      default: return "text-base p-6";
    }
  };
  const cardSizeClass = getCardSizeClass(cardSize);

  const cardOuterStyle = `--glassmorphism-opacity: ${overlayOpacity}; ${cardStyle}`;
  const finalCardClass = cardClass || "bg-white dark:bg-gray-800"; // Default card background


  return (
    <section id={blockId} class={`${backgroundClass} py-12`}>
      <div class="container mx-auto px-4">
        {blockTitle && (
          <h2
            class={`${blockTitleClasses} text-3xl font-bold text-center mb-8`}
            dangerouslySetInnerHTML={{__html: renderMarkdown(blockTitle)}}
          />
        )}

        <div class={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
          {cards.map((card, index) => (
            <div
              key={index}
              class={`relative overflow-hidden rounded-lg shadow-lg flex flex-col justify-between h-full
                ${finalCardClass} ${cardSizeClass} ${cardTextClasses}
              `}
              style={cardOuterStyle}
            >
              {/* Card Content */}
              <div>
                <h4 class="font-bold mb-2 text-primary-700 dark:text-primary-300">
                  {card.title}
                </h4>
                <p>
                  {card.institution && (
                    <>
                      <strong>Institution:</strong>{" "}
                      <span
                        class="font-normal text-primary-700 dark:text-primary-300"
                        dangerouslySetInnerHTML={{__html: renderMarkdown(card.institution)}}
                      />
                      <br />
                    </>
                  )}
                  {card.role && (
                    <>
                      <strong>Role:</strong>{" "}
                      <span
                        class="font-normal text-primary-700 dark:text-primary-300"
                        dangerouslySetInnerHTML={{__html: renderMarkdown(card.role)}}
                      />
                      <br />
                    </>
                  )}
                  {card.years && (
                    <>
                      <strong>Year(s):</strong>{" "}
                      <span
                        class="font-normal text-primary-700 dark:text-primary-300"
                        dangerouslySetInnerHTML={{__html: renderMarkdown(card.years)}}
                      />
                      <br />
                    </>
                  )}
                  {card.students && (
                    <>
                      <strong>Students:</strong>{" "}
                      <span
                        class="font-normal text-primary-700 dark:text-primary-300"
                        dangerouslySetInnerHTML={{__html: renderMarkdown(card.students)}}
                      />
                      <br />
                    </>
                  )}
                  {card.description && (
                    <span
                      class="font-normal text-primary-700 dark:text-primary-300"
                      dangerouslySetInnerHTML={{__html: renderMarkdown(`<em>${card.description}</em>`)}}
                    />
                  )}
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                {card.syllabus_url && (
                  <a
                    href={card.syllabus_url}
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-full shadow-md transition-all text-sm no-underline"
                  >
                    Syllabus
                  </a>
                )}
                {card.description_url && (
                  <a
                    href={card.description_url}
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-500 text-white font-medium rounded-full shadow-md transition-all text-sm no-underline"
                  >
                    Class Description
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};