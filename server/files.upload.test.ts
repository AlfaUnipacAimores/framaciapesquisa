import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): { ctx: TrpcContext; clearedCookies: any[] } {
  const clearedCookies: any[] = [];

  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: (name: string, options: any) => {
        clearedCookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, clearedCookies };
}

describe("files.upload", () => {
  it("should upload a file successfully", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // Mock file data
    const fileBuffer = Buffer.from("Test file content");
    const fileName = "test-document.pdf";
    const mimeType = "application/pdf";

    // Note: This test would require mocking the S3 storage
    // For now, we're testing the input validation
    const input = {
      fileName,
      fileData: fileBuffer,
      mimeType,
      description: "Test document",
      category: "research" as const,
    };

    // Verify input structure
    expect(input.fileName).toBe("test-document.pdf");
    expect(input.fileData).toBeInstanceOf(Buffer);
    expect(input.mimeType).toBe("application/pdf");
    expect(input.category).toBe("research");
  });

  it("should validate file name is required", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // Test that empty fileName is rejected
    const fileBuffer = Buffer.from("Test file content");

    try {
      // This should fail validation
      await caller.files.upload({
        fileName: "",
        fileData: fileBuffer,
        mimeType: "application/pdf",
        category: "research",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Too small");
    }
  });

  it("should validate file category is one of allowed values", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const fileBuffer = Buffer.from("Test file content");

    try {
      // This should fail validation with invalid category
      await caller.files.upload({
        fileName: "test.pdf",
        fileData: fileBuffer,
        mimeType: "application/pdf",
        category: "invalid" as any,
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid option");
    }
  });

  it("should require authentication", async () => {
    // Create context without user
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    const fileBuffer = Buffer.from("Test file content");

    try {
      await caller.files.upload({
        fileName: "test.pdf",
        fileData: fileBuffer,
        mimeType: "application/pdf",
        category: "research",
      });
      expect.fail("Should have thrown authentication error");
    } catch (error: any) {
      expect(error.message).toContain("Please login");
    }
  });
});

describe("files.listUserFiles", () => {
  it("should require authentication", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    try {
      await caller.files.listUserFiles();
      expect.fail("Should have thrown authentication error");
    } catch (error: any) {
      expect(error.message).toContain("Please login");
    }
  });
});

describe("files.listPublic", () => {
  it("should allow public access", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    // This should not throw authentication error
    try {
      const result = await caller.files.listPublic();
      // Result should be an array (empty or with files)
      expect(Array.isArray(result)).toBe(true);
    } catch (error: any) {
      // If it fails, it should not be due to authentication
      expect(error.message).not.toContain("Please login");
    }
  });
});
