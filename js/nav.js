const NAV_DATA = [
  {
    label: "Start",
    items: [
      { title: "Home", path: "index.html", classes: ["nav-home"] }
    ]
  },
  {
    label: "Module 1",
    groups: [
      {
        label: "Chapter 1",
        items: [
          { title: "1.1.2 Skills and Abilities", path: "pages/module_1/1.1.2.html" },
          { title: "1.2.1 Best Practice Methodology", path: "pages/module_1/1.2.1.html" },
          { title: "1.2.2 Identify the Problem", path: "pages/module_1/1.2.2.html" },
          { title: "1.2.3 Establish and Test a Theory", path: "pages/module_1/1.2.3.html" },
          { title: "1.2.4 Question the Obvious", path: "pages/module_1/1.2.4.html" },
          { title: "1.2.5 Establish a New Theory or Escalate", path: "pages/module_1/1.2.5.html" },
          { title: "1.2.6 Implement a Plan of Action", path: "pages/module_1/1.2.6.html" },
          { title: "1.2.7 Verify and Document", path: "pages/module_1/1.2.7.html" },
          { title: "1.3.1 Troubleshooting Methodology", path: "pages/module_1/1.3.1.html" },
          { title: "1.4 Quiz", path: "pages/module_1/1.4_Module_Quiz.html", classes: ["nav-quiz"] }
        ]
      },
      {
        label: "Chapter 2",
        items: [
          { title: "2.1.1 PCs", path: "pages/module_1/2.1.1_Personal_Computers.html" },
          { title: "2.1.3 Peripherals", path: "pages/module_1/2.1.3_Peripheral_Devices.html" },
          { title: "2.1.4 USB Cables", path: "pages/module_1/2.1.4_Universal_Serial_Bus_Cables.html" },
          { title: "2.1.5 USB Standards", path: "pages/module_1/2.1.5_USB_Cables_And_Standards.html" },
          { title: "2.1.7 USB Lab", path: "pages/module_1/2.1.7_Lab_Steps.html" },
          { title: "2.1.8 Displays", path: "pages/module_1/2.1.8_Display_Types.html" },
          { title: "2.1.9 Display Parts", path: "pages/module_1/2.1.9_Display_Components.html" },
          { title: "2.1.10 HDMI/DP", path: "pages/module_1/2.1.10_HDMI_And_DisplayPort_Video_Cables.html" },
          { title: "2.1.11 Thunderbolt", path: "pages/module_1/2.1.11_Thunderbolt_Interface.html" },
          { title: "2.1.12 Lightning", path: "pages/module_1/2.1.12_Lightning_Interface.html" },
          { title: "2.1.13 SATA", path: "pages/module_1/2.1.13_SATA_Interface.html" },
          { title: "2.1.14 Molex", path: "pages/module_1/2.1.14_Molex_Power_Connectors.html" },
          { title: "2.1.15 eSATA", path: "pages/module_1/2.1.15_External_Sata.html" },
          { title: "2.1.16 Desktop Lab", path: "pages/module_1/2.1.16_Lab_Set_Up_A_Desktop_Computer.html" },
          { title: "2.1.17 Review", path: "pages/module_1/2.1.17_Lesson_Review.html" },
          { title: "2.2.1 Mobo Functions", path: "pages/module_1/2.2.1_Motherboard_Functions.html" },
          { title: "2.2.2 Safety/ESD", path: "pages/module_1/2.2.2_Electrical_Safety.html" },
          { title: "2.2.3 CPU/RAM", path: "pages/module_1/2.2.3_Motherboard_CPU_System_Memory_Connectors.html" },
          { title: "2.2.4 Storage Conn.", path: "pages/module_1/2.2.4_Motherboard_Storage_Connectors.html" },
          { title: "2.2.5 PCIe", path: "pages/module_1/2.2.5_PCIe.html" },
          { title: "2.2.6 PCI", path: "pages/module_1/2.2.6_PCI.html" },
          { title: "2.2.7 Form Factors", path: "pages/module_1/2.2.7_Motherboard_Form_Factors.html" },
          { title: "2.2.8 Mobo Install", path: "pages/module_1/2.2.8_Motherboard_Installation.html" },
          { title: "2.2.12 Video Cards", path: "pages/module_1/2.2.12_Video_Cards.html" },
          { title: "2.2.14 Capture Cards", path: "pages/module_1/2.2.14_Capture_Cards.html" },
          { title: "2.2.15 Sound Cards", path: "pages/module_1/2.2.15_Sound_Cards.html" },
          { title: "2.2.16 NICs", path: "pages/module_1/2.2.16_Network_Interface_Cards.html" },
          { title: "2.2.18 Review", path: "pages/module_1/2.2.18_Lesson_Review.html" },
          { title: "2.3.1 DVI/VGA", path: "pages/module_1/2.3.1_DVI_And_VGA_Video_Cables.html" },
          { title: "2.3.3 Serial", path: "pages/module_1/2.3.3_Serial_Cables.html" },
          { title: "2.3.4 Adapters", path: "pages/module_1/2.3.4_Adapter_Cables.html" },
          { title: "2.3.5 Review", path: "pages/module_1/2.3.5_Lesson_Review.html" },
          { title: "2.4 Lab", path: "pages/module_1/2.4_Lab.html" },
          { title: "Unit 2 Resources", path: "pages/module_1/additional_resources/unit_2_additional_resources.html" },
          { title: "2.5.2 Motherboards", path: "pages/module_1/additional_resources/2.5.2_Motherboards.html" },
          { title: "2.5.3 Cable History", path: "pages/module_1/additional_resources/2.5.3_History_Of_Cables.html" },
          { title: "2.5.5 Legacy Cables", path: "pages/module_1/additional_resources/2.5.5_Legacy_Cables_Timeline.html" }
        ]
      }
    ]
  },
  {
    label: "Module 2",
    items: [
      { title: "3.1.1 PSU", path: "pages/module_2/3.1.1_PSU.html" },
      { title: "3.1.2 Install a PSU Lab", path: "pages/module_2/3.1.2_Lab_Install_A_Power_Supply.html" },
      { title: "3.1.3 Wattage Rating", path: "pages/module_2/3.1.3_Wattage_Rating.html" },
      { title: "3.1.4 Power Supply Connectors", path: "pages/module_2/3.1.4_Power_Supply_Connectors.html" },
      { title: "3.1.5 20-pin to 24-pin Adapter", path: "pages/module_2/3.1.5_20_Pin_to_24_Pin_Motherboard_Adapter.html" },
      { title: "3.1.6 Modular Power Supplies", path: "pages/module_2/3.1.6_Modular_Power_Supplies.html" },
      { title: "3.1.7 Redundant Power Supplies", path: "pages/module_2/3.1.7_Redundant_Power_Supplioes.html" },
      { title: "3.1.9 Troubleshoot PSU Problems Lab", path: "pages/module_2/3.1.9_Lab_Troubleshoot_Power_Supply_Problems.html" },
      { title: "3.1.10 Fan Cooling Systems", path: "pages/module_2/3.1.10_Fan_Cooling_Systems.html" },
      { title: "3.1.11 Heat Sinks and Thermal Paste", path: "pages/module_2/3.1.11_Heat_Sinks_And_Thermal_Paste.html" },
      { title: "3.1.12 Fans", path: "pages/module_2/3.1.12_Fans.html" },
      { title: "3.1.13 Liquid Cooling Systems", path: "pages/module_2/3.1.13_Liquid_Cooling_Systems.html" },
      { title: "3.1.14 Lesson Review", path: "pages/module_2/3.1.14_Lesson_Review.html" },
      { title: "3.2.1 Storage Devices", path: "pages/module_2/3.2.1_Storage_Devices.html" },
      { title: "3.2.2 Mass Storage Device", path: "pages/module_2/3.2.2_Mass_Storage_Device.html" },
      { title: "3.2.3 Solid State Drives", path: "pages/module_2/3.2.3_Solid_State_Drives.html" },
      { title: "3.2.4 Hard Disk Drives", path: "pages/module_2/3.2.4_Hard_Disk_Drives.html" },
      { title: "3.2.5 RAID", path: "pages/module_2/3.2.5_Redundant_ Array_of_ Independent_Disks.html" }
    ]
  }
];

