import type { LessonData } from '../types/course'

/**
 * Lesson 06: Export Workflow for Web
 * © Obara. All rights reserved.
 */
export const lesson06: LessonData = {
    id: 'lesson-6',
    title: 'Export Workflow for Web',
    moduleTitle: 'Adobe Lightroom',
    description:
        'Master the export settings that determine how your photos actually look and perform once they leave Lightroom, for web, social media, and client delivery.',
    lessonNumber: 6,
    duration: '35 min',
    difficulty: 'Beginner',
    xpReward: 50,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Export Workflow for Web',
        subheadline: 'A beautiful edit means nothing if the export settings ruin it, get every setting right, every time',
        keyBenefits: [
            'Understand every setting in the Export dialog and what it actually controls',
            'Export correctly sized, sharpened files for web and social media',
            'Protect your color accuracy with the right color space choice',
            'Build reusable export presets so you never reconfigure settings twice',
        ],
    },

    learningObjectives: [
        'Explain the difference between sRGB and Adobe RGB, and when to use each',
        'Choose appropriate file format and quality settings for different destinations',
        'Resize images correctly for web and social media without quality loss',
        'Apply output sharpening appropriate to the export destination',
        'Add watermarks and copyright metadata during export',
        'Build and reuse a custom export preset for repeatable, fast delivery',
    ],

    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'Continuing from Lessons 1-5 with fully edited photos ready to export',
                status: 'required',
            },
            {
                id: 'edited-photos',
                name: 'At least 5 fully edited photos',
                description: 'Photos with completed Basic panel and local adjustments applied',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'photos-edited',
                label: 'At least 5 photos with a completed edit',
                description: 'From Lessons 3-5, ready for final export',
            },
            {
                id: 'export-destination-known',
                label: 'Know where you\'re exporting to',
                description: 'Instagram, a website, a client, or general web use all require slightly different settings',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 35 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Opening and Understanding the Export Dialog',
            duration: '5 min',
            content: {
                heading: 'One Dialog, Many Consequences',
                body: 'The Export dialog, opened with File → Export or Cmd/Ctrl+Shift+E, controls every aspect of the final file that leaves Lightroom. A wrong setting here can undo hours of careful editing, oversized files load slowly, wrong color spaces shift colors, and missing sharpening leaves images looking soft.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Export a Selection, Not Everything',
                    content: 'Select only the specific photos you want to export before opening the dialog. Exporting your entire catalog by accident is a common and time-consuming beginner mistake.',
                },
            ],
            image: {
                caption: 'The Lightroom Export dialog showing the full list of setting categories on the left side',
            },
            subsections: [
                {
                    title: 'The Main Sections of the Export Dialog',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Export Location:</strong> Where the files are saved</li>
              <li><strong>File Naming:</strong> How exported files are named</li>
              <li><strong>File Settings:</strong> Format, quality, and color space</li>
              <li><strong>Image Sizing:</strong> Dimensions and resolution</li>
              <li><strong>Output Sharpening:</strong> Sharpening applied for the specific output</li>
              <li><strong>Watermarking:</strong> Optional copyright protection overlay</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: File Format, Quality, and Color Space',
            duration: '7 min',
            content: {
                heading: 'The Settings That Determine File Integrity',
                body: 'File Settings determine the format (usually JPEG for web), the compression quality, and critically, the color space, which determines how colors are interpreted by the screens and devices that will display your image.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Always Use sRGB for Web',
                    content: 'Adobe RGB has a wider color range but is not correctly interpreted by most web browsers and social media platforms, causing colors to look dull or shifted. Always select sRGB when exporting for any online destination.',
                },
            ],
            image: {
                caption: 'File Settings panel showing Format set to JPEG, Quality slider, and Color Space dropdown set to sRGB',
            },
            subsections: [
                {
                    title: 'Recommended Settings for Web Export',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Format:</strong> JPEG for web and social media, TIFF only for print or further editing</li>
              <li><strong>Quality:</strong> 70-85 balances file size and visual quality for most web use</li>
              <li><strong>Color Space:</strong> sRGB, always, for anything displayed online</li>
              <li><strong>Limit File Size To:</strong> Useful for platforms with strict upload size caps</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Resizing for Web and Social Media',
            duration: '7 min',
            content: {
                heading: 'Right-Sizing Your Images',
                body: 'Exporting a full-resolution RAW-derived file for web use wastes bandwidth and slows load times, while too small a file looks blurry when viewed at full size. Image Sizing settings let you resize precisely for the destination.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Common Web and Social Media Dimensions',
                    content: 'Instagram square posts: 1080x1080px. Website hero images: typically 2000-2500px on the long edge. General web use: 2048px on the long edge is a safe, versatile default.',
                },
            ],
            image: {
                caption: 'Image Sizing panel showing Width and Height fields, Resize To Fit dropdown, and Resolution setting',
            },
            subsections: [
                {
                    title: 'Understanding Resize To Fit Options',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Long Edge:</strong> Constrains the longer dimension, ideal for mixed portrait and landscape batches</li>
              <li><strong>Width & Height:</strong> Fits within a specific box, useful for platforms with exact requirements</li>
              <li><strong>Megapixels:</strong> Useful when file size matters more than exact pixel dimensions</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Output Sharpening',
            duration: '6 min',
            content: {
                heading: 'The Sharpening You Almost Always Need',
                body: 'Output Sharpening is separate from any sharpening applied in the Detail panel during editing. It compensates for the slight softening that happens during resizing and file compression, and should be matched to the export destination.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Match Sharpening to Destination',
                    content: 'Screen sharpening works well for web and social media. Matte and Glossy Paper options exist specifically for print output, using different sharpening algorithms suited to how ink absorbs into different paper types.',
                },
            ],
            image: {
                caption: 'Output Sharpening panel showing Sharpen For dropdown (Screen, Matte Paper, Glossy Paper) and Amount setting',
            },
            subsections: [
                {
                    title: 'Recommended Sharpening Amounts',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Screen, Standard:</strong> A safe default for most web and social exports</li>
              <li><strong>Screen, High:</strong> Useful for images that will be displayed smaller than their exported size</li>
              <li>Always zoom to 100% after export to confirm sharpening looks natural, not oversharpened with visible halos</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Watermarking and Metadata Protection',
            duration: '5 min',
            content: {
                heading: 'Protecting Your Work on the Way Out',
                body: 'Watermarking adds a visible copyright mark to exported images, useful for portfolio previews or client proofs before final delivery. Metadata settings also control whether personal information travels with the file.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Keep Watermarks Subtle',
                    content: 'A large, centered watermark ruins the viewing experience. A small, semi-transparent watermark in a corner protects your work without dominating the image.',
                },
            ],
            image: {
                caption: 'Watermarking panel showing a custom text watermark positioned in the bottom-right corner of a preview image',
            },
            subsections: [
                {
                    title: 'Metadata Export Options',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Copyright Only:</strong> Includes just your copyright notice, strips other personal data</li>
              <li><strong>All Except Camera & Camera Raw Info:</strong> Removes technical EXIF data while keeping copyright</li>
              <li>For client delivery, removing location data (GPS metadata) is often a privacy best practice</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Building a Reusable Export Preset',
            duration: '5 min',
            content: {
                heading: 'Never Reconfigure the Same Settings Twice',
                body: 'Once you\'ve dialed in the right settings for a destination, save them as an Export Preset. Future exports become a single click instead of reconfiguring six panels of settings every time.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Build One Preset Per Destination',
                    content: 'Create separate presets for Instagram, Website, and Client Delivery, each with the correct dimensions, quality, and sharpening already configured for that specific use.',
                },
            ],
            image: {
                caption: 'Export Presets panel in the left sidebar of the Export dialog, showing several custom saved presets',
            },
            subsections: [
                {
                    title: 'Saving an Export Preset',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Configure all Export dialog settings for your target destination</li>
              <li>Click the <strong>Add</strong> button in the Preset panel on the left</li>
              <li>Name it clearly, e.g. "Instagram Square" or "Client Delivery Full Res"</li>
              <li>Future exports: select the preset, then click Export, no reconfiguration needed</li>
            </ol>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Export a Set for Two Destinations',
        description: 'Export the same photos correctly for two different destinations, building reusable presets for each.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Select Your Export Photos',
                instruction: 'Select 5 fully edited photos from your catalog, ideally a mix from earlier lessons.',
                tips: [
                    'Use a Collection from Lesson 2 if you have one ready, it makes selection faster',
                ],
            },
            {
                title: 'Configure an Instagram Export',
                instruction: 'Open the Export dialog (Cmd/Ctrl+Shift+E). Set Format to JPEG, Quality to 80, Color Space to sRGB, and resize to 1080px on the long edge.',
                tips: [
                    'Set Output Sharpening to Screen, Standard for this export',
                ],
            },
            {
                title: 'Save This as a Preset',
                instruction: 'Click Add in the Preset panel and save these settings as "Instagram Export."',
                tips: [
                    'Test the preset works by re-selecting it before exporting',
                ],
            },
            {
                title: 'Export the Instagram Version',
                instruction: 'Click Export and choose a destination folder. Confirm all 5 photos export successfully.',
                tips: [
                    'Check file sizes afterward, they should be noticeably smaller than the originals',
                ],
            },
            {
                title: 'Configure a Client Delivery Export',
                instruction: 'Reopen the Export dialog. This time, set Quality to 92, resize to 2500px on the long edge, and add a subtle text watermark with your name.',
                tips: [
                    'Client delivery files are typically larger and higher quality than social media exports',
                ],
            },
            {
                title: 'Save and Export the Client Version',
                instruction: 'Save these settings as "Client Delivery" preset, then export the same 5 photos to a separate folder.',
                tips: [
                    'Compare both exported sets side by side to see the size and quality differences',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'Which color space should you use when exporting photos for web or social media?',
                options: [
                    { id: 'a', text: 'Adobe RGB', isCorrect: false },
                    { id: 'b', text: 'ProPhoto RGB', isCorrect: false },
                    { id: 'c', text: 'sRGB', isCorrect: true },
                    { id: 'd', text: 'CMYK', isCorrect: false },
                ],
                explanation: 'sRGB is the standard color space correctly interpreted by web browsers and social media platforms, preventing color shifts.',
            },
            {
                id: 'q2',
                question: 'What is a good default Quality setting for JPEG exports intended for web use?',
                options: [
                    { id: 'a', text: '10-20', isCorrect: false },
                    { id: 'b', text: '70-85', isCorrect: true },
                    { id: 'c', text: '100 always', isCorrect: false },
                    { id: 'd', text: 'Quality does not matter for JPEG', isCorrect: false },
                ],
                explanation: '70-85 Quality balances visual quality with reasonable file size for web use, avoiding both excessive compression artifacts and unnecessarily large files.',
            },
            {
                id: 'q3',
                question: 'What does Output Sharpening compensate for?',
                options: [
                    { id: 'a', text: 'Camera lens distortion', isCorrect: false },
                    { id: 'b', text: 'The slight softening that occurs during resizing and compression', isCorrect: true },
                    { id: 'c', text: 'Incorrect white balance', isCorrect: false },
                    { id: 'd', text: 'Noise from high ISO shooting', isCorrect: false },
                ],
                explanation: 'Output Sharpening is separate from editing sharpening, and specifically compensates for softening introduced by the export resizing process.',
            },
            {
                id: 'q4',
                question: 'What is a common recommended long-edge dimension for general web use?',
                options: [
                    { id: 'a', text: '300px', isCorrect: false },
                    { id: 'b', text: '2048px', isCorrect: true },
                    { id: 'c', text: '10000px', isCorrect: false },
                    { id: 'd', text: 'Dimensions do not matter for web export', isCorrect: false },
                ],
                explanation: '2048px on the long edge is a versatile default that balances image quality with reasonable file size for most web contexts.',
            },
            {
                id: 'q5',
                question: 'Why should watermarks generally be kept small and semi-transparent?',
                options: [
                    { id: 'a', text: 'Large watermarks are not supported by Lightroom', isCorrect: false },
                    { id: 'b', text: 'A subtle watermark protects work without dominating the viewing experience', isCorrect: true },
                    { id: 'c', text: 'Watermarks always reduce file size', isCorrect: false },
                    { id: 'd', text: 'Semi-transparent watermarks cannot be removed by others', isCorrect: false },
                ],
                explanation: 'A large, centered watermark disrupts the viewing experience, while a small, subtle one still provides protection without dominating the image.',
            },
            {
                id: 'q6',
                question: 'What is the main benefit of saving an Export Preset?',
                options: [
                    { id: 'a', text: 'It automatically improves image quality', isCorrect: false },
                    { id: 'b', text: 'It lets you reuse the same export settings instantly without reconfiguring', isCorrect: true },
                    { id: 'c', text: 'It is required before any export can happen', isCorrect: false },
                    { id: 'd', text: 'It converts photos to black and white automatically', isCorrect: false },
                ],
                explanation: 'An Export Preset saves an entire configuration of settings, letting you apply the same export setup with a single click for future exports.',
            },
            {
                id: 'q7',
                question: 'Why might you choose to remove GPS metadata before client delivery?',
                options: [
                    { id: 'a', text: 'GPS metadata slows down export speed significantly', isCorrect: false },
                    { id: 'b', text: 'It is a privacy best practice, since GPS data reveals exact shoot locations', isCorrect: true },
                    { id: 'c', text: 'Lightroom requires it to be removed before export', isCorrect: false },
                    { id: 'd', text: 'GPS metadata affects color accuracy', isCorrect: false },
                ],
                explanation: 'GPS metadata embedded in a file reveals the exact location a photo was taken, which can be a privacy concern depending on the subject and context.',
            },
            {
                id: 'q8',
                question: 'When is TIFF format generally preferred over JPEG for export?',
                options: [
                    { id: 'a', text: 'For all web and social media use', isCorrect: false },
                    { id: 'b', text: 'For print or files that will undergo further editing elsewhere', isCorrect: true },
                    { id: 'c', text: 'TIFF is never a valid export format', isCorrect: false },
                    { id: 'd', text: 'Only for black and white photos', isCorrect: false },
                ],
                explanation: 'TIFF preserves more image data without compression artifacts, making it preferable for print or additional editing, though its larger file size makes it unsuitable for typical web use.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Build a Two-Preset Export Workflow',
        description: 'Create and use two distinct, reusable export presets for different real-world delivery scenarios.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Using your edited photos, build a complete two-preset export system you can reuse on every future shoot.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Social Media Preset:</strong> Build and save an export preset optimized for Instagram or your platform of choice.</li>
        <li><strong>Step 2 - Client Delivery Preset:</strong> Build and save a separate, higher-quality export preset intended for a paying client, including a subtle watermark.</li>
        <li><strong>Step 3 - Export With Both:</strong> Export the same set of 5 photos using both presets into separate folders.</li>
        <li><strong>Step 4 - Compare:</strong> Review file sizes and visual quality between the two exports.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Screenshots of both saved Export Presets showing their full configuration</li>
        <li>The exported files from both presets (or screenshots of the destination folders showing file sizes)</li>
        <li>A short written comparison of the two exports, noting file size and any visible quality differences</li>
      </ul>
    `,
        rubric: [
            'Social media preset uses correct dimensions, sRGB color space, and appropriate quality setting',
            'Client delivery preset uses higher quality settings and includes a subtle watermark',
            'Both presets successfully saved and reused for export without reconfiguration',
            'Written comparison demonstrates understanding of why the two exports differ',
            'Correct file format chosen for each destination',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'The Export dialog controls every aspect of the final file, format, size, color space, and sharpening',
            'sRGB should always be used for web and social media exports to prevent color shifts',
            'JPEG Quality of 70-85 balances file size and visual quality for most web use',
            'Image dimensions should match the destination, oversized files waste bandwidth, undersized files look blurry',
            'Output Sharpening compensates for softening introduced during resizing, and should match the export destination',
            'Watermarks should be small and subtle to protect work without disrupting the viewing experience',
            'Export Presets eliminate the need to reconfigure the same settings for every export',
        ],
        nextSteps: [
            'Build export presets for every regular destination you deliver to',
            'Review exported files at 100% zoom to confirm sharpening and quality settings look correct',
            'Consider a consistent watermark and metadata policy across all client deliveries',
            'Continue to Lesson 7 to review the full Lightroom workflow and reinforce best practices before moving to Photoshop',
        ],
    },

    resources: [
        {
            title: 'Adobe Lightroom Classic Export Documentation',
            url: 'https://helpx.adobe.com/lightroom-classic/help/export-photos.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Understanding Color Spaces',
            url: 'https://helpx.adobe.com/lightroom-classic/help/export-photos.html',
            type: 'documentation',
        },
        {
            title: 'Export Settings Cheat Sheet for Web and Print (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Lightroom Export Workflow Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 7: Review and Lightroom Best Practices',
        description: 'Consolidate everything learned across the Lightroom module into a single, reliable end-to-end workflow before moving into Photoshop.',
        topics: [
            'Reviewing the complete import-to-export workflow',
            'Common mistakes to avoid at each stage',
            'Building a personal Lightroom workflow checklist',
            'Preparing for the transition into Adobe Photoshop',
        ],
    },
}