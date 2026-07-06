import type { KnowledgeCheckQuestion } from '../types/course'

/**
 * Module 1 Final Assessment: Adobe Lightroom
 * Covers Lessons 1-7. Passing score: 24/30 (80%).
 * © Obara. All rights reserved.
 */
export const MODULE_1_PASSING_SCORE = 24
export const MODULE_1_TOTAL_QUESTIONS = 30
export const MODULE_1_TIME_LIMIT_SECONDS = 45 * 60
export const MODULE_1_RETRY_COOLDOWN_SECONDS = 10 * 60
export const MODULE_1_MAX_VIOLATIONS = 3

export const module1Assessment: KnowledgeCheckQuestion[] = [
    {
        id: 'm1-q1',
        question: 'What does a Lightroom catalog actually store?',
        options: [
            { id: 'a', text: 'Copies of every photo file', isCorrect: false },
            { id: 'b', text: 'References to photo files plus all edits, keywords, and ratings', isCorrect: true },
            { id: 'c', text: 'Only exported JPEGs', isCorrect: false },
            { id: 'd', text: 'Nothing, photos are stored inside the catalog itself', isCorrect: false },
        ],
        explanation: 'The catalog is a database referencing your photos\' file locations and storing everything done to them, never the actual image data.',
    },
    {
        id: 'm1-q2',
        question: 'What happens if you rename a photo folder outside of Lightroom?',
        options: [
            { id: 'a', text: 'Lightroom automatically detects the change', isCorrect: false },
            { id: 'b', text: 'Lightroom loses track of the files and shows them as missing', isCorrect: true },
            { id: 'c', text: 'The photos are permanently deleted', isCorrect: false },
            { id: 'd', text: 'Nothing happens', isCorrect: false },
        ],
        explanation: 'The catalog only knows a file\'s last known location, renaming outside Lightroom breaks that reference.',
    },
    {
        id: 'm1-q3',
        question: 'Most photographers should run how many catalogs for their entire library?',
        options: [
            { id: 'a', text: 'One per project', isCorrect: false },
            { id: 'b', text: 'One per year', isCorrect: false },
            { id: 'c', text: 'A single catalog for the whole library', isCorrect: true },
            { id: 'd', text: 'It does not matter', isCorrect: false },
        ],
        explanation: 'A single catalog lets you search and filter across your entire photographic history at once, while multiple catalogs fragment the library.',
    },
    {
        id: 'm1-q4',
        question: 'Which import file-handling method should you use when importing directly from a memory card?',
        options: [
            { id: 'a', text: 'Add', isCorrect: false },
            { id: 'b', text: 'Move', isCorrect: false },
            { id: 'c', text: 'Copy', isCorrect: true },
            { id: 'd', text: 'It does not matter', isCorrect: false },
        ],
        explanation: '"Copy" safely duplicates files from the memory card into your library structure without prematurely removing the originals from the card.',
    },
    {
        id: 'm1-q5',
        question: 'What is the recommended folder structure pattern for long-term scalability?',
        options: [
            { id: 'a', text: 'One giant folder for all photos', isCorrect: false },
            { id: 'b', text: 'A folder per camera model', isCorrect: false },
            { id: 'c', text: 'Year > Date > Project', isCorrect: true },
            { id: 'd', text: 'Alphabetical by client name only', isCorrect: false },
        ],
        explanation: 'Year > Date > Project sorts chronologically by default and remains meaningful and scalable even years later.',
    },
    {
        id: 'm1-q6',
        question: 'What is the main advantage of a Collection over a folder?',
        options: [
            { id: 'a', text: 'Collections use less disk space than folders', isCorrect: false },
            { id: 'b', text: 'A photo can belong to multiple Collections without duplicating the file', isCorrect: true },
            { id: 'c', text: 'Collections automatically back up your photos', isCorrect: false },
            { id: 'd', text: 'Collections are required before you can edit a photo', isCorrect: false },
        ],
        explanation: 'Collections are virtual groupings, the same photo can appear in unlimited Collections while only existing once on disk.',
    },
    {
        id: 'm1-q7',
        question: 'What makes a Smart Collection different from a regular Collection?',
        options: [
            { id: 'a', text: 'Smart Collections automatically update based on rules you define', isCorrect: true },
            { id: 'b', text: 'Smart Collections can only contain 5 photos', isCorrect: false },
            { id: 'c', text: 'Smart Collections require an internet connection', isCorrect: false },
            { id: 'd', text: 'There is no difference', isCorrect: false },
        ],
        explanation: 'Smart Collections use rule-based filters and update themselves automatically as your library changes.',
    },
    {
        id: 'm1-q8',
        question: 'In a two-pass culling method, what is the purpose of the first pass?',
        options: [
            { id: 'a', text: 'To apply final star ratings', isCorrect: false },
            { id: 'b', text: 'To make fast Pick/Reject flag decisions on every photo', isCorrect: true },
            { id: 'c', text: 'To export final images', isCorrect: false },
            { id: 'd', text: 'To apply keywords', isCorrect: false },
        ],
        explanation: 'The first pass uses flags for fast yes/no decisions, star ratings are reserved for ranking quality among photos already picked.',
    },
    {
        id: 'm1-q9',
        question: 'Why should keywords be organized into a hierarchy?',
        options: [
            { id: 'a', text: 'It is required by Lightroom to function', isCorrect: false },
            { id: 'b', text: 'It keeps keywording consistent as your library grows over time', isCorrect: true },
            { id: 'c', text: 'It reduces file size', isCorrect: false },
            { id: 'd', text: 'It automatically rates your photos', isCorrect: false },
        ],
        explanation: 'A hierarchy such as Location > Country > City keeps keywording predictable and prevents inconsistent, one-off tags over time.',
    },
    {
        id: 'm1-q10',
        question: 'According to the 3-2-1 backup principle, how many total copies of your data should you have?',
        options: [
            { id: 'a', text: '1', isCorrect: false },
            { id: 'b', text: '2', isCorrect: false },
            { id: 'c', text: '3', isCorrect: true },
            { id: 'd', text: '5', isCorrect: false },
        ],
        explanation: '3-2-1 means 3 total copies, on 2 different storage types, with 1 copy stored off-site.',
    },
    {
        id: 'm1-q11',
        question: 'What does a spike touching the far right edge of the histogram indicate?',
        options: [
            { id: 'a', text: 'Shadow clipping', isCorrect: false },
            { id: 'b', text: 'Highlight clipping', isCorrect: true },
            { id: 'c', text: 'Correct exposure', isCorrect: false },
            { id: 'd', text: 'A color cast', isCorrect: false },
        ],
        explanation: 'The right edge of the histogram represents pure white, a spike there means highlight detail is being lost.',
    },
    {
        id: 'm1-q12',
        question: 'What keyboard shortcut toggles clipping warnings directly on the image?',
        options: [
            { id: 'a', text: 'W', isCorrect: false },
            { id: 'b', text: 'J', isCorrect: true },
            { id: 'c', text: 'B', isCorrect: false },
            { id: 'd', text: 'G', isCorrect: false },
        ],
        explanation: 'Pressing J shows clipping warnings as colored overlays directly on the photo.',
    },
    {
        id: 'm1-q13',
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
        id: 'm1-q14',
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
        id: 'm1-q15',
        question: 'What is the difference between Highlights/Shadows and Whites/Blacks?',
        options: [
            { id: 'a', text: 'There is no difference', isCorrect: false },
            {
                id: 'b',
                text: 'Highlights/Shadows recover detail in specific ranges; Whites/Blacks set the true endpoints of the tonal range',
                isCorrect: true,
            },
            { id: 'c', text: 'Whites/Blacks only work on black and white photos', isCorrect: false },
            { id: 'd', text: 'Highlights/Shadows can only be used after exporting', isCorrect: false },
        ],
        explanation: 'Highlights and Shadows target specific brightness ranges, while Whites and Blacks define the true tonal endpoints.',
    },
    {
        id: 'm1-q16',
        question: 'Why should Clarity be used carefully on portraits?',
        options: [
            { id: 'a', text: 'It changes the white balance', isCorrect: false },
            { id: 'b', text: 'It emphasizes skin texture and pores in unflattering ways', isCorrect: true },
            { id: 'c', text: 'It only works on black and white photos', isCorrect: false },
            { id: 'd', text: 'It reduces image resolution', isCorrect: false },
        ],
        explanation: 'High Clarity values increase midtone contrast in a way that exaggerates skin texture, usually undesirable in portraiture.',
    },
    {
        id: 'm1-q17',
        question: 'Why is a consistent order of operations important when editing?',
        options: [
            { id: 'a', text: 'Lightroom requires a specific order to save the file', isCorrect: false },
            { id: 'b', text: 'It prevents having to redo earlier adjustments and builds editing speed', isCorrect: true },
            { id: 'c', text: 'It automatically applies a preset', isCorrect: false },
            { id: 'd', text: 'It is only relevant for black and white conversions', isCorrect: false },
        ],
        explanation: 'Adjusting sliders out of order often means later changes undo the effect of earlier ones.',
    },
    {
        id: 'm1-q18',
        question: 'Why is simply dragging Saturation to -100 not the same as a proper black and white conversion?',
        options: [
            { id: 'a', text: 'It only works on JPEG files', isCorrect: false },
            { id: 'b', text: 'It keeps original tonal relationships, often resulting in a flat, muddy look', isCorrect: true },
            { id: 'c', text: 'It permanently deletes the color data', isCorrect: false },
            { id: 'd', text: 'There is no difference between the two methods', isCorrect: false },
        ],
        explanation: 'Desaturating keeps the original brightness relationships between colors, while the B&W panel controls each color\'s brightness individually.',
    },
    {
        id: 'm1-q19',
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
        id: 'm1-q20',
        question: 'How does the Color Grading panel differ from Split Toning?',
        options: [
            { id: 'a', text: 'It only works in black and white', isCorrect: false },
            { id: 'b', text: 'It offers three independent color wheels for shadows, midtones, and highlights, plus a global wheel', isCorrect: true },
            { id: 'c', text: 'It cannot be undone once applied', isCorrect: false },
            { id: 'd', text: 'It is identical to Split Toning with a different name', isCorrect: false },
        ],
        explanation: 'Color Grading expands on Split Toning by adding independent control over midtones and a global wheel.',
    },
    {
        id: 'm1-q21',
        question: 'What is a strong indicator that a photo is a good candidate for black and white conversion?',
        options: [
            { id: 'a', text: 'The photo was shot in RAW format', isCorrect: false },
            { id: 'b', text: 'Color is a distraction and the composition relies on light, shadow, and texture', isCorrect: true },
            { id: 'c', text: 'The photo has never been edited before', isCorrect: false },
            { id: 'd', text: 'The photo contains a sunset', isCorrect: false },
        ],
        explanation: 'Black and white works best when removing color does not lose meaningful information.',
    },
    {
        id: 'm1-q22',
        question: 'What is the main difference between a global and a local adjustment?',
        options: [
            { id: 'a', text: 'Global adjustments only work on RAW files', isCorrect: false },
            { id: 'b', text: 'Local adjustments target specific areas; global adjustments affect the entire photo', isCorrect: true },
            { id: 'c', text: 'There is no difference', isCorrect: false },
            { id: 'd', text: 'Local adjustments can only be undone once', isCorrect: false },
        ],
        explanation: 'Global adjustments apply evenly across the whole image, local adjustments target only a selected area.',
    },
    {
        id: 'm1-q23',
        question: 'What does enabling Auto Mask do when using the Adjustment Brush?',
        options: [
            { id: 'a', text: 'It automatically applies a preset', isCorrect: false },
            { id: 'b', text: 'It detects edges to prevent the adjustment from spilling onto unintended areas', isCorrect: true },
            { id: 'c', text: 'It converts the photo to black and white', isCorrect: false },
            { id: 'd', text: 'It deletes the current brush stroke', isCorrect: false },
        ],
        explanation: 'Auto Mask uses edge detection to keep brush strokes contained within areas of similar color and tone.',
    },
    {
        id: 'm1-q24',
        question: 'What is the Graduated Filter most commonly used for?',
        options: [
            { id: 'a', text: 'Removing dust spots', isCorrect: false },
            { id: 'b', text: 'Darkening a bright sky while leaving the foreground untouched', isCorrect: true },
            { id: 'c', text: 'Converting photos to DNG format', isCorrect: false },
            { id: 'd', text: 'Adjusting white balance only', isCorrect: false },
        ],
        explanation: 'The Graduated Filter applies a smooth linear transition, commonly used to balance a bright sky against a darker foreground.',
    },
    {
        id: 'm1-q25',
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
        id: 'm1-q26',
        question: 'Which color space should you always use when exporting for web or social media?',
        options: [
            { id: 'a', text: 'Adobe RGB', isCorrect: false },
            { id: 'b', text: 'sRGB', isCorrect: true },
            { id: 'c', text: 'ProPhoto RGB', isCorrect: false },
            { id: 'd', text: 'CMYK', isCorrect: false },
        ],
        explanation: 'sRGB is correctly interpreted by web browsers and social platforms, preventing the color shifts Adobe RGB can cause online.',
    },
    {
        id: 'm1-q27',
        question: 'What does Output Sharpening specifically compensate for?',
        options: [
            { id: 'a', text: 'Camera lens distortion', isCorrect: false },
            { id: 'b', text: 'The slight softening that occurs during resizing and compression', isCorrect: true },
            { id: 'c', text: 'Incorrect white balance', isCorrect: false },
            { id: 'd', text: 'Noise from high ISO shooting', isCorrect: false },
        ],
        explanation: 'Output Sharpening is separate from editing sharpening, compensating for softening introduced by the export process itself.',
    },
    {
        id: 'm1-q28',
        question: 'What is the main benefit of saving an Export Preset?',
        options: [
            { id: 'a', text: 'It automatically improves image quality', isCorrect: false },
            { id: 'b', text: 'It lets you reuse the same export settings instantly without reconfiguring', isCorrect: true },
            { id: 'c', text: 'It is required before any export can happen', isCorrect: false },
            { id: 'd', text: 'It converts photos to black and white automatically', isCorrect: false },
        ],
        explanation: 'An Export Preset saves an entire configuration, letting you apply the same setup instantly for future exports.',
    },
    {
        id: 'm1-q29',
        question: 'What is the correct high-level order of the full Lightroom workflow?',
        options: [
            { id: 'a', text: 'Export → Import → Edit → Organize', isCorrect: false },
            { id: 'b', text: 'Import → Organize → Correct Exposure/Color → Local Adjustments → Export', isCorrect: true },
            { id: 'c', text: 'Organize → Export → Import → Edit', isCorrect: false },
            { id: 'd', text: 'The order does not matter', isCorrect: false },
        ],
        explanation: 'Each stage builds on the one before it, following this order prevents rework and produces more consistent results.',
    },
    {
        id: 'm1-q30',
        question: 'What is the single most common beginner mistake covered across the Lightroom module?',
        options: [
            { id: 'a', text: 'Using too many keywords', isCorrect: false },
            { id: 'b', text: 'Moving or renaming files outside of Lightroom, breaking the catalog\'s file references', isCorrect: true },
            { id: 'c', text: 'Exporting in TIFF format', isCorrect: false },
            { id: 'd', text: 'Using Collections instead of folders', isCorrect: false },
        ],
        explanation: 'Performing file operations from inside Lightroom rather than in Finder or File Explorer prevents the most common beginner problem.',
    },
]