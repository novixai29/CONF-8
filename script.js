"use strict";


/* =========================================================
   CONF-008 — THE LEARNING INDEX

   EDIT ALL CLIENT INFORMATION HERE ONLY
========================================================= */

const CONFERENCE = {

  name:
    "Learning Futures Conference 2027",

  shortName:
    "LF / 27",

  tagline:
    "Education for what comes next.",

  organizer:
    "Future Learning Institute",


  startAt:
    "2027-10-14T09:00:00+03:00",

  endAt:
    "2027-10-14T17:30:00+03:00",

  timeZone:
    "Asia/Baghdad",


  venue:
    "Mosul Learning & Innovation Center",

  city:
    "Mosul",

  country:
    "Iraq",


  /*
    Leave empty to automatically
    generate Google Maps search.
  */
  mapsUrl:
    "",


  /*
    External registration page.
    Leave empty to hide button.
  */
  registrationUrl:
    "https://example.com/register",


  websiteUrl:
    "https://example.com",


  /*
    Leave empty to use current invitation URL.
  */
  shareUrl:
    "",


  keynote: {

    name:
      "Dr. Sarah Kareem",

    role:
      "Education Researcher",

    organization:
      "Future Learning Institute",

    topic:
      "What Should Education Prepare Us For?"

  },


  themes: [

    {
      index:
        "01",

      time:
        "10:00",

      title:
        "Learn",

      description:
        "How students build knowledge, curiosity and adaptability in changing environments."
    },

    {
      index:
        "02",

      time:
        "12:30",

      title:
        "Teach",

      description:
        "How the role of the teacher evolves when information is everywhere."
    },

    {
      index:
        "03",

      time:
        "15:00",

      title:
        "Design",

      description:
        "How schools, universities and learning systems can be designed around real human needs."
    }

  ]

};



/* =========================================================
   DATE OBJECTS
========================================================= */

const START_DATE =
  new Date(
    CONFERENCE.startAt
  );


const END_DATE =
  new Date(
    CONFERENCE.endAt
  );


let countdownTimer =
  null;



/* =========================================================
   ELEMENTS
========================================================= */

const elements = {

  heroDate:
    document.getElementById(
      "heroDate"
    ),

  heroCity:
    document.getElementById(
      "heroCity"
    ),


  fullDate:
    document.getElementById(
      "fullDate"
    ),

  fullTime:
    document.getElementById(
      "fullTime"
    ),


  keynoteName:
    document.getElementById(
      "keynoteName"
    ),

  keynoteRole:
    document.getElementById(
      "keynoteRole"
    ),

  keynoteOrganization:
    document.getElementById(
      "keynoteOrganization"
    ),

  keynoteTopic:
    document.getElementById(
      "keynoteTopic"
    ),


  themeList:
    document.getElementById(
      "themeList"
    ),


  venueCity:
    document.getElementById(
      "venueCity"
    ),

  venueCountry:
    document.getElementById(
      "venueCountry"
    ),


  days:
    document.getElementById(
      "days"
    ),

  hours:
    document.getElementById(
      "hours"
    ),

  minutes:
    document.getElementById(
      "minutes"
    ),

  seconds:
    document.getElementById(
      "seconds"
    ),

  countdownProgress:
    document.getElementById(
      "countdownProgress"
    ),

  countdownMessage:
    document.getElementById(
      "countdownMessage"
    ),


  mapButton:
    document.getElementById(
      "mapButton"
    ),

  secondaryMapButton:
    document.getElementById(
      "secondaryMapButton"
    ),

  registerButton:
    document.getElementById(
      "registerButton"
    ),

  websiteButton:
    document.getElementById(
      "websiteButton"
    ),


  calendarButton:
    document.getElementById(
      "calendarButton"
    ),

  shareButton:
    document.getElementById(
      "shareButton"
    ),

  topShareButton:
    document.getElementById(
      "topShareButton"
    ),


  footerYear:
    document.getElementById(
      "footerYear"
    ),

  statusMessage:
    document.getElementById(
      "statusMessage"
    )

};



/* =========================================================
   POPULATE
========================================================= */

