import type { LessonData } from '../types/course'

/**
 * Lesson 08: Photoshop Workspace Essentials
 * © Obara. All rights reserved.
 */
export const lesson08: LessonData = {
    id: 'lesson-8',
    title: 'Photoshop Workspace Essentials',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Get comfortable navigating Photoshop\'s workspace, tools, and panels, and learn how to bring photos from Lightroom into Photoshop for advanced editing.',
    lessonNumber: 8,
    duration: '40 min',
    difficulty: 'Beginner',
    xpReward: 55,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Photoshop Workspace Essentials',
        subheadline: 'A new tool with a different philosophy, pixels and layers instead of sliders and presets',
        keyBenefits: [
            'Navigate the Photoshop workspace confidently from day one',
            'Understand the core toolbar and how tool options change per tool',
            'Move seamlessly between Lightroom and Photoshop without losing quality',
            'Set up an efficient workspace layout for retouching and compositing work',
        ],
    },

    learningObjectives: [
        'Identify the main areas of the Photoshop workspace: toolbar, options bar, panels, and canvas',
        'Explain how Photoshop\'s pixel-based editing differs from Lightroom\'s parametric adjustments',
        'Open a photo from Lightroom into Photoshop while preserving quality and a two-way connection',
        'Navigate and organize panels for an efficient workflow',
        'Use basic navigation tools: Zoom, Hand, and view shortcuts',
        'Save a Photoshop file in the correct format for further editing versus final delivery',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'The latest version (2024 or later recommended)',
                status: 'required',
            },
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'Used to send a photo into Photoshop for this lesson',
                status: 'required',
            },
            {
                id: 'edited-photo',
                name: 'One fully edited photo from Module 1',
                description: 'Used to practice the Lightroom-to-Photoshop handoff',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'photoshop-installed',
                label: 'Adobe Photoshop installed and activated',
                description: 'Version 2024 or later',
            },
            {
                id: 'module1-complete',
                label: 'Completed Module 1 (Lessons 1-7)',
                description: 'This lesson assumes comfort with the Lightroom workflow already covered',
            },
            {
                id: 'photo-ready',
                label: 'One edited photo ready in your Lightroom catalog',
                description: 'You will send this into Photoshop during this lesson',
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
            title: 'Section 1: A Different Editing Philosophy',
            duration: '5 min',
            content: {
                heading: 'From Sliders to Pixels',
                body: 'Lightroom applies parametric adjustments, instructions stored as metadata that never touch the original pixels. Photoshop works directly with pixels, using layers, masks, and selections. This makes Photoshop more powerful for detailed retouching and compositing, but requires a different way of thinking about your edit.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Use Each Tool for What It Does Best',
                    content: 'Lightroom excels at global correction, organization, and fast batch work. Photoshop excels at pixel-level retouching, compositing, and complex selections. Most professional workflows use both, not one instead of the other.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison of Lightroom\'s slider-based Develop module and Photoshop\'s layer-based workspace',
            },
            subsections: [
                {
                    title: 'Key Conceptual Differences',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Lightroom:</strong> Non-destructive by default, edits stored as instructions, one photo per catalog entry</li>
              <li><strong>Photoshop:</strong> Can be destructive or non-destructive depending on technique, edits can exist as pixels or layers, supports combining multiple images</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Touring the Workspace',
            duration: '7 min',
            content: {
                heading: 'Four Areas You\'ll Use Constantly',
                body: 'The Photoshop workspace is organized into the Toolbar on the left, the Options Bar along the top, Panels on the right, and the Canvas in the center. Understanding what lives where makes everything else in this module easier to follow.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Press Tab to Hide Panels',
                    content: 'Press Tab to hide all panels and toolbars for a distraction-free view of your canvas, press it again to bring them back. Useful when you need maximum screen space to judge an edit.',
                },
            ],
            image: {
                caption: 'The full Photoshop workspace labeled: Toolbar (left), Options Bar (top), Panels (right), Canvas (center)',
            },
            subsections: [
                {
                    title: 'The Four Core Areas',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Toolbar:</strong> Contains every selection, painting, and retouching tool, along the left edge</li>
              <li><strong>Options Bar:</strong> Changes based on the currently selected tool, always along the top</li>
              <li><strong>Panels:</strong> Layers, Properties, History, and more, docked on the right by default</li>
              <li><strong>Canvas:</strong> The center working area showing your actual image</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: The Layers Panel',
            duration: '7 min',
            content: {
                heading: 'The Single Most Important Panel in Photoshop',
                body: 'Almost everything you do in Photoshop involves layers. A layer is an independent element stacked on top of others, like transparent sheets. Understanding the Layers panel early makes every later lesson in this module dramatically easier.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Name Your Layers as You Work',
                    content: 'Double-click a layer\'s name to rename it descriptively (e.g. "Skin Retouch" instead of "Layer 3"). This habit saves enormous time once a file has 15+ layers.',
                },
            ],
            image: {
                caption: 'The Layers panel showing several named layers stacked in order, with visibility toggles and opacity sliders',
            },
            subsections: [
                {
                    title: 'Layers Panel Basics',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Layers stack from bottom to top, higher layers appear in front</li>
              <li>The eye icon toggles a layer's visibility on and off</li>
              <li>Opacity controls how transparent a layer appears</li>
              <li>New layers are added with the icon at the bottom of the panel, or Shift+Cmd/Ctrl+N</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Sending a Photo from Lightroom to Photoshop',
            duration: '6 min',
            content: {
                heading: 'Keeping Your Two Applications Connected',
                body: 'Right-clicking a photo in Lightroom and choosing Edit In → Photoshop sends a copy into Photoshop while maintaining a connection back to your Lightroom catalog. Saving in Photoshop updates the version visible in Lightroom automatically.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Choose the Right File Format When Sending',
                    content: 'When prompted, Lightroom typically sends a TIFF or PSD file to preserve maximum quality. Avoid sending as a lossy JPEG for any photo you plan to retouch heavily, quality loss compounds with each edit.',
                },
            ],
            image: {
                caption: 'Lightroom\'s right-click menu showing Edit In → Photoshop, with the resulting file appearing stacked next to the original in the Lightroom grid',
            },
            subsections: [
                {
                    title: 'The Round-Trip Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>In Lightroom, right-click a photo → Edit In → Adobe Photoshop</li>
              <li>Photoshop opens automatically with the photo loaded</li>
              <li>Make your edits using layers and Photoshop-specific tools</li>
              <li>Save (Cmd/Ctrl+S), keeping the file in PSD or TIFF format</li>
              <li>Return to Lightroom, the edited version now appears automatically in your catalog</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Essential Navigation Tools',
            duration: '5 min',
            content: {
                heading: 'Moving Around Your Canvas Efficiently',
                body: 'Zooming and panning accurately is a foundational skill for any detailed retouching work later in this module. A few keyboard shortcuts make navigation nearly automatic, freeing your attention for the actual editing decisions.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Zoom to 100% Before Fine Retouching',
                    content: 'Press Cmd/Ctrl+1 to instantly zoom to 100%, the most accurate view for judging fine detail work like skin retouching or object removal.',
                },
            ],
            image: {
                caption: 'The Zoom and Hand tools in the toolbar, with the zoom percentage indicator visible in the bottom-left corner of the canvas',
            },
            subsections: [
                {
                    title: 'Core Navigation Shortcuts',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Spacebar (hold):</strong> Temporarily switches to the Hand tool for panning</li>
              <li><strong>Cmd/Ctrl + Plus/Minus:</strong> Zoom in and out</li>
              <li><strong>Cmd/Ctrl + 0:</strong> Fit the entire image to the window</li>
              <li><strong>Cmd/Ctrl + 1:</strong> Zoom to exactly 100%</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Saving Correctly for Different Purposes',
            duration: '5 min',
            content: {
                heading: 'Not Every File Format Is Interchangeable',
                body: 'Photoshop\'s native PSD format preserves layers, masks, and full editability, essential while a file is still a work in progress. Final delivery formats like JPEG or TIFF flatten layers and are meant for viewing, not further editing.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Always Keep a Layered Master File',
                    content: 'Save your working file as PSD before flattening or exporting a final version. If a client or platform ever needs a revision, you\'ll need the original layers, not just a flattened JPEG.',
                },
            ],
            image: {
                caption: 'Comparison of a PSD file\'s Layers panel (fully editable) versus a flattened JPEG (single background layer only)',
            },
            subsections: [
                {
                    title: 'When to Use Each Format',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>PSD:</strong> Your working master file, always keep this, preserves every layer</li>
              <li><strong>TIFF:</strong> High quality, sometimes used for print, can preserve layers</li>
              <li><strong>JPEG:</strong> Final delivery only, flattened, compressed, not for further editing</li>
            </ul>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Your First Lightroom-to-Photoshop Round Trip',
        description: 'Send a photo from Lightroom into Photoshop, explore the workspace, make a simple layer-based change, and return it to Lightroom.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Send a Photo to Photoshop',
                instruction: 'In Lightroom, right-click an edited photo from Module 1 and choose Edit In → Adobe Photoshop.',
                tips: [
                    'If prompted with format options, choose TIFF to preserve maximum quality',
                ],
            },
            {
                title: 'Explore the Workspace',
                instruction: 'Once Photoshop opens, locate the Toolbar, Options Bar, Layers panel, and Canvas. Press Tab to hide and reveal the interface.',
                tips: [
                    'Hover over any toolbar icon without clicking to see its name and keyboard shortcut',
                ],
            },
            {
                title: 'Add a New Layer',
                instruction: 'Click the New Layer icon at the bottom of the Layers panel. Double-click the new layer\'s name and rename it "Practice Layer."',
                tips: [
                    'This layer will be empty for now, that\'s expected, you\'re practicing the panel itself',
                ],
            },
            {
                title: 'Practice Navigation',
                instruction: 'Zoom to 100% with Cmd/Ctrl+1, pan around using the spacebar, then fit the image to your window with Cmd/Ctrl+0.',
                tips: [
                    'Try this a few times until it feels automatic, not something you have to think about',
                ],
            },
            {
                title: 'Save and Return to Lightroom',
                instruction: 'Save the file with Cmd/Ctrl+S, keeping it in PSD or TIFF format. Switch back to Lightroom and confirm the edited version now appears in your catalog.',
                tips: [
                    'The new version usually appears as a stacked variant next to the original in Lightroom\'s grid view',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What is the main difference between Lightroom and Photoshop\'s editing approach?',
                options: [
                    { id: 'a', text: 'Lightroom uses layers, Photoshop uses sliders', isCorrect: false },
                    { id: 'b', text: 'Lightroom applies non-destructive parametric adjustments, Photoshop works directly with pixels and layers', isCorrect: true },
                    { id: 'c', text: 'They are functionally identical', isCorrect: false },
                    { id: 'd', text: 'Photoshop cannot open RAW files', isCorrect: false },
                ],
                explanation: 'Lightroom stores edits as instructions applied to the original file, while Photoshop can directly manipulate pixels using layers and masks.',
            },
            {
                id: 'q2',
                question: 'What does pressing Tab do in the Photoshop workspace?',
                options: [
                    { id: 'a', text: 'Deletes the current layer', isCorrect: false },
                    { id: 'b', text: 'Hides and reveals all panels and toolbars', isCorrect: true },
                    { id: 'c', text: 'Saves the file', isCorrect: false },
                    { id: 'd', text: 'Switches to Lightroom', isCorrect: false },
                ],
                explanation: 'Tab toggles all interface panels for a distraction-free, maximized canvas view, useful when judging an edit.',
            },
            {
                id: 'q3',
                question: 'What is the correct way to send a photo from Lightroom into Photoshop?',
                options: [
                    { id: 'a', text: 'Export as JPEG, then manually open it in Photoshop', isCorrect: false },
                    { id: 'b', text: 'Right-click the photo → Edit In → Adobe Photoshop', isCorrect: true },
                    { id: 'c', text: 'Photoshop and Lightroom cannot be connected', isCorrect: false },
                    { id: 'd', text: 'Drag the photo directly onto the Photoshop icon in the dock', isCorrect: false },
                ],
                explanation: 'Edit In maintains the connection back to the Lightroom catalog, so the Photoshop edit appears automatically once saved.',
            },
            {
                id: 'q4',
                question: 'Why should you avoid sending a photo to Photoshop as a lossy JPEG for heavy retouching?',
                options: [
                    { id: 'a', text: 'JPEG files cannot be opened by Photoshop', isCorrect: false },
                    { id: 'b', text: 'Quality loss compounds with each edit and resave', isCorrect: true },
                    { id: 'c', text: 'JPEG files are always larger than TIFF files', isCorrect: false },
                    { id: 'd', text: 'There is no reason to avoid it', isCorrect: false },
                ],
                explanation: 'JPEG compression is lossy, meaning quality degrades further each time the file is edited and resaved, TIFF or PSD avoid this.',
            },
            {
                id: 'q5',
                question: 'What should you always keep as your working master file in Photoshop?',
                options: [
                    { id: 'a', text: 'A flattened JPEG', isCorrect: false },
                    { id: 'b', text: 'A layered PSD file', isCorrect: true },
                    { id: 'c', text: 'A PNG with transparency', isCorrect: false },
                    { id: 'd', text: 'It does not matter which format you keep', isCorrect: false },
                ],
                explanation: 'PSD preserves every layer and remains fully editable, essential if revisions are ever needed later.',
            },
            {
                id: 'q6',
                question: 'What keyboard shortcut zooms an image to exactly 100%?',
                options: [
                    { id: 'a', text: 'Cmd/Ctrl + 0', isCorrect: false },
                    { id: 'b', text: 'Cmd/Ctrl + 1', isCorrect: true },
                    { id: 'c', text: 'Spacebar', isCorrect: false },
                    { id: 'd', text: 'Tab', isCorrect: false },
                ],
                explanation: 'Cmd/Ctrl+1 zooms to exactly 100%, the most accurate zoom level for judging fine retouching detail.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Complete Your First Round Trip Workflow',
        description: 'Demonstrate a complete, correctly executed Lightroom-to-Photoshop workflow.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Select one edited photo from your Module 1 work and take it through a complete round-trip workflow.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Send to Photoshop:</strong> Use Edit In → Photoshop from Lightroom, choosing an appropriate high-quality format.</li>
        <li><strong>Step 2 - Explore and Organize:</strong> Add two new layers, name them descriptively, and toggle their visibility to confirm you understand the Layers panel.</li>
        <li><strong>Step 3 - Navigate:</strong> Practice zooming to 100%, fitting to window, and panning using the spacebar shortcut.</li>
        <li><strong>Step 4 - Save Correctly:</strong> Save your working file as PSD, keeping all layers intact.</li>
        <li><strong>Step 5 - Return to Lightroom:</strong> Confirm the edited version appears correctly back in your Lightroom catalog.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Screenshot of the Photoshop Layers panel showing your two named layers</li>
        <li>Screenshot confirming the file was saved as PSD</li>
        <li>Screenshot from Lightroom showing the round-tripped photo appearing in your catalog</li>
        <li>A short written note (2-3 sentences) on one difference you noticed between editing in Lightroom versus Photoshop</li>
      </ul>
    `,
        rubric: [
            'Photo successfully sent from Lightroom to Photoshop using Edit In',
            'At least two layers created and clearly, descriptively named',
            'Navigation shortcuts demonstrated correctly (100% zoom, fit to window)',
            'File saved correctly as PSD, preserving all layers',
            'Round-trip back to Lightroom completed successfully',
            'Written reflection shows genuine understanding of the Lightroom/Photoshop distinction',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Lightroom applies non-destructive, parametric adjustments; Photoshop works directly with pixels, layers, and masks',
            'The Photoshop workspace consists of the Toolbar, Options Bar, Panels, and Canvas',
            'The Layers panel is the most important panel in Photoshop, almost everything you do involves layers',
            'Edit In from Lightroom maintains a connection back to your catalog, saving in Photoshop updates it automatically',
            'Always send photos to Photoshop in a high-quality format like TIFF, never a lossy JPEG for heavy retouching',
            'Keyboard shortcuts for zoom and pan make navigation fast and automatic with practice',
            'PSD should always be kept as your working master file, flattened formats are for final delivery only',
        ],
        nextSteps: [
            'Practice navigating the Photoshop workspace until it feels as familiar as Lightroom\'s Develop module',
            'Build the habit of naming every layer as you create it, not after the file becomes complex',
            'Get comfortable with the Lightroom-to-Photoshop round trip before moving into detailed retouching',
            'Continue to Lesson 9 to learn layer management and Smart Objects in depth',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Workspace Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/workspace-basics.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Lightroom and Photoshop Round-Trip Workflow',
            url: 'https://helpx.adobe.com/photoshop/using/workspace-basics.html',
            type: 'documentation',
        },
        {
            title: 'Photoshop Workspace Keyboard Shortcuts Cheat Sheet (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Workspace Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 9: Layer Management and Smart Objects',
        description: 'Go deeper into layers, learning layer groups, blend modes, and Smart Objects for flexible, non-destructive Photoshop editing.',
        topics: [
            'Organizing complex files with layer groups',
            'Understanding blend modes',
            'Converting layers to Smart Objects for non-destructive editing',
            'Applying and editing Smart Filters',
        ],
    },
}