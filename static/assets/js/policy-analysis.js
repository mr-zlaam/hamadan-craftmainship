function renderYearInElement(selector) {
  const element = document.querySelector(selector);

  element.innerHTML = new Date().getFullYear();
}

renderYearInElement(".year");

function toggleElementVisibility(element) {
  if (element.hidden) {
    element.hidden = false;
  } else {
    element.hidden = true;
  }

  return element;
}

function hideAllSubSectionsInSection(section) {
  section.querySelectorAll(".subsection-content").forEach((element) => {
    element.hidden = true;
  });
}

function assignToggleButtonInSection(button, subsectionContent, section) {
  button.addEventListener("click", () => {
    hideAllSubSectionsInSection(section);
    const element = toggleElementVisibility(subsectionContent);

    if (element.hidden === false) {
      element.scrollIntoView();
    }
  });
}

function associateButtons() {
  document.querySelectorAll(".section").forEach((section) => {
    const subSections = section.querySelectorAll(".subsection-content");
    const buttons = section.querySelectorAll(".subsection__button");

    for (let i = 0; i < Math.min(buttons.length, subSections.length); i++) {
      assignToggleButtonInSection(buttons[i], subSections[i], section);
    }

    subSections.forEach((subSection) => {
      const crossIcon = subSection.querySelector(".cross-icon");
      crossIcon.addEventListener("click", () => {
        section.scrollIntoView();

        setTimeout(() => {
          hideAllSubSectionsInSection(section);
        }, 1000);
      });
    });
  });
}

associateButtons();
