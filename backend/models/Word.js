import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
    german: { type: String, required: true },
    english: { type: String, required: true },
    learned: { type: Boolean, default: false }
});

const Word = mongoose.model('Word', wordSchema);
export default Word;