function populateConference() {

  document
    .querySelectorAll(
      "[data-field]"
    )
    .forEach(
      element => {

        const field =
          element.dataset.field;


        if (
          Object.prototype.hasOwnProperty.call(
            CONFERENCE,
            field
          )
        ) {

          element.textContent =
            CONFERENCE[field];

        }

      }
    );


  elements.heroDate.textContent =
    formatHeroDate(
      START_DATE
    );


  elements.heroCity.textContent =
    `${CONFERENCE.city.toUpperCase()} / ${CONFERENCE.country.toUpperCase()}`;


  elements.fullDate.textContent =
    formatFullDate(
      START_DATE
    );


  elements.fullTime.textContent =
    `${formatTime(START_DATE)} — ${formatTime(END_DATE)}`;


  elements.keynoteName.textContent =
    CONFERENCE.keynote.name;


  elements.keynoteRole.textContent =
    CONFERENCE.keynote.role;


  elements.keynoteOrganization.textContent =
    CONFERENCE.keynote.organization;


  elements.keynoteTopic.textContent =
    CONFERENCE.keynote.topic;


  elements.venueCity.textContent =
    CONFERENCE.city.toUpperCase();


  elements.venueCountry.textContent =
    CONFERENCE.country;


  elements.footerYear.textContent =
    START_DATE.getFullYear();


  configureLinks();

  updateMetadata();

  addStructuredData();

}



/* =========================================================
   DATE FORMAT
========================================================= */

function formatHeroDate(date) {

  return new Intl.DateTimeFormat(
    "en-US",
    {
      timeZone:
        CONFERENCE.timeZone,

      day:
        "2-digit",

      month:
        "long",

      year:
        "numeric"
    }
  )
    .format(date)
    .toUpperCase();

}



function formatFullDate(date) {

  return new Intl.DateTimeFormat(
    "en-US",
    {
      timeZone:
        CONFERENCE.timeZone,

      weekday:
        "long",

      month:
        "long",

      day:
        "numeric",

      year:
        "numeric"
    }
  ).format(date);

}



function formatTime(date) {

  return new Intl.DateTimeFormat(
    "en-US",
    {
      timeZone:
        CONFERENCE.timeZone,

      hour:
        "numeric",

      minute:
        "2-digit",

      hour12:
        true
    }
  ).format(date);

}



/* =========================================================
   THEMES
========================================================= */

function renderThemes() {

  elements.themeList.innerHTML =
    "";


  CONFERENCE.themes.forEach(
    theme => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "theme-item reveal";


      article.innerHTML = `

        <span class="theme-item__index">
          ${escapeHTML(theme.index)}
        </span>


        <div>

          <p class="theme-item__meta">
            ${escapeHTML(theme.time)} / PROGRAM INDEX
          </p>

          <h3>
            ${escapeHTML(theme.title)}
          </h3>

          <p>
            ${escapeHTML(theme.description)}
          </p>

        </div>

      `;


      elements.themeList
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   INDEX SHIFT
========================================================= */

function setupIndexShift() {

  const sections =
    Array.from(
      document.querySelectorAll(
        ".observed-section"
      )
    );


  const links =
    Array.from(
      document.querySelectorAll(
        ".index-nav__item"
      )
    );


  if (
    !sections.length ||
    !links.length
  ) {
    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        const visible =
          entries

            .filter(
              entry =>
                entry.isIntersecting
            )

            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );


        if (!visible.length) {
          return;
        }


        const active =
          visible[0]
            .target
            .dataset
            .sectionId;


        links.forEach(
          link => {

            link.classList.toggle(
              "is-active",
              link.dataset.target ===
                active
            );

          }
        );

      },
      {
        threshold:
          [
            0.16,
            0.35,
            0.55
          ],

        rootMargin:
          "-18% 0px -40% 0px"
      }
    );


  sections.forEach(
    section =>
      observer.observe(
        section
      )
  );

}



/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



function updateCountdown() {

  const now =
    new Date();


  const difference =
    START_DATE.getTime() -
    now.getTime();


  if (
    difference <= 0
  ) {

    handleConferenceStarted(
      now
    );

    return;

  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) /
      3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) /
      60
    );


  const seconds =
    totalSeconds % 60;


  elements.days.textContent =
    pad(days);


  elements.hours.textContent =
    pad(hours);


  elements.minutes.textContent =
    pad(minutes);


  elements.seconds.textContent =
    pad(seconds);


  updateCountdownProgress(
    now
  );

}



