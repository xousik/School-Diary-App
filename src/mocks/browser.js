import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers/index';
import { db } from 'mocks/db';

export const worker = setupWorker(...handlers);

const seed = () => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });

  db.teacher.create();

  db.note.create();
  db.note.create();

  for (let i = 0; i < 15; i++) {
    db.student.create();
    db.event.create();
  }
};

seed();

const createStudents = () => {
  for (let i = 0; i < 15; i++) {
    db.student.create();
  }
};

createStudents();

window.mocks = {
  seed,
  createStudents,
  getStudents: () => db.student.getAll(),
  getEvents: () => db.event.getAll(),
  getGroups: () => db.group.getAll(),
};

// console.log(db.student.getAll());
