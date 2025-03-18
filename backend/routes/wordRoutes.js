import express from 'express';
import Word from '../models/Word.js';

const router = express.Router();

// Add a new word
router.post('/', async (req, res) => {
    try {
        const { german, english } = req.body;
        const newWord = new Word({ german, english });
        await newWord.save();
        res.status(201).json(newWord);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all words
router.get('/', async (req, res) => {
    try {
        const words = await Word.find();
        res.json(words);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Mark word as learned
router.put('/:id', async (req, res) => {
    try {
        const word = await Word.findById(req.params.id);
        if (!word) {
            return res.status(404).json({ error: 'Word not found' });
        }
        word.learned = true;
        await word.save();
        res.json(word);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
