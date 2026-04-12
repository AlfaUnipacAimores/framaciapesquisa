import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { uploadResearchFile, getUserResearchFiles, getAllPublicResearchFiles, deleteResearchFile } from "./db";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    upload: protectedProcedure
      .input(z.object({
        fileName: z.string().min(1),
        fileData: z.instanceof(Buffer),
        mimeType: z.string(),
        description: z.string().optional(),
        category: z.enum(["research", "teaching", "clinical_trials", "other"]).default("other"),
      }))
      .mutation(async ({ ctx, input }) => {
        const fileKey = `research/${ctx.user.id}/${nanoid()}-${input.fileName}`;
        const { url } = await storagePut(fileKey, input.fileData, input.mimeType);

        const file = await uploadResearchFile({
          userId: ctx.user.id,
          fileName: input.fileName,
          fileKey,
          fileUrl: url,
          fileSize: input.fileData.length,
          mimeType: input.mimeType,
          description: input.description,
          category: input.category,
        });

        return file;
      }),

    listUserFiles: protectedProcedure.query(async ({ ctx }) => {
      return await getUserResearchFiles(ctx.user.id);
    }),

    listPublic: publicProcedure.query(async () => {
      return await getAllPublicResearchFiles();
    }),

    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return await deleteResearchFile(input.fileId, ctx.user.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