/* =========================================================
   PROGRESS
========================================================= */

function updateCountdownProgress(now) {

  const startPoint =
    START_DATE.getTime() -
    365 * 24 * 60 * 60 * 1000;


  const total =
    START_DATE.getTime() -
    startPoint;


  const elapsed =
    now.getTime() -
    startPoint;


  const percentage =
    Math.max(
      0,
      Math.min(
        100,
        (elapsed / total) * 100
      )
    );


  elements.countdownProgress
    .style
    .width =
      `${percentage}%`;

}



/* =========================================================
   STARTED
========================================================= */

function handleConferenceStarted(now) {

  if (
    countdownTimer
  ) {

    clearInterval(
      countdownTimer
    );


    countdownTimer =
      null;

  }


  elements.days.textContent =
    "00";


  elements.hours.textContent =
    "00";


  elements.minutes.textContent =
    "00";


  elements.seconds.textContent =
    "00";


  elements.countdownProgress
    .style
    .width =
      "100%";


  if (
    now.getTime() <=
    END_DATE.getTime()
  ) {

    elements.countdownMessage.textContent =
      "The conference is now in session.";

  } else {

    elements.countdownMessage.textContent =
      "This conference has concluded.";

  }

}



/* =========================================================
   MAP
========================================================= */

function getMapUrl() {

  const custom =
    CONFERENCE.mapsUrl?.trim();


  if (custom) {
    return custom;
  }


  const query =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}



/* =========================================================
   LINKS
========================================================= */

function configureLinks() {

  const mapUrl =
    getMapUrl();


  elements.mapButton.href =
    mapUrl;


  elements.secondaryMapButton.href =
    mapUrl;


  const registration =
    CONFERENCE.registrationUrl?.trim();


  if (registration) {

    elements.registerButton.href =
      registration;

  } else {

    elements.registerButton.hidden =
      true;

  }


  const website =
    CONFERENCE.websiteUrl?.trim();


  if (website) {

    elements.websiteButton.href =
      website;

  } else {

    elements.websiteButton.hidden =
      true;

  }

}



/* =========================================================
   CALENDAR / ICS
========================================================= */

