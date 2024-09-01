import { Schema, model } from 'mongoose';

// Definindo a interface para o documento Note
interface Note {
  title: string;
  content: string;
}

// Definindo o esquema do Mongoose para o Note
const NoteSchema = new Schema<Note>({
  title: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  collection: 'notes' // Especifica o nome da coleção
});

// Exportando o modelo do Mongoose
export default model<Note>('Note', NoteSchema);