const VISITED_STORAGE_KEY = "fignberry.visited-pages";
const OPEN_STORAGE_KEY = "fignberry.nav-open-sections";
const MOBILE_BREAKPOINT = 768;

function normalizePathname(pathname) {
  let normalized = pathname.replace(/\\/g, "/");

  if (!/\.html?$/i.test(normalized)) {
    normalized = normalized.endsWith("/") ? `${normalized}index.html` : `${normalized}/index.html`;
  }

  return normalized.replace(/\/+/g, "/");
}

function getScriptRootUrl() {
  const navScript = document.querySelector('script[src$="js/nav.js"]');
  const scriptUrl = navScript
    ? new URL(navScript.src, window.location.href)
    : new URL("js/nav.js", window.location.href);
  return new URL("../", scriptUrl);
}

function pathSegments(pathname) {
  return pathname.split("/").filter(Boolean);
}

function toRelativeHref(fromDirectoryPath, targetPath) {
  const fromSegments = pathSegments(fromDirectoryPath);
  const targetSegments = pathSegments(targetPath);
  let sharedIndex = 0;

  while (
    sharedIndex < fromSegments.length &&
    sharedIndex < targetSegments.length &&
    fromSegments[sharedIndex] === targetSegments[sharedIndex]
  ) {
    sharedIndex += 1;
  }

  const upwardSteps = fromSegments.length - sharedIndex;
  const parts = [];

  for (let index = 0; index < upwardSteps; index += 1) {
    parts.push("..");
  }

  parts.push(...targetSegments.slice(sharedIndex));

  return parts.join("/") || ".";
}

