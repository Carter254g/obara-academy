import type { LessonData } from '../types/course'

/**
 * Lesson 03: Basic Color and Exposure
 * © Obara. All rights reserved.
 */
export const lesson03: LessonData = {
    id: 'lesson-3',
    title: 'Basic Color and Exposure',
    moduleTitle: 'Adobe Lightroom',
    description:
        'Learn to read the histogram and adjust exposure, white balance, and tone with the precision of a working professional.',
    lessonNumber: 3,
    duration: '45 min',
    difficulty: 'Beginner',
    xpReward: 55,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Basic Color and Exposure',
        subheadline: 'Turn a flat, unedited photo into one with balanced light, accurate color, and real depth',
        keyBenefits: [
            'Read a histogram confidently instead of guessing by eye',
            'Correct white balance so colors look natural in any lighting condition',
            'Master the Basic panel as one interconnected system, not five separate sliders',
            'Recover detail from blown highlights and crushed shadows',
            'Build a repeatable, professional color-correction order of operations',
        ],
    },

    learningObjectives: [
        'Read a histogram and identify highlight and shadow clipping',
        'Correct white balance using the eyedropper and manual Temp/Tint sliders',
        'Apply Exposure, Contrast, Highlights, Shadows, Whites, and Blacks as an interconnected system',
        'Recover detail from overexposed and underexposed areas without introducing artifacts',
        'Use Clarity and texture adjustments appropriately for different subjects',
        'Apply a consistent, repeatable order of operations to every photo you edit',
    ],

    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'Continuing from Lessons 1-2 with your organized catalog',
                status: 'required',
            },
            {
                id: 'organized-catalog',
                name: 'Your organized catalog from Lesson 2',
                description: 'Photos with ratings, flags, and keywords already applied',
                status: 'required',
            },
            {
                id: 'mixed-exposure-photos',
                name: 'A few photos with exposure problems',
                description: 'Ideally one overexposed and one underexposed shot, for practice',
                status: 'recommended',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson2-complete',
                label: 'Completed Lesson 2 with an organized catalog',
                description: 'Ratings, flags, and keywords already applied to your practice photos',
            },
            {
                id: 'histogram-visible',
                label: 'Histogram panel visible in the Develop module',
                description: 'Top-right corner of the Develop module by default',
            },
            {
                id: 'clipping-warnings-known',
                label: 'Know where the clipping warning triangles are',
                description: 'Top corners of the histogram, toggled with the J key',
            },
            {
                id: 'time-allocated',
                label: 'Allocate 45 minutes for this lesson',
                description: 'Uninterrupted learning time for best results',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Reading the Histogram',
            duration: '7 min',
            content: {
                heading: 'Your Most Important Editing Tool',
                body: 'The histogram is a graph of every pixel\'s brightness in your photo, from pure black on the left to pure white on the right. Learning to read it removes the guesswork from exposure decisions, especially on a screen that may not be color-accurate.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Trust the Histogram Over Your Screen',
                    content: 'Monitor brightness varies wildly between devices. A photo that looks perfectly exposed on a dim laptop screen may be badly overexposed in reality. The histogram never lies about brightness values.',
                },
            ],
            image: {
                caption: 'The Lightroom histogram panel showing tonal distribution from shadows to highlights, with clipping warning triangles in the top corners',
            },
            subsections: [
                {
                    title: 'Understanding Clipping',
                    content: `
            <p class="mb-2">Clipping means detail is completely lost, either pure black or pure white with no texture.</p>
            <ul class="space-y-2 pl-5 list-disc">
              <li>A spike touching the far left edge means shadow clipping (crushed blacks)</li>
              <li>A spike touching the far right edge means highlight clipping (blown whites)</li>
              <li>Press <strong>J</strong> to toggle clipping warnings directly on the image: blue for shadow clipping, red for highlight clipping</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Correcting White Balance',
            duration: '7 min',
            content: {
                heading: 'Making Colors Look Natural',
                body: 'White balance controls whether your photo looks too orange (warm) or too blue (cool). Getting it right first makes every subsequent color decision easier, since you\'re no longer fighting an incorrect color cast.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'The Eyedropper Shortcut',
                    content: 'Select the White Balance eyedropper (W key) and click any neutral gray or white area in your photo, a sidewalk, a white shirt, a gray card. Lightroom calculates the correct Temp and Tint automatically.',
                },
            ],
            image: {
                caption: 'White Balance panel showing Temp and Tint sliders alongside the eyedropper tool selecting a neutral gray area',
            },
            subsections: [
                {
                    title: 'Temp and Tint Explained',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Temp:</strong> Moves between blue (cooler) and yellow (warmer)</li>
              <li><strong>Tint:</strong> Moves between green and magenta, used to correct color casts from artificial lighting</li>
              <li>When no neutral area exists in the photo, adjust Temp and Tint manually by eye, using known reference points like skin tone or sky color</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Exposure and Contrast as a Pair',
            duration: '7 min',
            content: {
                heading: 'Setting Your Foundation',
                body: 'Exposure sets the overall brightness of the image. Contrast then separates the light and dark areas for depth. These two sliders should always be adjusted together first, before touching anything else in the Basic panel.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Don\'t Chase Perfect Exposure With Contrast',
                    content: 'If a photo still looks flat after setting Exposure correctly, that\'s what Contrast is for. Don\'t push Exposure past what the histogram shows just to compensate for a lack of contrast.',
                },
            ],
            image: {
                caption: 'Basic panel showing Exposure and Contrast sliders with before/after preview of a flat photo gaining depth',
            },
            subsections: [
                {
                    title: 'A Practical Starting Order',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Set Exposure first, using the histogram as your guide, not your eyes alone</li>
              <li>Add Contrast in small increments (10-25 is typical) until the image gains depth</li>
              <li>Recheck the histogram, ensure nothing is clipping unintentionally</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Highlights, Shadows, Whites, and Blacks',
            duration: '8 min',
            content: {
                heading: 'Recovering Detail at Both Extremes',
                body: 'These four sliders refine the tonal range Exposure and Contrast established. Highlights and Shadows recover detail in specific brightness ranges; Whites and Blacks set the true endpoints of your tonal range.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'The Endpoint-Setting Technique',
                    content: 'Hold Option/Alt while dragging Whites or Blacks to see exactly where clipping begins, shown as colored flashes against a black or white screen. Stop right before clipping starts unless you want it intentionally.',
                },
            ],
            image: {
                caption: 'Basic panel showing Highlights, Shadows, Whites, and Blacks sliders with a before/after comparison recovering sky and shadow detail',
            },
            subsections: [
                {
                    title: 'What Each Slider Actually Does',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Highlights:</strong> Recovers detail in bright areas without darkening the whole image</li>
              <li><strong>Shadows:</strong> Reveals detail in dark areas without brightening the whole image</li>
              <li><strong>Whites:</strong> Sets the true white point of the image, the brightest meaningful value</li>
              <li><strong>Blacks:</strong> Sets the true black point, the darkest meaningful value</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Texture, Clarity, and Dehaze',
            duration: '6 min',
            content: {
                heading: 'Refining Midtone Contrast',
                body: 'Texture, Clarity, and Dehaze all add midtone contrast in different ways. Used well, they add punch and dimension. Overused, they create halos and an unnatural, over-processed look.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Portraits Need a Lighter Touch',
                    content: 'High Clarity values emphasize skin texture and pores in unflattering ways. For portraits, keep Clarity low or even negative, and prefer Texture for controlled sharpening around eyes and hair.',
                },
            ],
            image: {
                caption: 'Side-by-side comparison showing subtle versus excessive Clarity applied to the same landscape photo',
            },
            subsections: [
                {
                    title: 'When to Use Each',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Texture:</strong> Fine detail enhancement, safest for portraits, works without heavy halos</li>
              <li><strong>Clarity:</strong> Stronger midtone contrast, excellent for landscapes and architecture, risky on skin</li>
              <li><strong>Dehaze:</strong> Cuts through atmospheric haze, useful for distant landscapes, easily overdone</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Building a Repeatable Editing Order',
            duration: '6 min',
            content: {
                heading: 'Consistency Is What Makes You Fast',
                body: 'Professionals don\'t reinvent their process for every photo. A consistent order of operations means less second-guessing and faster, more reliable results across an entire shoot.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'A Reliable Order of Operations',
                    content: 'White Balance → Exposure → Contrast → Highlights/Shadows → Whites/Blacks → Texture/Clarity/Dehaze → Vibrance/Saturation. Following the same order every time builds speed and consistency.',
                },
            ],
            image: {
                caption: 'Workflow diagram showing the full Basic panel editing order from white balance through to saturation',
            },
            subsections: [
                {
                    title: 'Why Order Matters',
                    content: `
            <p>Adjusting sliders out of order often means redoing earlier work. For example, setting Whites and Blacks before Exposure means you'll likely need to readjust them once Exposure changes the overall brightness. Following a fixed order prevents this back-and-forth.</p>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands-On Practice: Full Basic Panel Edit',
        description: 'Apply the complete color and exposure workflow to a real photo, from white balance through final contrast refinement.',
        estimatedTime: '20 min',
        steps: [
            {
                title: 'Select a Photo With Exposure Problems',
                instruction: 'From your organized catalog, choose one photo that is noticeably too dark, too bright, or has an obvious color cast.',
                tips: [
                    'A photo taken indoors under mixed lighting is ideal practice for white balance correction',
                ],
            },
            {
                title: 'Correct White Balance First',
                instruction: 'Press W to select the eyedropper and click a neutral gray or white area. If none exists, adjust Temp and Tint manually by eye.',
                tips: [
                    'Toggle before/after with the backslash key (\\) to confirm the color shift looks natural',
                ],
            },
            {
                title: 'Set Exposure Using the Histogram',
                instruction: 'Adjust the Exposure slider while watching the histogram, not just the image. Aim for a full tonal range without clipping unless intentional.',
                tips: [
                    'Press J to toggle clipping warnings on the image itself while adjusting',
                ],
            },
            {
                title: 'Add Contrast for Depth',
                instruction: 'Increase Contrast in small increments (start around 15-20) until the image feels less flat.',
                tips: [
                    'Too much Contrast crushes shadow and highlight detail, watch the histogram edges',
                ],
            },
            {
                title: 'Recover Highlights and Shadows',
                instruction: 'If any areas are too bright or too dark, use Highlights and Shadows to recover detail without changing overall exposure.',
                tips: [
                    'These sliders are most effective on RAW files, which contain more recoverable data than JPEGs',
                ],
            },
            {
                title: 'Set Your True Whites and Blacks',
                instruction: 'Hold Option/Alt while dragging Whites, then Blacks, to find the exact point clipping begins. Back off slightly from that point.',
                tips: [
                    'This step defines your image\'s true tonal range and adds a final sense of "snap"',
                ],
            },
            {
                title: 'Apply Texture or Clarity',
                instruction: 'Add a small amount of Texture or Clarity depending on the subject. Use a lighter touch for portraits, more for landscapes or architecture.',
                tips: [
                    'Zoom to 100% to check for unwanted halos before finalizing',
                ],
            },
            {
                title: 'Compare Before and After',
                instruction: 'Press the backslash key (\\) to toggle the full before/after comparison and confirm the edit looks intentional, not just "different."',
                tips: [
                    'If in doubt, dial back your strongest adjustment by half',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What does a spike touching the far right edge of the histogram indicate?',
                options: [
                    { id: 'a', text: 'Shadow clipping', isCorrect: false },
                    { id: 'b', text: 'Highlight clipping', isCorrect: true },
                    { id: 'c', text: 'Correct exposure', isCorrect: false },
                    { id: 'd', text: 'A color cast', isCorrect: false },
                ],
                explanation: 'The right edge of the histogram represents pure white. A spike touching it means highlight detail is being lost, also known as clipping.',
            },
            {
                id: 'q2',
                question: 'What keyboard shortcut toggles clipping warnings directly on the image?',
                options: [
                    { id: 'a', text: 'W', isCorrect: false },
                    { id: 'b', text: 'J', isCorrect: true },
                    { id: 'c', text: 'B', isCorrect: false },
                    { id: 'd', text: 'G', isCorrect: false },
                ],
                explanation: 'Pressing J shows clipping warnings as colored overlays directly on the photo, blue for shadow clipping and red for highlight clipping.',
            },
            {
                id: 'q3',
                question: 'What does the White Balance eyedropper tool do when clicked on a neutral gray area?',
                options: [
                    { id: 'a', text: 'It deletes all color from the photo', isCorrect: false },
                    { id: 'b', text: 'It automatically calculates correct Temp and Tint values', isCorrect: true },
                    { id: 'c', text: 'It increases saturation', isCorrect: false },
                    { id: 'd', text: 'It resets the entire Basic panel', isCorrect: false },
                ],
                explanation: 'The eyedropper uses a known neutral point to calculate the exact white balance correction needed for accurate color.',
            },
            {
                id: 'q4',
                question: 'What is the recommended first two adjustments to make in the Basic panel, in order?',
                options: [
                    { id: 'a', text: 'Clarity, then Dehaze', isCorrect: false },
                    { id: 'b', text: 'Whites, then Blacks', isCorrect: false },
                    { id: 'c', text: 'White Balance, then Exposure', isCorrect: true },
                    { id: 'd', text: 'Shadows, then Highlights', isCorrect: false },
                ],
                explanation: 'Correcting color first, then setting overall brightness, creates a stable foundation for every adjustment that follows.',
            },
            {
                id: 'q5',
                question: 'What does holding Option/Alt while dragging the Whites slider show you?',
                options: [
                    { id: 'a', text: 'A preview of the final export', isCorrect: false },
                    { id: 'b', text: 'The exact point where highlight clipping begins', isCorrect: true },
                    { id: 'c', text: 'A histogram of the previous edit', isCorrect: false },
                    { id: 'd', text: 'The photo\'s original unedited state', isCorrect: false },
                ],
                explanation: 'This technique shows colored flashes against a black screen at the precise point clipping starts, allowing precise control over the white point.',
            },
            {
                id: 'q6',
                question: 'Why should Clarity be used carefully on portraits?',
                options: [
                    { id: 'a', text: 'It changes the white balance', isCorrect: false },
                    { id: 'b', text: 'It emphasizes skin texture and pores in unflattering ways', isCorrect: true },
                    { id: 'c', text: 'It only works on black and white photos', isCorrect: false },
                    { id: 'd', text: 'It reduces image resolution', isCorrect: false },
                ],
                explanation: 'High Clarity values increase midtone contrast in a way that exaggerates skin texture, which is usually undesirable in portraiture.',
            },
            {
                id: 'q7',
                question: 'What is the difference between Highlights/Shadows and Whites/Blacks?',
                options: [
                    { id: 'a', text: 'There is no difference, they do the same thing', isCorrect: false },
                    {
                        id: 'b',
                        text: 'Highlights/Shadows recover detail in specific ranges; Whites/Blacks set the true endpoints of the tonal range',
                        isCorrect: true,
                    },
                    { id: 'c', text: 'Whites/Blacks only work on black and white photos', isCorrect: false },
                    { id: 'd', text: 'Highlights/Shadows can only be used after exporting', isCorrect: false },
                ],
                explanation: 'Highlights and Shadows target specific brightness ranges for recovery, while Whites and Blacks define where true white and true black fall in the image.',
            },
            {
                id: 'q8',
                question: 'Why is a consistent order of operations important when editing?',
                options: [
                    { id: 'a', text: 'Lightroom requires a specific order to save the file', isCorrect: false },
                    { id: 'b', text: 'It prevents having to redo earlier adjustments and builds editing speed', isCorrect: true },
                    { id: 'c', text: 'It automatically applies a preset', isCorrect: false },
                    { id: 'd', text: 'It is only relevant for black and white conversions', isCorrect: false },
                ],
                explanation: 'Adjusting sliders out of order often means later changes undo the effect of earlier ones, so a fixed sequence saves time and produces more consistent results.',
            },
            {
                id: 'q9',
                question: 'What tool is best suited for landscape photography to cut through atmospheric haze?',
                options: [
                    { id: 'a', text: 'Tint', isCorrect: false },
                    { id: 'b', text: 'Dehaze', isCorrect: true },
                    { id: 'c', text: 'Texture', isCorrect: false },
                    { id: 'd', text: 'Blacks', isCorrect: false },
                ],
                explanation: 'Dehaze specifically targets atmospheric haze and low-contrast distant elements, common in landscape photography.',
            },
            {
                id: 'q10',
                question: 'What keyboard shortcut toggles a full before/after comparison of your edit?',
                options: [
                    { id: 'a', text: 'Backslash (\\)', isCorrect: true },
                    { id: 'b', text: 'Spacebar', isCorrect: false },
                    { id: 'c', text: 'Tab', isCorrect: false },
                    { id: 'd', text: 'Enter', isCorrect: false },
                ],
                explanation: 'The backslash key toggles between the current edit and the original unedited photo, useful for confirming an edit looks intentional.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Full Exposure and Color Correction',
        description: 'Apply the complete Basic panel workflow to a set of photos with real exposure and color problems.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Select 5 photos from your organized catalog with visible exposure or color problems, and correct each one using the full workflow taught in this lesson.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - White Balance:</strong> Correct color temperature on each photo using the eyedropper or manual adjustment.</li>
        <li><strong>Step 2 - Exposure and Contrast:</strong> Set exposure using the histogram, then add contrast for depth.</li>
        <li><strong>Step 3 - Highlights and Shadows:</strong> Recover detail at both extremes without changing overall exposure.</li>
        <li><strong>Step 4 - Whites and Blacks:</strong> Use the Option/Alt clipping technique to set precise tonal endpoints.</li>
        <li><strong>Step 5 - Texture or Clarity:</strong> Apply a subject-appropriate amount of midtone contrast.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before/after screenshots of all 5 edited photos</li>
        <li>A brief note for each photo describing the main problem corrected (e.g. "orange color cast from tungsten lighting")</li>
        <li>Confirmation that no unintended clipping remains in the final histogram of each photo</li>
        <li>A short written reflection (3-5 sentences) on which slider you found most useful and why</li>
      </ul>
    `,
        rubric: [
            'White balance corrected appropriately on all 5 photos',
            'Exposure set using histogram reference, not by eye alone',
            'Highlights and Shadows used to recover detail without introducing new problems',
            'Whites and Blacks set using the clipping-preview technique',
            'Texture or Clarity applied appropriately for each photo\'s subject matter',
            'Written reflection demonstrates genuine understanding of the editing order and its purpose',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'The histogram is the most reliable tool for judging exposure, more trustworthy than your screen',
            'Clipping means detail is completely lost, use the J shortcut to see it directly on the image',
            'White balance should be corrected before any other adjustment, using the eyedropper on a neutral area when possible',
            'Exposure and Contrast form the foundation, set together before finer adjustments',
            'Highlights and Shadows recover detail in specific ranges; Whites and Blacks set the true tonal endpoints',
            'Texture, Clarity, and Dehaze all add midtone contrast differently, and should be used carefully depending on subject matter',
            'A consistent order of operations builds editing speed and produces more reliable, repeatable results',
            'Holding Option/Alt while dragging Whites or Blacks shows exactly where clipping begins',
        ],
        nextSteps: [
            'Apply this exact editing order to every photo in your next real shoot',
            'Practice reading histograms on a variety of lighting conditions until it becomes automatic',
            'Start building your own personal preset based on this repeatable order of operations',
            'Continue to Lesson 4 to begin targeted, localized adjustments using brushes and gradients',
        ],
    },

    resources: [
        {
            title: 'Adobe Lightroom Classic Basic Panel Documentation',
            url: 'https://helpx.adobe.com/lightroom-classic/help/basic-adjustments.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Understanding the Histogram',
            url: 'https://helpx.adobe.com/lightroom-classic/help/histogram.html',
            type: 'documentation',
        },
        {
            title: 'Exposure and Color Correction Cheat Sheet (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Lightroom Color Grading Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 4: Local Adjustments and Selective Editing',
        description: 'Move beyond global edits and learn to apply targeted adjustments to specific areas of a photo using the Adjustment Brush, Graduated Filter, and Radial Filter.',
        topics: [
            'Using the Adjustment Brush for precise, localized edits',
            'Graduated and Radial Filters for skies and vignettes',
            'Combining local adjustments with your global Basic panel edit',
            'Building a natural-looking, professionally finished result',
        ],
    },
}