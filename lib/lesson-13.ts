import type { LessonData } from '../types/course'

/**
 * Lesson 13: Color Correction and Matching
 * © Obara. All rights reserved.
 */
export const lesson13: LessonData = {
    id: 'lesson-13',
    title: 'Color Correction and Matching',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Match tones and colors across layered assets for seamless outcomes, using white balance, curves, and reusable presets to unify a finished composite.',
    lessonNumber: 13,
    duration: '48 min',
    difficulty: 'Intermediate',
    xpReward: 85,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Color Correction and Matching',
        subheadline: 'Compositing gets the pieces in place, color matching is what makes them feel like one photograph',
        keyBenefits: [
            'Read and match white balance across photos shot in different light',
            'Use curves for targeted, channel based color correction',
            'Build reusable color match presets to speed up future work',
            'Apply one consistent grade across a full multi element composite',
        ],
    },

    learningObjectives: [
        'Identify a white balance mismatch by reading the color cast in shadows and highlights',
        'Use curves to correct color casts on individual channels',
        'Apply the Match Color and Selective Color tools for targeted adjustments',
        'Save an adjustment layer stack as a reusable preset',
        'Apply a single unifying grade across a finished composite',
        'Recognize when a color problem is really a light or perspective problem in disguise',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'Continuing from Lesson 12 with compositing fluency',
                status: 'required',
            },
            {
                id: 'composite-file',
                name: 'A composited image with visible layers',
                description: 'Ideally the multi element composite you built at the end of Lesson 12',
                status: 'required',
            },
            {
                id: 'mismatched-photos',
                name: 'Two photos shot in different lighting conditions',
                description: 'Used for practicing white balance matching from scratch',
                status: 'recommended',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson12-complete',
                label: 'Completed Lesson 12 with compositing fluency',
                description: 'This lesson assumes comfort placing and blending composited elements',
            },
            {
                id: 'composite-ready',
                label: 'A composite file with separate, editable layers',
                description: 'Used throughout this lesson\'s practice',
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
            title: 'Section 1: Why Color Matching Finishes What Compositing Started',
            duration: '6 min',
            content: {
                heading: 'The Last Ten Percent That Sells the Whole Image',
                body: 'A composite can have perfect light direction, perfect perspective, and clean edges, and still look slightly wrong if the colors across its layers do not agree. Color matching is the finishing pass that unifies everything into a single, believable photograph rather than a collection of well placed pieces.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Color Problems Are Often Light Problems in Disguise',
                    content: 'Before reaching for a color adjustment, double check the light direction and quality from Lesson 12. A color cast that will not correct cleanly is often a sign that the underlying light mismatch was never fully resolved.',
                },
            ],
            image: {
                caption: 'A composite before and after a unifying color grade, showing how mismatched layers can resolve into a single cohesive image',
            },
            subsections: [
                {
                    title: 'Quick Reference',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>White balance:</strong> The overall color temperature of a photo, warm or cool</li>
              <li><strong>Color cast:</strong> An unwanted tint across an image, often from mixed light sources</li>
              <li><strong>Grade:</strong> A final, deliberate stylistic color adjustment applied across a whole image</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Reading and Matching White Balance',
            duration: '9 min',
            content: {
                heading: 'Finding the Cast Before You Correct It',
                body: 'White balance describes whether a photo reads warm, cool, or neutral. Photos shot in daylight often lean cool or neutral, photos shot near sunset or under tungsten bulbs lean warm, and photos shot under fluorescent or overcast light often carry a green or blue cast.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Check Neutral Areas First',
                    content: 'Look for something that should be a neutral gray or white in the photo, like a wall, a shirt, or a sky. If that area reads warm or cool instead of neutral, you have found your white balance mismatch and know which direction to correct.',
                },
            ],
            image: {
                caption: 'Two source photos side by side, one with a warm tungsten cast and one with a cool daylight cast, next to their corrected, matched versions',
            },
            subsections: [
                {
                    title: 'Finding and Matching White Balance',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Locate a neutral gray, white, or skin tone area in each layer</li>
              <li>Compare that area's color across layers to spot warm, cool, or green and blue casts</li>
              <li>Add a Photo Filter or Color Balance adjustment layer to nudge the mismatched layer toward neutral</li>
              <li>Recheck the neutral area after adjusting, rather than judging the correction by eye alone</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Using Curves for Targeted Color Matching',
            duration: '9 min',
            content: {
                heading: 'Channel Based Correction for Precise Control',
                body: 'The Curves adjustment lets you correct color on the Red, Green, and Blue channels individually, giving far more precise control than a single overall color slider. A slight S curve on one channel can neutralize a cast that global adjustments struggle to fix cleanly.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Use the Eyedropper Inside Curves',
                    content: 'Inside the Curves dialog, use the gray point eyedropper to click on an area that should be neutral. Photoshop calculates the channel correction automatically, giving you a precise starting point to refine further.',
                },
            ],
            image: {
                caption: 'The Curves dialog with individual Red, Green, and Blue channel adjustments shown, correcting a slight green cast in a photo',
            },
            subsections: [
                {
                    title: 'Correcting Color With Curves',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Add a Curves adjustment layer above the layer that needs correction</li>
              <li>Switch to the Red, Green, or Blue channel individually rather than the combined RGB curve</li>
              <li>Use the gray point eyedropper on a neutral area to auto correct the cast</li>
              <li>Fine tune each channel manually by lifting or lowering the curve slightly if the auto correction is not quite right</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Match Color and Selective Color Tools',
            duration: '8 min',
            content: {
                heading: 'Purpose Built Tools for Common Matching Problems',
                body: 'Photoshop includes two tools built specifically for color matching. Match Color analyzes a source layer and applies its color statistics to a target layer automatically, a fast starting point for close matches. Selective Color adjusts specific color ranges, like reds or skin tones, without affecting the rest of the image.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Let Match Color Do the Heavy Lifting First',
                    content: 'Run Match Color as a first pass whenever two layers are reasonably close in lighting already. It rarely produces a perfect result alone, but it removes most of the obvious mismatch before manual refinement with Curves or Selective Color.',
                },
            ],
            image: {
                caption: 'The Match Color dialog showing a source and target layer selected, with a preview of the automatically matched result',
            },
            subsections: [
                {
                    title: 'Using Match Color',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Select the layer you want to correct, then open Image, Adjustments, Match Color</li>
              <li>Choose the source layer whose color you want to match toward</li>
              <li>Adjust the Luminance, Color Intensity, and Fade sliders to control the strength of the match</li>
              <li>Follow up with Selective Color on skin tones or specific color ranges if needed</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Building Reusable Color Match Presets',
            duration: '8 min',
            content: {
                heading: 'Saving Time on Every Future Composite',
                body: 'Once a color match adjustment stack works well, save it as a reusable preset rather than rebuilding it from scratch on the next project. Photoshop actions and adjustment layer groups both work well for this, depending on how much the stack needs to change project to project.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Group Adjustment Layers Before Saving as an Action',
                    content: 'Select all of your color correction adjustment layers, group them, and record the group creation as a Photoshop Action. This lets you reapply the same starting stack to a new composite in one click, then fine tune from there.',
                },
            ],
            image: {
                caption: 'The Actions panel showing a recorded Color Match Preset action, alongside a grouped stack of adjustment layers in the Layers panel',
            },
            subsections: [
                {
                    title: 'Creating a Reusable Preset',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Build a color correction stack that works well on a typical composite</li>
              <li>Select all of the adjustment layers and group them into a single folder</li>
              <li>Open the Actions panel and record the process of creating and naming that group</li>
              <li>Apply the saved action to future composites as a starting point, then adjust for each specific project</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Applying Consistent Grading Across a Composite',
            duration: '8 min',
            content: {
                heading: 'The Final Pass That Ties Everything Together',
                body: 'After individual layers are color matched, one final grading adjustment, applied across the entire flattened composite, gives the image a single, cohesive feel. This is a deliberate stylistic choice, not a correction, and it is the last step before exporting.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Grade Last, Never First',
                    content: 'Applying a stylistic grade before individual layers are color matched will hide mismatches rather than fix them. Always confirm white balance and color matching are correct first, then grade the whole image as the final step.',
                },
            ],
            image: {
                caption: 'A finished composite with a subtle warm grade applied across the entire image, unifying all previously matched layers',
            },
            subsections: [
                {
                    title: 'Applying a Final Grade',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Confirm every layer's white balance and color match is corrected first</li>
              <li>Flatten a stamped copy of the composite, or add a Curves or Color Lookup adjustment above everything</li>
              <li>Apply a subtle, deliberate stylistic adjustment across the whole image</li>
              <li>Compare the graded and ungraded versions side by side before finalizing</li>
            </ol>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands On Practice: Color Match a Multi Layer Composite',
        description: 'Take a composite with mismatched layers and bring every element into one cohesive color palette.',
        estimatedTime: '25 min',
        steps: [
            {
                title: 'Identify the Mismatch',
                instruction: 'Open your composite from Lesson 12 and find a neutral area in each major layer to check for a color cast.',
                tips: [
                    'Skin tones, white walls, and gray pavement are reliable neutral references',
                ],
            },
            {
                title: 'Run Match Color as a First Pass',
                instruction: 'Select the mismatched layer, open Match Color, and choose the correct source layer to match toward.',
                tips: [
                    'Start with the Fade slider high, then lower it gradually until the match looks natural rather than flat',
                ],
            },
            {
                title: 'Refine With Curves',
                instruction: 'Add a Curves adjustment layer above the corrected layer and use the gray point eyedropper on your neutral reference.',
                tips: [
                    'Only adjust the channels that still show a visible cast after Match Color',
                ],
            },
            {
                title: 'Fine Tune With Selective Color',
                instruction: 'If skin tones or specific color ranges still look off, use Selective Color to target just those ranges.',
                tips: [
                    'Small adjustments go a long way here, ten percent changes are often enough',
                ],
            },
            {
                title: 'Save the Stack as a Preset',
                instruction: 'Group your adjustment layers and record the process as a Photoshop Action for future composites.',
                tips: [
                    'Name the action something specific, like Outdoor to Studio Match, so it is easy to find later',
                ],
            },
            {
                title: 'Apply a Final Grade',
                instruction: 'Add one last adjustment layer across the entire composite to unify tone before exporting.',
                tips: [
                    'Toggle the grade on and off to confirm it improves the image rather than just changing it',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What should you check first when trying to identify a white balance mismatch?',
                options: [
                    { id: 'a', text: 'The overall file size of each layer', isCorrect: false },
                    { id: 'b', text: 'A neutral gray, white, or skin tone area in each layer', isCorrect: true },
                    { id: 'c', text: 'The resolution of each source photo', isCorrect: false },
                    { id: 'd', text: 'The layer opacity settings', isCorrect: false },
                ],
                explanation: 'A neutral area reveals a color cast clearly, since it should read as neutral gray or white if the white balance is correct.',
            },
            {
                id: 'q2',
                question: 'Why use Curves on individual color channels rather than a single overall adjustment?',
                options: [
                    { id: 'a', text: 'It is required before Match Color can be used', isCorrect: false },
                    { id: 'b', text: 'It gives more precise control for correcting a specific color cast', isCorrect: true },
                    { id: 'c', text: 'It automatically saves as a reusable preset', isCorrect: false },
                    { id: 'd', text: 'It only works on black and white images', isCorrect: false },
                ],
                explanation: 'Individual Red, Green, and Blue channel adjustments allow precise correction that a single combined curve cannot achieve as cleanly.',
            },
            {
                id: 'q3',
                question: 'What does the Match Color tool do?',
                options: [
                    { id: 'a', text: 'Deletes the background of a layer automatically', isCorrect: false },
                    { id: 'b', text: 'Analyzes a source layer and applies its color statistics to a target layer', isCorrect: true },
                    { id: 'c', text: 'Converts an image to grayscale', isCorrect: false },
                    { id: 'd', text: 'Sharpens edges automatically', isCorrect: false },
                ],
                explanation: 'Match Color provides a fast automated starting point by applying one layer\'s color characteristics to another.',
            },
            {
                id: 'q4',
                question: 'What is a reliable way to save a color correction stack for reuse on future composites?',
                options: [
                    { id: 'a', text: 'Group the adjustment layers and record the process as a Photoshop Action', isCorrect: true },
                    { id: 'b', text: 'Manually rebuild the same adjustments from scratch each time', isCorrect: false },
                    { id: 'c', text: 'Flatten the image before saving', isCorrect: false },
                    { id: 'd', text: 'Delete the adjustment layers after use', isCorrect: false },
                ],
                explanation: 'Grouping adjustment layers and recording them as an Action lets the same starting stack be reapplied in one click on a new project.',
            },
            {
                id: 'q5',
                question: 'When should a final stylistic grade be applied to a composite?',
                options: [
                    { id: 'a', text: 'Before any layers are color matched', isCorrect: false },
                    { id: 'b', text: 'After individual layers are color matched, as the last step before exporting', isCorrect: true },
                    { id: 'c', text: 'Only if the composite will be printed', isCorrect: false },
                    { id: 'd', text: 'At the same time as the initial white balance correction', isCorrect: false },
                ],
                explanation: 'Grading before layers are matched hides mismatches rather than fixing them, so it should always come last.',
            },
            {
                id: 'q6',
                question: 'A color cast that will not correct cleanly with color tools is often a sign of what?',
                options: [
                    { id: 'a', text: 'A corrupted file', isCorrect: false },
                    { id: 'b', text: 'An underlying light direction or quality mismatch from earlier in the composite', isCorrect: true },
                    { id: 'c', text: 'Incorrect image resolution', isCorrect: false },
                    { id: 'd', text: 'A missing layer mask', isCorrect: false },
                ],
                explanation: 'Color problems are sometimes light problems in disguise, and revisiting the light matching from Lesson 12 can resolve what color tools alone cannot.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Color Match and Grade a Finished Composite',
        description: 'Take a multi layer composite and bring it to a single, cohesive color palette with a final unifying grade.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Using your composite from Lesson 12, correct any white balance mismatches, match colors across every layer, and apply one final grade.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Identify Mismatches:</strong> Check neutral areas in each layer for a visible color cast.</li>
        <li><strong>Step 2 - Match Color:</strong> Run Match Color as a first pass on any mismatched layers.</li>
        <li><strong>Step 3 - Refine With Curves:</strong> Correct any remaining cast on individual color channels.</li>
        <li><strong>Step 4 - Save a Preset:</strong> Group your adjustment layers and record them as a reusable Photoshop Action.</li>
        <li><strong>Step 5 - Final Grade:</strong> Apply one unifying adjustment across the whole composite.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before and after screenshots showing the composite pre and post color matching</li>
        <li>A screenshot of the Curves or Match Color dialog used on at least one layer</li>
        <li>A screenshot of the grouped adjustment layers and the recorded Action in the Actions panel</li>
        <li>A written note (3-5 sentences) describing the biggest color mismatch found and how it was corrected</li>
      </ul>
    `,
        rubric: [
            'Neutral reference areas correctly identified in each layer',
            'Match Color or Curves used to correct any visible white balance mismatch',
            'Selective Color or targeted adjustments used where appropriate',
            'Adjustment stack saved as a reusable preset or Action',
            'A final grade applied after, not before, individual layers are matched',
            'Written reflection demonstrates understanding of the correction process',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Color matching is the finishing pass that turns well placed layers into one believable photograph',
            'Neutral gray, white, or skin tone areas reveal a white balance mismatch clearly',
            'Curves on individual color channels gives precise, targeted color correction',
            'Match Color provides a fast first pass, Selective Color refines specific ranges afterward',
            'Grouping adjustment layers into a recorded Action saves significant time on future composites',
            'A final stylistic grade should always be applied last, after every layer is already color matched',
            'A stubborn color cast is sometimes really an unresolved light mismatch from earlier steps',
        ],
        nextSteps: [
            'Build a small library of Match Color and Curves presets for common lighting scenarios',
            'Practice spotting color casts in neutral areas of ordinary photos, even outside of Photoshop',
            'Compare a composite before and after a final grade to build a feel for what a grade should and should not do',
            'Continue to Lesson 14 to prepare a finished composite for both print and web delivery',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Color Correction Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/adjusting-color-in-image.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Curves Adjustment Guide',
            url: 'https://helpx.adobe.com/photoshop/using/curves-adjustment.html',
            type: 'documentation',
        },
        {
            title: 'Color Matching Troubleshooting Guide (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Color Correction Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 14: Preparing Files for Print and Web',
        description: 'Export polished deliverables for both print and digital distribution, matching resolution, color profile, and sharpening to the final destination.',
        topics: [
            'Choosing between sRGB and CMYK color profiles',
            'Setting resolution and file size correctly for print versus web',
            'Applying output sharpening appropriate to the final format',
            'Building a repeatable export checklist for finished composites',
        ],
    },
}