import type { LessonData } from '../types/course'

/**
 * Lesson 01: Introduction to Adobe Lightroom Classic
 * Premium Learning Experience
 * 
 * This lesson provides a comprehensive introduction to Adobe Lightroom Classic,
 * structured as a premium learning experience similar to Udemy, Coursera, or DataCamp.
 */

export const lesson01: LessonData = {
  // Basic Lesson Metadata
  id: 'lesson-01',
  title: 'Introduction to Adobe Lightroom Classic',
  moduleTitle: 'Module 1: Photography Fundamentals',
  description: 'Master the fundamentals of Adobe Lightroom Classic and learn how to organize, edit, and enhance your photography workflow.',
  duration: '42 min',
  difficulty: 'Beginner' as const,
  xpReward: 50,
  progress: 0,
  completed: false,

  // Hero Section
  hero: {
    headline: 'Introduction to Adobe Lightroom Classic',
    subheadline: 'Master photo organization, editing, and export in Lightroom Classic',
    keyBenefits: [
      'Build an efficient photo library management system',
      'Master non-destructive editing techniques',
      'Develop a professional workflow from import to export',
      'Create reusable presets for consistent editing',
    ],
  },

  // Learning Objectives
  learningObjectives: [
    'Understand the Lightroom Classic interface and workspace layout',
    'Learn to import and organize photos into a catalog system',
    'Master basic adjustments: exposure, contrast, and color correction',
    'Apply non-destructive editing principles',
    'Export photos in different formats for various purposes',
    'Create and use adjustment presets for efficiency',
    'Develop a personal editing workflow',
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
        id: 'sample-photos',
        name: 'Sample RAW Photos',
        description: 'Download from provided practice files or use your own',
        status: 'required',
      },
      {
        id: 'storage',
        name: '2GB Free Disk Space',
        description: 'For practice catalog and sample photos',
        status: 'required',
      },
    ],
  },

  // Before You Begin Checklist
  beforeYouBegin: {
    title: 'Before You Begin',
    description: 'Make sure you have everything ready:',
    items: [
      {
        id: 'install-lightroom',
        label: 'Adobe Lightroom Classic installed and activated',
        description: 'Version 2024 or later',
      },
      {
        id: 'sample-files',
        label: 'Sample RAW files downloaded',
        description: 'Available in the lesson resources',
      },
      {
        id: 'folder-created',
        label: 'Create a practice folder on your computer',
        description: 'e.g., ~/Pictures/LightroomPractice',
      },
      {
        id: 'time-allocated',
        label: 'Allocate 42 minutes for this lesson',
        description: 'Uninterrupted learning time for best results',
      },
    ],
  },

  // Lesson Content - Step by Step Sections
  sections: [
    {
      id: 'section-1',
      title: 'Section 1: Understanding the Lightroom Ecosystem',
      duration: '5 min',
      content: {
        heading: 'What is Lightroom Classic?',
        body: 'Adobe Lightroom Classic is a non-destructive photo editing and management software designed specifically for photographers who need powerful organization tools and professional editing capabilities. Unlike Lightroom CC (cloud-based), Lightroom Classic gives you complete control over your catalog and files.',
      },
      callouts: [
        {
          type: 'best-practice',
          title: 'Why Choose Lightroom Classic?',
          content: 'Lightroom Classic is ideal if you work with large photo libraries, need offline access, prefer local storage, or require advanced batch editing capabilities. It stores all edits as metadata, preserving your original files.',
        },
      ],
      image: {
        caption: 'Lightroom Classic workspace overview with main modules (Library, Develop, Map, Book, Slideshow, Print, Web)',
      },
      subsections: [
        {
          title: 'Lightroom Classic vs. Lightroom CC',
          content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Lightroom Classic:</strong> Desktop-based, local storage, offline access, unlimited editing power, ideal for professionals</li>
              <li><strong>Lightroom CC:</strong> Cloud-based, mobile sync, collaborative features, simpler interface, ideal for casual photographers</li>
            </ul>
          `,
        },
      ],
    },

    {
      id: 'section-2',
      title: 'Section 2: The Lightroom Interface',
      duration: '8 min',
      content: {
        heading: 'Navigating the Workspace',
        body: 'Lightroom Classic is organized into seven specialized modules. Each module handles a different part of your photography workflow. The two you\'ll spend most time in are Library and Develop.',
      },
      callouts: [
        {
          type: 'tip',
          title: 'Navigation Shortcut',
          content: 'Press G to toggle Grid view, E for Loupe (single photo), N for filmstrip, and Tab to hide side panels for maximum screen space.',
        },
      ],
      image: {
        caption: 'The seven Lightroom modules: Library, Develop, Map, Book, Slideshow, Print, and Web',
      },
      subsections: [
        {
          title: 'The Seven Modules Explained',
          content: `
            <div class="space-y-3">
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-sky-500">
                <strong>Library Module</strong>
                <p class="text-sm text-slate-700 mt-1">Import, view, and organize your entire photo collection. Use flags, stars, color labels, and collections.</p>
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-blue-500">
                <strong>Develop Module</strong>
                <p class="text-sm text-slate-700 mt-1">Edit individual photos with adjustable sliders and tools. All changes are non-destructive and stored as metadata.</p>
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-indigo-500">
                <strong>Map, Book, Slideshow, Print, Web Modules</strong>
                <p class="text-sm text-slate-700 mt-1">Specialized tools for viewing photos on maps, creating books, presentations, and web galleries.</p>
              </div>
            </div>
          `,
        },
      ],
    },

    {
      id: 'section-3',
      title: 'Section 3: Importing Photos',
      duration: '7 min',
      content: {
        heading: 'Building Your Photo Library',
        body: 'The import process is critical. Lightroom creates a catalog (a database file) that references your photos and stores all your edits. Proper import setup saves countless hours later.',
      },
      callouts: [
        {
          type: 'warning',
          title: 'Important: Choose Your File Handling Method',
          content: 'Select "Copy" to create backups in your Lightroom folder, or "Move" to relocate files to Lightroom storage. Never use "Add" unless your photos are already in a safe location.',
        },
      ],
      image: {
        caption: 'The Lightroom import dialog with source selection, file handling, and metadata options',
      },
      subsections: [
        {
          title: 'Step-by-Step Import Process',
          content: `
            <ol class="space-y-3 pl-5 list-decimal">
              <li>Go to <strong>File → Import Photos and Video</strong></li>
              <li>Choose your source (memory card, hard drive, or folder)</li>
              <li>Select your file handling method: Copy, Copy as DNG, Move, or Add</li>
              <li>Choose your destination folder and subfolder naming scheme</li>
              <li>Apply import presets for metadata and keywords</li>
              <li>Rename files using Lightroom's naming conventions (e.g., YYYY-MM-DD-[filename])</li>
              <li>Click Import and let Lightroom create the catalog entries</li>
            </ol>
          `,
        },
        {
          title: 'File Organization Best Practice',
          content: 'Create a consistent folder structure by Year/Month or by Project. For example: 2024 > 2024-01 January > 2024-01-15 New Year Shoot.',
        },
      ],
    },

    {
      id: 'section-4',
      title: 'Section 4: The Library Module - Organization',
      duration: '7 min',
      content: {
        heading: 'Organizing Your Photos',
        body: 'After import, the Library module helps you review, tag, and organize your photos. Use flags, stars, and color labels to mark your favorites and identify photos for editing.',
      },
      callouts: [
        {
          type: 'best-practice',
          title: 'The Professional Culling Workflow',
          content: 'Use flags first (U for Unflagged, 6 for Flagged) to create a rough selection. Then use stars (0-5 keys) to rate your best photos. This two-step process ensures quality.',
        },
      ],
      image: {
        caption: 'Library module with Grid view, flags, stars, and color labels visible',
      },
      subsections: [
        {
          title: 'Organization Tools',
          content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Flags:</strong> Mark photos as Flagged (6), Unflagged (U), or Rejected (0). Quick yes/no decisions.</li>
              <li><strong>Stars:</strong> Rate photos 0-5 stars using number keys. 5 stars for your best, 3 for good, 0 for no.</li>
              <li><strong>Color Labels:</strong> Mark by color (Red, Yellow, Green, Blue). Useful for workflow status (editing, approved, archived).</li>
              <li><strong>Collections:</strong> Create virtual groupings of photos without changing folder structure.</li>
            </ul>
          `,
        },
      ],
    },

    {
      id: 'section-5',
      title: 'Section 5: Introduction to Editing - The Develop Module',
      duration: '6 min',
      content: {
        heading: 'Beginning Your Edits',
        body: 'The Develop module is where you adjust your photos. Every slider here works non-destructively, meaning you can change your mind or reset to the original anytime. Edit bold; you can always undo.',
      },
      callouts: [
        {
          type: 'tip',
          title: 'Pro Tip: Start with Exposure',
          content: 'Always begin by setting the correct exposure. Use the histogram to avoid blown highlights (right edge clipping) or crushed shadows (left edge clipping). A proper exposure foundation makes all other edits easier.',
        },
      ],
      image: {
        caption: 'The Develop module with Basic panel showing Exposure, Contrast, Shadows, Highlights, and Clarity sliders',
      },
      subsections: [
        {
          title: 'The Essential Adjustment Sliders',
          content: `
            <div class="space-y-2">
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-sky-500">
                <strong>Exposure</strong>: Brightens or darkens the entire image. Move right to lighten, left to darken. This is usually your first adjustment.
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-blue-500">
                <strong>Contrast</strong>: Increases or decreases the separation between light and dark areas. Adds punch without affecting exposure.
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-indigo-500">
                <strong>Highlights</strong>: Darkens overexposed areas without affecting shadows. Perfect for recovering blown-out skies.
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-purple-500">
                <strong>Shadows</strong>: Brightens dark areas and reveals hidden detail. Adds life to underexposed regions.
              </div>
              <div class="rounded-lg bg-slate-50 p-3 border-l-4 border-pink-500">
                <strong>Clarity</strong>: Enhances mid-tone contrast for a sharper, punchier look. Use subtly (0-20) to avoid halos.
              </div>
            </div>
          `,
        },
      ],
    },

    {
      id: 'section-6',
      title: 'Section 6: Color and Tone Adjustments',
      duration: '5 min',
      content: {
        heading: 'Adding Color and Style to Your Photos',
        body: 'After exposure and contrast, adjust color and tone using the Saturation, Vibrance, and HSL panels. These tools let you control color globally or by specific hue.',
      },
      callouts: [
        {
          type: 'best-practice',
          title: 'Vibrance vs. Saturation: When to Use Each',
          content: 'Use Vibrance for natural color enhancement that protects skin tones. Use Saturation for global, aggressive color shifts. Most professionals start with Vibrance for portraits, Saturation for landscapes.',
        },
      ],
      image: {
        caption: 'Color adjustment tools: Vibrance, Saturation, and HSL (Hue, Saturation, Luminance) panels',
      },
      subsections: [
        {
          title: 'Color Adjustment Workflow',
          content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li><strong>Temp & Tint:</strong> Adjust white balance first. Use the eyedropper to select a neutral gray area, or move sliders manually.</li>
              <li><strong>Vibrance:</strong> Add 10-20 for natural color pop. Protects skin tones automatically.</li>
              <li><strong>Saturation:</strong> Use sparingly. Increase by 5-10 for most photos, or decrease to -20 for B&W conversions.</li>
              <li><strong>HSL Panel:</strong> Fine-tune specific colors. Pull down Red saturation for natural skin tones in portraits.</li>
            </ol>
          `,
        },
      ],
    },

    {
      id: 'section-7',
      title: 'Section 7: Non-Destructive Editing Philosophy',
      duration: '3 min',
      content: {
        heading: 'Understanding Non-Destructive Editing',
        body: 'Lightroom\'s greatest strength is that no edits modify your original file. Every adjustment is stored as metadata. This means infinite freedom to experiment without risk.',
      },
      callouts: [
        {
          type: 'best-practice',
          title: 'Why Non-Destructive Editing Matters',
          content: 'Your original photo stays pristine forever. You can reset, redo, or try completely different edits. This workflow encourages experimentation and learning without consequences.',
        },
      ],
      image: {
        caption: 'Lightroom stores edits as metadata, keeping your original file untouched',
      },
      subsections: [
        {
          title: 'Virtual Copies: Your Secret Weapon',
          content: `
            <p class="mb-2">Create a Virtual Copy (right-click photo → Create Virtual Copy) to test multiple editing styles:</p>
            <ul class="space-y-1 pl-5 list-disc">
              <li>Copy 1: Warm, film-like tone</li>
              <li>Copy 2: Cool, modern aesthetic</li>
              <li>Copy 3: Black and white</li>
            </ul>
            <p class="mt-2 text-sm text-slate-600">All copies reference the same original file, saving storage while letting you explore creative options.</p>
          `,
        },
      ],
    },
  ],

  // Practical Exercise
  practicalExercise: {
    title: 'Hands-On Practice: Edit Your First Photo',
    description: 'Apply what you\'ve learned with this guided exercise. Follow along step by step.',
    estimatedTime: '15 min',
    steps: [
      {
        title: 'Import a Sample Photo',
        instruction: 'Download a sample RAW file (or use your own photo). Go to File → Import Photos. Select "Copy as DNG" and save to your practice folder.',
        tips: [
          'Look for .CR2, .NEF, or .ARW files (common RAW formats)',
          'DNG is Lightroom\'s universal RAW format and ensures compatibility',
        ],
      },
      {
        title: 'Examine Before Editing',
        instruction: 'In the Library module, view your photo in Loupe view (E key). Study the exposure, colors, and any issues (blown highlights, dark shadows).',
        tips: [
          'Enable the Histogram (View → Show Clipping) to see overexposed and underexposed areas',
          'Check the photo\'s EXIF data to see the original camera settings',
        ],
      },
      {
        title: 'Switch to Develop Module',
        instruction: 'Click the Develop tab or press Ctrl+Alt+2 (Windows) / Cmd+Option+2 (Mac). You\'re now in edit mode.',
        tips: [
          'Before/After views are available in the View menu for easy comparison',
          'Use Undo (Ctrl+Z) to compare your adjustments to the original',
        ],
      },
      {
        title: 'Set Exposure and Contrast',
        instruction: 'In the Basic panel, adjust Exposure to brighten/darken the image. Aim for a proper histogram with no extreme clipping. Then add Contrast for depth.',
        tips: [
          'Move Exposure in small increments (0.25 to 0.5 at a time)',
          'Look at the histogram to guide your adjustments, not just your eyes',
        ],
      },
      {
        title: 'Adjust Highlights and Shadows',
        instruction: 'Increase Highlights +30 to +50 to recover blown skies. Increase Shadows +20 to +40 to brighten dark areas and reveal detail.',
        tips: [
          'These are the most powerful tools for recovering detail in over/underexposed areas',
          'Keep Clarity at 0 for now; you\'ll use it strategically after other adjustments',
        ],
      },
      {
        title: 'Add Color and Life',
        instruction: 'Increase Vibrance to 15-25 for natural color enhancement. Then fine-tune Whites (increase 5-10) and Blacks (decrease -5 to -10) for final punch.',
        tips: [
          'Vibrance protects skin tones, making it safer than Saturation for portraits',
          'Whites and Blacks sliders control the brightest and darkest areas of your image',
        ],
      },
      {
        title: 'Add Clarity for Sharpness',
        instruction: 'Add Clarity 5-15 for a sharper, more focused look. Be careful not to overdo it (above 25 creates halo artifacts).',
        tips: [
          'Clarity works best on images with detail and texture',
          'For soft, romantic portraits, keep Clarity at 0 or even negative (-5 to -15)',
        ],
      },
      {
        title: 'Save Your Edit as a Virtual Copy',
        instruction: 'Right-click your edited photo → Create Virtual Copy. Now create a second version with a completely different style.',
        tips: [
          'Try a B&W version by dropping Saturation to -100 and increasing Contrast',
          'Compare the two versions side by side to see what you prefer',
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
        question: 'Which Lightroom module is primarily used for editing photos?',
        options: [
          { id: 'a', text: 'Library Module', isCorrect: false },
          { id: 'b', text: 'Develop Module', isCorrect: true },
          { id: 'c', text: 'Map Module', isCorrect: false },
          { id: 'd', text: 'Web Module', isCorrect: false },
        ],
        explanation: 'The Develop module is where you make all your adjustments. The Library module is for importing and organizing.',
      },
      {
        id: 'q2',
        question: 'What does non-destructive editing mean?',
        options: [
          {
            id: 'a',
            text: 'Your original photo file is never modified; edits are stored separately as metadata',
            isCorrect: true,
          },
          { id: 'b', text: 'You cannot undo your edits', isCorrect: false },
          { id: 'c', text: 'Edits are saved directly to your original file', isCorrect: false },
          { id: 'd', text: 'You can only edit in black and white', isCorrect: false },
        ],
        explanation: 'Non-destructive editing preserves your original file. You can change or reset edits anytime. This is Lightroom\'s biggest advantage.',
      },
      {
        id: 'q3',
        question: 'When importing photos, what is the recommended file handling method?',
        options: [
          { id: 'a', text: 'Add (reference the files in place)', isCorrect: false },
          { id: 'b', text: 'Copy as DNG (convert and copy)', isCorrect: true },
          { id: 'c', text: 'Move (relocate all files)', isCorrect: false },
          { id: 'd', text: 'It doesn\'t matter', isCorrect: false },
        ],
        explanation: '"Copy as DNG" creates backups while converting to Lightroom\'s universal RAW format. This protects your originals and ensures compatibility.',
      },
      {
        id: 'q4',
        question: 'What is the difference between Vibrance and Saturation?',
        options: [
          { id: 'a', text: 'They do the same thing', isCorrect: false },
          {
            id: 'b',
            text: 'Vibrance protects skin tones; Saturation affects all colors equally',
            isCorrect: true,
          },
          { id: 'c', text: 'Saturation is non-destructive; Vibrance modifies the original', isCorrect: false },
          { id: 'd', text: 'They only work in the Library module', isCorrect: false },
        ],
        explanation: 'Vibrance increases saturation intelligently while protecting skin tones. Use Vibrance for most edits, Saturation for aggressive color shifts.',
      },
      {
        id: 'q5',
        question: 'What is a Virtual Copy in Lightroom?',
        options: [
          { id: 'a', text: 'A backup of your original photo file', isCorrect: false },
          {
            id: 'b',
            text: 'A separate editing version that references the same original file',
            isCorrect: true,
          },
          { id: 'c', text: 'A copy of your Lightroom catalog', isCorrect: false },
          { id: 'd', text: 'A version exported to cloud storage', isCorrect: false },
        ],
        explanation: 'Virtual Copies let you create multiple edited versions of the same photo without duplicating the file. Perfect for comparing different editing styles.',
      },
    ],
  },

  // Assignment
  assignment: {
    title: 'Course Assignment: Complete a Mini Photo Editing Project',
    description: 'Demonstrate your mastery of Lightroom fundamentals.',
    task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Import a collection of 10-15 photos from a single shoot (or collection you're interested in). Complete the following workflow:
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Organize:</strong> Flag your favorite photos (6 key). Then star your top 5 (5 key) for editing.</li>
        <li><strong>Step 2 - Edit:</strong> Apply consistent edits to all 5 selected photos using similar exposure, contrast, and color settings. Create a personal editing style.</li>
        <li><strong>Step 3 - Create Collections:</strong> Build a smart collection called "Portfolio" and add your edited photos to it.</li>
        <li><strong>Step 4 - Export:</strong> Export all 5 edited photos as JPEGs optimized for Instagram (1080x1080 pixels, quality 80, sRGB color space).</li>
        <li><strong>Step 5 - Reflect:</strong> Write a short paragraph (3-5 sentences) about your editing decisions and what you learned.</li>
      </ol>
      <p>
        <strong>Submission:</strong> Submit your 5 exported images and your reflection document. Be prepared to discuss your creative choices in the next lesson.
      </p>
    `,
    rubric: [
      'All 10-15 photos imported with proper organization and metadata',
      '5 selected photos show consistent, professional editing',
      'Collection created and photos successfully organized',
      'Exports meet specifications: correct size, format, and color space',
      'Reflection demonstrates understanding of editing principles applied',
      'File organization shows professional workflow habits',
    ],
  },

  // Key Takeaways
  summary: {
    title: 'Key Takeaways',
    keyPoints: [
      'Lightroom Classic is a non-destructive, catalog-based photo management and editing system ideal for photographers',
      'The Library module is for importing and organizing; the Develop module is for editing',
      'Non-destructive editing means your originals stay pristine while edits are stored as metadata',
      'Import with proper organization: use folders by date/project and apply metadata templates',
      'The core editing workflow: Exposure → Contrast → Highlights/Shadows → Vibrance → Clarity',
      'Virtual Copies let you experiment with multiple editing styles on the same file',
      'Create and save presets to automate repetitive edits and maintain consistency across your library',
      'Professional photos are edited subtly; more is not always better',
      'Regular backup of your catalog ensures you never lose your work',
      'Keyboard shortcuts speed up your workflow: G for Grid, E for Loupe, 6 for Flag, 5-1 for Stars',
    ],
    nextSteps: [
      'Practice the adjustment brush for selective, localized edits on specific photo areas',
      'Explore Presets and Profiles to understand different editing styles and aesthetics',
      'Master the HSL panel for advanced color grading and targeted color adjustments',
      'Learn Lightroom\'s batch editing to apply settings across hundreds of photos instantly',
      'Build a custom preset library that reflects your unique photography style and vision',
      'Study other photographers\' presets to understand editing trends and techniques',
      'Experiment with Lightroom\'s spot removal tool to clean up distracting elements',
      'Create a backup workflow to protect your catalogs and edited settings',
    ],
  },

  // Resources
  resources: [
    {
      title: 'Adobe Lightroom Classic Official Documentation',
      url: 'https://helpx.adobe.com/lightroom/classic',
      type: 'documentation',
    },
    {
      title: 'Sample RAW Files for Practice (Download Pack)',
      url: '#',
      type: 'download',
    },
    {
      title: 'Preset Pack: Essential Lightroom Settings (Free)',
      url: '#',
      type: 'download',
    },
    {
      title: 'Keyboard Shortcuts Cheat Sheet (PDF)',
      url: '#',
      type: 'download',
    },
    {
      title: 'Adobe Lightroom Tutorials on YouTube',
      url: 'https://www.youtube.com/adobe',
      type: 'video',
    },
  ],

  // Next Lesson Preview
  nextLesson: {
    title: 'Next Lesson Preview',
    preview: 'Lesson 2: Advanced Editing Techniques',
    description: 'Dive deeper with the Adjustment Brush, mastering selective editing, HSL color grading, and professional workflows.',
    topics: [
      'Selective editing with the Adjustment Brush',
      'HSL panel for targeted color adjustments',
      'Creating cinematic looks with split-toning',
      'Batch editing and Lightroom sync workflows',
      'Building presets for different photography genres',
    ],
  },
}
