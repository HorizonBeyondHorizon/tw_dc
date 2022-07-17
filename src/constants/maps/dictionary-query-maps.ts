import {EQuery} from "../query.enum";

export const queryLabelsMap: Record<EQuery, string> = {
    [EQuery.wordStarts]: "How many words start with the letter <LETTER>",
    [EQuery.letterCounter]: "How many times does the letter <LETTER> appear in the dictionary?",
    [EQuery.wordEnds]: "How many words end with the letter <LETTER>?",
    [EQuery.wordWithRepeatedLetters]: "How many words have the same letter repeated in conjunction? For instance, the word professor has `ss,` and for that, the count is 1."
};

export const regexMap: Record<EQuery, (letter: string) => RegExp> = {
    [EQuery.wordStarts]: (letter: string) => new RegExp(`(\\b${letter}\\w*\\b)`, "ig"),
    [EQuery.letterCounter]: (letter: string) => new RegExp(`${letter}`, "ig"),
    [EQuery.wordEnds]: (letter: string) => new RegExp(`(\\b\\w*${letter}\\b)`, "ig"),
    [EQuery.wordWithRepeatedLetters]: (letter: string) => new RegExp(`(\\b\\w*${letter}${letter}\\w*\\b)`, "ig")
}