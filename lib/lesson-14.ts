import type { LessonData } from '../types/course'

/**
 * Lesson 14: Preparing Files for Print and Web
 * © Obara. All rights reserved.
 */
export const lesson14: LessonData = {
    id: 'lesson-14',
    title: 'Preparing Files for Print and Web',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Learn the technical requirements for preparing finished Photoshop files correctly for print production and web delivery, so your work looks exactly as intended in either medium.',
    lessonNumber: 14,
    duration: '38 min',
    difficulty: 'Beginner',
    xpReward: 55,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Preparing Files for Print and Web',
        subheadline: 'The same file needs different treatment depending on whether it ends up on paper or on a screen',
        keyBenefits: [
            'Understand the difference between RGB and CMYK, and why it matters for print',
            'Set correct resolution for print versus web output',
            'Flatten and prepare layered files correctly for each destination',
            'Avoid the most common file preparation mistakes that ruin finished work',
        ],
    },

    learningObjectives: [
        'Explain the difference between RGB and CMYK color modes',
        'Set appropriate resolution (PPI) for print versus screen display',
        'Convert a file to CMYK correctly for print production',
        'Flatten layered files appropriately without losing your master PSD',
        'Choose correct file formats for different print and web destinations',
        'Identify common file preparation mistakes before they become expensive print errors',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'Continuing from Lessons 8-11 with a finished, retouched composite',
                status: 'required',
            },
            {
                id: 'finished-file',
                name: 'A finished, layered PSD file',
                description: 'From earlier Photoshop lessons, ready for final output preparation',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'finished-psd',
                label: 'A finished, layered PSD file ready for output',
                description: 'From your retouching or compositing work in earlier lessons',
            },
            {
                id: 'destination-known',
                label: 'Know whether this file is going to print, web, or both',
                description: 'The correct settings differ significantly between the two',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 38 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: RGB vs. CMYK',
            duration: '7 min',
            content: {
                heading: 'Two Completely Different Ways of Making Color',
                body: 'RGB (Red, Green, Blue) is a light-based color model used by screens, adding light creates brighter colors. CMYK (Cyan, Magenta, Yellow, Black) is an ink-based model used by most commercial printing, mixing inks creates darker colors. Colors that look vivid in RGB can appear duller once converted to CMYK.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Never Send RGB Files Directly to a Commercial Printer',
                    content: 'Some printers will convert RGB to CMYK automatically, often with unpredictable results. Always convert to CMYK yourself first so you can see and correct any color shifts before printing.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison of the same image in RGB and CMYK, showing a visible shift in vibrant colors like saturated blues and greens',
            },
            subsections: [
                {
                    title: 'When to Use Each',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>RGB:</strong> All web, social media, digital display, and screen-based delivery</li>
              <li><strong>CMYK:</strong> Commercial offset or digital printing, magazines, brochures, packaging</li>
              <li>Some large-format or photo lab printing accepts RGB directly, always confirm with your specific printer</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Converting to CMYK Correctly',
            duration: '7 min',
            content: {
                heading: 'Managing the Color Shift Intentionally',
                body: 'Converting from RGB to CMYK (Image → Mode → CMYK Color) often causes visible color shifts, particularly in saturated blues, greens, and oranges. Doing this conversion deliberately, with time to correct any resulting dullness, prevents unpleasant surprises after printing.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Convert Early, Not at the Last Minute',
                    content: 'Convert to CMYK with enough time to review and adjust for any color shift, rather than converting minutes before sending a file to print. Colors that shift unexpectedly may need Curves or Hue/Saturation adjustments to correct.',
                },
            ],
            image: {
                caption: 'Image → Mode menu showing the CMYK Color option, with a preview showing a saturated blue shifting slightly duller after conversion',
            },
            subsections: [
                {
                    title: 'After Converting',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Compare the converted image against your RGB original</li>
              <li>Use Curves or Hue/Saturation to boost any colors that appear noticeably duller</li>
              <li>Flatten only after you're satisfied with the corrected CMYK result</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Resolution for Print vs. Web',
            duration: '7 min',
            content: {
                heading: 'Why 72 vs. 300 PPI Actually Matters',
                body: 'Resolution, measured in pixels per inch (PPI), determines how sharp an image appears at a given physical size. Print requires much higher resolution than screens because printed materials are viewed up close, while screens display at a fixed pixel density regardless of the PPI value in the file.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Standard Resolution Guidelines',
                    content: 'Use 300 PPI for standard print materials viewed up close, like photos or brochures. Use 150 PPI for large-format prints viewed from a distance, like posters or banners. Web images only need 72 PPI, since browsers display based on pixel dimensions, not PPI.',
                },
            ],
            image: {
                caption: 'Image Size dialog comparing the same image set to 300 PPI for print versus 72 PPI for web, with resulting file dimensions shown',
            },
            subsections: [
                {
                    title: 'A Common Misconception',
                    content: `
            <p>Simply changing the PPI value in Photoshop without resampling does not change the actual pixel dimensions or file size, it only changes the intended print size. Always check "Resample" if you actually need to add or remove pixel data.</p>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Flattening and Preserving Your Master File',
            duration: '6 min',
            content: {
                heading: 'One File to Keep, One File to Deliver',
                body: 'Flattening merges all layers into a single background layer, required for most final output formats like JPEG. This should always happen on a copy of your file, never your original layered PSD master.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Never Flatten Your Only Copy',
                    content: 'Use File → Save As to create a flattened copy with a different filename, or File → Save a Copy, keeping your original layered PSD completely untouched and available for future revisions.',
                },
            ],
            image: {
                caption: 'Two files side by side: "Portrait_Master.psd" with full layers, and "Portrait_Final_Flat.jpg" as a single flattened layer',
            },
            subsections: [
                {
                    title: 'A Safe Flattening Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Confirm your layered PSD master is saved and complete</li>
              <li>Use File → Save As, choosing a new filename indicating it's the final version</li>
              <li>Flatten the image (Layer → Flatten Image) on this new copy only</li>
              <li>Export or save in your final delivery format from this flattened copy</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Choosing the Right File Format',
            duration: '6 min',
            content: {
                heading: 'Matching Format to Destination',
                body: 'Different destinations expect different file formats, each with tradeoffs between quality, file size, and compatibility. Choosing incorrectly can mean rejected print files or unnecessarily large web images.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'When in Doubt for Print, Ask',
                    content: 'Print requirements vary significantly between printers and processes. Always confirm the expected format, color mode, and resolution with your specific print provider before finalizing.',
                },
            ],
            image: {
                caption: 'A comparison table showing common formats (JPEG, TIFF, PDF, PNG) alongside their typical use cases',
            },
            subsections: [
                {
                    title: 'Common Format Guidelines',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>JPEG:</strong> Standard for web and most digital delivery, avoid for high-end print due to compression</li>
              <li><strong>TIFF:</strong> High quality, widely accepted for professional print production</li>
              <li><strong>PDF:</strong> Common for print-ready documents, especially multi-page or press-ready files</li>
              <li><strong>PNG:</strong> Best for web graphics requiring transparency</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Common File Preparation Mistakes',
            duration: '5 min',
            content: {
                heading: 'Errors That Are Expensive to Catch Late',
                body: 'Most file preparation mistakes are invisible on screen but become obvious, and costly, once printed or published. A short final checklist catches these before they become a real problem.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'The Most Costly Mistake: Wrong Color Mode at Print',
                    content: 'Sending an RGB file to a printer expecting CMYK, without reviewing the conversion yourself, is the single most common and expensive file preparation mistake in professional work.',
                },
            ],
            image: {
                caption: 'A final pre-delivery checklist showing color mode, resolution, format, and flattening status all confirmed correct',
            },
            subsections: [
                {
                    title: 'A Final Checklist Before Delivery',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Correct color mode confirmed (RGB for web, CMYK for most print)</li>
              <li>Resolution appropriate for the destination (72 PPI web, 300 PPI standard print)</li>
              <li>Layered master PSD saved and preserved separately</li>
              <li>Final file flattened and exported in the correct format</li>
              <li>File size reasonable for its destination, not needlessly oversized</li>
            </ul>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Prepare One File for Both Destinations',
        description: 'Take a single finished file and correctly prepare separate versions for web and print delivery.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Save Your Layered Master',
                instruction: 'Confirm your finished, layered PSD is saved with a clear filename indicating it\'s the master file.',
                tips: [
                    'This file should never be flattened or overwritten going forward',
                ],
            },
            {
                title: 'Prepare a Web Version',
                instruction: 'Use Save As to create a copy. Resize to 2048px on the long edge at 72 PPI, keep the color mode as RGB, flatten, and export as JPEG at 80 quality.',
                tips: [
                    'Confirm Resample is checked when resizing to actually reduce pixel dimensions',
                ],
            },
            {
                title: 'Prepare a Print Version',
                instruction: 'From your original master, create a second copy. Set resolution to 300 PPI at your intended print size, convert to CMYK, and review for any color shift.',
                tips: [
                    'Correct any noticeably dulled colors with Curves or Hue/Saturation before flattening',
                ],
            },
            {
                title: 'Flatten and Export the Print Version',
                instruction: 'Once satisfied with the CMYK color correction, flatten the image and save as TIFF or PDF depending on your printer\'s requirements.',
                tips: [
                    'Double-check with your printer if unsure which format they require',
                ],
            },
            {
                title: 'Compare All Three Files',
                instruction: 'Confirm you now have three distinct files: the layered PSD master, the web-ready JPEG, and the print-ready TIFF or PDF.',
                tips: [
                    'Organize these clearly in your file system so future you doesn\'t confuse them',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What color mode should be used for images displayed on screens?',
                options: [
                    { id: 'a', text: 'CMYK', isCorrect: false },
                    { id: 'b', text: 'RGB', isCorrect: true },
                    { id: 'c', text: 'Grayscale', isCorrect: false },
                    { id: 'd', text: 'It does not matter', isCorrect: false },
                ],
                explanation: 'RGB is the light-based color model used by all screens and digital displays.',
            },
            {
                id: 'q2',
                question: 'Why should you convert to CMYK yourself before sending a file to a commercial printer?',
                options: [
                    { id: 'a', text: 'Printers cannot accept RGB files at all', isCorrect: false },
                    { id: 'b', text: 'It lets you see and correct any color shift before printing, rather than being surprised', isCorrect: true },
                    { id: 'c', text: 'CMYK files are always smaller', isCorrect: false },
                    { id: 'd', text: 'There is no benefit to converting yourself', isCorrect: false },
                ],
                explanation: 'Converting yourself gives you the opportunity to review and correct any dulled colors before the file is printed, rather than relying on an automatic, unreviewed conversion.',
            },
            {
                id: 'q3',
                question: 'What resolution is standard for print materials viewed up close?',
                options: [
                    { id: 'a', text: '72 PPI', isCorrect: false },
                    { id: 'b', text: '300 PPI', isCorrect: true },
                    { id: 'c', text: '10 PPI', isCorrect: false },
                    { id: 'd', text: 'Resolution does not matter for print', isCorrect: false },
                ],
                explanation: '300 PPI is the standard resolution for print materials viewed up close, ensuring sharp, detailed output.',
            },
            {
                id: 'q4',
                question: 'What is the correct approach to flattening a finished file?',
                options: [
                    { id: 'a', text: 'Flatten your only layered PSD directly', isCorrect: false },
                    { id: 'b', text: 'Save a copy first, then flatten only the copy, preserving the original layered master', isCorrect: true },
                    { id: 'c', text: 'Flattening is never necessary', isCorrect: false },
                    { id: 'd', text: 'Flatten before making any edits', isCorrect: false },
                ],
                explanation: 'Flattening should always happen on a saved copy, keeping the original layered PSD available for future revisions.',
            },
            {
                id: 'q5',
                question: 'Which file format is best suited for web graphics requiring transparency?',
                options: [
                    { id: 'a', text: 'JPEG', isCorrect: false },
                    { id: 'b', text: 'PNG', isCorrect: true },
                    { id: 'c', text: 'CMYK', isCorrect: false },
                    { id: 'd', text: 'RAW', isCorrect: false },
                ],
                explanation: 'PNG supports transparency and is the standard choice for web graphics that need a transparent background.',
            },
            {
                id: 'q6',
                question: 'What is considered the single most common and expensive file preparation mistake?',
                options: [
                    { id: 'a', text: 'Using too many layers', isCorrect: false },
                    { id: 'b', text: 'Sending an RGB file to print without reviewing the CMYK conversion', isCorrect: true },
                    { id: 'c', text: 'Naming files descriptively', isCorrect: false },
                    { id: 'd', text: 'Saving a layered PSD master file', isCorrect: false },
                ],
                explanation: 'Unreviewed RGB-to-CMYK conversion at the printer\'s end can produce unpredictable, costly color shifts that could have been caught and corrected beforehand.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Prepare a Complete Delivery Package',
        description: 'Prepare one finished file correctly for both web and print delivery, demonstrating full technical understanding.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Using a finished, layered file from earlier lessons, prepare a complete, correctly formatted delivery package.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Preserve the Master:</strong> Confirm your layered PSD master is saved and untouched.</li>
        <li><strong>Step 2 - Web Version:</strong> Create a web-ready JPEG at 72 PPI, RGB, appropriately resized and flattened.</li>
        <li><strong>Step 3 - Print Version:</strong> Create a print-ready file at 300 PPI, converted to CMYK, with any color shift corrected.</li>
        <li><strong>Step 4 - Final Checklist:</strong> Confirm color mode, resolution, format, and flattening status for both versions.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Screenshot of the Image Size dialog showing both web and print resolution settings</li>
        <li>Before/after screenshot showing any color correction made after CMYK conversion</li>
        <li>The three final files: layered PSD master, web JPEG, and print TIFF or PDF (or screenshots confirming each exists)</li>
        <li>A written note (2-3 sentences) on one difference you noticed between the RGB and CMYK versions of your file</li>
      </ul>
    `,
        rubric: [
            'Layered PSD master preserved and untouched throughout the process',
            'Web version correctly set to 72 PPI, RGB, and an appropriate file size',
            'Print version correctly converted to CMYK at 300 PPI, with color shift addressed',
            'Correct file formats chosen for each destination',
            'Final checklist items all confirmed and accurate',
            'Written reflection demonstrates genuine understanding of the RGB/CMYK distinction',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'RGB is a light-based color model for screens; CMYK is an ink-based model for most commercial printing',
            'Converting to CMYK often causes visible color shifts that should be corrected before finalizing',
            '300 PPI is standard for close-viewed print, 72 PPI is sufficient for web, since browsers display by pixel dimensions',
            'Always flatten a saved copy, never your original layered PSD master',
            'File format should match the destination: JPEG or PNG for web, TIFF or PDF for most print production',
            'The most expensive, common mistake is sending an unreviewed RGB file to a CMYK print process',
            'A short final checklist before delivery catches nearly all common preparation mistakes',
        ],
        nextSteps: [
            'Build a personal checklist template for every file leaving your workflow',
            'Practice CMYK conversion until judging and correcting color shift becomes fast and confident',
            'Confirm requirements directly with printers for any unfamiliar print process before delivery',
            'Continue to Lesson 15, the Capstone Project, to bring every skill from this course together',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Color Modes Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/color-modes.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Preparing Images for Print',
            url: 'https://helpx.adobe.com/photoshop/using/printing-photoshop.html',
            type: 'documentation',
        },
        {
            title: 'Print vs. Web File Preparation Checklist (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Print Preparation Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 15: Capstone: Publish a Full Photo Edit',
        description: 'Bring together everything learned across the entire course into one complete, portfolio-ready photo edit, from import to final delivery.',
        topics: [
            'Selecting and planning a capstone project',
            'Applying the complete Lightroom and Photoshop workflow end-to-end',
            'Preparing final deliverables for both web and print',
            'Presenting a finished, professional-quality piece of work',
        ],
    },
}