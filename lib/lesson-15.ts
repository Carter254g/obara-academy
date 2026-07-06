import type { LessonData } from '../types/course'

/**
 * Lesson 15: Capstone: Publish a Full Photo Edit
 * © Obara. All rights reserved.
 */
export const lesson15: LessonData = {
    id: 'lesson-15',
    title: 'Capstone: Publish a Full Photo Edit',
    moduleTitle: 'Capstone Project',
    description:
        'Bring together everything learned across the entire course into one complete, portfolio-ready photo edit, from Lightroom import through final Photoshop delivery.',
    lessonNumber: 15,
    duration: '90 min',
    difficulty: 'Advanced',
    xpReward: 100,
    progress: 0,
    completed: false,

    hero: {
        headline: 'Capstone: Publish a Full Photo Edit',
        subheadline: 'One complete project, every skill from this course, one portfolio-ready result',
        keyBenefits: [
            'Apply the complete Lightroom-to-Photoshop workflow on a single, real project',
            'Make independent creative and technical decisions without step-by-step guidance',
            'Produce a finished, professional-quality piece ready for a portfolio or client',
            'Demonstrate mastery of everything covered across all 14 previous lessons',
        ],
    },

    learningObjectives: [
        'Plan a photo editing project from import through final delivery independently',
        'Apply organizational, correction, and creative techniques from the Lightroom module appropriately',
        'Apply retouching, compositing, and preparation techniques from the Photoshop module as needed',
        'Make and justify independent creative decisions throughout the project',
        'Deliver correctly prepared final files for both web and, if applicable, print',
        'Present a finished project clearly, explaining the reasoning behind key decisions',
    ],

    requirements: {
        software: [
            {
                id: 'lightroom-classic',
                name: 'Adobe Lightroom Classic',
                description: 'For import, organization, and initial correction',
                status: 'required',
            },
            {
                id: 'photoshop',
                name: 'Adobe Photoshop',
                description: 'For retouching, compositing, or advanced editing as your project requires',
                status: 'required',
            },
            {
                id: 'project-photos',
                name: 'A set of photos for your chosen capstone project',
                description: 'A real shoot or personal project, ideally 10-20 photos',
                status: 'required',
            },
        ],
    },

    beforeYouBegin: {
        title: 'Before You Begin',
        description: 'Make sure you have everything ready:',
        items: [
            {
                id: 'all-lessons-complete',
                label: 'Completed Lessons 1 through 14',
                description: 'This capstone assumes comfort with the entire course curriculum',
            },
            {
                id: 'project-chosen',
                label: 'A capstone project chosen and photos ready',
                description: 'A portrait session, product shoot, landscape series, or personal project of your choice',
            },
            {
                id: 'time-allocated',
                label: 'Allocate at least 90 minutes, likely across multiple sessions',
                description: 'This is the most involved project in the course, plan accordingly',
            },
        ],
    },

    sections: [
        {
            id: 'section-1',
            title: 'Section 1: Choosing and Planning Your Capstone Project',
            duration: '10 min',
            content: {
                heading: 'Start With a Clear Creative Goal',
                body: 'A strong capstone project has a clear purpose, a portrait series showing consistent style, a product set ready for a client, or a personal project demonstrating your range. Before opening Lightroom, define what "finished" looks like for this specific project.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Write a One-Sentence Project Goal',
                    content: 'Before starting, write one sentence describing the finished result, for example: "A consistent, warm-toned portrait series of 5 final images, ready for a client gallery." This keeps decisions focused throughout the project.',
                },
            ],
            image: {
                caption: 'A simple project planning note listing the goal, number of final images, and intended delivery format',
            },
            subsections: [
                {
                    title: 'Good Capstone Project Options',
                    content: `
            <ul class="space-y-2 pl-5 list-disc">
              <li>A portrait session edited into a consistent, cohesive style</li>
              <li>A product photography set prepared for e-commerce or print catalog use</li>
              <li>A personal landscape or travel series demonstrating a signature editing approach</li>
              <li>A restoration or compositing project showcasing advanced Photoshop skill</li>
            </ul>
          `,
                },
            ],
        },

        {
            id: 'section-2',
            title: 'Section 2: The Lightroom Stage',
            duration: '10 min',
            content: {
                heading: 'Import, Organize, Correct, and Grade',
                body: 'Apply the complete Lightroom workflow from Lessons 1-7: correct import and folder structure, culling and organization, histogram-based exposure and color correction, and Tone Curve or Color Grading for a cohesive creative style across every image.',
            },
            callouts: [
                {
                    type: 'best-practice',
                    title: 'Consistency Across the Set Matters More Than Any Single Photo',
                    content: 'For a series or client set, a consistent style across all images matters more than making any one photo individually perfect. Apply similar color grading and tonal choices across the entire selection.',
                },
            ],
            image: {
                caption: 'A grid of several capstone photos in Lightroom, showing consistent color grading and tonal treatment across the set',
            },
            subsections: [],
        },

        {
            id: 'section-3',
            title: 'Section 3: The Photoshop Stage',
            duration: '10 min',
            content: {
                heading: 'Retouch, Composite, and Refine as Needed',
                body: 'Not every photo needs every Photoshop technique from this course. Apply retouching, advanced selections, or compositing only where the project genuinely calls for it, using Smart Objects and non-destructive techniques throughout.',
            },
            callouts: [
                {
                    type: 'tip',
                    title: 'Match Technique to Genre',
                    content: 'A portrait project likely needs frequency separation and dodge and burn. A product set may need advanced selections for clean background removal. Choose the techniques your specific project actually requires.',
                },
            ],
            image: {
                caption: 'A layered Photoshop file showing organized groups for retouching, compositing, and final adjustments, all clearly named',
            },
            subsections: [],
        },

        {
            id: 'section-4',
            title: 'Section 4: Final Preparation and Delivery',
            duration: '8 min',
            content: {
                heading: 'Finishing Like a Professional',
                body: 'Prepare your final images correctly for their intended destination, following the RGB/CMYK, resolution, and format principles from Lesson 14. Preserve your layered master files separately from any flattened delivery versions.',
            },
            callouts: [
                {
                    type: 'warning',
                    title: 'Don\'t Skip the Final Checklist',
                    content: 'Before considering the project complete, confirm color mode, resolution, and format are correct for every final image, this is the stage where careless mistakes become visible to anyone viewing the finished work.',
                },
            ],
            image: {
                caption: 'A finished delivery folder showing organized master files and correctly prepared final exports',
            },
            subsections: [],
        },
    ],

    practicalExercise: {
        title: 'Capstone Project: Complete End-to-End Edit',
        description: 'Take your chosen project through the complete workflow from import to final delivery, applying the full course curriculum.',
        estimatedTime: '75 min',
        steps: [
            {
                title: 'Plan Your Project',
                instruction: 'Write a one-sentence project goal and select 10-20 photos for your capstone.',
                tips: [
                    'A clear goal now will make every later decision faster and more confident',
                ],
            },
            {
                title: 'Import and Organize in Lightroom',
                instruction: 'Import your photos using correct folder structure and metadata, then cull and organize using flags, ratings, and Collections.',
                tips: [
                    'This should now feel automatic after Lessons 1-2',
                ],
            },
            {
                title: 'Correct and Grade',
                instruction: 'Apply full exposure and color correction, then Tone Curve and Color Grading for a consistent style across your selected images.',
                tips: [
                    'Refer back to your Lesson 3-5 notes if any step feels uncertain',
                ],
            },
            {
                title: 'Move Selected Photos to Photoshop',
                instruction: 'Send any photos requiring retouching or compositing into Photoshop using Edit In.',
                tips: [
                    'Not every photo in your set necessarily needs Photoshop work',
                ],
            },
            {
                title: 'Apply Photoshop Techniques as Needed',
                instruction: 'Apply retouching, selections, or compositing appropriate to your specific project, using organized layers and Smart Objects throughout.',
                tips: [
                    'Keep your Layers panel clean and descriptively named as you work',
                ],
            },
            {
                title: 'Prepare Final Files',
                instruction: 'Prepare correctly formatted final versions for your intended delivery, web, print, or both, following Lesson 14\'s principles.',
                tips: [
                    'Preserve your layered masters separately from any flattened final exports',
                ],
            },
            {
                title: 'Review the Complete Set',
                instruction: 'Review all final images together, confirming consistent style and technical correctness across the entire project.',
                tips: [
                    'View your final set as a client or viewer would, not zoomed into individual details',
                ],
            },
        ],
    },

    knowledgeCheck: {
        title: 'Capstone Comprehensive Knowledge Check',
        questions: [
            {
                id: 'q1',
                question: 'What should you define before starting a capstone project?',
                options: [
                    { id: 'a', text: 'Nothing, start editing immediately', isCorrect: false },
                    { id: 'b', text: 'A clear one-sentence goal describing the finished result', isCorrect: true },
                    { id: 'c', text: 'The exact export file size in bytes', isCorrect: false },
                    { id: 'd', text: 'Which font to use in Photoshop', isCorrect: false },
                ],
                explanation: 'A clear project goal keeps every later creative and technical decision focused and consistent.',
            },
            {
                id: 'q2',
                question: 'Why does consistency across a photo series matter more than perfecting any single image?',
                options: [
                    { id: 'a', text: 'It does not matter at all', isCorrect: false },
                    { id: 'b', text: 'A cohesive set reads as more professional than a collection of individually inconsistent edits', isCorrect: true },
                    { id: 'c', text: 'Consistency reduces file size', isCorrect: false },
                    { id: 'd', text: 'Clients only ever look at one photo', isCorrect: false },
                ],
                explanation: 'A client or viewer typically experiences a series as a whole, making consistent style more impactful than any single standout image.',
            },
            {
                id: 'q3',
                question: 'How should you decide which Photoshop techniques a project needs?',
                options: [
                    { id: 'a', text: 'Apply every technique from the course to every photo', isCorrect: false },
                    { id: 'b', text: 'Match the technique to what the specific project and genre actually requires', isCorrect: true },
                    { id: 'c', text: 'Photoshop is not needed for any capstone project', isCorrect: false },
                    { id: 'd', text: 'Always use frequency separation regardless of subject', isCorrect: false },
                ],
                explanation: 'Different genres require different techniques, a portrait project needs different tools than a product or landscape project.',
            },
            {
                id: 'q4',
                question: 'What must be checked before considering final delivery files complete?',
                options: [
                    { id: 'a', text: 'Nothing further, once exported the process is finished', isCorrect: false },
                    { id: 'b', text: 'Color mode, resolution, and format correctness for the intended destination', isCorrect: true },
                    { id: 'c', text: 'Only the file name', isCorrect: false },
                    { id: 'd', text: 'Whether the file has a watermark', isCorrect: false },
                ],
                explanation: 'The final checklist from Lesson 14, color mode, resolution, and format, prevents costly, easily avoidable mistakes at delivery.',
            },
            {
                id: 'q5',
                question: 'What is the most important outcome of this capstone project?',
                options: [
                    { id: 'a', text: 'Using the maximum possible number of techniques', isCorrect: false },
                    { id: 'b', text: 'Independently applying the complete workflow to produce a finished, professional-quality result', isCorrect: true },
                    { id: 'c', text: 'Completing the project as quickly as possible', isCorrect: false },
                    { id: 'd', text: 'Avoiding the use of Photoshop entirely', isCorrect: false },
                ],
                explanation: 'The capstone demonstrates independent application of the entire course curriculum toward one cohesive, real result, not technique quantity or speed.',
            },
        ],
    },

    assignment: {
        title: 'Final Capstone Submission: Complete Photo Edit Project',
        description: 'Submit your complete, finished capstone project demonstrating mastery of the entire course.',
        task: `
      <p class="mb-4">
        <strong>Your Task:</strong> Submit your finished capstone project, demonstrating the complete workflow from import to final delivery.
      </p>
      <ol class="space-y-3 pl-5 list-decimal mb-4">
        <li><strong>Step 1 - Project Goal:</strong> Include your one-sentence project goal statement.</li>
        <li><strong>Step 2 - Lightroom Work:</strong> Show your organized catalog and consistent color grading applied across the set.</li>
        <li><strong>Step 3 - Photoshop Work:</strong> Show your layered Photoshop files for any images requiring retouching or compositing.</li>
        <li><strong>Step 4 - Final Deliverables:</strong> Submit correctly prepared final files for your intended destination.</li>
        <li><strong>Step 5 - Presentation:</strong> Write a project summary explaining your creative approach and key technical decisions.</li>
      </ol>
      <p class="mb-2"><strong>Submission Checklist:</strong></p>
      <ul class="space-y-2 pl-5 list-disc">
        <li>Your one-sentence project goal</li>
        <li>Screenshots of your organized Lightroom catalog for this project</li>
        <li>Screenshots of any Photoshop layer structures used</li>
        <li>Your final, correctly prepared delivery files</li>
        <li>A written project summary (150-250 words) covering your creative decisions and technical approach</li>
      </ul>
    `,
        rubric: [
            'Clear, well-defined project goal established before editing began',
            'Consistent organization and color grading applied across the full Lightroom selection',
            'Appropriate Photoshop techniques applied where the project genuinely required them',
            'Final files correctly prepared for their intended destination, following Lesson 14 principles',
            'Written summary clearly explains creative and technical decisions made throughout the project',
            'Overall result reflects genuine mastery of the complete course curriculum',
            'Finished project is portfolio-ready, professional-quality work',
        ],
    },

    summary: {
        title: 'Course Completion: Key Takeaways',
        keyPoints: [
            'A clear project goal, defined before editing begins, keeps every later decision focused and consistent',
            'Consistency across a photo series matters more than perfecting any single image in isolation',
            'The complete Lightroom workflow, import through export, becomes an automatic habit through repeated practice',
            'Photoshop techniques should be chosen based on what a specific project genuinely needs, not applied indiscriminately',
            'Correct final file preparation prevents costly, avoidable mistakes at the point of delivery',
            'This capstone represents genuine, independent mastery of Adobe Lightroom and Photoshop as a complete professional editing system',
            'The skills built across this entire course apply to any future photography or editing project you take on',
        ],
        nextSteps: [
            'Add this capstone project to your professional portfolio',
            'Continue applying this complete workflow to real client or personal projects',
            'Revisit any earlier lesson where you feel less confident, reinforcing that specific skill',
            'Consider specializing further in areas that most interest you, portrait retouching, product photography, or compositing',
        ],
    },

    resources: [
        {
            title: 'Adobe Lightroom Classic Complete Documentation',
            url: 'https://helpx.adobe.com/lightroom-classic/user-guide.html',
            type: 'documentation',
        },
        {
            title: 'Adobe Photoshop Complete Documentation',
            url: 'https://helpx.adobe.com/photoshop/user-guide.html',
            type: 'documentation',
        },
        {
            title: 'Capstone Project Planning Template (PDF)',
            url: '#',
            type: 'download',
        },
        {
            title: 'Building a Professional Photography Portfolio (Video Series)',
            url: 'https://www.youtube.com/adobe',
            type: 'video',
        },
    ],
}