import type { LessonData } from '../types/course'

/**
 * Lesson 12: Creative Compositing Techniques
 * © Obara. All rights reserved.
 */
export const lesson12: LessonData = {
    id: 'lesson-12',
    title: 'Creative Compositing Techniques',
    moduleTitle: 'Adobe Photoshop',
    description:
        'Combine multiple images into cohesive, believable scenes using lighting and color matching, perspective and scale, blend modes, and grounded shadows.',
    lessonNumber: 12,
    duration: '55 min',
    difficulty: 'Advanced',
    xpReward: 100,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Creative Compositing Techniques',
        subheadline: 'A clean extraction is only step one, a believable composite is what actually sells the illusion',
        keyBenefits: [
            'Identify the three pillars of a believable composite: light, perspective, and blend',
            'Match lighting direction and color temperature across composited elements',
            'Use perspective and scale to place elements convincingly in a scene',
            'Apply blend modes and grounded shadows to tie a composite together',
        ],
    },

    learningObjectives: [
        'Identify the three pillars of a believable composite: light, perspective, and blend',
        'Match lighting direction and color temperature across composited images',
        'Use perspective and scale to place elements convincingly in a scene',
        'Apply blend modes to integrate shadows, highlights, and edge light',
        'Add cast and contact shadows that ground a subject in its new scene',
        'Assemble a complete multi element composite from start to finish',
    ],

    requirements: {
        software: [
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'Continuing from Lesson 11 with selection and masking fluency',
                status: 'required',
            },
            {
                id: 'subject-photo',
                name: 'An extracted subject with a clean layer mask',
                description: 'Ideally the composite you built at the end of Lesson 11',
                status: 'required',
            },
            {
                id: 'background-photo',
                name: 'A background scene with clear, identifiable light direction',
                description: 'Used for practicing perspective, light matching, and shadow placement',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'lesson11-complete',
                label: 'Completed Lesson 11 with selection and masking fluency',
                description: 'This lesson assumes comfort extracting subjects with a layer mask',
            },
            {
                id: 'subject-photo-ready',
                label: 'An extracted subject and a background scene ready to combine',
                description: 'Used throughout this lesson\'s practice',
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
            title: 'Section 1: The Three Pillars of a Believable Composite',
            duration: '6 min',
            content: {
                heading: 'Why Weak Composites Feel Off Before You Can Say Why',
                body: 'Viewers rarely articulate what is wrong with a weak composite, they just feel it instantly. Almost every giveaway traces back to one of three things: light, perspective, or blend. Working them in that order avoids wasted rework later.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Work Light First, Then Perspective, Then Blend',
                    content: 'Fixing a blend mode problem when the real issue is a light mismatch wastes time and never fully resolves. Confirm light and perspective agree before refining edges, shadows, or grading.',
                },
            ],
            image: {
                caption: 'Three side by side panels labeled Light, Perspective, and Blend, each showing the same composite with one pillar deliberately mismatched',
            },
            subsections: [
                {
                    title: 'Quick Reference',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Light:</strong> Direction, quality, and color temperature must match across every element</li>
              <li><strong>Perspective:</strong> Eye level, vanishing points, and scale must agree with the scene</li>
              <li><strong>Blend:</strong> Edges, shadows, and color grading must tie everything together</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: Matching Lighting and Color',
            duration: '10 min',
            content: {
                heading: 'Reading the Light Before You Touch Anything',
                body: 'Every source photo has a light direction and a light quality. Find both before combining elements. Direction: shadows point away from the light source, so trace a shadow on a nose, a rooftop edge, or any object back to its source. Quality: hard light casts sharp, defined shadow edges, soft light casts diffuse, feathered edges. Never composite a hard lit subject onto a soft, overcast background without adjusting one to match the other.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Match Color Temperature With a Sampled Tint',
                    content: 'Use the eyedropper to sample the background\'s dominant color cast. Add a subtle Color Balance or Selective Color adjustment on the subject, nudging it 5 to 10 percent toward that same tone. This single step removes most of the pasted on feeling before you touch blend modes.',
                },
            ],
            image: {
                caption: 'A composited subject before and after a Color Balance adjustment nudges its tone toward the background\'s warm cast',
            },
            subsections: [
                {
                    title: 'Reading and Matching Light',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Identify the light direction in each source photo by tracing a visible shadow back to its source</li>
              <li>Identify the light quality, hard or soft, by checking whether shadow edges are sharp or feathered</li>
              <li>Sample the background's dominant color with the eyedropper</li>
              <li>Add a Color Balance or Selective Color adjustment layer on the subject, tinting it 5 to 10 percent toward that sampled color</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-3',
            title: 'Section 3: Perspective and Scale',
            duration: '9 min',
            content: {
                heading: 'Placing a Subject So It Belongs in the Scene',
                body: 'A perfectly lit subject still reads as fake if it is floating at the wrong eye level or sized wrong for the scene. Two checks matter here: matching eye level and matching scale, and both are quick once you know what to look for.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Use Guides, Not Guesswork',
                    content: 'Mark the background\'s horizon or eye level with a Photoshop guide (View, then New Guide) before placing your subject. Eyeballing this step is the most common source of a composite that never quite looks right.',
                },
            ],
            image: {
                caption: 'A background scene with a horizontal guide marking eye level, and a subject layer aligned to that same line',
            },
            subsections: [
                {
                    title: 'Matching Eye Level and Scale',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Find the horizon line or camera eye level in the background photo</li>
              <li>Place your subject's own eye level on that same line, adjusting for their height</li>
              <li>Find a reference object common to both images, such as a doorway, another person, or a parked car</li>
              <li>Compare relative sizes and use Cmd/Ctrl+T to resize, holding Shift to constrain proportions</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-4',
            title: 'Section 4: Blend Modes for Realistic Integration',
            duration: '10 min',
            content: {
                heading: 'Tying the Pieces Together',
                body: 'Once light and perspective agree, blend modes physically tie the pieces together, and each one solves a different integration problem. Multiply darkens and makes white invisible, ideal for cast shadows and grounding contact points. Screen lightens and makes black invisible, ideal for glow, light wrap, and highlights. Overlay boosts contrast and mixes light and dark, useful for adding texture or grain across a composite. Soft Light is a gentler version of Overlay, useful for subtle relighting without harsh contrast.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Light Wrap Simulates Spill Light on an Edge',
                    content: 'Duplicate the background layer, clip it to the subject\'s mask, apply Gaussian Blur, and set it to Screen or Overlay at low opacity. This simulates background light spilling gently onto the subject\'s edge, one of the most convincing integration tricks available. If the effect is visible as a glow, it is too strong, dial it back until it reads only as a whisper of light.',
                },
            ],
            image: {
                caption: 'A blurred, clipped background duplicate set to Screen blend mode, creating a soft edge glow around a composited subject',
            },
            subsections: [
                {
                    title: 'Blend Mode Cheat Sheet',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li><strong>Multiply:</strong> Darkens, white becomes invisible, use for cast shadows and contact points</li>
              <li><strong>Screen:</strong> Lightens, black becomes invisible, use for glow, light wrap, and highlights</li>
              <li><strong>Overlay:</strong> Boosts contrast, use for adding texture or grain across a composite</li>
              <li><strong>Soft Light:</strong> A gentler Overlay, use for subtle relighting without harsh contrast</li>
            </ul>
          `,
                },
                {
                    title: 'The Light Wrap Technique',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Duplicate the background layer and place it above the composited subject, clipped to the subject's mask</li>
              <li>Apply Gaussian Blur so its colors soften into a haze</li>
              <li>Set the blurred layer's blend mode to Screen for light edges, or Overlay for a subtler effect</li>
              <li>Lower opacity until the glow reads as a whisper of light, not a visible halo</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-5',
            title: 'Section 5: Cast and Contact Shadows',
            duration: '8 min',
            content: {
                heading: 'Grounding a Subject in Its New Scene',
                body: 'A contact shadow is tight, dark, and sharp edged, exactly where the subject touches the ground. A cast shadow is longer and softer, and its direction and length are set by the light source identified in Section 2. Both are usually needed for a subject to feel grounded rather than floating.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Mismatched Shadow Direction Breaks a Composite Fast',
                    content: 'Always trace a new shadow back to the same light source established in Section 2. A shadow pointing the wrong way is one of the fastest tells that an image has been composited.',
                },
            ],
            image: {
                caption: 'A subject with no shadow appearing to float, next to the same subject with a contact and cast shadow added, appearing grounded',
            },
            subsections: [
                {
                    title: 'Building Both Shadow Types',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Contact shadow: paint on a new layer with a black, low hardness brush, set to Multiply, opacity 60 to 80 percent</li>
              <li>Cast shadow: duplicate a silhouette of the subject, use Free Transform (Cmd/Ctrl+T) to skew it into the light's direction</li>
              <li>Blur the cast shadow and lower its opacity so it fades naturally</li>
              <li>Check both shadows against the light direction identified earlier in the lesson</li>
            </ol>
          `,
                },
            ],
        },

        {
            id: 'section-6',
            title: 'Section 6: Assembling the Full Composite',
            duration: '8 min',
            content: {
                heading: 'An Order of Operations That Prevents Rework',
                body: 'Every technique in this lesson has a sequence, and working out of order is the number one cause of rework. Grading color before perspective is finalized means re-grading after a rescale. Lock in light and perspective first, every time.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Follow the Same Six Steps Every Time',
                    content: 'Base scene, place and scale, match perspective, match light and color, add shadows, final grade. Memorizing this order removes most of the guesswork from any future composite.',
                },
            ],
            image: {
                caption: 'A six step process diagram: Base scene, Place and scale, Match perspective, Match light and color, Add shadows, Final grade',
            },
            subsections: [
                {
                    title: 'The Full Composite Workflow',
                    content: `
            <ol class="space-y-2 pl-5 list-decimal">
              <li>Base scene: choose and prepare the background</li>
              <li>Place and scale: bring in the subject at roughly the right size</li>
              <li>Match perspective: lock in eye level and fine tune scale</li>
              <li>Match light and color: adjust direction, quality, and color temperature</li>
              <li>Add shadows: contact and cast shadows, traced to the same light source</li>
              <li>Final grade: one adjustment layer over everything to unify the whole image</li>
            </ol>
          `,
                },
            ],
        },
    ],

    practicalExercise: {
        title: 'Hands On Practice: Build a Multi Element Composite',
        description: 'Combine a background scene with one or two subject elements into a single, believable composite.',
        estimatedTime: '30 min',
        steps: [
            {
                title: 'Choose Your Elements',
                instruction: 'Choose a background scene and one or two subject elements with clear, identifiable light direction.',
                tips: [
                    'Pick a background with an obvious light source, like visible sun position or a clear shadow on the ground',
                ],
            },
            {
                title: 'Place and Match Perspective',
                instruction: 'Place and scale each element, matching perspective and eye level using guides.',
                tips: [
                    'Use a reference object in the background to check that your subject\'s scale is believable',
                ],
            },
            {
                title: 'Match Color Temperature',
                instruction: 'Sample the background\'s dominant color and add a Color Balance or Selective Color adjustment on the subject.',
                tips: [
                    'A small nudge, 5 to 10 percent, is usually enough, avoid overcorrecting',
                ],
            },
            {
                title: 'Add a Light Wrap',
                instruction: 'Duplicate the background, clip it to the subject\'s mask, blur it, and set it to Screen at low opacity.',
                tips: [
                    'If you can clearly see the glow, lower the opacity further',
                ],
            },
            {
                title: 'Paint Contact and Cast Shadows',
                instruction: 'Paint a contact shadow and a cast shadow on their own layer, set to Multiply, matching the light direction from Section 2.',
                tips: [
                    'Double check the shadow direction against the light source before moving on',
                ],
            },
            {
                title: 'Apply a Final Grade',
                instruction: 'Add one adjustment layer over the entire flattened composite to unify tone and finish the image.',
                tips: [
                    'A subtle Curves or Color Lookup adjustment is often enough to make everything feel like one photo',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Quick Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What are the three pillars of a believable composite?',
                options: [
                    { id: 'a', text: 'Contrast, saturation, and sharpness', isCorrect: false },
                    { id: 'b', text: 'Light, perspective, and blend', isCorrect: true },
                    { id: 'c', text: 'Resolution, file size, and format', isCorrect: false },
                    { id: 'd', text: 'Cropping, framing, and composition', isCorrect: false },
                ],
                explanation: 'Almost every unconvincing composite traces back to a mismatch in light, perspective, or blend, working them in that order avoids wasted rework.',
            },
            {
                id: 'q2',
                question: 'Why match color temperature before applying blend modes?',
                options: [
                    { id: 'a', text: 'Blend modes cannot be applied until color temperature is fixed', isCorrect: false },
                    { id: 'b', text: 'It removes most of the pasted on feeling early, before more technical steps', isCorrect: true },
                    { id: 'c', text: 'It is not necessary if the composite will be converted to black and white', isCorrect: false },
                    { id: 'd', text: 'Color temperature only matters after shadows are added', isCorrect: false },
                ],
                explanation: 'A subtle tint toward the background\'s dominant color is one of the fastest, highest impact steps in the whole compositing workflow.',
            },
            {
                id: 'q3',
                question: 'Which blend mode is typically used to create a light wrap edge glow?',
                options: [
                    { id: 'a', text: 'Multiply', isCorrect: false },
                    { id: 'b', text: 'Screen or Overlay', isCorrect: true },
                    { id: 'c', text: 'Hue', isCorrect: false },
                    { id: 'd', text: 'Difference', isCorrect: false },
                ],
                explanation: 'Screen (or a subtler Overlay) makes black areas of a blurred, clipped duplicate invisible, letting only the lighter glow show through.',
            },
            {
                id: 'q4',
                question: 'What is the main difference between a contact shadow and a cast shadow?',
                options: [
                    { id: 'a', text: 'They are functionally identical', isCorrect: false },
                    { id: 'b', text: 'A contact shadow is tight and sharp where the subject touches the ground, a cast shadow is longer and softer, set by the light source', isCorrect: true },
                    { id: 'c', text: 'Cast shadows are only used in black and white images', isCorrect: false },
                    { id: 'd', text: 'Contact shadows cannot be painted manually', isCorrect: false },
                ],
                explanation: 'Both are usually needed together, a contact shadow grounds the subject at its base, while a cast shadow shows the direction of the light source.',
            },
            {
                id: 'q5',
                question: 'What is the most common cause of rework when assembling a composite?',
                options: [
                    { id: 'a', text: 'Using too many layers', isCorrect: false },
                    { id: 'b', text: 'Working out of the recommended order, such as grading color before perspective is finalized', isCorrect: true },
                    { id: 'c', text: 'Using Photoshop instead of another editor', isCorrect: false },
                    { id: 'd', text: 'Choosing a background with visible light direction', isCorrect: false },
                ],
                explanation: 'Following the sequence, scene, place, perspective, light, shadows, final grade, prevents having to redo earlier steps after later ones reveal a mismatch.',
            },
            {
                id: 'q6',
                question: 'What should you always check before finalizing a cast shadow?',
                options: [
                    { id: 'a', text: 'That it matches the direction of the light source identified earlier in the lesson', isCorrect: true },
                    { id: 'b', text: 'That it is the same color as the subject', isCorrect: false },
                    { id: 'c', text: 'That it is placed on the same layer as the subject', isCorrect: false },
                    { id: 'd', text: 'That it uses the Screen blend mode', isCorrect: false },
                ],
                explanation: 'Mismatched shadow direction is one of the fastest and most noticeable ways a composite can look wrong.',
            },
        ],
    },

    assignment: {
        title: 'Course Assignment: Complete a Believable Multi Element Composite',
        description: 'Build one full composite from start to finish, applying every technique from this lesson in order.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Combine a background scene with one or two subject elements into a single, cohesive composite that could pass as an unedited photograph.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Place and Scale:</strong> Position each element, matching perspective and eye level.</li>
        <li><strong>Step 2 - Match Light and Color:</strong> Adjust color temperature with Color Balance or Selective Color.</li>
        <li><strong>Step 3 - Light Wrap:</strong> Add a blurred, clipped background duplicate set to Screen.</li>
        <li><strong>Step 4 - Shadows:</strong> Paint contact and cast shadows on their own layer, set to Multiply.</li>
        <li><strong>Step 5 - Final Grade:</strong> Apply one adjustment layer over the whole composite to unify tone.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Before and after screenshots of each source image and the final composite</li>
        <li>A close up screenshot showing edge integration, such as light wrap or shadow detail</li>
        <li>Screenshot of the Layers panel showing the full stack of adjustment and mask layers</li>
        <li>A written note (3-5 sentences) describing which technique made the biggest visible difference</li>
      </ul>
    `,
        rubric: [
            'Perspective and scale match convincingly between all composited elements',
            'Light direction, quality, and color temperature are matched across the scene',
            'A light wrap or equivalent blend mode technique is used at the subject\'s edge',
            'Contact and cast shadows are present and traced to the same light source',
            'A final grade unifies the composite into a single cohesive image',
            'Written reflection demonstrates understanding of technique selection',
        ],
    },

    summary: {
        title: 'Key Takeaways',
        keyPoints: [
            'Believable composites rest on three pillars: light, perspective, and blend',
            'Match light direction, quality, and color temperature before anything else',
            'Eye level and scale must agree with the background scene',
            'Multiply builds shadows, Screen builds light, combine both for realism',
            'Cast and contact shadows must trace back to the same light source',
            'Work in order: scene, place, perspective, light, shadows, final grade',
        ],
        nextSteps: [
            'Practice building composites with increasingly complex lighting scenarios, such as mixed indoor and outdoor light',
            'Build a habit of checking shadow direction against the light source before considering a composite finished',
            'Experiment with light wrap opacity to find the threshold where it stops looking like an effect',
            'Continue to Lesson 13 to refine color matching and correction across composited layers',
        ],
    },

    resources: [
        {
            title: 'Adobe Photoshop Compositing Documentation',
            url: 'https://helpx.adobe.com/photoshop/using/blending-modes.html',
            type: 'documentation',
        },
        {
            title: 'Adobe: Working With Layers and Blend Modes',
            url: 'https://helpx.adobe.com/photoshop/using/layer-basics.html',
            type: 'documentation',
        },
        {
            title: 'Composite Lighting and Shadow Troubleshooting Guide (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Adobe Photoshop Compositing Tutorials on YouTube',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],

    nextLesson: {
        title: 'Next Lesson Preview',
        preview: 'Lesson 13: Color Correction and Matching',
        description: 'Match tones and colors across layered assets for seamless outcomes, the natural next step after learning to composite convincingly.',
        topics: [
            'Reading and matching white balance across sources',
            'Using curves for targeted color matching',
            'Building reusable color match presets',
            'Applying consistent grading across a full multi element composite',
        ],
    },
}