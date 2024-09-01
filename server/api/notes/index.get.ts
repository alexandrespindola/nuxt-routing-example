import Note from '../../models/Note';

export default defineEventHandler(async (event) => {
    console.log('Handler executed'); // Log para verificar se o handler está sendo executado
    try {
        const notes = await Note.find();
        console.log('Notes found:', notes); // Log para verificar o resultado da consulta
        return { notes };
    } catch (error) {
        console.error('Error fetching notes:', error); // Log para capturar erros
        return { error: 'Error fetching notes' };
    }
});