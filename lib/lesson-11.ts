import type { LessonData } from '../types/course'

/**
 * Lesson 11: Advanced Masks and Selections
 * © Obara. All rights reserved.
 */
export const lesson11: LessonData = {
    id: 'lesson-11',
    title: 'Advanced Masks and Selections',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Master precise selections and layer masks for complex compositing work, including difficult edges, fine hair detail, and clean, believable composites.',
    lessonNumber: 11,
    duration: '52 min',
    difficulty: 'Advanced',
    xpReward: 70,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Advanced Masks and Selections',
        subheadline: 'The difference between an obvious cutout and a composite no one questions comes down to the edge',
        keyBenefits: [
            'Understand the difference between layer masks and clipping masks',
            'Make precise selections around difficult subjects, including hair',
            'Use the Select and Mask workspace for professional-grade edge refinement',
            'Combine multiple selection techniques to handle any subject confidently',
        ],
    },

    learningObjectives: [
        'Explain the difference between a layer mask and a clipping mask',
        'Use Select Subject and refine the result manually',
        'Apply the Select and Mask workspace to extract fine detail like hair',
        'Use Color Range and Quick Selection for different selection scenarios',
        'Combine selections and masks to build a clean, believable composite',
        'Troubleshoot common selection problems like color fringing and rough edges',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'Continuing from Lessons 8-10 with Smart Object and retouching fluency',
                status: 'required',
            },
            {
                id: 'subject-photo',
                name: 'A photo of a person or object against a background',
                description: 'Ideally with some hair or fine detail, for practicing difficult selections',
                status: 'required',
            },
            {
                id: 'background-photo',
                name: 'A second photo to use as a new background',
                description: 'Used for practicing a full composite',
                status: 'recommended',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson10-complete',
                label: 'Completed Lesson 10 with retouching fluency',
                description: 'This lesson assumes comfort with Smart Objects and layer basics',
            },
            {
                id: 'subject-photo-ready',
                label: 'A photo with a clear subject and some fine detail (like hair)',
                description: 'Used throughout this lesson\'s practice',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 52 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Layer Masks vs. Clipping Masks',
            duration: '7 min',
            content: {
                heading: 'Two Different Tools, Two Different Jobs',
                body: 'A layer mask hides or reveals parts of a single layer using black and white values, painting black hides, white reveals. A clipping mask uses one layer\'s shape to constrain what\'s visible on the layer above it, useful for applying an adjustment or texture only within another layer\'s boundaries.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Choose Based on What You\'re Constraining',
                    content: 'Use a layer mask when hiding parts of the same layer, like removing a background. Use a clipping mask when one layer\'s content should only show through the shape of another, like a color overlay confined to text.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison: a layer mask hiding a background, versus a clipping mask constraining a color adjustment to only a subject layer\'s shape',
            },
            subsections: [
                {
                    title: 'Quick Reference',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Layer Mask:</strong> Black hides, white reveals, grayscale values create partial transparency</li>
              <li><strong>Clipping Mask:</strong> Alt/Option-click between two layers, the top layer only shows within the bottom layer's opaque areas</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Quick Selections With Select Subject',
            duration: '7 min',
            content: {
                heading: 'Starting Fast With AI-Assisted Selection',
                body: 'Select Subject uses Photoshop\'s built-in AI to automatically detect and select the main subject in a photo, often with impressive accuracy. It rarely produces a perfect selection alone, but it\'s an excellent, fast starting point for further refinement.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Always Refine, Never Trust It Blindly',
                    content: 'Select Subject gets you 80-90% of the way there instantly. Always zoom in and check edges carefully, especially around hair, fingers, or semi-transparent areas, before treating the selection as final.',
                },
            ],
            image: {
                caption: 'The Select Subject button in the Options bar, showing an automatic selection outline around a person before refinement',
            },
            subsections: [
                {
                    title: 'Using Select Subject',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Select any selection tool to reveal the Select Subject button in the Options bar</li>
              <li>Click Select Subject, Photoshop analyzes and selects the main subject automatically</li>
              <li>Add or remove areas manually with the Quick Selection tool while holding Shift (add) or Alt/Option (subtract)</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: The Select and Mask Workspace',
            duration: '10 min',
            content: {
                heading: 'Where Difficult Edges Get Solved',
                body: 'The Select and Mask workspace provides specialized tools specifically for refining tricky edges, especially fine detail like hair, fur, or semi-transparent fabric, that standard selection tools struggle with.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'The Refine Edge Brush Is Built for Hair',
                    content: 'The Refine Edge Brush tool inside Select and Mask automatically detects fine, hair-like detail along an edge you paint over, dramatically outperforming manual selection for this specific problem.',
                },
            ],
            image: {
                caption: 'The Select and Mask workspace showing the Refine Edge Brush being used along a subject\'s hairline, with a clean extraction preview',
            },
            subsections: [
                {
                    title: 'Select and Mask Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>With a selection active, click Select and Mask in the Options bar (or Select menu)</li>
              <li>Choose a helpful view mode, like "On Layers," to see the extraction clearly</li>
              <li>Use the Refine Edge Brush along hair or fur edges</li>
              <li>Adjust Smooth, Feather, and Contrast sliders for overall edge quality</li>
              <li>Enable Decontaminate Colors to remove background color fringing</li>
              <li>Output as a new layer with a layer mask</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Color Range and Alternative Selection Methods',
            duration: '7 min',
            content: {
                heading: 'Selecting by Color Instead of Shape',
                body: 'Color Range selects pixels based on color similarity rather than edges or subject recognition, extremely useful for selecting a solid-colored background, like a green screen, or isolating specific colored elements within a complex image.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Ideal for Solid Background Removal',
                    content: 'When a subject is shot against a plain, evenly lit background, Color Range often produces a cleaner selection faster than Select Subject or manual selection tools.',
                },
            ],
            image: {
                caption: 'The Color Range dialog showing an eyedropper selecting a solid background color, with a preview mask displaying the resulting selection',
            },
            subsections: [
                {
                    title: 'Using Color Range',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Select → Color Range</li>
              <li>Click the eyedropper on the color you want to select</li>
              <li>Adjust the Fuzziness slider to control selection sensitivity</li>
              <li>Shift-click with the eyedropper to add additional color samples</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Building a Clean Composite',
            duration: '7 min',
            content: {
                heading: 'Combining Selection and Masking Into One Result',
                body: 'A believable composite comes from combining accurate selection, clean edge refinement, and a layer mask that allows further adjustment, all working together rather than relying on any single technique alone.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Always Output to a Layer Mask, Not a Deletion',
                    content: 'When finishing Select and Mask, choose "New Layer with Layer Mask" rather than deleting the background permanently. This keeps your extraction fully editable if the composite needs adjustment later.',
                },
            ],
            image: {
                caption: 'A completed composite showing a cleanly extracted subject placed onto a new background, with the original layer mask still visible and editable',
            },
            subsections: [
                {
                    title: 'A Reliable Composite Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Make an initial selection with Select Subject or Color Range</li>
              <li>Refine the edge in Select and Mask, especially around hair or fine detail</li>
              <li>Output as a new layer with a layer mask</li>
              <li>Place your new background layer beneath the masked subject</li>
              <li>Fine-tune the mask further with a soft brush if any edge issues remain</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Troubleshooting Common Selection Problems',
            duration: '6 min',
            content: {
                heading: 'Fixing the Issues That Give Composites Away',
                body: 'Even careful selections often show small telltale problems, colored fringing from the old background, overly hard edges, or slightly transparent areas that don\'t match the new background correctly.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Color Fringing Is the Most Common Giveaway',
                    content: 'A thin line of the original background color often remains around hair or edges after extraction. Decontaminate Colors in Select and Mask, or manual color correction on the edge, usually resolves this.',
                },
            ],
            image: {
                caption: 'A close-up comparison showing color fringing before and after applying Decontaminate Colors',
            },
            subsections: [
                {
                    title: 'Common Problems and Fixes',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Color fringing:</strong> Enable Decontaminate Colors, or manually desaturate the fringe on the mask edge</li>
              <li><strong>Overly hard edges:</strong> Add slight feathering, or use a soft brush to refine the mask manually</li>
              <li><strong>Mismatched lighting:</strong> Not a selection issue, but add a subtle color grade to unify subject and new background</li>
            </ul>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Extract and Composite a Subject',
        description: 'Select a subject with fine detail, refine the edge, and composite it onto a new background.',
        estimatedTime: '30 min',
        steps: [
            {
                title: 'Make an Initial Selection',
                instruction: 'Open your subject photo and click Select Subject in the Options bar to create a starting selection.',
                tips: [
                    'Don\'t worry if the hair or fine edges look rough at this stage, that\'s expected',
                ],
            },
            {
                title: 'Refine in Select and Mask',
                instruction: 'Open Select and Mask, switch to the "On Layers" view, and use the Refine Edge Brush along any hair or fine detail edges.',
                tips: [
                    'Zoom in closely while brushing for the most accurate results',
                ],
            },
            {
                title: 'Enable Decontaminate Colors',
                instruction: 'Check the Decontaminate Colors option and observe how it removes any color fringing along the edge.',
                tips: [
                    'This works best combined with outputting to a new layer, since it slightly alters edge pixel colors',
                ],
            },
            {
                title: 'Output as a Layer With Mask',
                instruction: 'Set Output To: New Layer with Layer Mask, then click OK to complete the extraction.',
                tips: [
                    'Confirm your new layer has a visible layer mask thumbnail in the Layers panel',
                ],
            },
            {
                title: 'Composite Onto a New Background',
                instruction: 'Open a second photo to use as a background. Drag your extracted subject layer onto it, positioning it naturally.',
                tips: [
                    'Use Cmd/Ctrl+T to resize and reposition the subject to match the new scene\'s scale',
                ],
            },
            {
                title: 'Check and Refine the Final Edge',
                instruction: 'Zoom in around the subject\'s edges against the new background. Use a soft brush directly on the layer mask to fix any remaining rough spots.',
                tips: [
                    'Painting black on the mask hides more, white reveals more, adjust directly as needed',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What is the main difference between a layer mask and a clipping mask?',
                options: [
                    { id: 'a', text: 'They are functionally identical', isCorrect: false },
                    { id: 'b', text: 'A layer mask hides parts of its own layer; a clipping mask constrains a layer above using the shape of the layer below', isCorrect: true },
                    { id: 'c', text: 'Clipping masks can only be used on Smart Objects', isCorrect: false },
                    { id: 'd', text: 'Layer masks cannot be edited after creation', isCorrect: false },
                ],
                explanation: 'A layer mask uses black and white values to hide or reveal parts of the same layer, while a clipping mask uses one layer\'s opacity to constrain the layer above it.',
            },
            {
                id: 'q2',
                question: 'What should you always do after using Select Subject?',
                options: [
                    { id: 'a', text: 'Trust it completely without review', isCorrect: false },
                    { id: 'b', text: 'Zoom in and refine the edges manually, especially around hair or fine detail', isCorrect: true },
                    { id: 'c', text: 'Immediately delete the background', isCorrect: false },
                    { id: 'd', text: 'Convert the selection to a clipping mask', isCorrect: false },
                ],
                explanation: 'Select Subject is a fast starting point, but rarely produces a perfect selection alone, especially around difficult edges like hair.',
            },
            {
                id: 'q3',
                question: 'What tool inside Select and Mask is specifically designed for hair and fur edges?',
                options: [
                    { id: 'a', text: 'The Clone Stamp', isCorrect: false },
                    { id: 'b', text: 'The Refine Edge Brush', isCorrect: true },
                    { id: 'c', text: 'The Healing Brush', isCorrect: false },
                    { id: 'd', text: 'The Gradient tool', isCorrect: false },
                ],
                explanation: 'The Refine Edge Brush automatically detects fine, hair-like detail along edges you paint over, built specifically for this challenge.',
            },
            {
                id: 'q4',
                question: 'When is Color Range especially useful?',
                options: [
                    { id: 'a', text: 'When selecting a subject against a solid, evenly lit background', isCorrect: true },
                    { id: 'b', text: 'Only for black and white images', isCorrect: false },
                    { id: 'c', text: 'When applying filters', isCorrect: false },
                    { id: 'd', text: 'Color Range cannot be used for selections', isCorrect: false },
                ],
                explanation: 'Color Range selects by color similarity, making it ideal for solid or evenly colored backgrounds, like a green screen.',
            },
            {
                id: 'q5',
                question: 'What does Decontaminate Colors do?',
                options: [
                    { id: 'a', text: 'Converts the image to black and white', isCorrect: false },
                    { id: 'b', text: 'Removes leftover background color fringing along an extracted edge', isCorrect: true },
                    { id: 'c', text: 'Increases overall image saturation', isCorrect: false },
                    { id: 'd', text: 'Deletes the original background layer', isCorrect: false },
                ],
                explanation: 'Decontaminate Colors removes residual color fringing from the original background that often remains along extracted edges, especially hair.',
            },
            {
                id: 'q6',
                question: 'Why should you output a selection as "New Layer with Layer Mask" instead of deleting the background permanently?',
                options: [
                    { id: 'a', text: 'It reduces file size significantly', isCorrect: false },
                    { id: 'b', text: 'It keeps the extraction fully editable if adjustments are needed later', isCorrect: true },
                    { id: 'c', text: 'It is required by Photoshop and cannot be changed', isCorrect: false },
                    { id: 'd', text: 'It automatically improves selection accuracy', isCorrect: false },
                ],
                explanation: 'A layer mask preserves the original pixel data, allowing the mask to be refined or adjusted at any point without starting the selection over.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Complete a Believable Composite',
        description: 'Extract a subject with fine detail and composite it convincingly onto a new background.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Select a photo with a subject that includes hair or other fine detail, and composite it onto a new background convincingly.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Initial Selection:</strong> Use Select Subject or Color Range as your starting point.</li>
        <li><strong>Step 2 - Refine the Edge:</strong> Use Select and Mask with the Refine Edge Brush on any hair or fine detail.</li>
        <li><strong>Step 3 - Decontaminate:</strong> Enable Decontaminate Colors to remove background color fringing.</li>
        <li><strong>Step 4 - Composite:</strong> Place the extracted subject onto a new background, resizing and positioning naturally.</li>
        <li><strong>Step 5 - Final Refinement:</strong> Manually fix any remaining edge issues directly on the layer mask.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before/after screenshot showing the original photo and the final composite</li>
        <li>A close-up screenshot showing clean edge detail around hair or fine detail</li>
        <li>Screenshot of the Layers panel showing the subject layer with its layer mask</li>
        <li>A written note (3-5 sentences) describing which selection technique worked best and why</li>
      </ul>
    `,
        rubric: [
            'Initial selection made using an appropriate technique for the subject',
            'Select and Mask used to refine edges, especially hair or fine detail',
            'Decontaminate Colors applied to remove visible fringing',
            'Final composite placed naturally with appropriate scale and positioning',
            'Layer mask used throughout, not a permanent deletion',
            'Written reflection demonstrates understanding of technique selection',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'A layer mask hides or reveals parts of its own layer; a clipping mask constrains a layer using the shape of another',
            'Select Subject provides a fast, AI-assisted starting selection that almost always needs manual refinement',
            'The Select and Mask workspace, especially the Refine Edge Brush, is built specifically for difficult edges like hair',
            'Color Range selects by color similarity, ideal for solid or evenly lit backgrounds',
            'Decontaminate Colors removes leftover background color fringing along extracted edges',
            'Always output selections as a new layer with a layer mask, never a permanent deletion',
            'Combining multiple selection techniques produces more reliable results than relying on any single tool',
        ],
        nextSteps: [
            'Practice extracting subjects with increasingly difficult hair and fine detail',
            'Build a habit of always checking for color fringing before considering a composite finished',
            'Experiment with Color Range on solid-background photos to compare it against Select Subject',
            'Continue to Lesson 12 to apply these skills toward full creative compositing techniques',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Selections Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/selecting.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Select and Mask Workspace',
            url: 'https://helpx.adobe.com/photoshop/using/select-and-refine-edges.html',
            type: 'documentation',
        },
        {
            title: 'Selection and Masking Troubleshooting Guide (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Advanced Selections Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 12: Creative Compositing Techniques',
        description: 'Combine multiple images into cohesive, believable scenes using advanced blending, lighting matching, and perspective techniques.',
        topics: [
            'Matching lighting and color between composited elements',
            'Using perspective and scale for believable placement',
            'Advanced blend mode combinations for realistic integration',
            'Building a complete multi-element composite from scratch',
        ],
    },
}