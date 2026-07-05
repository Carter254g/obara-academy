import type { LessonData } from '../types/course'

/**
 * Lesson 09: Layer Management and Smart Objects
 * © Obara. All rights reserved.
 */
export const lesson09: LessonData = {
    id: 'lesson-9',
    title: 'Layer Management and Smart Objects',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Organize complex files with layer groups and blend modes, and use Smart Objects to edit non-destructively at every stage of a Photoshop project.',
    lessonNumber: 9,
    duration: '48 min',
    difficulty: 'Intermediate',
    xpReward: 60,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Layer Management and Smart Objects',
        subheadline: 'Keep complex files organized and fully editable, no matter how many layers deep you go',
        keyBenefits: [
            'Organize dozens of layers into clean, collapsible groups',
            'Understand blend modes and how they change layer interaction',
            'Convert layers to Smart Objects for fully non-destructive editing',
            'Apply and re-edit Smart Filters at any point in your workflow',
        ],
    },

    learningObjectives: [
        'Organize layers into named, nested groups for complex files',
        'Explain what blend modes are and apply common ones correctly',
        'Convert a layer to a Smart Object and explain why that matters',
        'Apply filters non-destructively as Smart Filters',
        'Scale and transform Smart Objects without quality loss',
        'Build a clean, professional layer structure habit for every project',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'Continuing from Lesson 8 with workspace familiarity established',
                status: 'required',
            },
            {
                id: 'lesson8-file',
                name: 'A PSD file from Lesson 8',
                description: 'Or any photo with a few layers already created',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson8-complete',
                label: 'Completed Lesson 8 with workspace and Layers panel familiarity',
                description: 'This lesson builds directly on basic layer knowledge',
            },
            {
                id: 'psd-ready',
                label: 'A PSD file open with at least 2-3 layers',
                description: 'From Lesson 8, or a fresh file created for this lesson',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 48 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Organizing Layers Into Groups',
            duration: '7 min',
            content: {
                heading: 'Taming Files With Dozens of Layers',
                body: 'A real retouching or compositing project can easily accumulate 20-50 layers. Layer Groups, folders that contain related layers, keep the Layers panel manageable, collapsible, and easy to navigate even in complex files.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Group by Purpose, Not by Layer Type',
                    content: 'Organize groups around what they accomplish, "Skin Retouching," "Color Grading," "Background," rather than generic labels like "Group 1." This makes returning to a file months later far easier.',
                },
            ],
            image: {
                caption: 'Layers panel showing several collapsed groups with descriptive names like "Skin Retouching" and "Background Cleanup"',
            },
            subsections: [
                {
                    title: 'Creating and Using Groups',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Select multiple layers by Cmd/Ctrl-clicking each one</li>
              <li>Press Cmd/Ctrl+G to group them</li>
              <li>Double-click the group name to rename it descriptively</li>
              <li>Click the disclosure triangle to expand or collapse the group</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Understanding Blend Modes',
            duration: '8 min',
            content: {
                heading: 'Controlling How Layers Interact',
                body: 'Blend modes determine how a layer\'s pixels combine with the layers beneath it. Instead of simply covering what\'s below, a layer can multiply, screen, overlay, or interact in dozens of other mathematical ways, unlocking effects impossible with opacity alone.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Start With These Four',
                    content: 'Multiply darkens, Screen lightens, Overlay adds contrast while preserving highlights and shadows, and Soft Light applies a gentler version of Overlay. These four cover most practical retouching and compositing needs.',
                },
            ],
            image: {
                caption: 'Layers panel blend mode dropdown showing options like Normal, Multiply, Screen, and Overlay, with a preview of each effect',
            },
            subsections: [
                {
                    title: 'Common Blend Mode Use Cases',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Multiply:</strong> Darkening shadows, adding depth without a new selection</li>
              <li><strong>Screen:</strong> Brightening highlights, adding light effects like glows</li>
              <li><strong>Overlay:</strong> Adding contrast and punch while preserving pure blacks and whites</li>
              <li><strong>Soft Light:</strong> Subtle dodge and burn work, gentler than Overlay</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: What Smart Objects Actually Are',
            duration: '7 min',
            content: {
                heading: 'A Container That Protects Your Original Data',
                body: 'A Smart Object wraps a layer, or an entire file, inside a protective container. Transformations like scaling, filters, and adjustments applied to a Smart Object remain fully editable and reversible, because the original pixel data underneath is never permanently altered.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Regular Layers Lose Quality When Scaled Repeatedly',
                    content: 'Scaling a regular layer down and back up degrades image quality permanently. A Smart Object remembers its original size, so scaling can be adjusted repeatedly without any quality loss.',
                },
            ],
            image: {
                caption: 'Layers panel showing a Smart Object layer, identifiable by its distinctive layer thumbnail icon',
            },
            subsections: [
                {
                    title: 'Converting a Layer to a Smart Object',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Right-click the layer in the Layers panel</li>
              <li>Choose <strong>Convert to Smart Object</strong></li>
              <li>The layer thumbnail updates with a small icon indicating it's now a Smart Object</li>
              <li>Double-click the thumbnail at any time to open and edit the original content in its own window</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Smart Filters',
            duration: '7 min',
            content: {
                heading: 'Filters You Can Adjust or Remove Later',
                body: 'Applying a filter, like Gaussian Blur or Sharpen, directly to a regular layer is permanent. Applying the same filter to a Smart Object creates a Smart Filter, listed separately beneath the layer, fully editable or removable at any time.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Always Filter Smart Objects, Not Regular Layers',
                    content: 'Before applying any filter you might want to adjust later, convert the layer to a Smart Object first. The extra step takes seconds and can save hours of rework.',
                },
            ],
            image: {
                caption: 'Layers panel showing a Smart Object with a Smart Filter (Gaussian Blur) nested beneath it, with its own visibility toggle',
            },
            subsections: [
                {
                    title: 'Editing a Smart Filter Later',
                    content: `
            <p>Double-click the filter's name beneath the Smart Object layer to reopen its settings and adjust them, exactly as if you were applying it for the first time. Toggle the filter's visibility independently using its own eye icon, without affecting the Smart Object itself.</p>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Transforming Smart Objects Safely',
            duration: '6 min',
            content: {
                heading: 'Scale, Rotate, and Warp Without Regret',
                body: 'Smart Objects can be transformed, scaled, rotated, warped, as many times as needed, always calculating from the original embedded data rather than the current, potentially already-degraded pixels.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Free Transform Works the Same Way',
                    content: 'Press Cmd/Ctrl+T to enter Free Transform on a Smart Object exactly as you would on a regular layer, the only difference is that repeated transformations don\'t compound quality loss.',
                },
            ],
            image: {
                caption: 'A Smart Object being scaled down significantly, then scaled back up, showing no visible quality degradation',
            },
            subsections: [
                {
                    title: 'When This Matters Most',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Compositing multiple images of different original sizes together</li>
              <li>Placing a logo or graphic that might need resizing later for different uses</li>
              <li>Any element you're not yet certain about the final size or position of</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Building a Clean Layer Structure Habit',
            duration: '6 min',
            content: {
                heading: 'Organization Compounds Over the Life of a Project',
                body: 'A file with clear group names, consistent Smart Object usage, and logical layer order is dramatically faster to revise, hand off to a collaborator, or return to after weeks away, compared to an unorganized stack of unnamed layers.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'A Reliable Structure Template',
                    content: 'From bottom to top: Background, Base Retouching group, Color and Tone Adjustments group, Compositing Elements group (as Smart Objects), Final Sharpening as a Smart Filter on a merged Smart Object.',
                },
            ],
            image: {
                caption: 'A fully organized Layers panel showing this exact bottom-to-top structure with clear group names',
            },
            subsections: [
                {
                    title: 'Habits Worth Building Now',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Name every layer and group as you create it, never "later"</li>
              <li>Convert to Smart Object before applying any filter you might revisit</li>
              <li>Color-code critical groups (right-click the group → Color Label) for fast visual scanning</li>
            </ul>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Build an Organized, Non-Destructive File',
        description: 'Take a working file and organize it into groups, apply a blend mode, and convert a layer to a Smart Object with a Smart Filter.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Organize Existing Layers Into a Group',
                instruction: 'Open your PSD from Lesson 8. Select all existing layers, press Cmd/Ctrl+G, and rename the group descriptively.',
                tips: [
                    'If you only have one or two layers, duplicate one first to have enough to practice grouping',
                ],
            },
            {
                title: 'Experiment With a Blend Mode',
                instruction: 'Duplicate a layer, set its blend mode to Multiply, and observe the effect. Try Screen and Overlay as well, comparing each result.',
                tips: [
                    'Toggle the layer\'s visibility off and on to clearly see each blend mode\'s effect',
                ],
            },
            {
                title: 'Convert a Layer to a Smart Object',
                instruction: 'Right-click any layer and choose Convert to Smart Object. Confirm the layer thumbnail icon has changed.',
                tips: [
                    'Try scaling this layer down and back up to test that quality is preserved',
                ],
            },
            {
                title: 'Apply a Smart Filter',
                instruction: 'With the Smart Object selected, apply Filter → Blur → Gaussian Blur. Confirm it appears nested beneath the layer as an editable Smart Filter.',
                tips: [
                    'Double-click the filter name afterward to confirm you can still adjust its settings',
                ],
            },
            {
                title: 'Review Your Final Structure',
                instruction: 'Confirm your Layers panel shows a clean group, a blend mode applied, and a Smart Object with a nested Smart Filter, all clearly named.',
                tips: [
                    'This structure is the foundation you\'ll build on for the rest of the Photoshop module',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What keyboard shortcut groups selected layers together?',
                options: [
                    { id: 'a', text: 'Cmd/Ctrl + G', isCorrect: true },
                    { id: 'b', text: 'Cmd/Ctrl + T', isCorrect: false },
                    { id: 'c', text: 'Cmd/Ctrl + E', isCorrect: false },
                    { id: 'd', text: 'Cmd/Ctrl + J', isCorrect: false },
                ],
                explanation: 'Cmd/Ctrl+G groups all currently selected layers into a single, collapsible folder in the Layers panel.',
            },
            {
                id: 'q2',
                question: 'Which blend mode is most commonly used to darken an image or add shadow depth?',
                options: [
                    { id: 'a', text: 'Screen', isCorrect: false },
                    { id: 'b', text: 'Multiply', isCorrect: true },
                    { id: 'c', text: 'Normal', isCorrect: false },
                    { id: 'd', text: 'Dissolve', isCorrect: false },
                ],
                explanation: 'Multiply darkens an image based on the layers beneath it, commonly used for shadows and added depth.',
            },
            {
                id: 'q3',
                question: 'What is the main advantage of a Smart Object over a regular layer?',
                options: [
                    { id: 'a', text: 'Smart Objects load faster', isCorrect: false },
                    { id: 'b', text: 'Transformations and filters remain fully editable and don\'t degrade original quality', isCorrect: true },
                    { id: 'c', text: 'Smart Objects cannot be moved', isCorrect: false },
                    { id: 'd', text: 'There is no meaningful difference', isCorrect: false },
                ],
                explanation: 'Smart Objects preserve original pixel data, allowing scaling and filtering to remain non-destructive and fully editable.',
            },
            {
                id: 'q4',
                question: 'What happens when you apply a filter to a Smart Object instead of a regular layer?',
                options: [
                    { id: 'a', text: 'The filter cannot be applied', isCorrect: false },
                    { id: 'b', text: 'It becomes a Smart Filter, remaining editable and removable later', isCorrect: true },
                    { id: 'c', text: 'The filter is applied permanently with no way to adjust it', isCorrect: false },
                    { id: 'd', text: 'The Smart Object is converted back to a regular layer', isCorrect: false },
                ],
                explanation: 'Filters applied to Smart Objects become Smart Filters, which can be reopened, adjusted, or removed at any time.',
            },
            {
                id: 'q5',
                question: 'Why is scaling a regular layer down and back up problematic?',
                options: [
                    { id: 'a', text: 'It is not actually problematic', isCorrect: false },
                    { id: 'b', text: 'It permanently degrades image quality', isCorrect: true },
                    { id: 'c', text: 'It automatically deletes the layer', isCorrect: false },
                    { id: 'd', text: 'It changes the layer\'s blend mode', isCorrect: false },
                ],
                explanation: 'Regular layers recalculate from their current pixel data each time, causing cumulative quality loss with repeated scaling.',
            },
            {
                id: 'q6',
                question: 'What is a good practice when naming layer groups?',
                options: [
                    { id: 'a', text: 'Use generic names like "Group 1," "Group 2"', isCorrect: false },
                    { id: 'b', text: 'Name groups by their purpose, like "Skin Retouching" or "Color Grading"', isCorrect: true },
                    { id: 'c', text: 'Groups do not need names', isCorrect: false },
                    { id: 'd', text: 'Only rename groups right before final export', isCorrect: false },
                ],
                explanation: 'Descriptive, purpose-based names make a complex file far easier to navigate and understand later, including for other collaborators.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Build a Fully Non-Destructive File',
        description: 'Demonstrate professional layer organization and non-destructive editing practices in a single Photoshop file.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Build one Photoshop file demonstrating complete non-destructive organization, using everything from this lesson.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Group Your Layers:</strong> Organize at least 4 layers into at least 2 clearly named groups.</li>
        <li><strong>Step 2 - Apply a Blend Mode:</strong> Use at least one blend mode (Multiply, Screen, or Overlay) meaningfully in your composition.</li>
        <li><strong>Step 3 - Create a Smart Object:</strong> Convert at least one layer to a Smart Object.</li>
        <li><strong>Step 4 - Apply a Smart Filter:</strong> Apply at least one filter to your Smart Object, confirming it appears as an editable Smart Filter.</li>
        <li><strong>Step 5 - Test Non-Destructiveness:</strong> Scale your Smart Object down significantly, then back to its original size, confirming no quality loss.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Screenshot of your fully organized Layers panel showing groups, blend mode, Smart Object, and Smart Filter</li>
        <li>Before/after screenshots showing the Smart Object scaled down and back up with no quality loss</li>
        <li>A short written note (2-3 sentences) explaining why you chose your specific blend mode</li>
      </ul>
    `,
        rubric: [
            'At least 4 layers organized into 2 or more clearly, descriptively named groups',
            'At least one blend mode applied meaningfully, not just for demonstration',
            'At least one layer correctly converted to a Smart Object',
            'A Smart Filter applied and confirmed editable',
            'Smart Object scaling tested and shown to preserve quality',
            'Written explanation demonstrates genuine understanding of blend mode choice',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Layer Groups organize complex files into clean, collapsible, purpose-named folders',
            'Blend modes control how a layer\'s pixels mathematically interact with layers beneath it',
            'Multiply darkens, Screen lightens, and Overlay adds contrast while preserving pure blacks and whites',
            'Smart Objects protect original pixel data, making transformations and filters fully reversible and editable',
            'Smart Filters remain adjustable or removable at any time, unlike filters applied to regular layers',
            'Smart Objects can be scaled repeatedly without accumulating quality loss',
            'A clean, consistent layer structure habit saves significant time on every future project',
        ],
        nextSteps: [
            'Practice converting every layer you plan to filter into a Smart Object first, until it becomes automatic',
            'Build a personal naming and grouping convention you\'ll reuse across all future files',
            'Experiment with less common blend modes to understand their creative possibilities',
            'Continue to Lesson 10 to apply these non-destructive principles to professional retouching techniques',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Layers Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/layer-basics.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Working with Smart Objects',
            url: 'https://helpx.adobe.com/photoshop/using/smart-objects.html',
            type: 'documentation',
        },
        {
            title: 'Blend Modes Visual Reference Guide (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Smart Objects Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 10: Retouching Essentials',
        description: 'Apply your layer and Smart Object knowledge to professional portrait and product retouching techniques.',
        topics: [
            'Frequency separation for skin retouching',
            'The Healing Brush and Clone Stamp tools',
            'Dodge and burn for dimensional retouching',
            'Non-destructive retouching workflows using Smart Objects',
        ],
    },
}