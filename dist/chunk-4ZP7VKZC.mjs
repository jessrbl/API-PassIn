import {
  BadRequest
} from "./chunk-OH33D4AI.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/registerForEvent.ts
import { z } from "zod";
async function registerForEvent(app) {
  app.withTypeProvider().post("/events/:eventId/attendees", {
    schema: {
      summary: "Register an attendee",
      tags: ["attendees"],
      body: z.object({
        name: z.string().min(4),
        email: z.string().email()
      }),
      params: z.object({
        eventId: z.string().uuid()
      }),
      response: {
        201: z.object({
          attendeeId: z.number()
        })
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params;
    const { name, email } = request.body;
    const attendeeFromEmail = await prisma.attendee.findUnique({
      where: {
        eventId_email: {
          email,
          eventId
        }
      }
    });
    if (attendeeFromEmail != null) {
      throw new BadRequest("This email is already registered for this event");
    }
    const [event, maximumNumberOfAttendeesForEvent] = await Promise.all([
      prisma.event.findUnique({
        where: {
          id: eventId
        }
      }),
      prisma.attendee.count({
        where: {
          eventId
        }
      })
    ]);
    if (event?.maximumAttendees && maximumNumberOfAttendeesForEvent >= event?.maximumAttendees) {
      throw new BadRequest("The maximum number of attendees for this event has been reached");
    }
    const attendee = await prisma.attendee.create({
      data: {
        name,
        email,
        eventId
      }
    });
    return reply.status(201).send({ attendeeId: attendee.id });
  });
}

export {
  registerForEvent
};
