import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups,
      })
    );
  }),
  // rest.post('/students/search', (req, res, ctx) => {
  //   console.log(req);
  //   return res(ctx.status(200));
  // }),
  rest.post('/students/search', (req, res, ctx) => {
    // console.log(JSON.stringify(req.body.data));
    const matchingStudents = req.body.data
      ? students.filter((student) => student.name.toLowerCase().includes(JSON.stringify(req.body.data).toLowerCase()))
      : [];
    console.log(`siema siema ${matchingStudents}`);
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (groups.includes(req.params.group)) {
      const matchingStudents = students.filter((student) => student.group === req.params.group);
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
