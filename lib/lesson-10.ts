import type { LessonData } from '../types/course'

/**
 * Lesson 10: Retouching Essentials
 * © Obara. All rights reserved.
 */
export const lesson10: LessonData = {
    id: 'lesson-10',
    title: 'Retouching Essentials',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Learn professional portrait and product retouching techniques, including frequency separation, healing tools, and non-destructive dodge and burn.',
    lessonNumber: 10,
    duration: '55 min',
    difficulty: 'Intermediate',
    xpReward: 65,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Retouching Essentials',
        subheadline: 'Remove distractions and enhance dimension while keeping skin looking real, not plastic',
        keyBenefits: [
            'Remove blemishes and distractions with the right tool for each situation',
            'Separate texture from color using frequency separation for natural skin retouching',
            'Add dimension and shape using non-destructive dodge and burn',
            'Build a complete, repeatable retouching workflow using Smart Objects',
        ],
    },

    learningObjectives: [
        'Choose the correct healing tool for different retouching situations',
        'Explain what frequency separation does and why it preserves texture',
        'Apply frequency separation to smooth skin without losing natural detail',
        'Use non-destructive dodge and burn to sculpt light and shadow',
        'Combine healing, frequency separation, and dodge and burn into one workflow',
        'Recognize when retouching has gone too far',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'Continuing from Lessons 8-9 with layer and Smart Object fluency',
                status: 'required',
            },
            {
                id: 'portrait-photo',
                name: 'A portrait photo with visible skin texture',
                description: 'Ideal for practicing frequency separation and dodge and burn',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson9-complete',
                label: 'Completed Lesson 9 with Smart Object fluency',
                description: 'This lesson relies heavily on non-destructive Smart Object techniques',
            },
            {
                id: 'portrait-ready',
                label: 'A portrait photo open in Photoshop',
                description: 'A well-lit face with some visible texture works best for practice',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 55 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: The Healing and Cloning Toolset',
            duration: '8 min',
            content: {
                heading: 'Choosing the Right Tool for the Job',
                body: 'Photoshop offers several tools for removing blemishes and distractions, each suited to different situations. Understanding when to use each one prevents both wasted time and visibly obvious retouching.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'A Simple Decision Rule',
                    content: 'Use the Spot Healing Brush for small, isolated blemishes. Use the Healing Brush for larger areas needing texture blending. Use the Clone Stamp when you need to copy an exact area, like duplicating clean skin over a larger distraction.',
                },
            ],
            image: {
                caption: 'Toolbar showing the Spot Healing Brush, Healing Brush, and Clone Stamp grouped together, each with a small before/after example',
            },
            subsections: [
                {
                    title: 'The Three Core Tools Explained',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Spot Healing Brush:</strong> Click once on a blemish, Photoshop automatically blends surrounding texture</li>
              <li><strong>Healing Brush:</strong> Sample a source area (Alt/Option-click), then paint, blends texture and lighting automatically</li>
              <li><strong>Clone Stamp:</strong> Sample a source area, then paint an exact copy, no automatic blending</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: What Frequency Separation Actually Does',
            duration: '10 min',
            content: {
                heading: 'Separating Texture From Color and Tone',
                body: 'Frequency separation splits an image into two layers, a low-frequency layer containing color and smooth tonal transitions, and a high-frequency layer containing fine texture like pores and skin detail. This lets you smooth skin tone without blurring away real texture.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'This Is What Prevents the "Plastic Skin" Look',
                    content: 'Simply blurring skin removes texture entirely, creating an obviously fake, over-smoothed appearance. Frequency separation preserves texture on its own layer while allowing tone and color to be smoothed independently.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison showing the low-frequency layer (blurred color/tone) and high-frequency layer (fine texture only) that together recreate the original image',
            },
            subsections: [
                {
                    title: 'The Basic Concept',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Low frequency:</strong> A heavily blurred duplicate containing only color and broad tonal shifts</li>
              <li><strong>High frequency:</strong> Calculated by subtracting the blurred version from the original, containing only fine detail</li>
              <li>Editing the low-frequency layer smooths tone without touching texture, which lives safely on its own layer</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Setting Up Frequency Separation',
            duration: '9 min',
            content: {
                heading: 'A Repeatable Setup Process',
                body: 'While Photoshop has no single one-click frequency separation button, the setup follows a consistent, learnable sequence that becomes fast with practice.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Save This as an Action',
                    content: 'Once comfortable with the manual steps, record them as a Photoshop Action (Window → Actions) to automate the entire setup with a single click on future projects.',
                },
            ],
            image: {
                caption: 'Layers panel showing the completed frequency separation setup: Low Frequency layer and High Frequency layer, both as Smart Objects',
            },
            subsections: [
                {
                    title: 'Frequency Separation Setup Steps',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Duplicate your base layer twice (Cmd/Ctrl+J twice)</li>
              <li>Convert both duplicates to Smart Objects</li>
              <li>On the bottom duplicate, apply a Gaussian Blur strong enough to remove texture but keep color and tone, name it "Low Frequency"</li>
              <li>On the top duplicate, use Image → Apply Image to subtract the blurred layer, then set its blend mode to Linear Light, name it "High Frequency"</li>
              <li>You now have two layers: retouch tone on Low Frequency, retouch texture on High Frequency</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Retouching With Frequency Separation',
            duration: '8 min',
            content: {
                heading: 'Smoothing Tone, Preserving Texture',
                body: 'With frequency separation set up, retouching becomes a matter of working on the correct layer for the correct problem, color and tone issues on Low Frequency, texture issues on High Frequency.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Work at Low Opacity',
                    content: 'Use a soft brush at 20-30% opacity on the Low Frequency layer to gradually even out blotchy skin tone, rather than one heavy pass that removes all natural variation.',
                },
            ],
            image: {
                caption: 'Before and after comparison showing evened skin tone on the Low Frequency layer while pore texture remains fully intact',
            },
            subsections: [
                {
                    title: 'What to Fix on Each Layer',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Low Frequency:</strong> Redness, blotchiness, uneven tone, shadows under eyes</li>
              <li><strong>High Frequency:</strong> Fine lines, small blemishes, texture inconsistencies</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Non-Destructive Dodge and Burn',
            duration: '8 min',
            content: {
                heading: 'Sculpting Light and Shadow',
                body: 'Dodge and burn brightens and darkens specific areas to enhance dimension, following the natural contours of a face or object. Doing this on a separate, neutral gray layer keeps the technique fully non-destructive and endlessly adjustable.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'The 50% Gray Layer Method',
                    content: 'Create a new layer, fill it with 50% gray, and set its blend mode to Soft Light or Overlay. Paint with white to lighten and black to darken, the gray becomes invisible while your painted adjustments show through.',
                },
            ],
            image: {
                caption: 'A dedicated dodge and burn layer set to Soft Light, showing white and black brush strokes sculpting light along cheekbones and jawline',
            },
            subsections: [
                {
                    title: 'Setting Up a Dodge and Burn Layer',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Create a new layer (Shift+Cmd/Ctrl+N)</li>
              <li>Set blend mode to Soft Light, and check "Fill with Soft-Light-neutral color (50% gray)"</li>
              <li>Select a soft, low-opacity brush (around 10-15%)</li>
              <li>Paint white on areas to lighten, black on areas to darken, building up gradually</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Knowing When to Stop',
            duration: '6 min',
            content: {
                heading: 'The Line Between Retouching and Distortion',
                body: 'Every retouching technique in this lesson can be pushed too far. The goal of professional retouching is to enhance what\'s already there, not to fundamentally alter someone\'s appearance or remove all natural texture.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'A Simple Test',
                    content: 'Toggle your retouching layers off and on repeatedly. If the person looks like a different, artificial version of themselves rather than a polished version of themselves, you\'ve gone too far.',
                },
            ],
            image: {
                caption: 'A comparison showing appropriately subtle retouching versus an obviously over-retouched, plastic-looking result',
            },
            subsections: [
                {
                    title: 'Signs You\'ve Overdone It',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Skin has no visible texture at all, appearing perfectly smooth</li>
              <li>Dodge and burn creates unnatural, obviously painted-looking highlights</li>
              <li>The final result no longer resembles the actual person or subject</li>
            </ul>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Complete a Full Retouching Pass',
        description: 'Apply healing tools, frequency separation, and dodge and burn together on one portrait.',
        estimatedTime: '30 min',
        steps: [
            {
                title: 'Remove Obvious Blemishes First',
                instruction: 'Using the Spot Healing Brush, remove any small, isolated blemishes before starting frequency separation.',
                tips: [
                    'Handling obvious spots first means frequency separation only needs to handle tone and fine texture',
                ],
            },
            {
                title: 'Set Up Frequency Separation',
                instruction: 'Follow the frequency separation setup steps from Section 3, creating your Low Frequency and High Frequency Smart Object layers.',
                tips: [
                    'Zoom to 100% throughout this process to accurately judge your blur amount',
                ],
            },
            {
                title: 'Smooth Tone on the Low Frequency Layer',
                instruction: 'Select the Low Frequency layer, use a soft brush at 20-30% opacity, and gently even out blotchy or uneven skin tone.',
                tips: [
                    'Work in small areas, check your progress by toggling the layer visibility frequently',
                ],
            },
            {
                title: 'Refine Texture on the High Frequency Layer',
                instruction: 'Select the High Frequency layer and use the Healing Brush at low opacity to reduce any remaining fine texture issues, like small lines.',
                tips: [
                    'Be conservative here, this layer holds all the natural detail that keeps skin looking real',
                ],
            },
            {
                title: 'Add Dodge and Burn',
                instruction: 'Create your 50% gray Soft Light layer and gently sculpt light along cheekbones, under the eyes, and jawline using white and black at low opacity.',
                tips: [
                    'Build up gradually, it\'s much easier to add more than to undo an overdone effect',
                ],
            },
            {
                title: 'Apply the Stopping Test',
                instruction: 'Toggle all your new layers off and on. Confirm the retouched version looks like an enhanced version of the same person, not a different one.',
                tips: [
                    'If in doubt, reduce the opacity of your retouching layers by half',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'When should you use the Clone Stamp instead of the Healing Brush?',
                options: [
                    { id: 'a', text: 'When you need an exact copy of an area with no automatic blending', isCorrect: true },
                    { id: 'b', text: 'When retouching skin texture', isCorrect: false },
                    { id: 'c', text: 'The Clone Stamp and Healing Brush are identical', isCorrect: false },
                    { id: 'd', text: 'Only when working with black and white images', isCorrect: false },
                ],
                explanation: 'The Clone Stamp copies pixels exactly with no automatic blending, useful when you need a precise duplicate rather than a texture-aware blend.',
            },
            {
                id: 'q2',
                question: 'What does frequency separation split an image into?',
                options: [
                    { id: 'a', text: 'Red, green, and blue channels', isCorrect: false },
                    { id: 'b', text: 'A low-frequency layer (color/tone) and a high-frequency layer (texture)', isCorrect: true },
                    { id: 'c', text: 'Foreground and background layers', isCorrect: false },
                    { id: 'd', text: 'Shadows and highlights', isCorrect: false },
                ],
                explanation: 'Frequency separation divides an image into a blurred low-frequency layer holding color and tone, and a high-frequency layer holding fine texture detail.',
            },
            {
                id: 'q3',
                question: 'Why does frequency separation prevent the "plastic skin" look?',
                options: [
                    { id: 'a', text: 'It removes all texture from the image', isCorrect: false },
                    { id: 'b', text: 'It allows tone to be smoothed while texture remains intact on its own layer', isCorrect: true },
                    { id: 'c', text: 'It only works on black and white photos', isCorrect: false },
                    { id: 'd', text: 'It automatically limits how much you can retouch', isCorrect: false },
                ],
                explanation: 'By separating texture onto its own layer, tone can be smoothed independently without blurring away natural skin detail.',
            },
            {
                id: 'q4',
                question: 'What blend mode is used for the 50% gray dodge and burn layer?',
                options: [
                    { id: 'a', text: 'Normal', isCorrect: false },
                    { id: 'b', text: 'Multiply', isCorrect: false },
                    { id: 'c', text: 'Soft Light (or Overlay)', isCorrect: true },
                    { id: 'd', text: 'Dissolve', isCorrect: false },
                ],
                explanation: 'Soft Light or Overlay makes the 50% gray fill invisible while allowing painted white and black areas to lighten or darken the layers beneath.',
            },
            {
                id: 'q5',
                question: 'On a non-destructive dodge and burn layer, what does painting with white do?',
                options: [
                    { id: 'a', text: 'Darkens the area', isCorrect: false },
                    { id: 'b', text: 'Lightens the area', isCorrect: true },
                    { id: 'c', text: 'Removes color entirely', isCorrect: false },
                    { id: 'd', text: 'Deletes the gray fill', isCorrect: false },
                ],
                explanation: 'On a Soft Light or Overlay blended gray layer, white brightens the area beneath it, while black darkens it.',
            },
            {
                id: 'q6',
                question: 'What is a reliable test for knowing if retouching has gone too far?',
                options: [
                    { id: 'a', text: 'If the file size increased', isCorrect: false },
                    { id: 'b', text: 'If toggling the retouching layers makes the subject look like a different, artificial person', isCorrect: true },
                    { id: 'c', text: 'If more than 3 layers were used', isCorrect: false },
                    { id: 'd', text: 'There is no reliable way to test this', isCorrect: false },
                ],
                explanation: 'If the retouched result no longer resembles an enhanced version of the same person, the retouching has likely gone too far.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Complete Professional Portrait Retouch',
        description: 'Apply a complete, professional-level retouching workflow to a portrait, demonstrating restraint and technical skill.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Select one portrait photo and apply a complete retouching workflow using every technique from this lesson.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Spot Removal:</strong> Remove obvious blemishes using the Spot Healing Brush.</li>
        <li><strong>Step 2 - Frequency Separation:</strong> Set up Low and High Frequency layers as Smart Objects.</li>
        <li><strong>Step 3 - Tone Retouching:</strong> Smooth uneven skin tone on the Low Frequency layer.</li>
        <li><strong>Step 4 - Texture Retouching:</strong> Refine any remaining fine texture on the High Frequency layer.</li>
        <li><strong>Step 5 - Dodge and Burn:</strong> Add dimension using a non-destructive 50% gray dodge and burn layer.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before/after screenshot of the complete retouch</li>
        <li>Screenshot of the Layers panel showing Low Frequency, High Frequency, and dodge and burn layers clearly labeled</li>
        <li>A written note (3-5 sentences) reflecting on where you stopped retouching and why</li>
      </ul>
    `,
        rubric: [
            'Spot Healing Brush used appropriately for isolated blemishes',
            'Frequency separation correctly set up with both layers as Smart Objects',
            'Skin tone smoothed on the Low Frequency layer without affecting texture',
            'Fine texture refined appropriately on the High Frequency layer',
            'Non-destructive dodge and burn applied to add natural dimension',
            'Final result looks like an enhanced version of the same person, not overdone',
            'Written reflection demonstrates genuine understanding of retouching restraint',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Choose the Spot Healing Brush for small blemishes, Healing Brush for texture blending, and Clone Stamp for exact copies',
            'Frequency separation splits an image into a low-frequency tone layer and a high-frequency texture layer',
            'Smoothing tone on the Low Frequency layer preserves natural texture on the High Frequency layer',
            'A 50% gray layer set to Soft Light or Overlay enables fully non-destructive dodge and burn',
            'Painting white lightens and black darkens on a dodge and burn layer',
            'Professional retouching enhances what\'s already there, it does not fundamentally alter or over-smooth the subject',
            'Toggling retouching layers on and off is a reliable way to check whether an edit has gone too far',
        ],
        nextSteps: [
            'Practice frequency separation on several different portraits until the setup becomes automatic',
            'Record a Photoshop Action for your frequency separation setup to save time on future projects',
            'Study professional retouching work critically, noticing where restraint was applied',
            'Continue to Lesson 11 to learn advanced masks and selections for compositing work',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Healing and Retouching Tools Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/retouching-repairing-images.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Non-Destructive Dodge and Burn Techniques',
            url: 'https://helpx.adobe.com/photoshop/using/retouching-repairing-images.html',
            type: 'documentation',
        },
        {
            title: 'Frequency Separation Step-by-Step Cheat Sheet (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Retouching Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 11: Advanced Masks and Selections',
        description: 'Master precise selections and layer masks for complex compositing work, including hair, fine detail, and difficult edges.',
        topics: [
            'Layer masks versus clipping masks',
            'The Select and Mask workspace for fine detail like hair',
            'Refining edges for clean, believable composites',
            'Combining multiple selection techniques for complex subjects',
        ],
    },
}