function downloadCalendar() {

  const location =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  const invitationUrl =
    getShareUrl();


  const description =
    [
      CONFERENCE.tagline,

      CONFERENCE.websiteUrl
        ? `Website: ${CONFERENCE.websiteUrl}`
        : "",

      invitationUrl
        ? `Invitation: ${invitationUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Learning Index Invitation//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${createUID()}
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(START_DATE)}
DTEND:${formatICSDate(END_DATE)}
SUMMARY:${escapeICS(CONFERENCE.name)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(CONFERENCE.websiteUrl || invitationUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `${slugify(CONFERENCE.shortName)}.ics`;


  document.body.appendChild(
    link
  );


  link.click();

  link.remove();


  URL.revokeObjectURL(
    url
  );


  announce(
    "Calendar file downloaded."
  );

}



/* =========================================================
   ICS HELPERS
========================================================= */

function formatICSDate(date) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}Z$/,
      "Z"
    );

}



function createUID() {

  return (
    `${slugify(CONFERENCE.shortName)}` +
    `-${START_DATE.getTime()}` +
    "@learning-index"
  );

}



function escapeICS(value = "") {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /\n/g,
      "\\n"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    );

}



/* =========================================================
   SHARE
========================================================= */

async function shareInvitation() {

  const data = {

    title:
      CONFERENCE.name,

    text:
      `${CONFERENCE.name} — ${CONFERENCE.tagline}`,

    url:
      getShareUrl()

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        data
      );


      announce(
        "Invitation shared."
      );


      return;

    } catch (error) {

      if (
        error.name ===
        "AbortError"
      ) {
        return;
      }

    }

  }


  await copyInvitationLink();

}



/* =========================================================
   COPY
========================================================= */

async function copyInvitationLink() {

  const url =
    getShareUrl();


  try {

    await navigator.clipboard
      .writeText(
        url
      );


    announce(
      "Invitation link copied."
    );

  } catch (error) {

    fallbackCopy(
      url
    );

  }

}



function fallbackCopy(text) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  try {

    document.execCommand(
      "copy"
    );


    announce(
      "Invitation link copied."
    );

  } catch (error) {

    announce(
      "Unable to copy the link automatically."
    );

  }


  textarea.remove();

}



/* =========================================================
   SHARE URL
========================================================= */

function getShareUrl() {

  const custom =
    CONFERENCE.shareUrl?.trim();


  if (custom) {
    return custom;
  }


  return window.location.href;

}



/* =========================================================
   ACTIONS
========================================================= */

function setupActions() {

  elements.calendarButton
    .addEventListener(
      "click",
      downloadCalendar
    );


  elements.shareButton
    .addEventListener(
      "click",
      shareInvitation
    );


  elements.topShareButton
    .addEventListener(
      "click",
      shareInvitation
    );

}



/* =========================================================
   REVEAL
========================================================= */

function setupRevealObserver() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    prefersReducedMotion()
  ) {

    items.forEach(
      item =>
        item.classList.add(
          "is-visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target
              .classList
              .add(
                "is-visible"
              );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold:
          0.12,

        rootMargin:
          "0px 0px -7% 0px"
      }
    );


  items.forEach(
    item =>
      observer.observe(
        item
      )
  );

}



/* =========================================================
   METADATA
========================================================= */

function updateMetadata() {

  document.title =
    CONFERENCE.name;


  const description =
    `${CONFERENCE.name} — ${CONFERENCE.tagline}`;


  updateMeta(
    'meta[name="description"]',
    description
  );


  updateMeta(
    'meta[property="og:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[property="og:description"]',
    CONFERENCE.tagline
  );


  updateMeta(
    'meta[property="og:url"]',
    getShareUrl()
  );


  updateMeta(
    'meta[name="twitter:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[name="twitter:description"]',
    CONFERENCE.tagline
  );

}



function updateMeta(
  selector,
  content
) {

  const element =
    document.querySelector(
      selector
    );


  if (!element) {
    return;
  }


  element.setAttribute(
    "content",
    content
  );

}



/* =========================================================
   STRUCTURED DATA
========================================================= */

function addStructuredData() {

  const data = {

    "@context":
      "https://schema.org",

    "@type":
      "Event",

    name:
      CONFERENCE.name,

    description:
      CONFERENCE.tagline,

    startDate:
      CONFERENCE.startAt,

    endDate:
      CONFERENCE.endAt,

    eventStatus:
      "https://schema.org/EventScheduled",

    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    location: {

      "@type":
        "Place",

      name:
        CONFERENCE.venue,

      address: {

        "@type":
          "PostalAddress",

        addressLocality:
          CONFERENCE.city,

        addressCountry:
          CONFERENCE.country

      }

    },

    organizer: {

      "@type":
        "Organization",

      name:
        CONFERENCE.organizer,

      url:
        CONFERENCE.websiteUrl ||
        undefined

    },

    url:
      getShareUrl()

  };


  const script =
    document.createElement(
      "script"
    );


  script.type =
    "application/ld+json";


  script.textContent =
    JSON.stringify(
      data
    );


  document.head.appendChild(
    script
  );

}



/* =========================================================
   HELPERS
========================================================= */

function pad(number) {

  return String(number)
    .padStart(
      2,
      "0"
    );

}



function slugify(value = "") {

  return String(value)

    .toLowerCase()

    .trim()

    .replace(
      /[^a-z0-9]+/g,
      "-"
    )

    .replace(
      /^-+|-+$/g,
      ""
    );

}



function escapeHTML(value = "") {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}



function announce(message) {

  elements.statusMessage.textContent =
    "";


  window.setTimeout(
    () => {

      elements.statusMessage.textContent =
        message;

    },
    30
  );

}



function prefersReducedMotion() {

  return window
    .matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    .matches;

}



/* =========================================================
   INIT
========================================================= */

function init() {

  populateConference();

  renderThemes();

  setupIndexShift();

  setupActions();

  setupRevealObserver();

  startCountdown();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
