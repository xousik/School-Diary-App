import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';
import { string } from 'i/lib/util';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups,
      })
    );
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group.length) {
      console.log(req.params);
      const matchingStudents = students.filter((student) => student.group === req.params.group);
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }

    console.log(req.params);
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