function getAllItems(section) {
  if (section.items) {
    return section.items;
  }

  return section.groups.flatMap((group) => group.items);
}

function getFlatNavItems() {
  return NAV_DATA.flatMap((section) => getAllItems(section));
}

function readVisitedPages() {
  try {
    const rawValue = window.localStorage.getItem(VISITED_STORAGE_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return new Set(Array.isArray(parsedValue) ? parsedValue : []);
  } catch (error) {
    return new Set();
  }
}

function writeVisitedPages(visitedPages) {
  try {
    window.localStorage.setItem(VISITED_STORAGE_KEY, JSON.stringify([...visitedPages]));
  } catch (error) {
    // Ignore storage failures and leave the UI functional.
  }
}

function readOpenSections() {
  try {
    const rawValue = window.localStorage.getItem(OPEN_STORAGE_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : {};
    return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
  } catch (error) {
    return {};
  }
}

function writeOpenSections(openSections) {
  try {
    window.localStorage.setItem(OPEN_STORAGE_KEY, JSON.stringify(openSections));
  } catch (error) {
    // Ignore storage failures and leave the UI functional.
  }
}

function createLink(item, context) {
  const link = document.createElement("a");
  const targetUrl = new URL(item.path, context.siteRootUrl);
  const resolvedPathname = normalizePathname(targetUrl.pathname);
  const href = toRelativeHref(context.currentDirectoryPath, resolvedPathname);
  const isCurrentPage = resolvedPathname === context.currentPathname;
  const classes = ["nav-link", ...(item.classes || [])];
  const statusClasses = ["nav-status-dot"];

  link.href = href;
  link.className = classes.join(" ");
  link.textContent = item.title;
  link.dataset.path = resolvedPathname;

  if (isCurrentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
    statusClasses.push("is-current");
  } else if (context.visitedPages.has(resolvedPathname)) {
    statusClasses.push("is-visited");
  } else {
    statusClasses.push("is-default");
  }

  const dot = document.createElement("span");
  dot.className = statusClasses.join(" ");
  dot.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.className = "nav-link__label";
  label.textContent = item.title;

  link.textContent = "";
  link.append(dot, label);
  link.addEventListener("click", () => {
    context.visitedPages.add(resolvedPathname);
    writeVisitedPages(context.visitedPages);
  });

  return link;
}

function createItemGroup(group, context) {
  const wrapper = document.createElement("div");
  wrapper.className = "nav-group";

  const label = document.createElement("p");
  label.className = "nav-group-label";
  label.textContent = group.label;

  const links = document.createElement("div");
  links.className = "nav-links";

  group.items.forEach((item) => {
    links.append(createLink(item, context));
  });

  wrapper.append(label, links);
  return wrapper;
}

function createAccordionSection(section, index, context) {
  const module = document.createElement("section");
  const button = document.createElement("button");
  const panel = document.createElement("div");
  const sectionId = `nav-section-${index + 1}`;
  const sectionItems = getAllItems(section);
  const containsCurrentPage = sectionItems.some((item) => {
    const itemUrl = new URL(item.path, context.siteRootUrl);
    return normalizePathname(itemUrl.pathname) === context.currentPathname;
  });
  const savedOpenSections = context.openSections;
  const isOpen = Object.prototype.hasOwnProperty.call(savedOpenSections, section.label)
    ? Boolean(savedOpenSections[section.label])
    : containsCurrentPage || index === 0;

  module.className = "nav-section";

  button.type = "button";
  button.className = "nav-section-trigger";
  button.setAttribute("aria-expanded", String(isOpen));
  button.setAttribute("aria-controls", sectionId);

  const chevron = document.createElement("span");
  chevron.className = "nav-chevron";
  chevron.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.className = "nav-label";
  label.textContent = section.label;

  button.append(chevron, label);

  panel.id = sectionId;
  panel.className = "nav-section-panel";
  panel.hidden = !isOpen;

  if (section.groups) {
    section.groups.forEach((group) => {
      panel.append(createItemGroup(group, context));
    });
  } else if (section.items) {
    const links = document.createElement("div");
    links.className = "nav-links";

    section.items.forEach((item) => {
      links.append(createLink(item, context));
    });

    panel.append(links);
  }

  button.addEventListener("click", () => {
    const nextOpenState = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(nextOpenState));
    panel.hidden = !nextOpenState;
    context.openSections[section.label] = nextOpenState;
    writeOpenSections(context.openSections);
  });

  module.append(button, panel);
  return module;
}

function createMobilePageBar(context, currentItem) {
  const bar = document.createElement("div");
  bar.className = "mobile-page-bar";
  const isHomePage = currentItem && currentItem.path === "index.html";

  const title = document.createElement("p");
  title.className = "mobile-page-bar__title";
  title.textContent = currentItem ? currentItem.title : "Course Navigation";

  bar.append(title);

  if (!isHomePage) {
    const homeLink = document.createElement("a");
    homeLink.className = "mobile-page-bar__home";
    homeLink.href = toRelativeHref(context.currentDirectoryPath, normalizePathname(new URL("index.html", context.siteRootUrl).pathname));
    homeLink.textContent = "Home";
    bar.append(homeLink);
  } else {
    bar.classList.add("mobile-page-bar--title-only");
  }

  return bar;
}

function appendPageSequenceNav(mainElement, context, currentItem) {
  const flatItems = getFlatNavItems();
  const currentIndex = flatItems.findIndex((item) => item.path === currentItem.path);

  if (currentIndex === -1) {
    return;
  }

  const previousItem = flatItems[currentIndex - 1] || null;
  const nextItem = flatItems[currentIndex + 1] || null;

  if (!previousItem && !nextItem) {
    return;
  }

  const nav = document.createElement("nav");
  nav.className = "page-sequence-nav";
  nav.setAttribute("aria-label", "Lesson navigation");

  if (previousItem) {
    const previousLink = document.createElement("a");
    previousLink.className = "page-sequence-link";
    previousLink.href = toRelativeHref(
      context.currentDirectoryPath,
      normalizePathname(new URL(previousItem.path, context.siteRootUrl).pathname)
    );
    previousLink.innerHTML = `<span class="page-sequence-link__eyebrow">Previous</span><span class="page-sequence-link__title">${previousItem.title}</span>`;
    nav.append(previousLink);
  }

  if (nextItem) {
    const nextLink = document.createElement("a");
    nextLink.className = "page-sequence-link page-sequence-link--next";
    nextLink.href = toRelativeHref(
      context.currentDirectoryPath,
      normalizePathname(new URL(nextItem.path, context.siteRootUrl).pathname)
    );
    nextLink.innerHTML = `<span class="page-sequence-link__eyebrow">Next</span><span class="page-sequence-link__title">${nextItem.title}</span>`;
    nav.append(nextLink);
  }

  mainElement.append(nav);
}

function wrapTablesForMobile(mainElement) {
  const tables = mainElement.querySelectorAll("table");

  tables.forEach((table) => {
    if (table.parentElement && table.parentElement.classList.contains("table-scroll")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.append(table);
  });
}

function appendSiteFooter(mainElement) {
  if (!mainElement || mainElement.querySelector(".site-footer")) {
    return;
  }

  const footer = document.createElement("footer");
  footer.className = "site-footer";

  const footerText = document.createElement("p");
  footerText.className = "site-footer__text";
  footerText.textContent = "Questions?";

  const footerLink = document.createElement("a");
  footerLink.className = "site-footer__link";
  footerLink.href = "mailto:hello@fignberry.club";
  footerLink.textContent = "Contact me";

  footer.append(footerText, footerLink);
  mainElement.append(footer);
}

function closeSidebar() {
  document.body.classList.remove("is-sidebar-open");
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
  }

  if (backdrop) {
    backdrop.hidden = true;
  }
}

function openSidebar() {
  document.body.classList.add("is-sidebar-open");
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "true");
  }

  if (backdrop) {
    backdrop.hidden = false;
  }
}

