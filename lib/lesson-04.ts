import type { LessonData } from '../types/course'

/**
 * Lesson 04: Local Adjustments and Selective Editing
 * © Obara. All rights reserved.
 */
export const lesson04: LessonData = {
    id: 'lesson-4',
    title: 'Local Adjustments and Selective Editing',
    moduleTitle: 'Adobe Lightroom',
    description:
        'Move beyond global edits and learn to apply precise, localized adjustments using the Adjustment Brush, Graduated Filter, and Radial Filter.',
    lessonNumber: 4,
    duration: '48 min',
    difficulty: 'Intermediate',
    xpReward: 60,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Local Adjustments and Selective Editing',
        subheadline: 'Direct the viewer\'s eye with targeted edits instead of applying one setting to the whole photo',
        keyBenefits: [
            'Brighten a subject\'s face without affecting the entire photo',
            'Darken a bright sky using a Graduated Filter in seconds',
            'Add a natural vignette with the Radial Filter',
            'Combine multiple local adjustments into one cohesive, professional-looking edit',
        ],
    },

    learningObjectives: [
        'Explain the difference between global and local adjustments',
        'Use the Adjustment Brush to paint precise, localized edits',
        'Apply a Graduated Filter to balance a bright sky against a darker foreground',
        'Use a Radial Filter to draw attention to a subject with a soft vignette',
        'Combine masking tools (Range Mask, Luminance Mask) for cleaner selections',
        'Layer multiple local adjustments without creating an obviously "edited" look',
    ],

    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'Continuing from Lessons 1-3 with your edited catalog',
                status: 'required',
            },
            {
                id: 'lesson3-photos',
                name: 'Photos with a completed Basic panel edit from Lesson 3',
                description: 'Local adjustments build on top of your global exposure and color correction',
                status: 'required',
            },
            {
                id: 'sky-or-portrait-photo',
                name: 'A photo with a sky, or a portrait',
                description: 'Ideal for practicing Graduated Filters and Adjustment Brush work respectively',
                status: 'recommended',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson3-complete',
                label: 'Completed Lesson 3 with a full Basic panel edit applied',
                description: 'Local adjustments refine an already color-corrected, well-exposed photo',
            },
            {
                id: 'photo-with-sky',
                label: 'At least one photo containing a sky or bright background',
                description: 'Used for practicing the Graduated Filter',
            },
            {
                id: 'photo-with-subject',
                label: 'At least one photo with a clear subject or face',
                description: 'Used for practicing the Adjustment Brush and Radial Filter',
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
            title: 'Section 1: Global vs. Local Adjustments',
            duration: '5 min',
            content: {
                heading: 'Two Different Kinds of Editing Decisions',
                body: 'Everything in Lessons 1-3 was a global adjustment, it affected the entire photo equally. Local adjustments target specific areas, letting you brighten a face, darken a sky, or draw the eye to a subject without changing the rest of the image.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Always Finish Global Edits First',
                    content: 'Complete your Basic panel work before adding local adjustments. Local tools build on top of an already well-exposed, color-corrected foundation, not a substitute for it.',
                },
            ],
            image: {
                caption: 'Split view showing a photo before and after a targeted local adjustment brightening only the subject\'s face',
            },
            subsections: [
                {
                    title: 'The Three Local Adjustment Tools',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Adjustment Brush:</strong> Paint an adjustment onto any freeform area</li>
              <li><strong>Graduated Filter:</strong> A linear gradient, ideal for skies and horizons</li>
              <li><strong>Radial Filter:</strong> An elliptical gradient, ideal for vignettes and spotlighting a subject</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: The Adjustment Brush',
            duration: '8 min',
            content: {
                heading: 'Painting Precise Edits',
                body: 'The Adjustment Brush lets you paint an adjustment, such as increased exposure or reduced clarity, onto exactly the area you choose. It\'s the most flexible local tool, and the one most beginners reach for first.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Use Auto Mask for Clean Edges',
                    content: 'Enable Auto Mask so the brush detects edges automatically, preventing your adjustment from spilling onto areas with a different color or tone, like the sky behind a subject\'s hair.',
                },
            ],
            image: {
                caption: 'Adjustment Brush panel showing brush size, feather, and Auto Mask options, with a red overlay showing the painted mask area',
            },
            subsections: [
                {
                    title: 'Adjustment Brush Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Press <strong>K</strong> to select the Adjustment Brush</li>
              <li>Set your desired effect first (e.g. +0.5 Exposure) before painting</li>
              <li>Enable Auto Mask for precise edge detection</li>
              <li>Paint over your target area, holding Alt/Option to erase mistakes</li>
              <li>Press <strong>O</strong> to toggle the mask overlay and check your selection</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: The Graduated Filter',
            duration: '7 min',
            content: {
                heading: 'Balancing Skies and Foregrounds',
                body: 'A Graduated Filter applies a smooth, linear transition, most commonly used to darken an overly bright sky while leaving the foreground untouched. It mimics what photographers previously achieved with physical graduated glass filters.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Combine With a Range Mask for Precision',
                    content: 'A basic Graduated Filter darkens everything in its band, including trees or buildings poking into the sky. Adding a Luminance Range Mask restricts the effect to only the brightest tones, protecting darker foreground elements.',
                },
            ],
            image: {
                caption: 'A Graduated Filter applied to darken a bright sky, shown with the pin and gradient lines overlaid on the photo',
            },
            subsections: [
                {
                    title: 'Graduated Filter Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Press <strong>M</strong> to select the Graduated Filter</li>
              <li>Reduce Exposure and increase Contrast slightly for a natural sky adjustment</li>
              <li>Click and drag from the top of the frame downward to place the gradient</li>
              <li>Open the Range Mask dropdown, select Luminance, and adjust the range to target only bright sky tones</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: The Radial Filter',
            duration: '7 min',
            content: {
                heading: 'Directing Attention to Your Subject',
                body: 'The Radial Filter creates an elliptical selection, most often used to subtly darken everything outside a subject, drawing the viewer\'s eye inward. Unlike a standard vignette, it can be positioned anywhere in the frame, not just the corners.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Invert for a Spotlight Effect',
                    content: 'By default, the Radial Filter affects the area outside the ellipse. Check "Invert Mask" to affect the inside instead, useful for brightening or sharpening just the subject.',
                },
            ],
            image: {
                caption: 'A Radial Filter positioned over a subject\'s face, showing the surrounding area subtly darkened to draw focus inward',
            },
            subsections: [
                {
                    title: 'Radial Filter Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Press <strong>Shift+M</strong> to select the Radial Filter</li>
              <li>Draw an ellipse around your subject</li>
              <li>Reduce Exposure and Highlights slightly to darken the surrounding area</li>
              <li>Increase Feather for a smoother, less obvious transition</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Masking Tools for Cleaner Selections',
            duration: '6 min',
            content: {
                heading: 'Refining What Your Adjustment Actually Affects',
                body: 'Range Masks let any local adjustment tool target specific colors or luminance values within its selection, dramatically improving precision without needing pixel-perfect brush work.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Luminance vs. Color Range Masks',
                    content: 'Use a Luminance Range Mask when targeting bright or dark areas, like a sky. Use a Color Range Mask when targeting a specific hue, like isolating only green foliage or a specific clothing color.',
                },
            ],
            image: {
                caption: 'Range Mask panel showing Luminance and Color options, with a preview overlay highlighting the selected tonal range',
            },
            subsections: [
                {
                    title: 'When Range Masks Save the Most Time',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>Darkening a sky without affecting a building silhouette</li>
              <li>Brightening skin tones without affecting hair or clothing</li>
              <li>Boosting saturation in foliage without shifting nearby skin tones</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Layering Local Adjustments Naturally',
            duration: '6 min',
            content: {
                heading: 'Avoiding the "Obviously Edited" Look',
                body: 'A finished photo often has several local adjustments stacked together, a Graduated Filter on the sky, a Radial Filter on the subject, and an Adjustment Brush on specific details. The skill is making them work together invisibly.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Subtlety Beats Intensity',
                    content: 'Each individual local adjustment should be barely noticeable on its own. It\'s the combination of several small, restrained adjustments that creates a polished, professional result, not one heavy-handed edit.',
                },
            ],
            image: {
                caption: 'A fully layered edit showing the combined effect of a Graduated Filter, Radial Filter, and Adjustment Brush working together',
            },
            subsections: [
                {
                    title: 'A Suggested Layering Order',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Graduated Filter for overall sky/foreground balance</li>
              <li>Radial Filter for subject emphasis</li>
              <li>Adjustment Brush for fine, targeted details (eyes, teeth, specific shadows)</li>
            </ol>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Layer Three Local Adjustments',
        description: 'Apply a Graduated Filter, Radial Filter, and Adjustment Brush to one photo, building a complete local adjustment edit.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Choose a Photo With a Sky and a Subject',
                instruction: 'Select a photo from your catalog that has both a visible sky and a clear subject, ideally one already edited in Lesson 3.',
                tips: [
                    'A landscape with a person or building in it works well for practicing all three tools',
                ],
            },
            {
                title: 'Apply a Graduated Filter to the Sky',
                instruction: 'Press M, drag a gradient down from the top of the frame, and reduce Exposure and Contrast slightly.',
                tips: [
                    'Add a Luminance Range Mask if the gradient is affecting foreground elements you want untouched',
                ],
            },
            {
                title: 'Apply a Radial Filter to Your Subject',
                instruction: 'Press Shift+M, draw an ellipse around your subject, and reduce Exposure slightly outside it to draw focus inward.',
                tips: [
                    'Increase Feather to around 70-80 for a smooth, undetectable transition',
                ],
            },
            {
                title: 'Fine-Tune With the Adjustment Brush',
                instruction: 'Press K and paint a small, targeted adjustment, such as brightening eyes in a portrait or adding contrast to a key detail.',
                tips: [
                    'Zoom in before painting fine details for more accurate brush control',
                ],
            },
            {
                title: 'Review the Full Combined Effect',
                instruction: 'Press O to check each mask overlay individually, then toggle all adjustments off and on to compare the cumulative effect.',
                tips: [
                    'If any single adjustment looks obvious on its own, reduce its intensity',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What is the main difference between a global and a local adjustment?',
                options: [
                    { id: 'a', text: 'Global adjustments only work on RAW files', isCorrect: false },
                    { id: 'b', text: 'Local adjustments target specific areas; global adjustments affect the entire photo', isCorrect: true },
                    { id: 'c', text: 'There is no difference', isCorrect: false },
                    { id: 'd', text: 'Local adjustments can only be undone once', isCorrect: false },
                ],
                explanation: 'Global adjustments, like those in the Basic panel, apply evenly across the whole image. Local adjustments target only the area you select.',
            },
            {
                id: 'q2',
                question: 'What does enabling Auto Mask do when using the Adjustment Brush?',
                options: [
                    { id: 'a', text: 'It automatically applies a preset', isCorrect: false },
                    { id: 'b', text: 'It detects edges to prevent the adjustment from spilling onto unintended areas', isCorrect: true },
                    { id: 'c', text: 'It converts the photo to black and white', isCorrect: false },
                    { id: 'd', text: 'It deletes the current brush stroke', isCorrect: false },
                ],
                explanation: 'Auto Mask uses edge detection to keep your brush strokes contained within areas of similar color and tone.',
            },
            {
                id: 'q3',
                question: 'What is the Graduated Filter most commonly used for?',
                options: [
                    { id: 'a', text: 'Removing dust spots', isCorrect: false },
                    { id: 'b', text: 'Darkening a bright sky while leaving the foreground untouched', isCorrect: true },
                    { id: 'c', text: 'Converting photos to DNG format', isCorrect: false },
                    { id: 'd', text: 'Adjusting white balance only', isCorrect: false },
                ],
                explanation: 'The Graduated Filter applies a smooth linear transition, most commonly used to balance a bright sky against a darker foreground.',
            },
            {
                id: 'q4',
                question: 'What does checking "Invert Mask" do on a Radial Filter?',
                options: [
                    { id: 'a', text: 'It deletes the filter', isCorrect: false },
                    { id: 'b', text: 'It applies the adjustment inside the ellipse instead of outside it', isCorrect: true },
                    { id: 'c', text: 'It converts the filter to a Graduated Filter', isCorrect: false },
                    { id: 'd', text: 'It resets all local adjustments', isCorrect: false },
                ],
                explanation: 'By default, the Radial Filter affects the area outside the ellipse. Inverting the mask flips this so the adjustment applies inside instead.',
            },
            {
                id: 'q5',
                question: 'When should you use a Color Range Mask instead of a Luminance Range Mask?',
                options: [
                    { id: 'a', text: 'When targeting a specific hue, like foliage or a clothing color', isCorrect: true },
                    { id: 'b', text: 'When targeting only bright or dark tonal areas', isCorrect: false },
                    { id: 'c', text: 'When exporting the final image', isCorrect: false },
                    { id: 'd', text: 'Color Range Masks do not exist in Lightroom', isCorrect: false },
                ],
                explanation: 'Color Range Masks target specific hues, while Luminance Range Masks target specific brightness values.',
            },
            {
                id: 'q6',
                question: 'What keyboard shortcut selects the Adjustment Brush?',
                options: [
                    { id: 'a', text: 'M', isCorrect: false },
                    { id: 'b', text: 'K', isCorrect: true },
                    { id: 'c', text: 'Shift+M', isCorrect: false },
                    { id: 'd', text: 'J', isCorrect: false },
                ],
                explanation: 'K selects the Adjustment Brush. M selects the Graduated Filter, and Shift+M selects the Radial Filter.',
            },
            {
                id: 'q7',
                question: 'Why is subtlety important when layering multiple local adjustments?',
                options: [
                    { id: 'a', text: 'Lightroom limits you to one local adjustment per photo', isCorrect: false },
                    { id: 'b', text: 'Several small, restrained adjustments combine into a polished result, rather than one obvious heavy edit', isCorrect: true },
                    { id: 'c', text: 'Subtle adjustments export faster', isCorrect: false },
                    { id: 'd', text: 'It is not actually important', isCorrect: false },
                ],
                explanation: 'Layering multiple small, restrained local adjustments produces a natural, professional result, while one heavy-handed adjustment often looks obviously edited.',
            },
            {
                id: 'q8',
                question: 'What keyboard shortcut toggles the mask overlay to check your selection?',
                options: [
                    { id: 'a', text: 'O', isCorrect: true },
                    { id: 'b', text: 'P', isCorrect: false },
                    { id: 'c', text: 'L', isCorrect: false },
                    { id: 'd', text: 'Z', isCorrect: false },
                ],
                explanation: 'Pressing O toggles the red mask overlay, letting you see exactly which area a local adjustment tool is affecting.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Complete Local Adjustment Edit',
        description: 'Apply a fully layered local adjustment edit to a portfolio-quality photo.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Choose one photo from your catalog with both a sky/background and a clear subject, and apply a complete layered local adjustment edit.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Graduated Filter:</strong> Balance the sky or background against the foreground.</li>
        <li><strong>Step 2 - Radial Filter:</strong> Draw focus toward your subject using a subtle vignette effect.</li>
        <li><strong>Step 3 - Adjustment Brush:</strong> Add at least one fine, targeted detail adjustment.</li>
        <li><strong>Step 4 - Range Mask:</strong> Use at least one Range Mask (Luminance or Color) to refine a selection.</li>
        <li><strong>Step 5 - Review:</strong> Confirm the combined effect looks natural, not obviously edited.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before/after screenshot of the finished edit</li>
        <li>Screenshot showing all local adjustment pins/masks overlaid on the photo (press O)</li>
        <li>A short written note describing which Range Mask you used and why</li>
        <li>A written reflection (3-5 sentences) on how the local adjustments changed where the eye is drawn in the photo</li>
      </ul>
    `,
        rubric: [
            'Graduated Filter applied appropriately to balance sky and foreground',
            'Radial Filter used to draw focus toward the subject',
            'Adjustment Brush used for at least one fine, targeted detail',
            'At least one Range Mask (Luminance or Color) applied correctly',
            'Combined result looks natural and cohesive, not overly processed',
            'Written reflection demonstrates understanding of how local adjustments direct viewer attention',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Global adjustments affect the whole photo; local adjustments target specific areas',
            'Always complete your global Basic panel edit before adding local adjustments',
            'The Adjustment Brush paints freeform adjustments, ideal for fine, targeted details',
            'The Graduated Filter applies a linear transition, most useful for balancing skies',
            'The Radial Filter applies an elliptical transition, ideal for vignettes and subject emphasis',
            'Range Masks (Luminance and Color) refine any local adjustment to target specific tones or hues',
            'Subtlety across multiple layered adjustments produces a more natural, professional result than one heavy edit',
        ],
        nextSteps: [
            'Practice combining all three local adjustment tools on a variety of photo types',
            'Build a personal habit of checking mask overlays (O key) before finalizing any local edit',
            'Continue to Lesson 5 to explore black and white conversion and creative color grading',
            'Revisit older edited photos and consider whether local adjustments would improve them',
        ],
    },

    resources: [
        {
            title: 'Adobe Lightroom Classic Local Adjustments Documentation',
            url: 'https://helpx.adobe.com/lightroom-classic/help/local-adjustments.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Using Range Masks',
            url: 'https://helpx.adobe.com/lightroom-classic/help/local-adjustments.html',
            type: 'documentation',
        },
        {
            title: 'Local Adjustment Keyboard Shortcuts Cheat Sheet (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Lightroom Local Adjustments Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 5: Black and White and Creative Color Grading',
        description: 'Explore monochrome conversion techniques and creative color grading to develop a distinctive personal editing style.',
        topics: [
            'Black and white conversion using the B&W panel',
            'Split toning and color grading for shadows, midtones, and highlights',
            'Building a signature editing style',
            'When to choose monochrome over color',
        ],
    },
}