import type { LessonData } from '../types/course'

/**
 * Lesson 02: Organizing Photos and Collections
 * Premium Learning Experience
 *
 * Builds directly on Lesson 1's catalog fundamentals, teaching learners how to
 * scale their organization system with Collections, Smart Collections, keywording,
 * and stacking so large shoots stay manageable.
 */

export const lesson02: LessonData = {
    // Basic Lesson Metadata
    id: 'lesson-2',
    title: 'Organizing Photos and Collections',
    moduleTitle: 'Adobe Lightroom',
    description: 'Create catalogs, collections, and smart folders to manage large projects without ever touching your original folder structure.',
    duration: '38 min',
    difficulty: 'Beginner' as const,
    xpReward: 50,
    progress: 0,
    completed: false,

    // Hero Section
    hero: {
        headline: 'Organizing Photos and Collections',
        subheadline: 'Scale your Lightroom library from 50 photos to 50,000 without losing control',
        keyBenefits: [
            'Understand the difference between folders and collections',
            'Build Collection Sets to organize entire projects',
            'Automate organization with Smart Collections',
            'Use keywords and stacking to find and group photos instantly',
        ],
    },

    // Learning Objectives
    learningObjectives: [
        'Explain why Collections exist separately from your folder structure',
        'Create a Quick Collection and convert it into a permanent Collection',
        'Organize related Collections into a Collection Set',
        'Build rule-based Smart Collections that update automatically',
        'Apply keywords for fast searching across your entire catalog',
        'Use Stacking to group burst shots and edited variants',
    ],

    // Required Software and Prerequisites
    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'The latest version (2024 or later recommended)',
                status: 'required',
            },
            {
                id: 'lesson-1-catalog',
                name: 'A catalog with imported photos',
                description: 'Use the practice catalog from Lesson 1, or import 20-30 photos now',
                status: 'required',
            },
            {
                id: 'variety-of-shots',
                name: 'A mix of similar/burst photos',
                description: 'Helpful for practicing stacking, but not required',
                status: 'recommended',
            },
        ],
    },

    // Before You Begin Checklist
    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'catalog-open',
                label: 'Lightroom Classic open with your practice catalog',
                description: 'From Lesson 1, or a fresh import of 20+ photos',
            },
            {
                id: 'library-module',
                label: 'You are in the Library module',
                description: 'Press G for Grid view if you need a refresher',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 38 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    // Lesson Content - Step by Step Sections
    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Folders vs. Collections',
            duration: '6 min',
            content: {
                heading: 'Two Systems, One Catalog',
                body: 'Folders in Lightroom mirror the actual location of your files on disk — moving a photo between folders moves the real file. Collections are virtual: a photo can belong to many Collections at once without ever being duplicated or moved. This distinction is the single most important organizing concept in Lightroom Classic.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Think in Two Layers',
                    content: 'Use Folders for where a file physically lives (by date or import batch). Use Collections for why a photo matters (a client project, a portfolio, a submission). The same photo can live in one folder but appear in five collections.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison of the Folders panel (physical location) and the Collections panel (virtual groupings)',
            },
            subsections: [
                {
                    title: 'When to Use Each',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Folders:</strong> Chronological archive, backup structure, where the file actually sits on your drive.</li>
              <li><strong>Collections:</strong> Curated sets — "Client X Final Picks," "2026 Portfolio," "Submitted to Contest."</li>
              <li><strong>Rule of thumb:</strong> If you find yourself copying files into new folders to "group" them, use a Collection instead.</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Quick Collections and Permanent Collections',
            duration: '6 min',
            content: {
                heading: 'From Temporary Selection to Permanent Set',
                body: 'The Quick Collection is a single, temporary holding area — perfect for auditioning photos as you browse. Once you\'re happy with the selection, convert it into a named, permanent Collection that stays in your catalog forever.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Keyboard Shortcut',
                    content: 'Press B to add the selected photo to the Quick Collection. Press Cmd/Ctrl+B to jump straight to it. There is only ever one Quick Collection at a time.',
                },
            ],
            image: {
                caption: 'Grid view with several photos flagged into the Quick Collection, shown highlighted in the filmstrip',
            },
            subsections: [
                {
                    title: 'Creating a Collection from Quick Collection',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Browse your grid and press <strong>B</strong> on each photo you want to keep</li>
              <li>Open the Quick Collection (Cmd/Ctrl+B) to review your picks</li>
              <li>Select all photos, right-click → <strong>Save Quick Collection</strong></li>
              <li>Name it something specific, e.g. "Sunset Session – Picks"</li>
              <li>Clear the Quick Collection (Library menu) so it's ready for the next round</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Collection Sets for Bigger Projects',
            duration: '6 min',
            content: {
                heading: 'Grouping Related Collections',
                body: 'When a single project needs multiple Collections — Raw Selects, Client Delivery, Social Crops — a Collection Set acts as a folder for Collections. It keeps large projects tidy in the panel without merging distinct purposes together.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Name Sets After the Project, Not the Photo Type',
                    content: 'Structure by project first, purpose second: "Nairobi Wedding 2026" → "Ceremony Picks," "Reception Picks," "Client Delivery." This scales cleanly as your catalog grows across years.',
                },
            ],
            image: {
                caption: 'Collections panel showing a Collection Set expanded into three nested Collections',
            },
            subsections: [
                {
                    title: 'Building a Collection Set',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>In the Collections panel, click the <strong>+</strong> icon → <strong>Create Collection Set</strong></li>
              <li>Name the set after the project</li>
              <li>Click <strong>+</strong> again → <strong>Create Collection</strong>, and set "Inside a Collection Set" to your new set</li>
              <li>Repeat for each stage of the project (Selects, Edited, Delivered)</li>
              <li>Drag photos between nested Collections as they move through your workflow</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Smart Collections',
            duration: '7 min',
            content: {
                heading: 'Let Lightroom Organize for You',
                body: 'A Smart Collection uses rules instead of manual dragging. Set criteria like "5 stars AND Keyword contains Portfolio" and Lightroom automatically keeps the collection updated as you rate and tag new photos — even ones imported months from now.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Stack Multiple Rules',
                    content: 'Combine rules with "Match all" for strict filtering (5 stars AND edited this year) or "Match any" for a broader net (Flagged OR 5 stars).',
                },
            ],
            image: {
                caption: 'Smart Collection editor showing rule conditions for star rating, keyword, and capture date',
            },
            subsections: [
                {
                    title: 'A Useful Starter Smart Collection: "Portfolio Candidates"',
                    content: `
            <div class="space-y-3">
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-sky-500">
                <strong>Rule 1</strong>
                <p class="text-sm text-slate-700 mt-1">Rating is greater than or equal to 4 stars</p>
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-blue-500">
                <strong>Rule 2</strong>
                <p class="text-sm text-slate-700 mt-1">Label Color is not Red (Red reserved for "Rejected" in this workflow)</p>
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-indigo-500">
                <strong>Match</strong>
                <p class="text-sm text-slate-700 mt-1">Set to "Match all" so both rules must be true</p>
              </div>
            </div>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Keywording for Fast Search',
            duration: '6 min',
            content: {
                heading: 'Making Every Photo Searchable',
                body: 'Keywords are tags attached to photos that make them findable years later. A well-kept keyword list turns "where is that photo of the client\'s dog" into a two-second search instead of a scroll through thousands of thumbnails.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Don\'t Over-Tag',
                    content: 'Ten precise, consistent keywords beat fifty vague ones. Build a small controlled vocabulary (subject, location, event type) rather than tagging every possible adjective.',
                },
            ],
            image: {
                caption: 'Keywording panel with a hierarchical keyword list and the keyword entry field for the selected photo',
            },
            subsections: [
                {
                    title: 'A Simple Keyword Structure',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Subject:</strong> Portrait, Landscape, Product, Event</li>
              <li><strong>Location:</strong> City or venue name</li>
              <li><strong>Client/Project:</strong> Only for paid or portfolio work</li>
              <li><strong>Status:</strong> Edited, Delivered, Needs-Retouch</li>
            </ul>
            <p class="mt-2 text-sm text-slate-600">Apply keywords to a whole selection at once by selecting multiple photos before typing in the Keywording panel.</p>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Stacking Similar Photos',
            duration: '5 min',
            content: {
                heading: 'Collapsing Bursts and Variants',
                body: 'Burst-mode sequences and virtual copies can flood your grid with near-duplicates. Stacking groups these visually so the grid shows one representative thumbnail, keeping your library scannable without deleting anything.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Auto-Stack by Capture Time',
                    content: 'Select a burst sequence, then Photo → Stacking → Auto-Stack by Capture Time to group shots taken within a few seconds of each other automatically.',
                },
            ],
            image: {
                caption: 'A collapsed photo stack in Grid view showing a stack count badge in the corner of the thumbnail',
            },
            subsections: [
                {
                    title: 'Stacking Shortcuts',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Cmd/Ctrl+G:</strong> Group selected photos into a stack</li>
              <li><strong>S:</strong> Expand or collapse the stack under your cursor</li>
              <li><strong>Shift+S:</strong> Move a photo to the top of its stack (make it the "pick")</li>
            </ul>
          `,
                },
            ],
        },
    ],

    // Practical Exercise
    practicalExercise: {
        title: 'Hands-On Practice: Build a Project Collection Set',
        description: 'Apply everything from this lesson to build a real, reusable organization system for one project.',
        estimatedTime: '15 min',
        steps: [
            {
                title: 'Select Your Best Shots into a Quick Collection',
                instruction: 'Browse your practice catalog and press B on 10-15 photos you\'d call your favorites.',
                tips: [
                    'Don\'t overthink it — gut reactions are fine for a first pass',
                    'You can always remove a photo later with B again',
                ],
            },
            {
                title: 'Convert It to a Named Collection',
                instruction: 'Open the Quick Collection, select all, and save it as a Collection named after your project.',
                tips: [
                    'Use a name you\'d recognize a year from now, not just "Picks"',
                ],
            },
            {
                title: 'Build a Collection Set',
                instruction: 'Create a Collection Set for the same project, then create two nested Collections inside it: "Selects" and "Final Delivery."',
                tips: [
                    'Drag your existing Collection into the set if you want to reuse it as "Selects"',
                ],
            },
            {
                title: 'Create a Smart Collection',
                instruction: 'Build a Smart Collection called "4-5 Star Photos" with the rule Rating ≥ 4 stars.',
                tips: [
                    'Star a few photos first if you haven\'t rated any yet, so the Smart Collection has something to show',
                ],
            },
            {
                title: 'Apply Keywords',
                instruction: 'Select all photos in your new Collection and add 2-3 keywords describing the subject and location.',
                tips: [
                    'Select multiple photos at once with Cmd/Ctrl+click before typing keywords to save time',
                ],
            },
            {
                title: 'Stack Any Similar Shots',
                instruction: 'If you have burst photos, select them and press Cmd/Ctrl+G to stack them, then press S to expand and collapse.',
                tips: [
                    'No bursts in your practice set? Manually stack any two similar photos to see how it behaves',
                ],
            },
        ],
    },

    // Knowledge Check Quiz
    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What is the key difference between a Folder and a Collection in Lightroom?',
                options: [
                    { id: 'a', text: 'Folders and Collections are functionally identical', isCorrect: false },
                    {
                        id: 'b',
                        text: 'Folders reflect physical file location; Collections are virtual groupings that don\'t move files',
                        isCorrect: true,
                    },
                    { id: 'c', text: 'Collections can only hold one photo at a time', isCorrect: false },
                    { id: 'd', text: 'Folders can only be created inside the Develop module', isCorrect: false },
                ],
                explanation: 'Folders mirror your disk structure. Collections are virtual references, so one photo can belong to many Collections without duplication.',
            },
            {
                id: 'q2',
                question: 'What does pressing B do to a selected photo?',
                options: [
                    { id: 'a', text: 'Deletes it from the catalog', isCorrect: false },
                    { id: 'b', text: 'Adds it to the Quick Collection', isCorrect: true },
                    { id: 'c', text: 'Converts it to black and white', isCorrect: false },
                    { id: 'd', text: 'Creates a Smart Collection', isCorrect: false },
                ],
                explanation: 'B toggles a photo in or out of the single, temporary Quick Collection — a fast way to audition photos before committing to a permanent Collection.',
            },
            {
                id: 'q3',
                question: 'What is a Collection Set used for?',
                options: [
                    { id: 'a', text: 'Automatically rating photos', isCorrect: false },
                    { id: 'b', text: 'Grouping related Collections together, like a folder for Collections', isCorrect: true },
                    { id: 'c', text: 'Exporting photos in bulk', isCorrect: false },
                    { id: 'd', text: 'Merging two catalogs into one', isCorrect: false },
                ],
                explanation: 'A Collection Set nests multiple Collections under one project heading, keeping the Collections panel organized as projects grow.',
            },
            {
                id: 'q4',
                question: 'How does a Smart Collection differ from a regular Collection?',
                options: [
                    { id: 'a', text: 'It updates automatically based on rules you define, rather than manual dragging', isCorrect: true },
                    { id: 'b', text: 'It can only contain RAW files', isCorrect: false },
                    { id: 'c', text: 'It is deleted after export', isCorrect: false },
                    { id: 'd', text: 'It requires an internet connection', isCorrect: false },
                ],
                explanation: 'Smart Collections use rule-based criteria (star rating, keywords, dates, etc.) and refresh automatically as your catalog changes.',
            },
            {
                id: 'q5',
                question: 'What does stacking (Cmd/Ctrl+G) do to selected photos?',
                options: [
                    { id: 'a', text: 'Permanently deletes duplicates', isCorrect: false },
                    { id: 'b', text: 'Merges them into a single HDR image', isCorrect: false },
                    { id: 'c', text: 'Groups them visually under one thumbnail in the grid, without deleting anything', isCorrect: true },
                    { id: 'd', text: 'Applies the same edit to all of them', isCorrect: false },
                ],
                explanation: 'Stacking is purely organizational — it collapses similar shots (like bursts) into one grid slot so your library stays scannable.',
            },
        ],
    },

    // Assignment
    assignment: {
        title: 'Course Assignment: Organize a Full Project End-to-End',
        description: 'Demonstrate a complete, professional-grade organization system for a real or practice shoot.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Using 20-30 photos (a real shoot or your practice set), build a full organization system:
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Collection Set:</strong> Create a Collection Set named for the project.</li>
        <li><strong>Step 2 - Nested Collections:</strong> Inside it, create at least two Collections representing different stages (e.g., "Selects" and "Final Delivery").</li>
        <li><strong>Step 3 - Smart Collection:</strong> Build one Smart Collection with at least two combined rules (e.g., 4+ stars AND a specific keyword).</li>
        <li><strong>Step 4 - Keywording:</strong> Apply a consistent keyword structure (subject, location, status) across all photos.</li>
        <li><strong>Step 5 - Stacking:</strong> Stack any burst or near-duplicate shots.</li>
      </ol>
      <p>
        <strong>Submission:</strong> Take a screenshot of your Collections panel showing the full structure, and be ready to explain your keyword strategy in the next lesson.
      </p>
    `,
        rubric: [
            'Collection Set created with a clear, project-based name',
            'At least two nested Collections representing distinct workflow stages',
            'Smart Collection built with at least two combined rules',
            'Consistent keyword structure applied across all photos',
            'Similar/burst photos properly stacked',
            'Screenshot clearly shows the finished Collections panel structure',
        ],
    },

    // Key Takeaways
    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Folders reflect physical file location on disk; Collections are virtual and never move or duplicate files',
            'The Quick Collection (B key) is a temporary staging area for auditioning photos before committing to a permanent Collection',
            'Collection Sets nest related Collections together, keeping large or multi-stage projects organized',
            'Smart Collections use rules (star rating, keywords, dates) to update automatically as your catalog grows',
            'A small, consistent keyword vocabulary is far more useful than tagging everything with unique labels',
            'Stacking (Cmd/Ctrl+G) collapses bursts and near-duplicates visually without deleting any files',
            'Organize by project first, purpose second, so your system scales across years of shoots',
        ],
        nextSteps: [
            'Preview how organization habits set up in this lesson make batch editing dramatically faster',
            'Start thinking about a consistent keyword vocabulary you\'ll reuse across all future projects',
            'Review your existing photo library (if any) and retrofit it with one Collection Set as practice',
            'Get ready to apply real exposure and color adjustments to the collections you just built',
        ],
    },

    // Resources
    resources: [
        {
            title: 'Adobe: Working with Collections',
            url: 'https://helpx.adobe.com/lightroom-classic/help/organize-photos-catalog.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Creating Smart Collections',
            url: 'https://helpx.adobe.com/lightroom-classic/help/organize-photos-catalog.html',
            type: 'documentation',
        },
        {
            title: 'Keyword Hierarchy Starter Template (Download)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Lightroom Keyboard Shortcuts Cheat Sheet (PDF)',
            url: '#',
            type: 'download',
        },
    ],

    // Next Lesson Preview
    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 3: Basic Color and Exposure',
        description: 'Now that your library is organized, start editing with confidence — mastering exposure, white balance, and tonal adjustments using the histogram as your guide.',
        topics: [
            'Reading and using the histogram',
            'Setting accurate white balance',
            'Exposure, contrast, highlights, and shadows in depth',
            'Building a repeatable adjustment order',
            'Comparing before/after with confidence',
        ],
    },
}