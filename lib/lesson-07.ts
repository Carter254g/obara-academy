import type { LessonData } from '../types/course'

/**
 * Lesson 07: Review and Lightroom Best Practices
 * © Obara. All rights reserved.
 */
export const lesson07: LessonData = {
    id: 'lesson-7',
    title: 'Review and Lightroom Best Practices',
    moduleTitle: 'Adobe Lightroom',
    description:
        'Consolidate everything learned across the Lightroom module into one reliable end-to-end workflow, then test your knowledge before moving into Photoshop.',
    lessonNumber: 7,
    duration: '40 min',
    difficulty: 'Intermediate',
    xpReward: 70,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Review and Lightroom Best Practices',
        subheadline: 'Bring every skill from Lessons 1-6 together into one confident, repeatable workflow',
        keyBenefits: [
            'Review the complete Lightroom workflow from import to export',
            'Reinforce the most important best practices from every lesson',
            'Identify and correct common workflow mistakes before they become habits',
            'Test your knowledge across the entire Lightroom module',
        ],
    },

    learningObjectives: [
        'Recall the core concepts from catalogs, organization, exposure, color, local adjustments, and export',
        'Explain the full end-to-end Lightroom workflow in the correct order',
        'Identify common mistakes at each stage of the workflow',
        'Apply a personal workflow checklist consistently across future shoots',
        'Demonstrate mastery of the full Lightroom module through a comprehensive knowledge check',
    ],

    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'Continuing from Lessons 1-6 with your complete catalog',
                status: 'required',
            },
            {
                id: 'full-catalog',
                name: 'Your full practice catalog from Lessons 1-6',
                description: 'Organized, edited, and exported photos from across the module',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'all-lessons-complete',
                label: 'Completed Lessons 1 through 6',
                description: 'This lesson reviews and tests everything covered in the Lightroom module so far',
            },
            {
                id: 'catalog-ready',
                label: 'Your practice catalog open with prior work visible',
                description: 'You will reference photos from earlier lessons throughout this review',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 40 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: The Complete Workflow, Start to Finish',
            duration: '7 min',
            content: {
                heading: 'From Memory Card to Finished Export',
                body: 'Every lesson in this module represents one stage of a single, continuous workflow. Seeing all six stages together reinforces why the order matters, and how each stage sets up the one that follows.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'The Full Workflow at a Glance',
                    content: 'Import with proper file handling and folder structure → Cull and organize with flags, ratings, and Collections → Correct exposure and color using the histogram → Refine tone and apply creative color grading → Add local adjustments for targeted emphasis → Export correctly for the destination.',
                },
            ],
            image: {
                caption: 'A single workflow diagram showing all six stages connected in sequence, from import through export',
            },
            subsections: [
                {
                    title: 'Why Skipping a Stage Causes Problems Later',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Skipping organization means hunting for photos instead of finding them instantly</li>
              <li>Skipping proper exposure correction before color grading means grading on top of a flawed foundation</li>
              <li>Skipping the correct export settings undoes hours of careful editing the moment the file is viewed elsewhere</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Catalog and Organization Review',
            duration: '5 min',
            content: {
                heading: 'What You Should Now Be Comfortable With',
                body: 'By this point, you should be able to explain how a catalog references files without storing them, apply a consistent folder structure, and use Collections, Smart Collections, ratings, flags, and keywords without hesitation.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'The Most Common Organization Mistake',
                    content: 'Moving or renaming files outside of Lightroom remains the single most common cause of broken catalogs among beginners. If you take away one habit from this module, make it this one.',
                },
            ],
            image: {
                caption: 'Split view reminder showing the catalog-to-file relationship alongside the Collections panel',
            },
            subsections: [],
        },

        {
            id: 'section-3',
            title: 'Section 3: Exposure, Color, and Tone Review',
            duration: '6 min',
            content: {
                heading: 'Reading Light Instead of Guessing',
                body: 'You should now trust the histogram over your screen, correct white balance before any other adjustment, and understand how Highlights, Shadows, Whites, and Blacks work together as one interconnected system.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'The Order That Prevents Rework',
                    content: 'White Balance → Exposure → Contrast → Highlights/Shadows → Whites/Blacks → Texture/Clarity. Following this order consistently means fewer readjustments and faster, more confident editing.',
                },
            ],
            image: {
                caption: 'The Basic panel with each slider labeled in its recommended adjustment order',
            },
            subsections: [],
        },

        {
            id: 'section-4',
            title: 'Section 4: Tone Curve, Color Grading, and Local Adjustments Review',
            duration: '6 min',
            content: {
                heading: 'Where Technical Correction Becomes Creative Style',
                body: 'Beyond basic correction, you\'ve learned to use the Tone Curve for refined contrast control, apply Color Grading to shadows, midtones, and highlights independently, and use Adjustment Brushes, Graduated Filters, and Radial Filters for precise, localized emphasis.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Global First, Local Second, Creative Last',
                    content: 'Always finish your global exposure and color correction before adding local adjustments, and save creative color grading decisions for after the technical foundation is solid.',
                },
            ],
            image: {
                caption: 'A layered edit example showing global correction, local adjustments, and creative color grading applied in sequence',
            },
            subsections: [],
        },

        {
            id: 'section-5',
            title: 'Section 5: Export Workflow Review',
            duration: '5 min',
            content: {
                heading: 'The Stage That Determines What Everyone Actually Sees',
                body: 'All the careful editing in the world means nothing if the export settings are wrong. sRGB for web, correct dimensions for the destination, appropriate output sharpening, and a saved preset for repeatability are all non-negotiable habits at this stage.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'A Wrong Export Setting Is Invisible Until It Isn\'t',
                    content: 'Exporting in Adobe RGB instead of sRGB often looks fine on your own calibrated monitor, but appears dull and shifted the moment a client or follower views it on a standard screen. Always double-check color space before every export.',
                },
            ],
            image: {
                caption: 'The Export dialog with sRGB, correct sizing, and Output Sharpening all highlighted as critical checkpoints',
            },
            subsections: [],
        },

        {
            id: 'section-6',
            title: 'Section 6: Building Your Personal Workflow Checklist',
            duration: '6 min',
            content: {
                heading: 'Turning Six Lessons Into One Habit',
                body: 'The goal of this entire module was never to memorize individual tools, it was to build one reliable, repeatable workflow you no longer have to think hard about. A written checklist makes that consistency automatic, even years from now.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'A Starting Checklist Template',
                    content: 'Import with correct folder structure and file handling → Cull with flags, then rate with stars → Correct white balance and exposure using the histogram → Apply Tone Curve and Color Grading as needed → Add local adjustments for emphasis → Export with the correct preset for the destination.',
                },
            ],
            image: {
                caption: 'A printable-style workflow checklist summarizing all six stages in order',
            },
            subsections: [
                {
                    title: 'Making the Checklist Your Own',
                    content: `
            <p>Copy this checklist and adjust it to match your own genre of photography, a wedding photographer's checklist looks different from a product photographer's. The specific steps matter less than having a written, repeatable process you trust.</p>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Full Workflow, One Photo, Start to Finish',
        description: 'Take a single unedited photo through the entire Lightroom workflow from import to export, applying everything learned in this module.',
        estimatedTime: '25 min',
        steps: [
            {
                title: 'Import With Correct Settings',
                instruction: 'Import one new photo using your Year > Date > Project folder structure, a file renaming template, and your copyright metadata preset.',
                tips: [
                    'This should now feel automatic, if it doesn\'t, revisit Lesson 2',
                ],
            },
            {
                title: 'Cull and Organize',
                instruction: 'Flag the photo as a Pick, rate it, and add it to a relevant Collection with appropriate keywords.',
                tips: [
                    'Even for a single photo, practicing the full culling habit matters',
                ],
            },
            {
                title: 'Correct Exposure and Color',
                instruction: 'Correct white balance, then set Exposure using the histogram, followed by Contrast, Highlights, Shadows, Whites, and Blacks.',
                tips: [
                    'Toggle clipping warnings with J throughout this step',
                ],
            },
            {
                title: 'Apply Tone Curve and Color Grading',
                instruction: 'Add a subtle Tone Curve adjustment for refined contrast, then apply Color Grading to shadows and highlights for a cohesive creative tone.',
                tips: [
                    'Keep Color Grading Saturation low for a natural, professional result',
                ],
            },
            {
                title: 'Add One Local Adjustment',
                instruction: 'Apply a Graduated Filter, Radial Filter, or Adjustment Brush to emphasize the subject or balance the frame.',
                tips: [
                    'Check the mask overlay with O to confirm precise targeting',
                ],
            },
            {
                title: 'Export Using a Saved Preset',
                instruction: 'Export the finished photo using one of your saved Export Presets from Lesson 6.',
                tips: [
                    'Confirm the exported file opens correctly and looks as expected before finishing',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Lightroom Module Final Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What does a Lightroom catalog actually store?',
                options: [
                    { id: 'a', text: 'Copies of every photo file', isCorrect: false },
                    { id: 'b', text: 'References to photo files plus all edits, keywords, and ratings', isCorrect: true },
                    { id: 'c', text: 'Only exported JPEGs', isCorrect: false },
                    { id: 'd', text: 'Nothing, photos are stored inside the catalog itself', isCorrect: false },
                ],
                explanation: 'The catalog is a database referencing your photos\' file locations and storing everything done to them, never the actual image data.',
            },
            {
                id: 'q2',
                question: 'What happens if you rename a photo folder outside of Lightroom?',
                options: [
                    { id: 'a', text: 'Lightroom automatically detects the change', isCorrect: false },
                    { id: 'b', text: 'Lightroom loses track of the files and shows them as missing', isCorrect: true },
                    { id: 'c', text: 'The photos are permanently deleted', isCorrect: false },
                    { id: 'd', text: 'Nothing happens', isCorrect: false },
                ],
                explanation: 'The catalog only knows a file\'s last known location, renaming outside Lightroom breaks that reference.',
            },
            {
                id: 'q3',
                question: 'What is the main advantage of a Collection over a folder?',
                options: [
                    { id: 'a', text: 'Collections use less disk space than folders', isCorrect: false },
                    { id: 'b', text: 'A photo can belong to multiple Collections without duplicating the file', isCorrect: true },
                    { id: 'c', text: 'Collections automatically back up your photos', isCorrect: false },
                    { id: 'd', text: 'Collections are required before editing a photo', isCorrect: false },
                ],
                explanation: 'Collections are virtual groupings, the same photo can appear in unlimited Collections while only existing once on disk.',
            },
            {
                id: 'q4',
                question: 'What makes a Smart Collection different from a regular Collection?',
                options: [
                    { id: 'a', text: 'Smart Collections automatically update based on rules you define', isCorrect: true },
                    { id: 'b', text: 'Smart Collections can only contain 5 photos', isCorrect: false },
                    { id: 'c', text: 'Smart Collections require an internet connection', isCorrect: false },
                    { id: 'd', text: 'There is no difference', isCorrect: false },
                ],
                explanation: 'Smart Collections use rule-based filters and update themselves automatically as your library changes.',
            },
            {
                id: 'q5',
                question: 'What does a spike touching the far right edge of the histogram indicate?',
                options: [
                    { id: 'a', text: 'Shadow clipping', isCorrect: false },
                    { id: 'b', text: 'Highlight clipping', isCorrect: true },
                    { id: 'c', text: 'Correct exposure', isCorrect: false },
                    { id: 'd', text: 'A color cast', isCorrect: false },
                ],
                explanation: 'The right edge of the histogram represents pure white, a spike there means highlight detail is being lost.',
            },
            {
                id: 'q6',
                question: 'What is the recommended first adjustment to make in the Basic panel?',
                options: [
                    { id: 'a', text: 'Clarity', isCorrect: false },
                    { id: 'b', text: 'White Balance', isCorrect: true },
                    { id: 'c', text: 'Blacks', isCorrect: false },
                    { id: 'd', text: 'Dehaze', isCorrect: false },
                ],
                explanation: 'Correcting color first creates a stable foundation for every adjustment that follows.',
            },
            {
                id: 'q7',
                question: 'What is the difference between Highlights/Shadows and Whites/Blacks?',
                options: [
                    { id: 'a', text: 'There is no difference', isCorrect: false },
                    {
                        id: 'b',
                        text: 'Highlights/Shadows recover detail in specific ranges; Whites/Blacks set the true endpoints of the tonal range',
                        isCorrect: true,
                    },
                    { id: 'c', text: 'Whites/Blacks only work on black and white photos', isCorrect: false },
                    { id: 'd', text: 'Highlights/Shadows can only be used after export', isCorrect: false },
                ],
                explanation: 'Highlights and Shadows target specific brightness ranges, while Whites and Blacks define the true tonal endpoints.',
            },
            {
                id: 'q8',
                question: 'What does the Color Grading panel allow you to control independently?',
                options: [
                    { id: 'a', text: 'Only the overall exposure', isCorrect: false },
                    { id: 'b', text: 'Shadows, midtones, and highlights, each with their own color wheel', isCorrect: true },
                    { id: 'c', text: 'Only black and white conversion', isCorrect: false },
                    { id: 'd', text: 'File format on export', isCorrect: false },
                ],
                explanation: 'Color Grading offers three independent color wheels for shadows, midtones, and highlights, plus a global wheel.',
            },
            {
                id: 'q9',
                question: 'What is the main difference between a global and a local adjustment?',
                options: [
                    { id: 'a', text: 'Global adjustments only work on RAW files', isCorrect: false },
                    { id: 'b', text: 'Local adjustments target specific areas; global adjustments affect the entire photo', isCorrect: true },
                    { id: 'c', text: 'There is no difference', isCorrect: false },
                    { id: 'd', text: 'Local adjustments can only be undone once', isCorrect: false },
                ],
                explanation: 'Global adjustments apply evenly across the whole image, local adjustments target only a selected area.',
            },
            {
                id: 'q10',
                question: 'What does a Graduated Filter typically get used for?',
                options: [
                    { id: 'a', text: 'Removing dust spots', isCorrect: false },
                    { id: 'b', text: 'Darkening a bright sky while leaving the foreground untouched', isCorrect: true },
                    { id: 'c', text: 'Converting photos to black and white', isCorrect: false },
                    { id: 'd', text: 'Renaming files on import', isCorrect: false },
                ],
                explanation: 'The Graduated Filter applies a smooth linear transition, commonly used to balance a bright sky against a darker foreground.',
            },
            {
                id: 'q11',
                question: 'Which color space should always be used when exporting for web or social media?',
                options: [
                    { id: 'a', text: 'Adobe RGB', isCorrect: false },
                    { id: 'b', text: 'sRGB', isCorrect: true },
                    { id: 'c', text: 'ProPhoto RGB', isCorrect: false },
                    { id: 'd', text: 'CMYK', isCorrect: false },
                ],
                explanation: 'sRGB is correctly interpreted by web browsers and social platforms, preventing color shifts that Adobe RGB can cause online.',
            },
            {
                id: 'q12',
                question: 'What does Output Sharpening specifically compensate for?',
                options: [
                    { id: 'a', text: 'Camera lens distortion', isCorrect: false },
                    { id: 'b', text: 'The slight softening that occurs during resizing and compression', isCorrect: true },
                    { id: 'c', text: 'Incorrect white balance', isCorrect: false },
                    { id: 'd', text: 'Noise from high ISO shooting', isCorrect: false },
                ],
                explanation: 'Output Sharpening is separate from editing sharpening, compensating for softening introduced by the export process itself.',
            },
            {
                id: 'q13',
                question: 'What is the main benefit of saving an Export Preset?',
                options: [
                    { id: 'a', text: 'It automatically improves image quality', isCorrect: false },
                    { id: 'b', text: 'It lets you reuse the same export settings instantly without reconfiguring', isCorrect: true },
                    { id: 'c', text: 'It is required before any export can happen', isCorrect: false },
                    { id: 'd', text: 'It converts photos to black and white automatically', isCorrect: false },
                ],
                explanation: 'An Export Preset saves an entire configuration, letting you apply the same setup instantly for future exports.',
            },
            {
                id: 'q14',
                question: 'What is the correct high-level order of the full Lightroom workflow?',
                options: [
                    { id: 'a', text: 'Export → Import → Edit → Organize', isCorrect: false },
                    { id: 'b', text: 'Import → Organize → Correct Exposure/Color → Local Adjustments → Export', isCorrect: true },
                    { id: 'c', text: 'Organize → Export → Import → Edit', isCorrect: false },
                    { id: 'd', text: 'The order does not matter', isCorrect: false },
                ],
                explanation: 'Each stage builds on the one before it, following this order prevents rework and produces more consistent results.',
            },
            {
                id: 'q15',
                question: 'What is the single most common beginner mistake covered across this entire module?',
                options: [
                    { id: 'a', text: 'Using too many keywords', isCorrect: false },
                    { id: 'b', text: 'Moving or renaming files outside of Lightroom, breaking the catalog\'s file references', isCorrect: true },
                    { id: 'c', text: 'Exporting in TIFF format', isCorrect: false },
                    { id: 'd', text: 'Using Collections instead of folders', isCorrect: false },
                ],
                explanation: 'This single habit, performing file operations from inside Lightroom rather than in Finder or File Explorer, prevents the most common and frustrating beginner problem.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Complete Module Capstone',
        description: 'Demonstrate mastery of the entire Lightroom module by taking three photos through the complete workflow, start to finish.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Select 3 unedited photos and take each one through the complete Lightroom workflow, applying everything learned across Lessons 1-6.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Import:</strong> Import all 3 photos using correct folder structure, renaming, and metadata.</li>
        <li><strong>Step 2 - Organize:</strong> Flag, rate, keyword, and add each to an appropriate Collection.</li>
        <li><strong>Step 3 - Correct:</strong> Apply full exposure and color correction using the histogram as your guide.</li>
        <li><strong>Step 4 - Grade:</strong> Apply Tone Curve and Color Grading for a cohesive creative style across all 3 photos.</li>
        <li><strong>Step 5 - Refine:</strong> Add at least one local adjustment to each photo.</li>
        <li><strong>Step 6 - Export:</strong> Export all 3 using a saved preset appropriate to a real destination (web, social, or client).</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before/after screenshots for all 3 photos</li>
        <li>Screenshot of your Collections panel showing the organized photos</li>
        <li>Screenshot of the Export Preset used</li>
        <li>A written reflection (5-7 sentences) on which stage of the workflow you found most challenging, and what changed in your understanding from Lesson 1 to now</li>
      </ul>
    `,
        rubric: [
            'All 3 photos imported, organized, and correctly named following the taught folder structure',
            'Exposure and color correction applied consistently using histogram-based decisions',
            'Tone Curve and Color Grading applied for a cohesive creative result across all 3 photos',
            'At least one local adjustment applied to each photo',
            'Correct export preset used with appropriate settings for the stated destination',
            'Written reflection demonstrates genuine growth in understanding across the full module',
            'Overall results reflect a consistent, professional-level workflow',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'The complete Lightroom workflow moves from Import through Organization, Correction, Creative Grading, Local Adjustments, and finally Export',
            'A catalog only references your files, it never stores them, making correct file handling essential',
            'Consistent organization habits, flags, ratings, keywords, and Collections, make a growing library manageable indefinitely',
            'The histogram, not your screen, should guide every exposure and color decision',
            'Creative decisions like Tone Curve and Color Grading work best after the technical foundation is solid',
            'Local adjustments should refine and emphasize, not replace, a well-corrected global edit',
            'Export settings determine what everyone else actually sees, sRGB, correct sizing, and proper sharpening are non-negotiable',
            'A written personal workflow checklist turns six lessons of knowledge into one automatic habit',
        ],
        nextSteps: [
            'Apply your personal workflow checklist to your next 10 real photos without skipping a step',
            'Revisit any lesson where the knowledge check revealed a gap in understanding',
            'Begin preparing for Module 2, where these same principles extend into Adobe Photoshop',
            'Consider building a small portfolio using only photos edited with this complete workflow',
        ],
    },

    resources: [
        {
            title: 'Adobe Lightroom Classic Complete Documentation',
            url: 'https://helpx.adobe.com/lightroom-classic/user-guide.html',
            type: 'documentation',
        },
        {
            title: 'Full Lightroom Workflow Checklist Template (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Common Lightroom Mistakes and How to Avoid Them (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Lightroom Complete Workflow Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 8: Photoshop Workspace Essentials',
        description: 'Begin Module 2 by learning the Photoshop workspace, tools, and interface, building the foundation for layers, retouching, and advanced compositing.',
        topics: [
            'Navigating the Photoshop workspace and panels',
            'Understanding the toolbar and tool options',
            'Opening and preparing files from Lightroom in Photoshop',
            'Setting up an efficient Photoshop workflow',
        ],
    },
}