function setupSidebarToggle(navElement) {
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");

  if (!toggle || !backdrop) {
    return;
  }

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("is-sidebar-open")) {
      closeSidebar();
      return;
    }

    openSidebar();
  });

  backdrop.addEventListener("click", closeSidebar);

  navElement.addEventListener("click", (event) => {
    const link = event.target.closest("a.nav-link");

    if (link && window.innerWidth < MOBILE_BREAKPOINT) {
      closeSidebar();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      closeSidebar();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    window.localStorage.setItem("lastPage", window.location.href);
  } catch (error) {
    // Ignore storage failures and leave the UI functional.
  }

  const navElement = document.querySelector(".site-nav");

  if (!navElement) {
    return;
  }

  const currentUrl = new URL(window.location.href);
  const siteRootUrl = getScriptRootUrl();
  const currentPathname = normalizePathname(currentUrl.pathname);
  const currentDirectoryPath = normalizePathname(new URL("./", currentUrl).pathname).replace(/index\.html$/i, "");
  const visitedPages = readVisitedPages();
  const openSections = readOpenSections();
  const currentItem = getFlatNavItems().find((item) => {
    const itemUrl = new URL(item.path, siteRootUrl);
    return normalizePathname(itemUrl.pathname) === currentPathname;
  }) || null;
  const context = {
    currentPathname,
    currentDirectoryPath,
    currentItem,
    openSections,
    siteRootUrl,
    visitedPages
  };

  visitedPages.add(currentPathname);
  writeVisitedPages(visitedPages);
  navElement.textContent = "";

  NAV_DATA.forEach((section, index) => {
    navElement.append(createAccordionSection(section, index, context));
  });

  const pageContent = document.querySelector(".page-content");
  const siteShell = document.querySelector(".site-shell--sidebar");

  if (pageContent) {
    wrapTablesForMobile(pageContent);

    if (currentItem) {
      appendPageSequenceNav(pageContent, context, currentItem);
    }

    appendSiteFooter(pageContent);
  }

  if (siteShell) {
    siteShell.insertBefore(createMobilePageBar(context, currentItem), pageContent || null);
  }

  setupSidebarToggle(navElement);
});
