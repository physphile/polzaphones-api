import { t, type TSchema } from "elysia";

export const GetQuery = t.Object({
	limit: t.Optional(t.Numeric()),
	offset: t.Optional(t.Numeric()),
	orderBy: t.Optional(t.String()),
	order: t.Optional(t.Union([t.Literal("asc"), t.Literal("desc")])),
});

export const params = t.Object({
	id: t.Numeric(),
});

export const withId = <T extends TSchema>(d: T) => t.Composite([d, t.Object({ id: t.Numeric() })]);
export const minMax = t.Optional(
	t.Object({ min: t.Optional(t.Numeric()), max: t.Optional(t.Numeric()) })
);

export type ToSchema<T> = Partial<{ [K in keyof T]: TSchema }>;

export const LIMIT = 100;
