import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const createNote = (fields) => {
  const note = new Note(fields);
  return note.save();
};

export const updateNote = (id, title, text) => {
  return Note.findById(id)
    .then((note) => {
      note.title = title;
      note.text = text;
      return note.save();
    });
};

export const moveNote = (id, x, y) => {
  return Note.findById(id)
    .then((note) => {
      note.x = x;
      note.y = y;
      return note.save();
    });
};

export const deleteNote = (id) => {
  return Note.deleteOne({ _id: id });
};
