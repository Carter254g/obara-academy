import type { LessonData } from '../types/course'

/**
 * Lesson 05: Black and White and Creative Color Grading
 * © Obara. All rights reserved.
 */
export const lesson05: LessonData = {
    id: 'lesson-5',
    title: 'Black and White and Creative Color Grading',
    moduleTitle: 'Adobe Lightroom',
    description:
        'Master monochrome conversion and creative color grading to develop a distinctive, signature editing style.',
    lessonNumber: 5,
    duration: '42 min',
    difficulty: 'Intermediate',
    xpReward: 60,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Black and White and Creative Color Grading',
        subheadline: 'Move beyond correction into creative style, the point where your photos start to look like yours',
        keyBenefits: [
            'Convert photos to black and white with full tonal control, not just a saturation drop',
            'Use the B&W Mix panel to control individual color channels in monochrome',
            'Apply Split Toning and Color Grading to shadows, midtones, and highlights',
            'Develop a signature look you can apply consistently across a whole body of work',
        ],
    },

    learningObjectives: [
        'Explain why proper black and white conversion is different from simply removing saturation',
        'Use the B&W Mix panel to control the brightness of individual colors in monochrome',
        'Apply Split Toning to add color to shadows and highlights separately',
        'Use the Color Grading panel to tone shadows, midtones, and highlights independently',
        'Identify when a photo is a strong candidate for black and white conversion',
        'Build a consistent, repeatable creative style across multiple photos',
    ],

    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'Continuing from Lessons 1-4 with your fully edited catalog',
                status: 'required',
            },
            {
                id: 'lesson4-photos',
                name: 'Photos with completed global and local adjustments',
                description: 'Color grading is a final creative layer applied on top of a finished technical edit',
                status: 'required',
            },
            {
                id: 'variety-of-subjects',
                name: 'A mix of photo subjects (portrait, landscape, street)',
                description: 'Helpful for practicing when black and white works best',
                status: 'recommended',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson4-complete',
                label: 'Completed Lesson 4 with global and local adjustments applied',
                description: 'Color grading works best as a final creative pass on an already finished edit',
            },
            {
                id: 'variety-photos-ready',
                label: 'A few different types of photos ready to experiment with',
                description: 'Portraits, landscapes, and high-contrast scenes all respond differently',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 42 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Why Black and White Conversion Is Not Just Removing Color',
            duration: '6 min',
            content: {
                heading: 'Beyond the Saturation Slider',
                body: 'Dragging Saturation to -100 removes color but keeps the original tonal relationships, which often looks flat and muddy. True black and white conversion in Lightroom uses the B&W panel, which lets you control how bright or dark each original color becomes in the final monochrome image.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'The Saturation Trap',
                    content: 'A red shirt and a green background might appear as nearly identical shades of gray if you simply desaturate. The B&W Mix panel lets you separate them by adjusting the Red and Green channels independently.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison showing a desaturated image versus a proper B&W panel conversion with better tonal separation',
            },
            subsections: [
                {
                    title: 'Two Ways to Go Black and White',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Quick method:</strong> Click the B&W button at the top of the Basic panel, or press V</li>
              <li><strong>Full control:</strong> After converting, open the B&W panel to adjust individual color channel brightness</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: The B&W Mix Panel',
            duration: '7 min',
            content: {
                heading: 'Controlling Tonal Separation',
                body: 'The B&W Mix panel contains eight color sliders, Red, Orange, Yellow, Green, Aqua, Blue, Purple, Magenta, each controlling how bright or dark that original color appears in the converted image, even though the final result has no color at all.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Use the Targeted Adjustment Tool',
                    content: 'Click the small circle icon in the B&W panel, then click and drag directly on an area of the photo. Lightroom automatically adjusts the correct color slider for you, no guessing which channel controls what.',
                },
            ],
            image: {
                caption: 'B&W Mix panel showing eight color sliders with the Targeted Adjustment Tool active on a portrait',
            },
            subsections: [
                {
                    title: 'Common B&W Mix Adjustments',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Portraits:</strong> Slightly increase Orange and Red to keep skin tones from looking too dark or muddy</li>
              <li><strong>Skies:</strong> Decrease Blue and Aqua to darken skies for more dramatic contrast against clouds</li>
              <li><strong>Foliage:</strong> Adjust Green and Yellow to control how bright or dark plants and grass appear</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Introduction to Split Toning',
            duration: '6 min',
            content: {
                heading: 'Adding Color Back, Deliberately',
                body: 'Split Toning adds a tint of color specifically to shadows and highlights, while leaving midtones neutral. It\'s a fast way to create a cohesive mood, warm highlights with cool shadows is a classic cinematic combination.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Keep Saturation Low',
                    content: 'Split Toning effects should be felt more than seen. Start with Saturation values around 10-20 for both shadows and highlights, then increase only if the effect still looks too subtle.',
                },
            ],
            image: {
                caption: 'Split Toning panel showing separate Hue and Saturation controls for shadows and highlights',
            },
            subsections: [
                {
                    title: 'Classic Split Toning Combinations',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Warm highlights, cool shadows:</strong> Cinematic, teal-and-orange look</li>
              <li><strong>Warm highlights, warm shadows:</strong> Nostalgic, film-like warmth throughout</li>
              <li><strong>Cool highlights, warm shadows:</strong> Unconventional, moody, and modern</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Color Grading for Precise Creative Control',
            duration: '7 min',
            content: {
                heading: 'Split Toning\'s More Powerful Successor',
                body: 'The Color Grading panel replaces Split Toning with three full color wheels, one each for shadows, midtones, and highlights, giving independent hue, saturation, and luminance control over each tonal range.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Use the Global Wheel to Unify Everything',
                    content: 'After grading shadows, midtones, and highlights individually, use the fourth Global color wheel to apply a subtle, unifying tint across the entire image, tying the separate adjustments together.',
                },
            ],
            image: {
                caption: 'Color Grading panel showing three color wheels for Shadows, Midtones, and Highlights, plus a Global wheel',
            },
            subsections: [
                {
                    title: 'Color Grading Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Click into the Shadows wheel and drag slightly toward a cool tone (blue or teal)</li>
              <li>Click into the Highlights wheel and drag slightly toward a warm tone (orange or yellow)</li>
              <li>Leave Midtones mostly neutral, or apply a very subtle tint</li>
              <li>Use the Blending and Balance sliders at the bottom to fine-tune how the tones transition into each other</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: When to Choose Black and White',
            duration: '6 min',
            content: {
                heading: 'Not Every Photo Should Stay in Color',
                body: 'Black and white works best when color is a distraction rather than an asset, cluttered backgrounds, mismatched color casts, or scenes where the emotional weight comes from contrast, shape, and texture rather than color itself.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Ask This Before Converting',
                    content: 'Would this photo lose meaningful information without color? If the answer is no, and the composition relies on light, shadow, and texture, black and white is often a strong creative choice.',
                },
            ],
            image: {
                caption: 'A busy street scene shown in color versus black and white, demonstrating how monochrome removes color distraction and emphasizes composition',
            },
            subsections: [
                {
                    title: 'Strong Candidates for Black and White',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>High-contrast scenes with strong shadows and highlights</li>
              <li>Photos with distracting or mismatched color casts that are hard to correct</li>
              <li>Portraits emphasizing emotion, texture, or expression over color</li>
              <li>Architectural or street photography relying on shape and line</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Building a Consistent Signature Style',
            duration: '5 min',
            content: {
                heading: 'From One Great Edit to a Recognizable Body of Work',
                body: 'A signature style comes from applying the same creative decisions, similar color grading choices, similar contrast levels, similar tonal approach, consistently across many photos, not from one standout edit.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Save Your Grade as a Preset',
                    content: 'Once you find a Color Grading or Split Toning combination you like, save it as a preset (right-click in the Presets panel → Create Preset). Apply it as a starting point on future shoots for instant consistency.',
                },
            ],
            image: {
                caption: 'A grid of several photos from the same shoot, all sharing a consistent color grading style',
            },
            subsections: [
                {
                    title: 'Building Your Style Over Time',
                    content: `
            <p>Review your last 10-15 favorite edits and look for patterns, do you consistently warm up highlights? Cool down shadows? Prefer black and white for portraits? These patterns are the beginning of a signature style worth formalizing into a preset.</p>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Convert and Grade a Photo',
        description: 'Take one photo through a full black and white conversion, then apply creative color grading to a second, color photo.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Choose a Black and White Candidate',
                instruction: 'Select a photo with strong contrast, texture, or a distracting color cast, and press V to convert it to black and white.',
                tips: [
                    'High-contrast portraits or architectural shots work especially well for this exercise',
                ],
            },
            {
                title: 'Refine With the B&W Mix Panel',
                instruction: 'Use the Targeted Adjustment Tool in the B&W panel to click and drag on key areas, like skin or sky, to fine-tune their tonal brightness.',
                tips: [
                    'Small adjustments (10-20 points) usually create noticeably better tonal separation',
                ],
            },
            {
                title: 'Choose a Second Photo for Color Grading',
                instruction: 'Select a different, color photo with a completed Basic panel edit from Lesson 3.',
                tips: [
                    'A photo with a clear subject and background works best for practicing shadow/highlight separation',
                ],
            },
            {
                title: 'Apply Color Grading',
                instruction: 'Open the Color Grading panel. Drag the Shadows wheel toward a cool tone and the Highlights wheel toward a warm tone, keeping Saturation low.',
                tips: [
                    'Toggle the panel on and off to compare the graded version against the original',
                ],
            },
            {
                title: 'Save Your Grade as a Preset',
                instruction: 'Once satisfied with the color grading result, save it as a new preset named something like "Warm Highlight, Cool Shadow."',
                tips: [
                    'Only include the Color Grading settings in the preset, not Exposure or Contrast, so it works across different photos',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'Why is simply dragging Saturation to -100 not the same as a proper black and white conversion?',
                options: [
                    { id: 'a', text: 'It only works on JPEG files', isCorrect: false },
                    { id: 'b', text: 'It keeps original tonal relationships, often resulting in a flat, muddy look', isCorrect: true },
                    { id: 'c', text: 'It permanently deletes the color data', isCorrect: false },
                    { id: 'd', text: 'There is no difference between the two methods', isCorrect: false },
                ],
                explanation: 'Desaturating keeps the original brightness relationships between colors, while the B&W panel lets you control how bright or dark each color becomes individually.',
            },
            {
                id: 'q2',
                question: 'What does the Targeted Adjustment Tool do in the B&W Mix panel?',
                options: [
                    { id: 'a', text: 'It automatically applies a preset', isCorrect: false },
                    { id: 'b', text: 'It lets you click and drag on the photo to adjust the correct color slider automatically', isCorrect: true },
                    { id: 'c', text: 'It converts the photo back to color', isCorrect: false },
                    { id: 'd', text: 'It exports the photo immediately', isCorrect: false },
                ],
                explanation: 'The Targeted Adjustment Tool identifies which color channel corresponds to wherever you click and drag, removing the guesswork of finding the right slider.',
            },
            {
                id: 'q3',
                question: 'What does Split Toning specifically target?',
                options: [
                    { id: 'a', text: 'Only the midtones of an image', isCorrect: false },
                    { id: 'b', text: 'Shadows and highlights, leaving midtones mostly neutral', isCorrect: true },
                    { id: 'c', text: 'The entire image equally', isCorrect: false },
                    { id: 'd', text: 'Only black and white photos', isCorrect: false },
                ],
                explanation: 'Split Toning adds a color tint specifically to shadows and highlights, creating a cohesive mood while leaving midtones relatively untouched.',
            },
            {
                id: 'q4',
                question: 'How does the Color Grading panel differ from Split Toning?',
                options: [
                    { id: 'a', text: 'It only works in black and white', isCorrect: false },
                    { id: 'b', text: 'It offers three independent color wheels for shadows, midtones, and highlights, plus a global wheel', isCorrect: true },
                    { id: 'c', text: 'It cannot be undone once applied', isCorrect: false },
                    { id: 'd', text: 'It is identical to Split Toning with a different name', isCorrect: false },
                ],
                explanation: 'Color Grading expands on Split Toning by adding independent control over midtones and a global wheel, offering more precise creative control.',
            },
            {
                id: 'q5',
                question: 'What is a strong indicator that a photo is a good candidate for black and white conversion?',
                options: [
                    { id: 'a', text: 'The photo was shot in RAW format', isCorrect: false },
                    { id: 'b', text: 'Color is a distraction and the composition relies on light, shadow, and texture', isCorrect: true },
                    { id: 'c', text: 'The photo has never been edited before', isCorrect: false },
                    { id: 'd', text: 'The photo contains a sunset', isCorrect: false },
                ],
                explanation: 'Black and white works best when removing color does not lose meaningful information, and the image relies on contrast, shape, and texture.',
            },
            {
                id: 'q6',
                question: 'What is the recommended Saturation range when starting a Split Toning effect?',
                options: [
                    { id: 'a', text: '80-100', isCorrect: false },
                    { id: 'b', text: '10-20', isCorrect: true },
                    { id: 'c', text: '50-60', isCorrect: false },
                    { id: 'd', text: '0, Saturation should never be used', isCorrect: false },
                ],
                explanation: 'Split Toning effects should be subtle. Starting around 10-20 Saturation prevents an overly obvious, unnatural color cast.',
            },
            {
                id: 'q7',
                question: 'What is the purpose of the Global color wheel in the Color Grading panel?',
                options: [
                    { id: 'a', text: 'It resets all other color grading settings', isCorrect: false },
                    { id: 'b', text: 'It applies a subtle, unifying tint across the entire image', isCorrect: true },
                    { id: 'c', text: 'It only affects exported JPEGs', isCorrect: false },
                    { id: 'd', text: 'It converts the image to black and white', isCorrect: false },
                ],
                explanation: 'The Global wheel ties together the separate shadow, midtone, and highlight adjustments with one subtle, overarching tint.',
            },
            {
                id: 'q8',
                question: 'What is the best way to apply a signature color grading style consistently across future shoots?',
                options: [
                    { id: 'a', text: 'Manually re-adjust the color wheels on every single photo', isCorrect: false },
                    { id: 'b', text: 'Save the Color Grading settings as a reusable preset', isCorrect: true },
                    { id: 'c', text: 'Signature styles cannot be reused across photos', isCorrect: false },
                    { id: 'd', text: 'Convert every photo to black and white', isCorrect: false },
                ],
                explanation: 'Saving a Color Grading combination as a preset lets you apply the same creative starting point instantly across future shoots for consistency.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Develop Your Creative Style',
        description: 'Apply black and white conversion to one photo and color grading to another, then define the beginning of your personal editing style.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Select 2 photos from your catalog, one to convert to black and white, and one to color grade creatively.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Black and White Conversion:</strong> Convert your first photo using the B&W panel, and refine tonal separation with the B&W Mix sliders.</li>
        <li><strong>Step 2 - Color Grading:</strong> Apply Color Grading to your second photo, adjusting Shadows, Midtones, and Highlights independently.</li>
        <li><strong>Step 3 - Save a Preset:</strong> Save your color grading combination as a reusable preset with a descriptive name.</li>
        <li><strong>Step 4 - Reflect:</strong> Write a short reflection identifying at least one recurring creative choice you find yourself making (e.g. cooler shadows, preference for high-contrast black and white).</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before/after screenshot of the black and white conversion</li>
        <li>Before/after screenshot of the color-graded photo</li>
        <li>Name and screenshot of your saved Color Grading preset</li>
        <li>Written reflection identifying an emerging personal style pattern</li>
      </ul>
    `,
        rubric: [
            'Black and white conversion uses the B&W Mix panel, not just a Saturation drop',
            'Color Grading applied independently to shadows, midtones, and highlights',
            'A reusable preset saved with a clear, descriptive name',
            'Overall results look intentional and cohesive, not randomly adjusted',
            'Written reflection identifies a genuine, specific creative pattern',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Proper black and white conversion uses the B&W panel, not just a Saturation drop, for meaningful tonal separation',
            'The B&W Mix panel and Targeted Adjustment Tool let you control how bright or dark each original color becomes in monochrome',
            'Split Toning adds color specifically to shadows and highlights, leaving midtones mostly neutral',
            'The Color Grading panel offers more precise, independent control over shadows, midtones, highlights, and a global tint',
            'Black and white works best when color is a distraction rather than an asset to the image',
            'A signature editing style comes from consistent creative decisions across many photos, not one standout edit',
            'Saving a color grading combination as a preset makes your personal style instantly reusable',
        ],
        nextSteps: [
            'Review a body of your past work and identify recurring creative choices worth formalizing into a preset',
            'Practice deciding between color and black and white before defaulting to either',
            'Continue building and refining your personal preset library as your style develops',
            'Prepare to apply everything learned so far toward finishing a complete portfolio-ready edit',
        ],
    },

    resources: [
        {
            title: 'Adobe Lightroom Classic Black and White Conversion Documentation',
            url: 'https://helpx.adobe.com/lightroom-classic/help/black-and-white.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Color Grading and Split Toning',
            url: 'https://helpx.adobe.com/lightroom-classic/help/color-grading.html',
            type: 'documentation',
        },
        {
            title: 'Color Grading Combinations Cheat Sheet (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Lightroom Creative Color Grading Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 6: Presets and Batch Editing',
        description: 'Learn to create, organize, and apply custom presets, then edit hundreds of photos efficiently using batch editing and sync settings.',
        topics: [
            'Creating and organizing custom presets',
            'Syncing settings across multiple photos',
            'Batch editing an entire shoot efficiently',
            'Building a personal preset library for different photography genres',
        ],
    },
}