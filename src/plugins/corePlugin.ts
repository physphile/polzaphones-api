import Elysia, { t } from "elysia";
import { prisma } from "../../prisma";
import { params, pageQuery } from "../constants";
import { toPrisma, toQuery } from "../utils";
import { coreSchema } from "./schemas/core";

const endpoint = "/core";

const coreQuery = t.Object(toQuery(coreSchema.properties));

export const corePlugin = new Elysia({ name: "corePlugin", detail: { tags: ["Core"] } })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.core.create({
				data: body,
			}),
		{ body: t.Partial(coreSchema) }
	)
	.get(
		endpoint,
		({ query: { ...query } }) =>
			prisma.core.findMany(toPrisma(query, ["link", "series", "vendor"])),
		{
			query: t.Partial(t.Composite([pageQuery, coreQuery])),
		}
	)
	.get(
		`${endpoint}/:id`,
		({ params: { id } }) => prisma.core.findUniqueOrThrow({ where: { id } }),
		{ params }
	)
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.core.update({
				where: { id },
				data: body,
			}),
		{ params, body: t.Partial(coreSchema) }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.core.delete({ where: { id } }), {
		params,
	});
